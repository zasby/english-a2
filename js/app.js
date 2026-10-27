/* Vocabulary Bank — карточки по разделам English File Elementary.
   Без сборки и зависимостей: слова в data.js, прогресс — в localStorage браузера. */
(() => {
  "use strict";

  const COLORS = [
    "#3b5bdb", "#d9480f", "#0c8599", "#7048e8", "#c92a2a", "#2b8a3e",
    "#a61e4d", "#1971c2", "#b35c00", "#5f3dc4", "#0b7285", "#1864ab",
    "#c2255c", "#2f9e44", "#862e9c", "#e8590c", "#364fc7", "#495057"
  ];
  const MODE_NAMES = { cards: "Карточки", quiz: "Тест", type: "Написание" };
  const STATUS_LABEL = ["новое", "на повторении", "знаю"];
  const REINSERT_AFTER = 3;   // через сколько карточек вернуть ту, что не получилась
  const KEY_PROGRESS = "vb-elementary.progress";
  const KEY_SETTINGS = "vb-elementary.settings";

  const app = document.getElementById("app");

  // ---------- данные ----------

  const SECTIONS = window.VOCAB;
  const ALL = [];
  const BY_ID = new Map();

  SECTIONS.forEach((sec, i) => {
    sec.no = i + 1;
    sec.color = COLORS[i % COLORS.length];
    sec.cards = [];
    sec.groups.forEach((g, gi) => {
      g.no = gi + 1;
      g.cards = g.words.map(([en, ipa = "", ru, emoji = "", note = ""]) => {
        // id не зависит от перевода, чтобы правка перевода не сбрасывала прогресс
        let id = `${sec.id}/${g.id}/${en}`;
        for (let n = 2; BY_ID.has(id); n++) id = `${sec.id}/${g.id}/${en}#${n}`;
        const card = { id, en, ipa, ru, emoji, note, sec, group: g };
        BY_ID.set(id, card);
        sec.cards.push(card);
        ALL.push(card);
        return card;
      });
    });
  });

  // ---------- прогресс и настройки ----------

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // приватный режим или запрет хранилища — прогресс живёт до перезагрузки страницы
    }
  }

  const progress = load(KEY_PROGRESS, {});
  const settings = Object.assign(
    { dir: "en-ru", shuffle: true, onlyNew: false, autoSpeak: false, selected: {} },
    load(KEY_SETTINGS, {})
  );
  const mixSelected = {};   // выбор групп в «Трудных словах» не сохраняем: состав меняется

  const saveSettings = () => save(KEY_SETTINGS, settings);

  // 0 — новое, 1 — на повторении (последний ответ неверный), 2 — знаю (последний ответ верный)
  const status = (card) => (progress[card.id] ? progress[card.id].s : 0);

  function record(card, ok) {
    const p = progress[card.id] || { r: 0, w: 0 };
    if (ok) p.r++; else p.w++;
    p.s = ok ? 2 : 1;
    p.t = Date.now();
    progress[card.id] = p;
    save(KEY_PROGRESS, progress);
  }

  function stats(cards) {
    let known = 0, learning = 0;
    for (const c of cards) {
      const s = status(c);
      if (s === 2) known++;
      else if (s === 1) learning++;
    }
    return { total: cards.length, known, learning };
  }

  // ---------- утилиты ----------

  const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function plural(n, one, few, many) {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }

  const sizeClass = (text) => (text.length > 40 ? "xlong" : text.length > 22 ? "long" : "");
  const lessonLabel = (lesson) => (lesson.length > 3 ? lesson : `Урок ${lesson}`);
  const lessonShort = (lesson) => lesson.replace("Practical English ", "PE");
  const lessonBadge = (g) => esc(lessonLabel(g.lesson)) + (g.page ? ` · стр. ${g.page}` : "");
  const isVerbForms = (en) => /\s[–—]\s/.test(en);

  // Сравнение ответов: без регистра, пунктуации, апострофов и начального артикля.
  function norm(s) {
    return s.toLowerCase()
      .replace(/[’‘`']/g, "")
      .replace(/[–—-]/g, " ")
      .replace(/[.,!?;:"«»…]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^(a|an|the) /, "");
  }

  // Допустимые ответы: «a (mobile) phone» → «mobile phone» и «phone»; «a waiter / a waitress» → любой.
  function variants(en) {
    const alts = isVerbForms(en) ? [en] : [en, ...en.split(/\s+\/\s+/)];
    const out = new Set();
    for (const alt of alts) {
      out.add(norm(alt.replace(/[()]/g, "")));
      out.add(norm(alt.replace(/\([^)]*\)/g, " ")));
    }
    return out;
  }

  function hintTarget(en) {
    const main = isVerbForms(en) ? en : en.split(/\s+\/\s+/)[0];
    return main.replace(/\([^)]*\)\s*/g, "").replace(/^(a|an|the)\s+/i, "").trim();
  }

  function distance(a, b) {
    const row = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      let prev = row[0];
      row[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = row[j];
        row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
        prev = tmp;
      }
    }
    return row[b.length];
  }

  function isAlmost(typed, en) {
    const t = norm(typed);
    for (const v of variants(en)) {
      if (distance(t, v) <= (v.length > 10 ? 2 : 1)) return true;
    }
    return false;
  }

  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 2800);
  }

  // ---------- озвучка ----------

  const synth = window.speechSynthesis;
  let voice = null;

  function pickVoice() {
    const en = synth.getVoices().filter((v) => /^en[-_]/i.test(v.lang));
    voice =
      en.find((v) => /GB/i.test(v.lang) && /Daniel|Kate|Serena|Arthur|Martha|Google UK/i.test(v.name)) ||
      en.find((v) => /GB/i.test(v.lang)) ||
      en.find((v) => /US/i.test(v.lang)) ||
      en[0] || null;
  }

  if (synth) {
    pickVoice();
    synth.addEventListener("voiceschanged", pickVoice);
  }

  function speak(text) {
    if (!synth) {
      toast("Этот браузер не умеет озвучивать текст.");
      return;
    }
    const spoken = text
      .replace(/[()]/g, "")
      .replace(/\s[–—]\s/g, ", ")
      .replace(/\s\/\s/g, ", ")
      .replace(/\b(\d{1,2})\.(\d{2})\b/g, "$1:$2");
    synth.cancel();
    const u = new SpeechSynthesisUtterance(spoken);
    u.lang = voice ? voice.lang : "en-GB";
    if (voice) u.voice = voice;
    u.rate = 0.9;
    synth.speak(u);
  }

  // ---------- колоды: раздел учебника или «трудные слова» ----------

  function sectionDeck(sec) {
    return {
      key: sec.id, hash: `#/s/${sec.id}`, title: sec.title, ru: sec.ru, color: sec.color, icon: sec.icon,
      page: sec.page, bonus: sec.bonus, source: sec.source, file: sec.file, groups: sec.groups
    };
  }

  function hardDeck() {
    const groups = SECTIONS
      .map((sec) => ({
        id: sec.id, no: sec.no, title: sec.title, ru: sec.ru, lesson: "",
        cards: sec.cards.filter((c) => status(c) === 1)
      }))
      .filter((g) => g.cards.length);
    return {
      key: "hard", hash: "#/hard", title: "Трудные слова",
      ru: "Карточки, в которых последний ответ был неверным",
      color: "#e8590c", icon: "🎯", groups, isMix: true
    };
  }

  const selectionStore = (deck) => (deck.isMix ? mixSelected : settings.selected);

  function selectedGroups(deck) {
    const sel = selectionStore(deck)[deck.key];
    return deck.groups.filter((g) => !sel || sel.includes(g.id));
  }

  function deckCards(deck) {
    const cards = selectedGroups(deck).flatMap((g) => g.cards);
    return settings.onlyNew ? cards.filter((c) => status(c) !== 2) : cards;
  }

  // ---------- общие куски разметки ----------

  function barHTML(s) {
    const k = s.total ? (s.known / s.total) * 100 : 0;
    const l = s.total ? (s.learning / s.total) * 100 : 0;
    return `<div class="bar" role="img" aria-label="Знаю ${s.known} из ${s.total}, на повторении ${s.learning}">
      <div class="k" style="width:${k}%"></div><div class="l" style="width:${l}%"></div></div>`;
  }

  function wordRow(c, withSection) {
    const s = status(c);
    return `<li class="word s${s}" style="--c:${c.sec.color}">
      <span class="dot" title="${STATUS_LABEL[s]}"></span>
      <span class="w-emoji" aria-hidden="true">${c.emoji}</span>
      <span class="w-text">
        <span class="w-en" lang="en">${esc(c.en)}</span>${c.ipa ? ` <span class="w-ipa">/${esc(c.ipa)}/</span>` : ""}
        ${c.note ? `<span class="w-note" lang="en">${esc(c.note)}</span>` : ""}
        <span class="w-ru">${esc(c.ru)}</span>
        ${withSection ? `<a class="w-sec" href="#/s/${c.sec.id}">${esc(c.sec.title)} · стр. ${c.group.page || c.sec.page}</a>` : ""}
      </span>
      <button class="icon-btn" data-action="say" data-id="${esc(c.id)}" aria-label="Произнести ${esc(c.en)}">🔊</button>
    </li>`;
  }

  // ---------- главная ----------

  let view = "home";
  let currentDeck = null;
  let session = null;

  function tileHTML(sec) {
    const s = stats(sec.cards);
    const lessons = [...new Set(sec.groups.map((g) => g.lesson).filter(Boolean))].map(lessonShort);
    return `<a class="tile" href="#/s/${sec.id}" style="--c:${sec.color}">
      <div class="tile-top">
        <span class="tile-no">${sec.bonus ? "Бонус" : sec.source === "lesson" ? `File ${sec.file}` : String(sec.no).padStart(2, "0")}</span>
        <span class="tile-icon" aria-hidden="true">${sec.icon}</span>
      </div>
      <h3 lang="en">${esc(sec.title)}</h3>
      <p class="tile-ru">${esc(sec.ru)}</p>
      <p class="tile-meta">стр. ${sec.page}${lessons.length ? ` · ${lessons.join(", ")}` : ""}</p>
      ${barHTML(s)}
      <p class="tile-count"><span>${s.known} из ${s.total}</span>${s.learning ? `<span class="warn-text">${s.learning} повторить</span>` : ""}</p>
    </a>`;
  }

  function renderHome() {
    view = "home";
    currentDeck = null;
    const s = stats(ALL);
    app.innerHTML = `
      <header class="hero">
        <p class="kicker">English File · Elementary · 4th edition</p>
        <h1>Vocabulary Bank</h1>
        <p class="lead">Карточки для запоминания слов — по разделам Vocabulary Bank в конце учебника (стр. 148–165) и по блокам VOCABULARY из уроков, которых в Vocabulary Bank нет.</p>
        <div class="hero-stats">
          <div class="stat"><b>${s.total}</b><span>карточек</span></div>
          <div class="stat good"><b>${s.known}</b><span>знаю</span></div>
          <div class="stat warn"><b>${s.learning}</b><span>на повторении</span></div>
        </div>
        ${barHTML(s)}
        <div class="hero-actions" style="--c:#e8590c">
          ${s.learning
            ? `<a class="btn primary" href="#/hard">🎯 Трудные слова · ${s.learning}</a>`
            : `<span class="btn primary" aria-disabled="true">🎯 Трудные слова</span>`}
          <span class="hint">${s.learning
            ? "Все карточки, в которых вы ошиблись, — из всех разделов сразу."
            : "Сюда попадут карточки, в которых вы ошибётесь."}</span>
        </div>
      </header>
      <div class="search-box">
        <input id="search" type="search" placeholder="Найти слово — по-английски или по-русски" autocomplete="off" aria-label="Поиск слова">
      </div>
      <div id="search-results" aria-live="polite"></div>
      <h2 class="grid-title">Разделы Vocabulary Bank</h2>
      <div class="grid">${SECTIONS.filter((x) => x.source !== "lesson").map(tileHTML).join("")}</div>
      <h2 class="grid-title">Слова из уроков</h2>
      <p class="grid-note">Блоки VOCABULARY из уроков, которых нет в Vocabulary Bank, — по одному разделу на File учебника.</p>
      <div class="grid">${SECTIONS.filter((x) => x.source === "lesson").map(tileHTML).join("")}</div>
      <footer class="foot">
        <p>Слова и группы — из Vocabulary Bank и уроков учебника English File Elementary (4th edition, Oxford University Press). Переводы, транскрипции и эмодзи добавлены для самостоятельной работы.</p>
        <p>Прогресс хранится только в этом браузере. <button class="link danger" data-action="reset-all">Сбросить весь прогресс</button></p>
      </footer>`;
  }

  function renderSearch(q) {
    const box = document.getElementById("search-results");
    const query = q.trim().toLowerCase();
    if (query.length < 2) {
      box.innerHTML = "";
      return;
    }
    const hits = ALL.filter((c) => c.en.toLowerCase().includes(query) || c.ru.toLowerCase().includes(query));
    box.innerHTML = hits.length
      ? `<ul class="words">${hits.slice(0, 40).map((c) => wordRow(c, true)).join("")}</ul>`
      : `<p class="empty">Ничего не найдено.</p>`;
  }

  // ---------- раздел ----------

  function groupRow(g, on) {
    const s = stats(g.cards);
    return `<label class="group-row">
      <input type="checkbox" data-group="${esc(g.id)}" ${on ? "checked" : ""}>
      <span class="g-no">${g.no}</span>
      <span class="g-title"><b lang="en">${esc(g.title)}</b><small>${esc(g.ru)}</small></span>
      ${g.lesson ? `<span class="badge">${lessonBadge(g)}</span>` : ""}
      <span class="g-count" title="знаю / всего">${s.known}/${s.total}</span>
    </label>`;
  }

  function groupBlock(g, withSection) {
    return `<div class="g-block">
      <h3><span class="g-no">${g.no}</span><span lang="en">${esc(g.title)}</span> <small>${esc(g.ru)}</small>
        ${g.page ? `<span class="badge">${lessonBadge(g)}</span>` : ""}</h3>
      ${g.extra ? `<p class="extra">ℹ️ ${esc(g.extra)}</p>` : ""}
      <ul class="words">${g.cards.map((c) => wordRow(c, withSection)).join("")}</ul>
      ${(g.tips || []).map((t) => `<div class="tip"><b lang="en">💡 ${esc(t.title)}</b><p>${esc(t.text)}</p></div>`).join("")}
      ${g.activation ? `<div class="activation" lang="en"><b>ACTIVATION</b>${esc(g.activation)}</div>` : ""}
    </div>`;
  }

  const switchHTML = (key, label) => `<label class="switch">
      <input type="checkbox" data-setting="${key}" ${settings[key] ? "checked" : ""}>
      <span class="track"></span><span>${label}</span>
    </label>`;

  const modeHTML = (mode, icon, title, text, disabled) => `<button class="mode" data-action="mode" data-mode="${mode}" ${disabled ? "disabled" : ""}>
      <span class="mode-ico" aria-hidden="true">${icon}</span>
      <span class="mode-text"><b>${title}</b><small>${text}</small></span>
    </button>`;

  function renderDeck(deck) {
    view = "deck";
    currentDeck = deck;

    if (deck.isMix && !deck.groups.length) {
      app.innerHTML = `
        <a class="back" href="#/">← Все разделы</a>
        <div class="summary"><div class="big">🎉</div><h1>Трудных слов нет</h1>
        <p class="lead" style="margin:0 auto">Сюда попадают карточки, в которых последний ответ был неверным.</p>
        <div class="summary-actions"><a class="btn" href="#/">К разделам</a></div></div>`;
      return;
    }

    const s = stats(deck.groups.flatMap((g) => g.cards));
    const sel = selectedGroups(deck);
    const count = deckCards(deck).length;
    const kicker = deck.isMix
      ? "Повторение по всем разделам"
      : deck.source === "lesson"
        ? `File ${deck.file} · слова из уроков · стр. ${deck.page}`
        : `Vocabulary Bank · стр. ${deck.page}${deck.bonus ? " · бонус" : ""}`;

    app.innerHTML = `
      <a class="back" href="#/">← Все разделы</a>
      <header class="sec-head" style="--c:${deck.color}">
        <div class="sec-icon" aria-hidden="true">${deck.icon}</div>
        <div class="sec-titles">
          <p class="sec-kicker">${kicker}</p>
          <h1 ${deck.isMix ? "" : 'lang="en"'}>${esc(deck.title)}</h1>
          <p class="sec-ru">${esc(deck.ru)}</p>
        </div>
        <div class="sec-stat"><b>${s.known}</b> / ${s.total}<small>знаю</small></div>
      </header>

      <div class="panel" style="--c:${deck.color}">
        <div class="panel-head">
          <h2>Что учим</h2>
          ${deck.groups.length > 1 ? `<div class="mini-actions">
            <button class="link" data-action="sel-all">выбрать все</button>
            <button class="link" data-action="sel-none">снять все</button></div>` : ""}
        </div>
        <div class="groups">${deck.groups.map((g) => groupRow(g, sel.includes(g))).join("")}</div>

        <h2>Как учим</h2>
        <div class="options">
          <div class="opt-row">
            <span class="opt-label">Лицевая сторона:</span>
            <div class="seg" role="group" aria-label="Направление">
              <button class="${settings.dir === "en-ru" ? "on" : ""}" data-action="dir" data-dir="en-ru">English → русский</button>
              <button class="${settings.dir === "ru-en" ? "on" : ""}" data-action="dir" data-dir="ru-en">русский → English</button>
            </div>
          </div>
          <div class="switches">
            ${switchHTML("shuffle", "Перемешать")}
            ${switchHTML("onlyNew", "Только невыученные")}
            ${switchHTML("autoSpeak", "Озвучивать автоматически")}
          </div>
        </div>

        <div class="modes">
          ${modeHTML("cards", "🃏", "Карточки", "Переверните карточку и честно отметьте: знаю или ещё учу", !count)}
          ${modeHTML("quiz", "✅", "Тест", "Выберите правильный вариант из четырёх", !count)}
          ${modeHTML("type", "⌨️", "Написание", "Видите перевод — пишете слово по-английски", !count)}
        </div>
        <p class="selection-info">${count
          ? `В занятии будет <b>${count}</b> ${plural(count, "карточка", "карточки", "карточек")}.`
          : settings.onlyNew && sel.length
            ? "Все выбранные карточки уже выучены 🎉 Выключите «Только невыученные», чтобы повторить."
            : "Выберите хотя бы одну группу."}</p>
      </div>

      <section class="book" style="--c:${deck.color}">
        <h2>${deck.isMix ? "Слова на повторении" : deck.source === "lesson" ? "Слова из уроков" : "Страница учебника"}</h2>
        ${deck.groups.map((g) => groupBlock(g, deck.isMix)).join("")}
      </section>
      ${deck.isMix ? "" : `<p class="reset"><button class="link danger" data-action="reset">Сбросить прогресс раздела</button></p>`}`;
  }

  function setSelection(ids) {
    const deck = currentDeck;
    const store = selectionStore(deck);
    if (ids.length === deck.groups.length) delete store[deck.key];
    else store[deck.key] = ids;
    if (!deck.isMix) saveSettings();
    route();
  }

  function resetCards(cards, question) {
    if (!confirm(question)) return;
    cards.forEach((c) => delete progress[c.id]);
    save(KEY_PROGRESS, progress);
    route();
  }

  // ---------- занятие ----------

  function startSession(mode, cards) {
    const deck = currentDeck;
    const list = (cards || deckCards(deck)).slice();
    if (!list.length) return;
    if (settings.shuffle) shuffle(list);
    session = {
      deck, mode, list,
      dir: mode === "type" ? "ru-en" : settings.dir,
      queue: list.slice(),
      total: list.length,
      done: 0,
      missed: new Set(),
      current: null
    };
    nextCard();
    const target = `${deck.hash}/study`;
    if (location.hash === target) renderStudy();
    else location.hash = target;
  }

  function nextCard() {
    const s = session;
    clearTimeout(s.timer);
    s.current = s.queue.shift() || null;
    s.state = "ask";      // ask — ждём ответа, shown — ответ показан
    s.hint = 0;
    s.typed = "";
    s.picked = -1;
    s.answerOk = null;
    if (s.current && s.mode === "quiz") s.options = quizOptions(s.current, s.dir);
  }

  function answer(ok) {
    const s = session, c = s.current;
    record(c, ok);
    if (ok) {
      s.done++;
    } else {
      s.missed.add(c);
      s.queue.splice(Math.min(REINSERT_AFTER, s.queue.length), 0, c);
    }
  }

  function goNext() {
    if (!session || !session.current) return;
    nextCard();
    renderStudy();
  }

  function quizOptions(card, dir) {
    const key = dir === "en-ru" ? "ru" : "en";
    const seen = new Set([norm(card[key])]);
    const wrong = [];
    // сначала похожие варианты из той же группы, потом из раздела, потом из всей книги
    for (const pool of [card.group.cards, card.sec.cards, ALL]) {
      for (const c of shuffle(pool.slice())) {
        if (wrong.length === 3) break;
        const n = norm(c[key]);
        if (seen.has(n)) continue;
        seen.add(n);
        wrong.push({ text: c[key], ok: false });
      }
    }
    return shuffle([{ text: card[key], ok: true }, ...wrong]);
  }

  const faceEN = (c) => `
      <span class="face-label" lang="en">${esc(c.group.title)}</span>
      <div class="face-main ${sizeClass(c.en)}" lang="en">${esc(c.en)}</div>
      ${c.ipa ? `<div class="ipa">/${esc(c.ipa)}/</div>` : ""}
      ${c.note ? `<div class="note" lang="en">${esc(c.note)}</div>` : ""}
      <button class="icon-btn say-btn" data-action="say" aria-label="Произнести">🔊</button>`;

  const faceRU = (c) => `
      <span class="face-label">${esc(c.group.ru)}</span>
      ${c.emoji ? `<div class="emoji" aria-hidden="true">${c.emoji}</div>` : ""}
      <div class="face-main ${sizeClass(c.ru)}">${esc(c.ru)}</div>`;

  const revealHTML = (c) => `<div class="reveal">
      <span class="r-en" lang="en">${esc(c.en)}</span>${c.ipa ? `<span class="r-ipa">/${esc(c.ipa)}/</span>` : ""}
      <span class="r-ru">— ${esc(c.ru)}</span>
      <button class="icon-btn" data-action="say" aria-label="Произнести">🔊</button>
    </div>`;

  function flashHTML(c, s) {
    const enFirst = s.dir === "en-ru";
    return `
      <div class="flash" id="flash" data-action="flip" role="button" tabindex="0" aria-label="Перевернуть карточку">
        <div class="flash-inner">
          <div class="face front">${enFirst ? faceEN(c) : faceRU(c)}</div>
          <div class="face back">${enFirst ? faceRU(c) : faceEN(c)}</div>
        </div>
      </div>
      <div class="show-btn" id="show-btn"><button class="btn primary wide" data-action="flip">Показать ответ</button></div>
      <div class="answer-btns" id="answer-btns" hidden>
        <button class="btn bad" data-action="again">✗ Ещё учу</button>
        <button class="btn good" data-action="know">✓ Знаю</button>
      </div>
      <p class="keys">Пробел — перевернуть · ← ещё учу · → знаю · P — произнести · Esc — выйти</p>`;
  }

  function quizHTML(c, s) {
    const shown = s.state === "shown";
    const opts = s.options.map((o, i) => {
      let cls = "opt";
      if (shown && o.ok) cls += " correct";
      else if (shown && i === s.picked) cls += " wrong";
      return `<button class="${cls}" data-action="pick" data-i="${i}" ${shown ? "disabled" : ""} ${s.dir === "ru-en" ? 'lang="en"' : ""}>
        <kbd>${i + 1}</kbd><span>${esc(o.text)}</span></button>`;
    }).join("");
    return `
      <div class="prompt">${s.dir === "en-ru" ? faceEN(c) : faceRU(c)}</div>
      <div class="opts">${opts}</div>
      ${shown ? `<div class="after">
        <p class="feedback ${s.answerOk ? "ok" : "no"}">${s.answerOk ? "✓ Верно!" : "✗ Не совсем. Правильный ответ:"}</p>
        ${revealHTML(c)}
        <button class="btn primary wide" data-action="next">Дальше →</button>
      </div>` : ""}
      <p class="keys">1–4 — выбрать ответ · Enter — дальше · Esc — выйти</p>`;
  }

  function typeHTML(c, s) {
    const shown = s.state === "shown";
    let feedback = "";
    if (shown) {
      if (s.answerOk && !s.hint) feedback = `<p class="feedback ok">✓ Верно!</p>`;
      else if (s.answerOk) feedback = `<p class="feedback ok">Верно, но с подсказкой — карточка вернётся ещё раз.</p>`;
      else if (s.almost) feedback = `<p class="feedback no">Почти! Проверьте написание:</p>`;
      else if (s.typed) feedback = `<p class="feedback no">✗ Неверно. Правильно:</p>`;
      else feedback = `<p class="feedback no">Правильный ответ:</p>`;
    }
    const formState = shown ? (s.answerOk ? "ok" : s.typed ? "no" : "") : "";
    return `
      <div class="prompt">${faceRU(c)}</div>
      <form class="type-form ${formState}" data-form="type" autocomplete="off">
        <input id="answer" lang="en" autocapitalize="off" autocorrect="off" spellcheck="false"
          placeholder="Напишите по-английски…" aria-label="Ответ по-английски"
          value="${esc(s.typed)}" ${shown ? "readonly" : ""}>
        <button class="btn primary" type="submit">${shown ? "Дальше →" : "Проверить"}</button>
      </form>
      ${shown
        ? `<div class="after">${feedback}${revealHTML(c)}</div>`
        : `<div class="type-tools">
            <button class="link" data-action="hint">Подсказка: следующая буква</button>
            <button class="link" data-action="giveup">Не знаю</button>
          </div>`}
      <p class="keys">Enter — проверить / дальше · артикли a / an / the можно не писать · Esc — выйти</p>`;
  }

  function renderStudy() {
    view = "study";
    const s = session;
    if (!s.current) return renderSummary();
    const c = s.current;
    const body = s.mode === "cards" ? flashHTML(c, s) : s.mode === "quiz" ? quizHTML(c, s) : typeHTML(c, s);
    app.innerHTML = `
      <div class="study" style="--c:${s.deck.color}">
        <div class="study-top">
          <a class="back" href="${s.deck.hash}">← ${esc(s.deck.title)}</a>
          <span class="study-mode">${MODE_NAMES[s.mode]}</span>
          <span class="counter" title="выучено в этом занятии">${s.done} / ${s.total}</span>
        </div>
        <div class="progress"><div style="width:${(s.done / s.total) * 100}%"></div></div>
        ${body}
      </div>`;

    if (s.mode === "type") {
      // после проверки фокус на «Дальше», чтобы Enter сразу вёл к следующей карточке
      if (s.state === "ask") document.getElementById("answer").focus();
      else app.querySelector('.type-form [type="submit"]').focus();
    }
    if (s.state === "ask" && settings.autoSpeak && s.dir === "en-ru") speak(c.en);
  }

  function flip() {
    const s = session;
    const el = document.getElementById("flash");
    if (!el) return;
    const flipped = el.classList.toggle("flipped");
    if (s.state === "ask") {
      s.state = "shown";
      document.getElementById("show-btn").hidden = true;
      document.getElementById("answer-btns").hidden = false;
    }
    if (flipped && settings.autoSpeak && s.dir === "ru-en") speak(s.current.en);
  }

  function cardAnswer(ok) {
    if (session.state !== "shown") return;
    answer(ok);
    goNext();
  }

  function pick(i) {
    const s = session;
    if (s.state !== "ask" || !s.options[i]) return;
    s.picked = i;
    s.answerOk = s.options[i].ok;
    s.state = "shown";
    answer(s.answerOk);
    renderStudy();
    if (settings.autoSpeak && s.dir === "ru-en") speak(s.current.en);
    if (s.answerOk) s.timer = setTimeout(goNext, 1200);
  }

  function checkTyped() {
    const s = session;
    const value = document.getElementById("answer").value;
    if (!value.trim()) return;
    s.typed = value;
    s.answerOk = variants(s.current.en).has(norm(value));
    s.almost = !s.answerOk && isAlmost(value, s.current.en);
    s.state = "shown";
    answer(s.answerOk && !s.hint);   // с подсказкой — засчитываем как ошибку
    renderStudy();
    if (settings.autoSpeak) speak(s.current.en);
  }

  function giveUp() {
    const s = session;
    s.typed = "";
    s.answerOk = false;
    s.almost = false;
    s.state = "shown";
    answer(false);
    renderStudy();
    if (settings.autoSpeak) speak(s.current.en);
  }

  function hint() {
    const s = session;
    const target = hintTarget(s.current.en);
    const input = document.getElementById("answer");
    s.hint = Math.min(s.hint + 1, target.length);
    input.value = target.slice(0, s.hint);
    input.focus();
  }

  function renderSummary() {
    const s = session;
    const first = s.total - s.missed.size;
    const pct = Math.round((first / s.total) * 100);
    const missed = [...s.missed];
    app.innerHTML = `
      <div class="summary" style="--c:${s.deck.color}">
        <div class="big" aria-hidden="true">${pct === 100 ? "🏆" : pct >= 70 ? "🎉" : "💪"}</div>
        <h1>Занятие пройдено!</h1>
        <p class="lead" style="margin:0 auto">С первого раза: <b>${first} из ${s.total}</b> (${pct}%)</p>
        ${missed.length
          ? `<h2>Были ошибки</h2><ul class="words">${missed.map((c) => wordRow(c, false)).join("")}</ul>`
          : `<p>Ни одной ошибки — отличная работа!</p>`}
        <div class="summary-actions">
          ${missed.length ? `<button class="btn primary" data-action="retry-missed">Повторить ошибки (${missed.length})</button>` : ""}
          <button class="btn" data-action="restart">Пройти ещё раз</button>
          <a class="btn" href="${s.deck.hash}">К разделу</a>
        </div>
      </div>`;
  }

  // ---------- навигация ----------

  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    let deck = null, studyPart;
    if (parts[0] === "s") {
      const sec = SECTIONS.find((x) => x.id === parts[1]);
      if (sec) deck = sectionDeck(sec);
      studyPart = parts[2];
    } else if (parts[0] === "hard") {
      deck = hardDeck();
      studyPart = parts[1];
    }

    if (deck && studyPart === "study") {
      if (session && session.deck.key === deck.key) {
        currentDeck = session.deck;
        return renderStudy();
      }
      return location.replace(deck.hash);   // после перезагрузки страницы занятия уже нет
    }
    if (deck) return renderDeck(deck);
    renderHome();
  }

  window.addEventListener("hashchange", () => {
    if (session) clearTimeout(session.timer);
    route();
    window.scrollTo(0, 0);
  });

  // ---------- события ----------

  app.addEventListener("click", (e) => {
    const t = e.target.closest("[data-action]");
    if (!t) return;
    switch (t.dataset.action) {
      case "say":
        speak(t.dataset.id ? BY_ID.get(t.dataset.id).en : session.current.en);
        break;
      case "flip": flip(); break;
      case "know": cardAnswer(true); break;
      case "again": cardAnswer(false); break;
      case "pick": pick(Number(t.dataset.i)); break;
      case "next": goNext(); break;
      case "hint": hint(); break;
      case "giveup": giveUp(); break;
      case "mode": startSession(t.dataset.mode); break;
      case "retry-missed": startSession(session.mode, [...session.missed]); break;
      case "restart": startSession(session.mode, session.list); break;
      case "dir":
        settings.dir = t.dataset.dir;
        saveSettings();
        route();
        break;
      case "sel-all": setSelection(currentDeck.groups.map((g) => g.id)); break;
      case "sel-none": setSelection([]); break;
      case "reset":
        resetCards(
          currentDeck.groups.flatMap((g) => g.cards),
          `Сбросить прогресс раздела «${currentDeck.title}»? Отметки «знаю» и «на повторении» будут удалены.`
        );
        break;
      case "reset-all":
        resetCards(ALL, "Сбросить прогресс по всем разделам?");
        break;
    }
  });

  app.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.group !== undefined) {
      setSelection([...app.querySelectorAll("input[data-group]")].filter((i) => i.checked).map((i) => i.dataset.group));
    } else if (t.dataset.setting) {
      settings[t.dataset.setting] = t.checked;
      saveSettings();
      route();
    }
  });

  app.addEventListener("input", (e) => {
    if (e.target.id === "search") renderSearch(e.target.value);
  });

  app.addEventListener("submit", (e) => {
    if (e.target.dataset.form !== "type") return;
    e.preventDefault();
    if (session.state === "shown") goNext();
    else checkTyped();
  });

  document.addEventListener("keydown", (e) => {
    if (view !== "study" || !session || e.metaKey || e.ctrlKey || e.altKey) return;
    const s = session;
    if (e.key === "Escape") {
      location.hash = s.deck.hash;
      return;
    }
    if (!s.current) return;
    // Enter/пробел на кнопке или в поле ввода пусть отработают сами
    const onControl = e.target.closest && e.target.closest("button, a, input");
    const key = e.key.toLowerCase();
    const speakKey = key === "p" || key === "з";

    if (s.mode === "cards") {
      if ((e.key === " " || e.key === "Enter") && !onControl) {
        e.preventDefault();
        flip();
      } else if (e.key === "ArrowRight" || e.key === "2") cardAnswer(true);
      else if (e.key === "ArrowLeft" || e.key === "1") cardAnswer(false);
      else if (speakKey) speak(s.current.en);
    } else if (s.mode === "quiz") {
      if (s.state === "ask" && /^[1-4]$/.test(e.key)) pick(Number(e.key) - 1);
      else if (s.state === "shown" && (e.key === "Enter" || e.key === " ") && !onControl) {
        e.preventDefault();
        goNext();
      } else if (speakKey) speak(s.current.en);
    } else if (s.mode === "type") {
      if (s.state === "shown" && e.key === "Enter" && !onControl) {
        e.preventDefault();
        goNext();
      }
    }
  });

  route();
})();
