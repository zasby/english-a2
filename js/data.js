// Vocabulary Bank — English File Elementary (4th edition), стр. 148–164,
// плюс таблица Irregular verbs (стр. 165).
//
// После Vocabulary Bank идут «Слова из уроков» (source: "lesson") — блоки VOCABULARY
// из уроков, которых нет в Vocabulary Bank, по одному разделу на File учебника.
//
// Раздел  = страница Vocabulary Bank (или File учебника для слов из уроков).
// Группа  = пронумерованный блок на странице (1 DAYS OF THE WEEK, 2 NUMBERS 0–20 …).
// lesson  = урок учебника, из которого ведёт ссылка на эту страницу; page у группы — страница урока.
// Слово   = [английский, транскрипция, перевод, эмодзи, пометка]
//           (последние три поля необязательные; пометка показывается на английской стороне)

window.VOCAB = [
  {
    id: "days-numbers", page: 148, icon: "📅",
    title: "Days and numbers", ru: "Дни недели и числа",
    groups: [
      {
        id: "days", title: "Days of the week", ru: "Дни недели", lesson: "1A",
        activation: "Cover the days. Say them in order.",
        tips: [
          { title: "Capital letters", text: "Дни недели всегда пишутся с заглавной буквы: Tuesday, NOT tuesday." }
        ],
        words: [
          ["Monday", "ˈmʌndeɪ", "понедельник"],
          ["Tuesday", "ˈtjuːzdeɪ", "вторник"],
          ["Wednesday", "ˈwenzdeɪ", "среда"],
          ["Thursday", "ˈθɜːzdeɪ", "четверг"],
          ["Friday", "ˈfraɪdeɪ", "пятница"],
          ["Saturday", "ˈsætədeɪ", "суббота"],
          ["Sunday", "ˈsʌndeɪ", "воскресенье"],
          ["the weekend", "ˌwiːkˈend", "выходные", "🏖️", "= Saturday and Sunday"],
          ["a weekday", "ˈwiːkdeɪ", "будний день", "💼", "= Monday–Friday"],
          ["What day is it today? — It's Friday.", "", "Какой сегодня день? — Пятница."],
          ["Have a good weekend. — You too.", "", "Хороших выходных! — Тебе (вам) тоже."],
          ["See you later.", "", "Увидимся позже. / Пока.", "👋"],
          ["See you tomorrow.", "", "До завтра."],
          ["See you on Monday.", "", "Увидимся в понедельник."]
        ]
      },
      {
        id: "numbers-0-20", title: "Numbers 0–20", ru: "Числа 0–20", lesson: "1A",
        activation: "Cover the words. Say the numbers.",
        tips: [
          { title: "Phone numbers", text: "794 1938 = seven nine four, one nine three eight. 44 = four four или double four. 0 = zero или oh /əʊ/." }
        ],
        words: [
          ["zero", "ˈzɪərəʊ", "0 · ноль"],
          ["one", "wʌn", "1 · один"],
          ["two", "tuː", "2 · два"],
          ["three", "θriː", "3 · три"],
          ["four", "fɔː", "4 · четыре"],
          ["five", "faɪv", "5 · пять"],
          ["six", "sɪks", "6 · шесть"],
          ["seven", "ˈsevn", "7 · семь"],
          ["eight", "eɪt", "8 · восемь"],
          ["nine", "naɪn", "9 · девять"],
          ["ten", "ten", "10 · десять"],
          ["eleven", "ɪˈlevn", "11 · одиннадцать"],
          ["twelve", "twelv", "12 · двенадцать"],
          ["thirteen", "ˌθɜːˈtiːn", "13 · тринадцать"],
          ["fourteen", "ˌfɔːˈtiːn", "14 · четырнадцать"],
          ["fifteen", "ˌfɪfˈtiːn", "15 · пятнадцать"],
          ["sixteen", "ˌsɪksˈtiːn", "16 · шестнадцать"],
          ["seventeen", "ˌsevnˈtiːn", "17 · семнадцать"],
          ["eighteen", "ˌeɪˈtiːn", "18 · восемнадцать"],
          ["nineteen", "ˌnaɪnˈtiːn", "19 · девятнадцать"],
          ["twenty", "ˈtwenti", "20 · двадцать"]
        ]
      },
      {
        id: "numbers-21-100", title: "Numbers 21–100", ru: "Числа 21–100", lesson: "1B",
        activation: "Cover the words. Say the numbers.",
        tips: [
          { title: "Pronunciation", text: "13 и 30, 14 и 40 звучат похоже, но ударение разное: thirTEEN — THIRty, fourTEEN — FORty. -een — долгий звук, -y — короткий." }
        ],
        words: [
          ["twenty-one", "ˌtwenti ˈwʌn", "21 · двадцать один"],
          ["thirty", "ˈθɜːti", "30 · тридцать"],
          ["thirty-five", "ˌθɜːti ˈfaɪv", "35 · тридцать пять"],
          ["forty", "ˈfɔːti", "40 · сорок"],
          ["forty-three", "ˌfɔːti ˈθriː", "43 · сорок три"],
          ["fifty", "ˈfɪfti", "50 · пятьдесят"],
          ["fifty-nine", "ˌfɪfti ˈnaɪn", "59 · пятьдесят девять"],
          ["sixty", "ˈsɪksti", "60 · шестьдесят"],
          ["sixty-seven", "ˌsɪksti ˈsevn", "67 · шестьдесят семь"],
          ["seventy", "ˈsevnti", "70 · семьдесят"],
          ["seventy-two", "ˌsevnti ˈtuː", "72 · семьдесят два"],
          ["eighty", "ˈeɪti", "80 · восемьдесят"],
          ["eighty-eight", "ˌeɪti ˈeɪt", "88 · восемьдесят восемь"],
          ["ninety", "ˈnaɪnti", "90 · девяносто"],
          ["ninety-four", "ˌnaɪnti ˈfɔː", "94 · девяносто четыре"],
          ["a hundred", "ˈhʌndrəd", "100 · сто"]
        ]
      },
      {
        id: "high-numbers", title: "High numbers", ru: "Большие числа", lesson: "9C",
        activation: "Cover the words. Say the numbers.",
        tips: [
          { title: "and", text: "После hundred перед десятками и единицами говорят and: 105 = a hundred and five, 875 = eight hundred and seventy-five. Тысячи отделяются запятой: 1,000." }
        ],
        words: [
          ["a hundred and five", "", "105 · сто пять"],
          ["two hundred", "", "200 · двести"],
          ["three hundred and fifty", "", "350 · триста пятьдесят"],
          ["eight hundred and seventy-five", "", "875 · восемьсот семьдесят пять"],
          ["nine hundred and nine", "", "909 · девятьсот девять"],
          ["a thousand", "ˈθaʊznd", "1,000 · тысяча"],
          ["one thousand five hundred", "", "1,500 · полторы тысячи"],
          ["two thousand and twelve", "", "2,012 · две тысячи двенадцать"],
          ["five thousand four hundred and twenty", "", "5,420 · пять тысяч четыреста двадцать"],
          ["twenty-five thousand", "", "25,000 · двадцать пять тысяч"],
          ["a hundred thousand", "", "100,000 · сто тысяч"],
          ["a million", "ˈmɪljən", "1,000,000 · миллион"],
          ["two million", "", "2,000,000 · два миллиона"],
          ["two million three hundred thousand", "", "2,300,000 · два миллиона триста тысяч"]
        ]
      }
    ]
  },

  {
    id: "countries", page: 149, icon: "🌍",
    title: "Countries", ru: "Страны и национальности",
    groups: [
      {
        id: "continents", title: "Continents", ru: "Континенты и стороны света", lesson: "1B",
        activation: "Choose six countries. Say the continent. (Spain is in Europe.)",
        tips: [
          { title: "Capital letters", text: "Континенты, страны, национальности и языки пишутся с заглавной буквы: Spanish, NOT spanish." }
        ],
        words: [
          ["north", "nɔːθ", "север", "⬆️"],
          ["south", "saʊθ", "юг", "⬇️"],
          ["east", "iːst", "восток", "➡️"],
          ["west", "west", "запад", "⬅️"],
          ["Africa", "ˈæfrɪkə", "Африка", "🌍"],
          ["African", "ˈæfrɪkən", "африканский; африканец"],
          ["Asia", "ˈeɪʒə", "Азия", "🌏"],
          ["Asian", "ˈeɪʒn", "азиатский; житель Азии"],
          ["Australia", "ɒˈstreɪliə", "Австралия", "🦘"],
          ["Australian", "ɒˈstreɪliən", "австралийский; австралиец"],
          ["Europe", "ˈjʊərəp", "Европа", "🇪🇺"],
          ["European", "ˌjʊərəˈpiːən", "европейский; европеец"],
          ["North America", "ˌnɔːθ əˈmerɪkə", "Северная Америка", "🌎"],
          ["North American", "ˌnɔːθ əˈmerɪkən", "североамериканский"],
          ["South America", "ˌsaʊθ əˈmerɪkə", "Южная Америка", "🌎"],
          ["South American", "ˌsaʊθ əˈmerɪkən", "южноамериканский"]
        ]
      },
      {
        id: "nationalities", title: "Countries and nationalities", ru: "Страны и национальности", lesson: "1B",
        activation: "Cover the words and look at the flags. Can you remember the countries and nationalities?",
        tips: [
          { title: "The United Kingdom", text: "The United Kingdom (the UK) = England, Scotland, Wales и Northern Ireland. Национальность — British." }
        ],
        words: [
          ["England", "ˈɪŋglənd", "Англия", "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],
          ["English", "ˈɪŋglɪʃ", "английский; англичанин", "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],
          ["Ireland", "ˈaɪələnd", "Ирландия", "🇮🇪"],
          ["Irish", "ˈaɪrɪʃ", "ирландский; ирландец", "🇮🇪"],
          ["Poland", "ˈpəʊlənd", "Польша", "🇵🇱"],
          ["Polish", "ˈpəʊlɪʃ", "польский; поляк", "🇵🇱"],
          ["Scotland", "ˈskɒtlənd", "Шотландия", "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],
          ["Scottish", "ˈskɒtɪʃ", "шотландский; шотландец", "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],
          ["Spain", "speɪn", "Испания", "🇪🇸"],
          ["Spanish", "ˈspænɪʃ", "испанский; испанец", "🇪🇸"],
          ["Turkey", "ˈtɜːki", "Турция", "🇹🇷"],
          ["Turkish", "ˈtɜːkɪʃ", "турецкий; турок", "🇹🇷"],
          ["Germany", "ˈdʒɜːməni", "Германия", "🇩🇪"],
          ["German", "ˈdʒɜːmən", "немецкий; немец", "🇩🇪"],
          ["Mexico", "ˈmeksɪkəʊ", "Мексика", "🇲🇽"],
          ["Mexican", "ˈmeksɪkən", "мексиканский; мексиканец", "🇲🇽"],
          ["the United States", "juˌnaɪtɪd ˈsteɪts", "Соединённые Штаты", "🇺🇸", "or the USA"],
          ["American", "əˈmerɪkən", "американский; американец", "🇺🇸"],
          ["Argentina", "ˌɑːdʒənˈtiːnə", "Аргентина", "🇦🇷"],
          ["Argentinian", "ˌɑːdʒənˈtɪniən", "аргентинский; аргентинец", "🇦🇷"],
          ["Brazil", "brəˈzɪl", "Бразилия", "🇧🇷"],
          ["Brazilian", "brəˈzɪliən", "бразильский; бразилец", "🇧🇷"],
          ["Egypt", "ˈiːdʒɪpt", "Египет", "🇪🇬"],
          ["Egyptian", "iˈdʒɪpʃn", "египетский; египтянин", "🇪🇬"],
          ["Hungary", "ˈhʌŋgəri", "Венгрия", "🇭🇺"],
          ["Hungarian", "hʌŋˈgeəriən", "венгерский; венгр", "🇭🇺"],
          ["Italy", "ˈɪtəli", "Италия", "🇮🇹"],
          ["Italian", "ɪˈtæliən", "итальянский; итальянец", "🇮🇹"],
          ["Russia", "ˈrʌʃə", "Россия", "🇷🇺"],
          ["Russian", "ˈrʌʃn", "русский; россиянин", "🇷🇺"],
          ["China", "ˈtʃaɪnə", "Китай", "🇨🇳"],
          ["Chinese", "ˌtʃaɪˈniːz", "китайский; китаец", "🇨🇳"],
          ["Japan", "dʒəˈpæn", "Япония", "🇯🇵"],
          ["Japanese", "ˌdʒæpəˈniːz", "японский; японец", "🇯🇵"],
          ["the Czech Republic", "ˌtʃek rɪˈpʌblɪk", "Чехия", "🇨🇿"],
          ["Czech", "tʃek", "чешский; чех", "🇨🇿"],
          ["France", "frɑːns", "Франция", "🇫🇷"],
          ["French", "frentʃ", "французский; француз", "🇫🇷"],
          ["Switzerland", "ˈswɪtsələnd", "Швейцария", "🇨🇭"],
          ["Swiss", "swɪs", "швейцарский; швейцарец", "🇨🇭"],
          ["the United Kingdom", "juˌnaɪtɪd ˈkɪŋdəm", "Великобритания (Соединённое Королевство)", "🇬🇧", "or the UK"],
          ["British", "ˈbrɪtɪʃ", "британский; британец", "🇬🇧"]
        ]
      }
    ]
  },

  {
    id: "classroom", page: 150, icon: "🏫",
    title: "Classroom language", ru: "Язык на уроке",
    groups: [
      {
        id: "teacher-says", title: "The teacher says", ru: "Говорит учитель", lesson: "1C",
        tips: [
          { title: "Please", text: "Please ставят в начало или в конец фразы, чтобы звучать вежливо: Please come here. OR Come here, please." }
        ],
        words: [
          ["Open your books, please.", "", "Откройте, пожалуйста, книги.", "📖"],
          ["Go to page 84.", "", "Откройте страницу 84."],
          ["Do exercise a.", "", "Сделайте упражнение a.", "✍️"],
          ["Read the text.", "", "Прочитайте текст."],
          ["Look at the board.", "", "Посмотрите на доску.", "👀"],
          ["Close the door.", "", "Закройте дверь.", "🚪"],
          ["Work in pairs.", "", "Работайте в парах.", "👥", "or in groups"],
          ["Answer the questions.", "", "Ответьте на вопросы.", "❓"],
          ["Listen and repeat.", "", "Слушайте и повторяйте.", "👂"],
          ["Stand up.", "", "Встаньте."],
          ["Sit down.", "", "Садитесь.", "🪑"],
          ["Turn off your phone.", "", "Выключите телефон.", "📵"],
          ["Please stop talking!", "", "Пожалуйста, перестаньте разговаривать!", "🤫"]
        ]
      },
      {
        id: "you-say", title: "You say", ru: "Говорите вы", lesson: "1C",
        activation: "Try to use the You say language in your next English lesson.",
        words: [
          ["Sorry, can you repeat that, please?", "", "Извините, повторите, пожалуйста.", "🔁"],
          ["Sorry I'm late.", "", "Извините, я опоздал(а).", "⏰"],
          ["I don't understand.", "", "Я не понимаю.", "🤔"],
          ["Can I have a copy, please?", "", "Можно мне копию, пожалуйста?", "📄"],
          ["How do you spell it?", "", "Как это пишется (по буквам)?", "🔤"],
          ["I don't know.", "", "Я не знаю.", "🤷"],
          ["How do you say gato in English?", "", "Как сказать «gato» по-английски?"],
          ["Can you help me, please?", "", "Помогите мне, пожалуйста.", "🙋"],
          ["What page is it?", "", "Какая страница?"]
        ]
      }
    ]
  },

  {
    id: "things", page: 151, icon: "🎒",
    title: "Things", ru: "Вещи",
    groups: [
      {
        id: "things", title: "Things", ru: "Вещи", lesson: "2A",
        activation: "Cover the words and look at the photos. In pairs, ask and answer. What is it? — It's a watch. What are they? — They're glasses.",
        tips: [
          { title: "Plural nouns", text: "Некоторые слова всегда во множественном числе: glasses, headphones, scissors. С ними не ставят a / an: NOT a glasses." }
        ],
        words: [
          ["a bag", "bæg", "сумка", "👜"],
          ["a charger", "ˈtʃɑːdʒə", "зарядное устройство", "🔌"],
          ["a coin", "kɔɪn", "монета", "🪙"],
          ["a credit card", "ˈkredɪt kɑːd", "кредитная карта", "💳", "or debit card"],
          ["a diary", "ˈdaɪəri", "ежедневник", "📔"],
          ["a dictionary", "ˈdɪkʃənri", "словарь", "📚"],
          ["a file", "faɪl", "папка (для бумаг)", "🗂️"],
          ["glasses", "ˈglɑːsɪz", "очки", "👓"],
          ["headphones", "ˈhedfəʊnz", "наушники", "🎧"],
          ["an identity card", "aɪˈdentəti kɑːd", "удостоверение личности", "🪪"],
          ["a key", "kiː", "ключ", "🔑"],
          ["a lamp", "læmp", "лампа", "💡"],
          ["a laptop", "ˈlæptɒp", "ноутбук", "💻"],
          ["a magazine", "ˌmægəˈziːn", "журнал", "📒"],
          ["a newspaper", "ˈnjuːzpeɪpə", "газета", "📰"],
          ["a notebook", "ˈnəʊtbʊk", "блокнот, тетрадь", "📓"],
          ["a pen", "pen", "ручка", "🖊️"],
          ["a pencil", "ˈpensl", "карандаш", "✏️"],
          ["a (mobile) phone", "fəʊn", "(мобильный) телефон", "📱"],
          ["a photo", "ˈfəʊtəʊ", "фотография", "🖼️"],
          ["a piece of paper", "ˌpiːs əv ˈpeɪpə", "лист бумаги", "📄"],
          ["a purse", "pɜːs", "кошелёк", "👛"],
          ["scissors", "ˈsɪzəz", "ножницы", "✂️"],
          ["sunglasses", "ˈsʌnglɑːsɪz", "солнцезащитные очки", "🕶️"],
          ["a tablet", "ˈtæblət", "планшет"],
          ["a ticket", "ˈtɪkɪt", "билет", "🎫"],
          ["a tissue", "ˈtɪʃuː", "бумажная салфетка", "🤧"],
          ["an umbrella", "ʌmˈbrelə", "зонт", "☂️"],
          ["a wallet", "ˈwɒlɪt", "бумажник, портмоне"],
          ["a watch", "wɒtʃ", "наручные часы", "⌚"]
        ]
      }
    ]
  },

  {
    id: "adjectives", page: 152, icon: "⚖️",
    title: "Adjectives", ru: "Прилагательные",
    groups: [
      {
        id: "opposites", title: "Opposites", ru: "Противоположности", lesson: "2B",
        activation: "Test your partner. A say an adjective and B say the opposite.",
        words: [
          ["beautiful", "ˈbjuːtɪfl", "красивый", "🌹", "≠ ugly"],
          ["ugly", "ˈʌgli", "некрасивый, уродливый", "", "≠ beautiful"],
          ["big", "bɪg", "большой", "🐘", "≠ small"],
          ["small", "smɔːl", "маленький", "🐭", "≠ big"],
          ["cheap", "tʃiːp", "дешёвый", "", "≠ expensive"],
          ["expensive", "ɪkˈspensɪv", "дорогой", "💎", "≠ cheap"],
          ["clean", "kliːn", "чистый", "✨", "≠ dirty"],
          ["dirty", "ˈdɜːti", "грязный", "", "≠ clean"],
          ["easy", "ˈiːzi", "лёгкий, простой", "", "≠ difficult"],
          ["difficult", "ˈdɪfɪkəlt", "трудный, сложный", "", "≠ easy"],
          ["fast", "fɑːst", "быстрый", "🏎️", "≠ slow"],
          ["slow", "sləʊ", "медленный", "🐢", "≠ fast"],
          ["full", "fʊl", "полный", "", "≠ empty"],
          ["empty", "ˈempti", "пустой", "", "≠ full"],
          ["good", "gʊd", "хороший", "👍", "≠ bad"],
          ["bad", "bæd", "плохой", "👎", "≠ good"],
          ["high", "haɪ", "высокий (о горе, цене)", "🏔️", "≠ low"],
          ["low", "ləʊ", "низкий", "", "≠ high"],
          ["hot", "hɒt", "горячий, жаркий", "🔥", "≠ cold"],
          ["cold", "kəʊld", "холодный", "🧊", "≠ hot"],
          ["light", "laɪt", "светлый", "", "≠ dark"],
          ["dark", "dɑːk", "тёмный", "🌑", "≠ light"],
          ["long", "lɒŋ", "длинный", "", "≠ short"],
          ["short", "ʃɔːt", "короткий", "", "≠ long"],
          ["old", "əʊld", "старый (о вещи)", "", "≠ new"],
          ["new", "njuː", "новый", "🆕", "≠ old"],
          ["old", "əʊld", "старый, пожилой (о человеке)", "👴", "≠ young"],
          ["young", "jʌŋ", "молодой", "", "≠ old"],
          ["rich", "rɪtʃ", "богатый", "💰", "≠ poor"],
          ["poor", "pɔː", "бедный", "", "≠ rich"],
          ["right", "raɪt", "правый (о стороне)", "👉", "≠ left"],
          ["left", "left", "левый", "👈", "≠ right"],
          ["right", "raɪt", "правильный, верный", "✅", "≠ wrong"],
          ["wrong", "rɒŋ", "неправильный, неверный", "❌", "≠ right"],
          ["safe", "seɪf", "безопасный", "", "≠ dangerous"],
          ["dangerous", "ˈdeɪndʒərəs", "опасный", "⚠️", "≠ safe"],
          ["the same", "seɪm", "одинаковый, тот же самый", "", "≠ different"],
          ["different", "ˈdɪfrənt", "разный, другой", "", "≠ the same"],
          ["strong", "strɒŋ", "сильный", "💪", "≠ weak"],
          ["weak", "wiːk", "слабый", "", "≠ strong"],
          ["tall", "tɔːl", "высокий (о человеке)", "", "≠ short"],
          ["short", "ʃɔːt", "низкий (о человеке)", "", "≠ tall"]
        ]
      },
      {
        id: "modifiers", title: "Modifiers and opinion adjectives", ru: "Усилители и оценочные прилагательные", lesson: "2B",
        activation: "Say two adjectives for each one. Use modifiers: a Ferrari, Mount Everest, Bill Gates, the Mona Lisa, the Pyramids, Africa, your town or city.",
        tips: [
          { title: "Modifiers: very / really, quite", text: "Усилители ставят перед прилагательным: A Ferrari is very / really fast. It's quite cold today. (= холодно, но не очень)." },
          { title: "Opinion adjectives", text: "good → nice, great, fantastic; bad → awful, terrible." }
        ],
        words: [
          ["very", "ˈveri", "очень"],
          ["really", "ˈrɪəli", "очень, по-настоящему"],
          ["quite", "kwaɪt", "довольно, достаточно", "", "= but not very"],
          ["nice", "naɪs", "приятный, хороший", "🙂"],
          ["great", "greɪt", "отличный", "😀"],
          ["fantastic", "fænˈtæstɪk", "потрясающий", "🤩"],
          ["awful", "ˈɔːfl", "ужасный", "😖"],
          ["terrible", "ˈterəbl", "ужасный, кошмарный", "😱"]
        ]
      }
    ]
  },

  {
    id: "verb-phrases", page: 153, icon: "🎾",
    title: "Verb phrases", ru: "Глагольные словосочетания",
    groups: [
      {
        id: "verb-phrases", title: "Verb phrases", ru: "Глагольные словосочетания", lesson: "3A",
        activation: "Cover the verbs and look at the photos. Test yourself or a partner.",
        tips: [
          { title: "play", text: "play + спорт без артикля: play tennis. play + the + музыкальный инструмент: play the guitar." }
        ],
        words: [
          ["cook dinner", "", "готовить ужин", "🍳"],
          ["do housework", "", "заниматься домашними делами", "🧹"],
          ["do exercise", "", "заниматься спортом, делать упражнения", "🏋️"],
          ["do homework", "", "делать домашнее задание", "📝"],
          ["drink mineral water", "", "пить минеральную воду", "💧"],
          ["drive a car", "", "водить машину", "🚗"],
          ["eat vegetables", "", "есть овощи", "🥦"],
          ["go to the cinema", "", "ходить в кино", "🎬"],
          ["have a garden", "", "иметь сад (у меня есть сад)", "🌳"],
          ["like animals", "", "любить животных", "🐶"],
          ["listen to music", "", "слушать музыку", "🎵"],
          ["live in a flat", "", "жить в квартире", "🏢"],
          ["need a new phone", "", "нуждаться в новом телефоне", "📱"],
          ["play tennis", "", "играть в теннис", "🎾"],
          ["play the guitar", "", "играть на гитаре", "🎸"],
          ["read a book", "", "читать книгу", "📖"],
          ["say sorry", "", "извиниться (сказать «простите»)", "🙏"],
          ["speak German", "", "говорить по-немецки", "🇩🇪"],
          ["study history", "", "изучать историю", "🏛️"],
          ["take an umbrella", "", "взять зонт", "☂️"],
          ["want a coffee", "", "хотеть кофе", "☕"],
          ["watch TV", "", "смотреть телевизор", "📺"],
          ["wear glasses", "", "носить очки", "👓"],
          ["work in an office", "", "работать в офисе", "🖥️"]
        ]
      }
    ]
  },

  {
    id: "jobs", page: 154, icon: "👩‍⚕️",
    title: "Jobs", ru: "Профессии",
    groups: [
      {
        id: "jobs", title: "Jobs", ru: "Профессии", lesson: "3B",
        activation: "Cover the jobs and look at the photos. In pairs, say what the people do. She's a journalist. He's an engineer.",
        tips: [
          { title: "a / an + jobs", text: "С профессиями всегда используется a / an: She's a model. NOT She's model." }
        ],
        words: [
          ["an accountant", "əˈkaʊntənt", "бухгалтер", "🧮"],
          ["an actor", "ˈæktə", "актёр", "🎭"],
          ["an administrator", "ədˈmɪnɪstreɪtə", "администратор", "🗂️"],
          ["an architect", "ˈɑːkɪtekt", "архитектор", "📐"],
          ["a builder", "ˈbɪldə", "строитель", "👷"],
          ["a chef", "ʃef", "шеф-повар, повар", "🧑‍🍳", "or cook"],
          ["a cleaner", "ˈkliːnə", "уборщик, уборщица", "🧽"],
          ["a dentist", "ˈdentɪst", "стоматолог", "🦷"],
          ["a doctor", "ˈdɒktə", "врач", "🩺"],
          ["an engineer", "ˌendʒɪˈnɪə", "инженер", "⚙️"],
          ["a factory worker", "ˈfæktəri ˌwɜːkə", "рабочий на заводе", "🏭"],
          ["a flight attendant", "ˈflaɪt əˌtendənt", "бортпроводник, стюардесса", "✈️"],
          ["a footballer", "ˈfʊtbɔːlə", "футболист", "⚽"],
          ["a guide", "gaɪd", "гид, экскурсовод", "🗺️"],
          ["a hairdresser", "ˈheədresə", "парикмахер", "💇"],
          ["a journalist", "ˈdʒɜːnəlɪst", "журналист", "🎤"],
          ["a lawyer", "ˈlɔːjə", "юрист, адвокат", "⚖️"],
          ["a (bank) manager", "ˈmænɪdʒə", "(банковский) менеджер, управляющий", "🏦"],
          ["a model", "ˈmɒdl", "модель (фотомодель)", "📸"],
          ["a musician", "mjuˈzɪʃn", "музыкант", "🎻"],
          ["a nurse", "nɜːs", "медсестра, медбрат", "🧑‍⚕️"],
          ["a pilot", "ˈpaɪlət", "пилот", "🧑‍✈️"],
          ["a police officer", "pəˈliːs ˌɒfɪsə", "полицейский", "👮", "or policeman, policewoman"],
          ["a receptionist", "rɪˈsepʃənɪst", "администратор (на ресепшене)", "🛎️"],
          ["a shop assistant", "ˈʃɒp əˌsɪstənt", "продавец", "🛍️", "or sales assistant"],
          ["a soldier", "ˈsəʊldʒə", "солдат", "🪖"],
          ["a taxi driver", "ˈtæksi ˌdraɪvə", "таксист", "🚕"],
          ["a teacher", "ˈtiːtʃə", "учитель", "🧑‍🏫"],
          ["a vet", "vet", "ветеринар", "🐾"],
          ["a waiter / a waitress", "ˈweɪtə / ˈweɪtrəs", "официант / официантка", "🍽️"]
        ]
      },
      {
        id: "what-do-you-do", title: "What do you do?", ru: "Чем вы занимаетесь?", lesson: "3B",
        words: [
          ["What do you do?", "", "Кем вы работаете? / Чем вы занимаетесь?"],
          ["I work for an IT company.", "", "Я работаю в IT-компании.", "💻"],
          ["I work in a shop.", "", "Я работаю в магазине.", "🏪"],
          ["I'm a student.", "", "Я студент(ка).", "🎓"],
          ["I'm at university.", "", "Я учусь в университете.", "🏫"],
          ["I'm at school.", "", "Я учусь в школе.", "🎒"],
          ["I'm unemployed.", "", "Я безработный (безработная)."],
          ["I'm retired.", "", "Я на пенсии.", "🏖️"]
        ]
      }
    ]
  },

  {
    id: "family", page: 155, icon: "👨‍👩‍👧",
    title: "The family", ru: "Семья",
    groups: [
      {
        id: "members", title: "Family members", ru: "Члены семьи", lesson: "4A",
        activation: "Cover the words. In pairs, ask and answer. Who's Jennifer? — She's Richard's grandmother.",
        words: [
          ["father", "ˈfɑːðə", "отец", "👨"],
          ["mother", "ˈmʌðə", "мать", "👩"],
          ["brother", "ˈbrʌðə", "брат", "👦"],
          ["sister", "ˈsɪstə", "сестра", "👧"],
          ["daughter", "ˈdɔːtə", "дочь"],
          ["son", "sʌn", "сын"],
          ["grandfather", "ˈgrænfɑːðə", "дедушка", "👴"],
          ["grandmother", "ˈgrænmʌðə", "бабушка", "👵"],
          ["aunt", "ɑːnt", "тётя"],
          ["uncle", "ˈʌŋkl", "дядя"],
          ["nephew", "ˈnefjuː", "племянник"],
          ["niece", "niːs", "племянница"],
          ["cousin", "ˈkʌzn", "двоюродный брат, двоюродная сестра"],
          ["wife", "waɪf", "жена", "👰"],
          ["husband", "ˈhʌzbənd", "муж", "🤵"]
        ]
      },
      {
        id: "plurals", title: "Two or more people", ru: "Несколько человек", lesson: "4A",
        words: [
          ["parents", "ˈpeərənts", "родители", "👫", "= my father and my mother"],
          ["parents-in-law", "ˈpeərənts ɪn lɔː", "родители жены / мужа", "", "= my wife's mother and father"],
          ["grandparents", "ˈgrænpeərənts", "бабушка и дедушка", "👴👵"],
          ["children", "ˈtʃɪldrən", "дети", "🧒", "= my son and my daughter"],
          ["a (married) couple", "ˈkʌpl", "(супружеская) пара", "💑", "= a husband and wife"]
        ]
      },
      {
        id: "more-family", title: "More family words", ru: "Ещё о семье", lesson: "4A",
        words: [
          ["mother-in-law", "ˈmʌðər ɪn lɔː", "тёща / свекровь", "", "= my wife's (husband's) mother"],
          ["sister-in-law", "ˈsɪstər ɪn lɔː", "золовка / свояченица (сестра мужа или жены)", "", "= my husband's sister"],
          ["stepfather", "ˈstepfɑːðə", "отчим", "", "= my mother's new husband"],
          ["stepmother", "ˈstepmʌðə", "мачеха", "", "= my father's new wife"],
          ["partner", "ˈpɑːtnə", "партнёр (спутник жизни)", "❤️", "= the person I am in a relationship with"]
        ]
      }
    ]
  },

  {
    id: "daily-routine", page: 156, icon: "⏰",
    title: "Daily routine", ru: "Распорядок дня",
    groups: [
      {
        id: "busy-belinda", title: "Busy Belinda", ru: "Занятая Белинда", lesson: "4B",
        activation: "Cover the verb phrases. A describe Belinda's day. Then B describe Charlie's day.",
        tips: [
          { title: "have", text: "1) семья и вещи: I have three children. 2) действия: I have lunch at 1.30. She has a shower in the morning. 3) еда и напитки: have a coffee, have a sandwich." }
        ],
        words: [
          ["wake up at 7.00", "", "просыпаться в 7:00", "⏰"],
          ["have a shower", "", "принимать душ", "🚿"],
          ["get dressed", "", "одеваться", "👔"],
          ["put on make-up", "", "краситься (наносить макияж)", "💄"],
          ["have a coffee", "", "выпить кофе", "☕"],
          ["go to work by bus", "", "ехать на работу на автобусе", "🚌"],
          ["get to work", "", "добираться до работы"],
          ["check emails", "", "проверять почту", "📧"],
          ["start work at 8.30", "", "начинать работу в 8:30"],
          ["have lunch at work", "", "обедать на работе", "🥪"],
          ["finish work at 6.30", "", "заканчивать работу в 6:30"],
          ["go shopping", "", "ходить по магазинам", "🛍️"],
          ["get home late", "", "поздно возвращаться домой", "🌙"],
          ["do the housework", "", "заниматься домашними делами", "🧹"],
          ["have pizza for dinner", "", "есть пиццу на ужин", "🍕"],
          ["go to bed", "", "ложиться спать", "🛏️"]
        ]
      },
      {
        id: "chilled-charlie", title: "Chilled Charlie", ru: "Спокойный Чарли", lesson: "4B",
        words: [
          ["get up at 8.00", "", "вставать в 8:00"],
          ["have a shave", "", "бриться", "🪒"],
          ["have breakfast", "", "завтракать", "🥣"],
          ["walk to work", "", "ходить на работу пешком", "🚶"],
          ["go home early", "", "рано уходить домой", "🏠"],
          ["take the dog for a walk", "", "выгуливать собаку", "🐕"],
          ["go to Italian classes", "", "ходить на курсы итальянского", "🇮🇹"],
          ["see friends", "", "встречаться с друзьями", "👫"],
          ["make dinner", "", "готовить ужин", "🍝"],
          ["have a bath", "", "принимать ванну", "🛁"],
          ["relax", "rɪˈlæks", "отдыхать, расслабляться", "🛋️"],
          ["sleep for eight hours", "", "спать восемь часов", "😴"]
        ]
      }
    ]
  },

  {
    id: "time", page: 157, icon: "🕒",
    title: "Time", ru: "Время и частотность",
    groups: [
      {
        id: "telling-time", title: "Telling the time", ru: "Который час", lesson: "Practical English 2",
        activation: "Cover the phrases and look at the clocks. Ask and answer with a partner.",
        tips: [
          { title: "Time", text: "Спросить время можно двумя способами: What time is it? OR What's the time? Если время не кратно пяти, добавляют minutes: 6.03 = It's three minutes past six. Если точно не знаете — about: “At about 7.00.”" }
        ],
        words: [
          ["What time is it? / What's the time?", "", "Который час?", "⌚"],
          ["It's six o'clock.", "", "6:00 · шесть часов", "🕕"],
          ["It's three minutes past six.", "", "6:03 · три минуты седьмого"],
          ["It's ten past six.", "", "6:10 · десять минут седьмого"],
          ["It's (a) quarter past six.", "", "6:15 · четверть седьмого"],
          ["It's twenty past six.", "", "6:20 · двадцать минут седьмого"],
          ["It's half past six.", "", "6:30 · половина седьмого", "🕡"],
          ["It's twenty-five to seven.", "", "6:35 · без двадцати пяти семь"],
          ["It's (a) quarter to seven.", "", "6:45 · без четверти семь"],
          ["It's five to seven.", "", "6:55 · без пяти семь"],
          ["at about 7.00", "", "примерно в 7:00"]
        ]
      },
      {
        id: "frequency-expressions", title: "Expressions of frequency", ru: "Выражения частотности", lesson: "4C",
        activation: "Cover the left-hand column. Test yourself.",
        words: [
          ["How often...?", "", "Как часто...?", "", "How often do you see your friends?"],
          ["every day", "ˈevri deɪ", "каждый день", "", "M, T, W, Th, F, S, S"],
          ["every week", "", "каждую неделю"],
          ["every month", "", "каждый месяц"],
          ["every year", "", "каждый год"],
          ["once a week", "wʌns", "раз в неделю", "", "e.g. only on Mondays"],
          ["twice a week", "twaɪs", "два раза в неделю", "", "e.g. on Mondays and Wednesdays"],
          ["three times a week", "", "три раза в неделю"],
          ["four times a year", "", "четыре раза в год"]
        ]
      },
      {
        id: "frequency-adverbs", title: "Adverbs of frequency", ru: "Наречия частотности", lesson: "4C",
        activation: "Cover sentences 1–6 and look at a–f. Can you remember the sentences?",
        tips: [
          { title: "normally", text: "Normally — то же, что usually: I normally get up early. = I usually get up early." }
        ],
        words: [
          ["always", "ˈɔːlweɪz", "всегда", "", "I always get up at 7.00 during the week."],
          ["usually", "ˈjuːʒuəli", "обычно", "", "I usually finish work at 6.00."],
          ["normally", "ˈnɔːməli", "обычно (= usually)"],
          ["often", "ˈɒfn", "часто", "", "I often go to the cinema after work."],
          ["sometimes", "ˈsʌmtaɪmz", "иногда", "", "I sometimes meet a friend for lunch."],
          ["hardly ever", "ˌhɑːdli ˈevə", "почти никогда, очень редко", "", "I hardly ever go to the theatre."],
          ["never", "ˈnevə", "никогда", "🚫", "I never have coffee."]
        ]
      }
    ]
  },

  {
    id: "more-verb-phrases", page: 158, icon: "🎨",
    title: "More verb phrases", ru: "Ещё глагольные словосочетания",
    groups: [
      {
        id: "more-verb-phrases", title: "More verb phrases", ru: "Ещё глагольные словосочетания", lesson: "5A",
        activation: "Cover the verbs and look at the photos. Test yourself or a partner.",
        words: [
          ["buy a newspaper", "", "купить газету", "📰"],
          ["call a taxi", "", "вызвать такси", "🚕", "or phone"],
          ["dance the tango", "", "танцевать танго", "💃"],
          ["draw a picture", "", "нарисовать картинку (карандашом)", "✏️"],
          ["find a parking space", "", "найти место для парковки", "🅿️"],
          ["forget somebody's name", "", "забыть чьё-то имя"],
          ["give somebody flowers", "", "подарить кому-то цветы", "💐"],
          ["hear a noise", "", "услышать шум", "👂"],
          ["help somebody", "", "помочь кому-то", "🤝"],
          ["leave your bag on a train", "", "оставить сумку в поезде", "🚆"],
          ["look for your keys", "", "искать ключи", "🔑"],
          ["meet a friend", "", "встретиться с другом", "👋"],
          ["paint a picture", "", "написать картину (красками)", "🎨"],
          ["remember somebody's name", "", "помнить чьё-то имя"],
          ["run a race", "", "бежать в забеге", "🏃"],
          ["see a film", "", "посмотреть фильм", "🎬"],
          ["send a text message", "", "отправить сообщение", "💬"],
          ["sing a song", "", "спеть песню", "🎤"],
          ["swim in the sea", "", "плавать в море", "🏊"],
          ["take a photo", "", "сфотографировать", "📷"],
          ["talk to a friend", "", "поговорить с другом", "🗣️"],
          ["tell somebody a secret", "", "рассказать кому-то секрет", "🤫"],
          ["try to do something difficult", "", "пытаться сделать что-то трудное", "💪"],
          ["use the internet", "", "пользоваться интернетом", "🌐"],
          ["wait for a bus", "", "ждать автобус", "🚏"]
        ]
      }
    ]
  },

  {
    id: "weather-dates", page: 159, icon: "⛅",
    title: "The weather and dates", ru: "Погода и даты",
    groups: [
      {
        id: "weather", title: "The weather", ru: "Погода", lesson: "5C",
        activation: "What's the weather like where you are?",
        tips: [
          { title: "Other adjectives for weather", text: "warm = не очень жарко (≠ cool), wet = дождливо (≠ dry)." },
          { title: "Nouns and adjectives", text: "Существительное: sun, cloud, wind, fog. Прилагательное: sunny, cloudy, windy, foggy." }
        ],
        words: [
          ["What's the weather like?", "", "Какая погода?"],
          ["It's sunny.", "ˈsʌni", "Солнечно.", "☀️"],
          ["It's cloudy.", "ˈklaʊdi", "Облачно.", "☁️"],
          ["It's windy.", "ˈwɪndi", "Ветрено.", "💨"],
          ["It's foggy.", "ˈfɒgi", "Туманно.", "🌫️"],
          ["It's raining.", "ˈreɪnɪŋ", "Идёт дождь.", "🌧️"],
          ["It's snowing.", "ˈsnəʊɪŋ", "Идёт снег.", "🌨️"],
          ["It's hot.", "hɒt", "Жарко.", "🥵"],
          ["It's cold.", "kəʊld", "Холодно.", "🥶"],
          ["warm", "wɔːm", "тёплый", "", "= not very hot"],
          ["cool", "kuːl", "прохладный", "", "≠ warm"],
          ["wet", "wet", "дождливый, мокрый", "☔", "= raining"],
          ["dry", "draɪ", "сухой", "", "≠ wet"],
          ["sun", "sʌn", "солнце", "🌞"],
          ["cloud", "klaʊd", "облако", "☁️"],
          ["wind", "wɪnd", "ветер", "🌬️"],
          ["fog", "fɒg", "туман", "🌫️"]
        ]
      },
      {
        id: "seasons", title: "Seasons", ru: "Времена года", lesson: "5C",
        activation: "What season is it?",
        words: [
          ["spring", "sprɪŋ", "весна", "🌷"],
          ["summer", "ˈsʌmə", "лето", "🏖️"],
          ["autumn", "ˈɔːtəm", "осень", "🍂"],
          ["winter", "ˈwɪntə", "зима", "⛄"]
        ]
      },
      {
        id: "ordinals", title: "Ordinal numbers", ru: "Порядковые числительные", lesson: "6B",
        words: [
          ["first", "fɜːst", "1st · первый"],
          ["second", "ˈsekənd", "2nd · второй"],
          ["third", "θɜːd", "3rd · третий"],
          ["fourth", "fɔːθ", "4th · четвёртый"],
          ["fifth", "fɪfθ", "5th · пятый"],
          ["sixth", "sɪksθ", "6th · шестой"],
          ["seventh", "ˈsevnθ", "7th · седьмой"],
          ["eighth", "eɪtθ", "8th · восьмой"],
          ["ninth", "naɪnθ", "9th · девятый"],
          ["tenth", "tenθ", "10th · десятый"],
          ["eleventh", "ɪˈlevnθ", "11th · одиннадцатый"],
          ["twelfth", "twelfθ", "12th · двенадцатый"],
          ["thirteenth", "ˌθɜːˈtiːnθ", "13th · тринадцатый"],
          ["fourteenth", "ˌfɔːˈtiːnθ", "14th · четырнадцатый"],
          ["twentieth", "ˈtwentiəθ", "20th · двадцатый"],
          ["twenty-first", "ˌtwenti ˈfɜːst", "21st · двадцать первый"],
          ["twenty-second", "ˌtwenti ˈsekənd", "22nd · двадцать второй"],
          ["twenty-third", "ˌtwenti ˈθɜːd", "23rd · двадцать третий"],
          ["twenty-fourth", "ˌtwenti ˈfɔːθ", "24th · двадцать четвёртый"],
          ["thirtieth", "ˈθɜːtiəθ", "30th · тридцатый"],
          ["thirty-first", "ˌθɜːti ˈfɜːst", "31st · тридцать первый"]
        ]
      },
      {
        id: "dates", title: "The date", ru: "Даты и годы", lesson: "6B",
        activation: "What's the date today? What's the date tomorrow?",
        tips: [
          { title: "Writing and saying the date", text: "Пишем 22nd March — говорим the twenty-second of March. В США месяц пишут первым: 12/1 = the first of December." },
          { title: "Prepositions with months and dates", text: "in + месяц: My birthday's in February. on + дата: The meeting is on Friday 5th September." }
        ],
        words: [
          ["What's the date today?", "", "Какое сегодня число?", "📆"],
          ["the twenty-second of March", "", "22nd March · двадцать второе марта"],
          ["the twelfth of January", "", "12/1 · двенадцатое января"],
          ["eighteen oh seven", "", "1807 (год)"],
          ["nineteen thirty-six", "", "1936 (год)"],
          ["two thousand and eight", "", "2008 (год)", "", "for years 2000–2010"],
          ["twenty eleven", "", "2011 (год)", "", "or two thousand and eleven"]
        ]
      }
    ]
  },

  {
    id: "go-have-get", page: 160, icon: "🚶",
    title: "go, have, get", ru: "Глаголы go, have, get",
    groups: [
      {
        id: "go", title: "go", ru: "go — идти, ехать", lesson: "7C",
        activation: "Take turns to say five things you did yesterday with went, had, or got. Yesterday, I got up early. I had breakfast in a café. I went shopping...",
        words: [
          ["go by bus", "", "ехать на автобусе", "🚌", "or by car, by plane"],
          ["go for a walk", "", "пойти погулять", "🚶"],
          ["go home", "", "идти домой", "🏠", "go home from school"],
          ["go out", "", "выходить куда-нибудь (развлекаться)", "🎉", "go out on Friday night"],
          ["go shopping", "", "ходить по магазинам", "🛍️"],
          ["go to a restaurant", "", "пойти в ресторан", "🍽️"],
          ["go to bed", "", "ложиться спать", "🛏️", "go to bed late"],
          ["go to church", "", "ходить в церковь", "⛪", "or to mosque, etc."],
          ["go to the beach", "", "пойти на пляж", "🏖️"],
          ["go back", "", "вернуться", "↩️", "go back to work"],
          ["go on holiday", "", "поехать в отпуск", "✈️"]
        ]
      },
      {
        id: "have", title: "have", ru: "have — иметь, есть, пить", lesson: "7C",
        words: [
          ["have a car", "", "иметь машину", "🚗", "or a bike"],
          ["have long hair", "", "иметь длинные волосы", "💇‍♀️"],
          ["have breakfast", "", "завтракать", "🍳", "or lunch, dinner"],
          ["have a drink", "", "выпить (что-нибудь)", "🍹"],
          ["have a good time", "", "хорошо провести время", "😄"],
          ["have a sandwich", "", "съесть бутерброд", "🥪"],
          ["have a shower", "", "принять душ", "🚿", "or a bath, a swim"]
        ]
      },
      {
        id: "get", title: "get", ru: "get — получать, добираться", lesson: "7C",
        words: [
          ["get a newspaper", "", "купить (взять) газету", "📰", "= buy or obtain"],
          ["get a taxi", "", "взять такси", "🚕", "= take"],
          ["get an email", "", "получить письмо", "📧", "= receive"],
          ["get dressed", "", "одеться", "👕"],
          ["get home", "", "добраться домой", "🏡", "= arrive"],
          ["get to the airport", "", "добраться до аэропорта", "🛫", "= arrive"],
          ["get up", "", "вставать", "⏰", "early, late"]
        ]
      }
    ]
  },

  {
    id: "house", page: 161, icon: "🏠",
    title: "The house", ru: "Дом",
    groups: [
      {
        id: "rooms", title: "Rooms", ru: "Комнаты", lesson: "8B",
        activation: "Cover the words and look at the pictures. Test yourself or a partner.",
        words: [
          ["a bathroom", "ˈbɑːθruːm", "ванная комната", "🛁"],
          ["a bedroom", "ˈbedruːm", "спальня", "🛏️"],
          ["a dining room", "ˈdaɪnɪŋ ruːm", "столовая", "🍽️"],
          ["a garage", "ˈgærɑːʒ", "гараж", "🚗"],
          ["a garden", "ˈgɑːdn", "сад", "🌳"],
          ["a hall", "hɔːl", "прихожая, холл", "🚪"],
          ["a kitchen", "ˈkɪtʃɪn", "кухня", "🍳"],
          ["a living room", "ˈlɪvɪŋ ruːm", "гостиная", "🛋️"],
          ["a study", "ˈstʌdi", "кабинет", "📚"],
          ["a toilet", "ˈtɔɪlət", "туалет", "🚽"]
        ]
      },
      {
        id: "parts", title: "Parts of a house", ru: "Части дома", lesson: "8B",
        words: [
          ["a balcony", "ˈbælkəni", "балкон"],
          ["a ceiling", "ˈsiːlɪŋ", "потолок"],
          ["a floor", "flɔː", "пол; этаж"],
          ["stairs", "steəz", "лестница", "🪜"],
          ["a wall", "wɔːl", "стена", "🧱"],
          ["upstairs", "ˌʌpˈsteəz", "наверху, наверх (на верхнем этаже)", "⬆️"],
          ["downstairs", "ˌdaʊnˈsteəz", "внизу, вниз (на нижнем этаже)", "⬇️"]
        ]
      },
      {
        id: "things-in-room", title: "Things in a room", ru: "Вещи в комнате", lesson: "8B",
        tips: [
          { title: "Central heating and air conditioning", text: "Central heating — система, которая делает дом тёплым. Air conditioning — система, которая делает дом прохладным." }
        ],
        words: [
          ["an armchair", "ˈɑːmtʃeə", "кресло"],
          ["a bath", "bɑːθ", "ванна", "🛁"],
          ["a bed", "bed", "кровать", "🛏️"],
          ["a carpet", "ˈkɑːpɪt", "ковёр"],
          ["a cooker", "ˈkʊkə", "плита"],
          ["a cupboard", "ˈkʌbəd", "шкаф (кухонный), шкафчик"],
          ["a dishwasher", "ˈdɪʃwɒʃə", "посудомоечная машина"],
          ["a fireplace", "ˈfaɪəpleɪs", "камин", "🔥"],
          ["a fridge", "frɪdʒ", "холодильник"],
          ["a light", "laɪt", "светильник, лампа", "💡"],
          ["a microwave", "ˈmaɪkrəweɪv", "микроволновая печь"],
          ["a mirror", "ˈmɪrə", "зеркало", "🪞"],
          ["a plant", "plɑːnt", "растение", "🪴"],
          ["a shelf", "ʃelf", "полка", "", "plural: shelves"],
          ["a shower", "ˈʃaʊə", "душ", "🚿"],
          ["a sofa", "ˈsəʊfə", "диван", "🛋️"],
          ["a wardrobe", "ˈwɔːdrəʊb", "платяной шкаф"],
          ["a washing machine", "ˈwɒʃɪŋ məˌʃiːn", "стиральная машина", "🫧"],
          ["central heating", "ˌsentrəl ˈhiːtɪŋ", "центральное отопление", "♨️"],
          ["air conditioning", "ˈeə kənˌdɪʃənɪŋ", "кондиционер (кондиционирование)", "❄️"]
        ]
      }
    ]
  },

  {
    id: "prepositions", page: 162, icon: "📦",
    title: "Prepositions", ru: "Предлоги",
    groups: [
      {
        id: "place", title: "Place", ru: "Предлоги места", lesson: "8C",
        activation: "In pairs, point and ask and answer about the pictures. Where's the ghost? — He's under the bed.",
        tips: [
          { title: "above and below", text: "above похоже на over (над), below похоже на under (под)." }
        ],
        words: [
          ["in", "ɪn", "в (внутри)", "", "in the wardrobe"],
          ["in front of", "ɪn ˈfrʌnt əv", "перед", "", "in front of the table"],
          ["on", "ɒn", "на", "", "on the chair"],
          ["under", "ˈʌndə", "под", "", "under the bed"],
          ["behind", "bɪˈhaɪnd", "за, позади", "", "behind the sofa"],
          ["between", "bɪˈtwiːn", "между", "", "between the windows"],
          ["opposite", "ˈɒpəzɪt", "напротив", "", "opposite the woman"],
          ["next to", "ˈnekst tə", "рядом с", "", "next to the armchair"],
          ["over", "ˈəʊvə", "над", "", "over the mirror"],
          ["above", "əˈbʌv", "над, выше", "", "≈ over"],
          ["below", "bɪˈləʊ", "под, ниже", "", "≈ under"]
        ]
      },
      {
        id: "movement", title: "Movement", ru: "Предлоги движения", lesson: "8C",
        activation: "In pairs, point and ask and answer about the pictures. Where's the ghost going? — He's going up the stairs.",
        words: [
          ["from", "frɒm", "из, от", "", "from the bedroom"],
          ["to", "tuː", "в, к (куда)", "", "to the bathroom"],
          ["into", "ˈɪntuː", "в (внутрь)", "", "into the wardrobe"],
          ["out of", "ˈaʊt əv", "из (наружу)", "", "out of the wardrobe"],
          ["through", "θruː", "через, сквозь", "", "through the window"],
          ["up", "ʌp", "вверх (по)", "⬆️", "up the stairs"],
          ["down", "daʊn", "вниз (по)", "⬇️", "down the stairs"]
        ]
      }
    ]
  },

  {
    id: "food", page: 163, icon: "🍎",
    title: "Food and drink", ru: "Еда и напитки",
    groups: [
      {
        id: "breakfast", title: "Breakfast", ru: "Завтрак", lesson: "9A",
        activation: "Cover the words and look at the photos. Test yourself or a partner.",
        words: [
          ["breakfast", "ˈbrekfəst", "завтрак", "🍳"],
          ["bread", "bred", "хлеб", "🍞"],
          ["butter", "ˈbʌtə", "сливочное масло", "🧈"],
          ["cereal", "ˈsɪəriəl", "хлопья (сухой завтрак)", "🥣"],
          ["cheese", "tʃiːz", "сыр", "🧀"],
          ["coffee", "ˈkɒfi", "кофе", "☕"],
          ["eggs", "egz", "яйца", "🥚"],
          ["jam", "dʒæm", "джем, варенье", "🫙"],
          ["(orange) juice", "dʒuːs", "(апельсиновый) сок", "🧃"],
          ["milk", "mɪlk", "молоко", "🥛"],
          ["sugar", "ˈʃʊgə", "сахар"],
          ["tea", "tiː", "чай", "🍵"],
          ["toast", "təʊst", "тост, поджаренный хлеб"]
        ]
      },
      {
        id: "lunch-dinner", title: "Lunch or dinner", ru: "Обед или ужин", lesson: "9A",
        words: [
          ["lunch", "lʌntʃ", "обед"],
          ["dinner", "ˈdɪnə", "ужин"],
          ["fish", "fɪʃ", "рыба", "🐟", "e.g. salmon, tuna"],
          ["salmon", "ˈsæmən", "лосось"],
          ["tuna", "ˈtjuːnə", "тунец"],
          ["herbs", "hɜːbz", "травы, зелень", "🌿"],
          ["meat", "miːt", "мясо", "🥩", "e.g. chicken, sausages, steak, ham"],
          ["chicken", "ˈtʃɪkɪn", "курица", "🍗"],
          ["sausages", "ˈsɒsɪdʒɪz", "сосиски, колбаски", "🌭"],
          ["steak", "steɪk", "стейк", "🥩"],
          ["ham", "hæm", "ветчина"],
          ["(olive) oil", "ɔɪl", "(оливковое) масло", "🫒"],
          ["pasta", "ˈpæstə", "паста, макароны", "🍝"],
          ["rice", "raɪs", "рис", "🍚"],
          ["salad", "ˈsæləd", "салат", "🥗"],
          ["seafood", "ˈsiːfuːd", "морепродукты", "🦐"],
          ["spices", "ˈspaɪsɪz", "специи", "🌶️"]
        ]
      },
      {
        id: "vegetables", title: "Vegetables", ru: "Овощи", lesson: "9A",
        words: [
          ["vegetables", "ˈvedʒtəblz", "овощи", "🥦"],
          ["carrots", "ˈkærəts", "морковь", "🥕"],
          ["chips", "tʃɪps", "картофель фри", "🍟", "or French fries"],
          ["a lettuce", "ˈletɪs", "салат-латук", "🥬"],
          ["mushrooms", "ˈmʌʃrʊmz", "грибы", "🍄"],
          ["onions", "ˈʌnjənz", "лук", "🧅"],
          ["peas", "piːz", "горошек", "🫛"],
          ["peppers", "ˈpepəz", "перцы", "🫑"],
          ["potatoes", "pəˈteɪtəʊz", "картофель", "🥔"],
          ["tomatoes", "təˈmɑːtəʊz", "помидоры", "🍅"]
        ]
      },
      {
        id: "fruit", title: "Fruit", ru: "Фрукты", lesson: "9A",
        words: [
          ["fruit", "fruːt", "фрукты"],
          ["apples", "ˈæplz", "яблоки", "🍎"],
          ["bananas", "bəˈnɑːnəz", "бананы", "🍌"],
          ["oranges", "ˈɒrɪndʒɪz", "апельсины", "🍊"],
          ["a pineapple", "ˈpaɪnæpl", "ананас", "🍍"],
          ["strawberries", "ˈstrɔːbəriz", "клубника", "🍓"]
        ]
      },
      {
        id: "desserts", title: "Desserts", ru: "Десерты", lesson: "9A",
        words: [
          ["desserts", "dɪˈzɜːts", "десерты"],
          ["cake", "keɪk", "торт, пирожное", "🍰"],
          ["fruit salad", "ˌfruːt ˈsæləd", "фруктовый салат"],
          ["ice cream", "ˌaɪs ˈkriːm", "мороженое", "🍨"]
        ]
      },
      {
        id: "snacks", title: "Snacks", ru: "Перекусы", lesson: "9A",
        words: [
          ["snacks", "snæks", "перекусы, закуски"],
          ["biscuits", "ˈbɪskɪts", "печенье", "🍪"],
          ["chocolate", "ˈtʃɒklət", "шоколад", "🍫"],
          ["crisps", "krɪsps", "чипсы"],
          ["nuts", "nʌts", "орехи", "🥜"],
          ["a sandwich", "ˈsænwɪdʒ", "бутерброд, сэндвич", "🥪"],
          ["sweets", "swiːts", "конфеты", "🍬"]
        ]
      }
    ]
  },

  {
    id: "places", page: 164, icon: "🏛️",
    title: "Places and buildings", ru: "Места и здания",
    groups: [
      {
        id: "town", title: "Shops and services", ru: "Магазины и учреждения", lesson: "10A",
        activation: "Ask and answer about places with a partner. Is there a ... near where you live / near this school?",
        words: [
          ["a chemist's", "ˈkemɪsts", "аптека", "💊", "or pharmacy /ˈfɑːməsi/"],
          ["a church", "tʃɜːtʃ", "церковь", "⛪"],
          ["a department store", "dɪˈpɑːtmənt stɔː", "универмаг", "🏬"],
          ["a hospital", "ˈhɒspɪtl", "больница", "🏥"],
          ["a market", "ˈmɑːkɪt", "рынок"],
          ["a park", "pɑːk", "парк", "🌳"],
          ["a police station", "pəˈliːs ˌsteɪʃn", "полицейский участок", "🚓"],
          ["a post office", "ˈpəʊst ˌɒfɪs", "почта", "🏤"],
          ["a shopping centre", "ˈʃɒpɪŋ ˌsentə", "торговый центр", "🛍️"],
          ["a supermarket", "ˈsuːpəmɑːkɪt", "супермаркет", "🛒"],
          ["a town hall", "ˌtaʊn ˈhɔːl", "ратуша, мэрия"]
        ]
      },
      {
        id: "sightseeing", title: "Culture and sightseeing", ru: "Культура и достопримечательности", lesson: "10A",
        words: [
          ["an art gallery", "ˈɑːt ˌgæləri", "художественная галерея", "🖼️"],
          ["a castle", "ˈkɑːsl", "замок", "🏰"],
          ["a museum", "mjuˈziːəm", "музей", "🏛️"],
          ["a theatre", "ˈθɪətə", "театр", "🎭"],
          ["a zoo", "zuː", "зоопарк", "🦁"]
        ]
      },
      {
        id: "streets", title: "Streets and the river", ru: "Улицы и река", lesson: "10A",
        words: [
          ["a bridge", "brɪdʒ", "мост", "🌉"],
          ["a river", "ˈrɪvə", "река"],
          ["a road", "rəʊd", "дорога", "🛣️"],
          ["a square", "skweə", "площадь"],
          ["a street", "striːt", "улица"]
        ]
      },
      {
        id: "transport", title: "Transport", ru: "Транспорт", lesson: "10A",
        words: [
          ["a bus station", "ˈbʌs ˌsteɪʃn", "автовокзал", "🚌"],
          ["a car park", "ˈkɑː pɑːk", "автостоянка, парковка", "🅿️"],
          ["a railway station", "ˈreɪlweɪ ˌsteɪʃn", "железнодорожный вокзал", "🚉"]
        ]
      },
      {
        id: "worship", title: "Other places of worship", ru: "Религиозные здания", lesson: "10A",
        words: [
          ["a cathedral", "kəˈθiːdrəl", "собор"],
          ["a mosque", "mɒsk", "мечеть", "🕌"],
          ["a synagogue", "ˈsɪnəgɒg", "синагога", "🕍"],
          ["a temple", "ˈtempl", "храм", "🛕"]
        ]
      }
    ]
  },

  {
    id: "irregular-verbs", page: 165, icon: "🔁", bonus: true,
    title: "Irregular verbs", ru: "Неправильные глаголы",
    groups: [
      {
        id: "a-d", title: "be — drive", ru: "be — drive",
        words: [
          ["be – was / were – been", "biː – wɒz / wɜː – biːn", "быть"],
          ["become – became – become", "bɪˈkʌm – bɪˈkeɪm – bɪˈkʌm", "становиться"],
          ["begin – began – begun", "bɪˈgɪn – bɪˈgæn – bɪˈgʌn", "начинать"],
          ["break – broke – broken", "breɪk – brəʊk – ˈbrəʊkən", "ломать, разбивать"],
          ["bring – brought – brought", "brɪŋ – brɔːt – brɔːt", "приносить"],
          ["build – built – built", "bɪld – bɪlt – bɪlt", "строить"],
          ["buy – bought – bought", "baɪ – bɔːt – bɔːt", "покупать"],
          ["can – could", "kæn – kʊd", "мочь, уметь"],
          ["catch – caught – caught", "kætʃ – kɔːt – kɔːt", "ловить; успеть (на транспорт)"],
          ["come – came – come", "kʌm – keɪm – kʌm", "приходить, приезжать"],
          ["cost – cost – cost", "kɒst – kɒst – kɒst", "стоить"],
          ["do – did – done", "duː – dɪd – dʌn", "делать"],
          ["drink – drank – drunk", "drɪŋk – dræŋk – drʌŋk", "пить"],
          ["drive – drove – driven", "draɪv – drəʊv – ˈdrɪvn", "водить (машину)"]
        ]
      },
      {
        id: "e-k", title: "eat — know", ru: "eat — know",
        words: [
          ["eat – ate – eaten", "iːt – eɪt – ˈiːtn", "есть"],
          ["fall – fell – fallen", "fɔːl – fel – ˈfɔːlən", "падать"],
          ["feel – felt – felt", "fiːl – felt – felt", "чувствовать"],
          ["find – found – found", "faɪnd – faʊnd – faʊnd", "находить"],
          ["fly – flew – flown", "flaɪ – fluː – fləʊn", "летать"],
          ["forget – forgot – forgotten", "fəˈget – fəˈgɒt – fəˈgɒtn", "забывать"],
          ["get – got – got", "get – gɒt – gɒt", "получать, добираться"],
          ["give – gave – given", "gɪv – geɪv – ˈgɪvn", "давать, дарить"],
          ["go – went – gone", "gəʊ – went – gɒn", "идти, ехать", "", "past participle also: been"],
          ["have – had – had", "hæv – hæd – hæd", "иметь"],
          ["hear – heard – heard", "hɪə – hɜːd – hɜːd", "слышать"],
          ["know – knew – known", "nəʊ – njuː – nəʊn", "знать"]
        ]
      },
      {
        id: "l-s", title: "leave — sleep", ru: "leave — sleep",
        words: [
          ["leave – left – left", "liːv – left – left", "уходить, уезжать; оставлять"],
          ["lose – lost – lost", "luːz – lɒst – lɒst", "терять"],
          ["make – made – made", "meɪk – meɪd – meɪd", "делать, создавать"],
          ["meet – met – met", "miːt – met – met", "встречать(ся)"],
          ["pay – paid – paid", "peɪ – peɪd – peɪd", "платить"],
          ["put – put – put", "pʊt – pʊt – pʊt", "класть, ставить"],
          ["read – read – read", "riːd – red – red", "читать"],
          ["run – ran – run", "rʌn – ræn – rʌn", "бегать"],
          ["say – said – said", "seɪ – sed – sed", "сказать"],
          ["see – saw – seen", "siː – sɔː – siːn", "видеть"],
          ["send – sent – sent", "send – sent – sent", "отправлять"],
          ["sing – sang – sung", "sɪŋ – sæŋ – sʌŋ", "петь"],
          ["sit – sat – sat", "sɪt – sæt – sæt", "сидеть"],
          ["sleep – slept – slept", "sliːp – slept – slept", "спать"]
        ]
      },
      {
        id: "s-w", title: "speak — write", ru: "speak — write",
        words: [
          ["speak – spoke – spoken", "spiːk – spəʊk – ˈspəʊkən", "говорить"],
          ["spend – spent – spent", "spend – spent – spent", "тратить; проводить (время)"],
          ["stand – stood – stood", "stænd – stʊd – stʊd", "стоять"],
          ["swim – swam – swum", "swɪm – swæm – swʌm", "плавать"],
          ["take – took – taken", "teɪk – tʊk – ˈteɪkən", "брать"],
          ["teach – taught – taught", "tiːtʃ – tɔːt – tɔːt", "учить, преподавать"],
          ["tell – told – told", "tel – təʊld – təʊld", "рассказывать, говорить"],
          ["think – thought – thought", "θɪŋk – θɔːt – θɔːt", "думать"],
          ["understand – understood – understood", "ˌʌndəˈstænd – ˌʌndəˈstʊd – ˌʌndəˈstʊd", "понимать"],
          ["wake – woke – woken", "weɪk – wəʊk – ˈwəʊkən", "просыпаться; будить"],
          ["wear – wore – worn", "weə – wɔː – wɔːn", "носить (одежду)"],
          ["win – won – won", "wɪn – wʌn – wʌn", "выигрывать, побеждать"],
          ["write – wrote – written", "raɪt – rəʊt – ˈrɪtn", "писать"]
        ]
      }
    ]
  },

  // ---------- Слова из уроков: блоки VOCABULARY, которых нет в Vocabulary Bank ----------
  // source: "lesson" — раздел собран из уроков одного File учебника; page — страницы уроков.
  // Слова, которые уже есть в Vocabulary Bank (a wall, opposite, a bridge…), здесь не повторяются.

  {
    id: "file-1", source: "lesson", file: 1, page: "10, 12", icon: "🏨",
    title: "Classroom and hotel", ru: "Класс и отель",
    groups: [
      {
        id: "classroom-things", title: "Things in the classroom", ru: "Предметы в классе", lesson: "1C", page: 10,
        activation: "With a partner, ask about things in your classroom. What's this? — It's a chair. What's that? — It's a window.",
        words: [
          ["a board", "bɔːd", "доска"],
          ["a chair", "tʃeə", "стул", "🪑"],
          ["a computer", "kəmˈpjuːtə", "компьютер", "🖥️"],
          ["a desk", "desk", "письменный стол, парта"],
          ["a door", "dɔː", "дверь", "🚪"],
          ["a picture", "ˈpɪktʃə", "картина, картинка", "🖼️"],
          ["a table", "ˈteɪbl", "стол"],
          ["a window", "ˈwɪndəʊ", "окно", "🪟"]
        ]
      },
      {
        id: "hotel", title: "In a hotel", ru: "В отеле", lesson: "Practical English 1", page: 12,
        activation: "Cover the words and look at the symbols. Say the words.",
        tips: [
          { title: "Floors", text: "В Британии the ground floor — этаж на уровне земли (наш первый), the first floor — наш второй этаж." }
        ],
        words: [
          ["reception", "rɪˈsepʃn", "стойка регистрации, ресепшен", "🛎️"],
          ["the lift", "lɪft", "лифт", "🛗"],
          ["a single room", "ˌsɪŋgl ˈruːm", "одноместный номер", "🛏️"],
          ["a double room", "ˌdʌbl ˈruːm", "двухместный номер (с одной большой кроватью)"],
          ["the bar", "bɑː", "бар", "🍸"],
          ["the ground floor", "ˌgraʊnd ˈflɔː", "первый этаж (на уровне земли)", "", "the first, second, etc. floor"]
        ]
      }
    ]
  },

  {
    id: "file-2", source: "lesson", file: 2, page: "16, 18", icon: "🎨",
    title: "Colours and feelings", ru: "Цвета и чувства",
    groups: [
      {
        id: "colours", title: "Colours", ru: "Цвета", lesson: "2B", page: 16,
        activation: "With a partner, practise colours with things in the classroom or in your bag. What colour is my purse? — It's red.",
        tips: [
          { title: "Colours are adjectives", text: "Цвета, как и другие прилагательные, стоят перед существительным и не меняются во множественном числе: yellow taxis, NOT yellows taxis." }
        ],
        words: [
          ["What colour is it?", "", "Какого это цвета?", "🎨"],
          ["red", "red", "красный", "🔴"],
          ["white", "waɪt", "белый", "⚪"],
          ["blue", "bluː", "синий, голубой", "🔵"],
          ["black", "blæk", "чёрный", "⚫"],
          ["yellow", "ˈjeləʊ", "жёлтый", "🟡"],
          ["grey", "greɪ", "серый"],
          ["orange", "ˈɒrɪndʒ", "оранжевый", "🟠"],
          ["brown", "braʊn", "коричневый", "🟤"],
          ["pink", "pɪŋk", "розовый", "🩷"],
          ["green", "griːn", "зелёный", "🟢"],
          ["purple", "ˈpɜːpl", "фиолетовый", "🟣"],
          ["silver", "ˈsɪlvə", "серебристый", "🥈"],
          ["gold", "gəʊld", "золотой", "🥇"]
        ]
      },
      {
        id: "feelings", title: "Feelings", ru: "Чувства и состояния", lesson: "2C", page: 18,
        activation: "How do you feel? Make true sentences and tell your partner. I'm quite hungry. I'm very tired.",
        tips: [
          { title: "Collocation", text: "С этими словами используется be: I'm hungry. NOT I have hungry. «Мне холодно» по-английски — I'm cold." }
        ],
        words: [
          ["angry", "ˈæŋgri", "сердитый, злой", "😠"],
          ["bored", "bɔːd", "скучающий (мне скучно)", "🥱"],
          ["cold", "kəʊld", "замёрзший (мне холодно)", "🥶", "I'm cold."],
          ["frightened", "ˈfraɪtnd", "испуганный (мне страшно)", "😨"],
          ["happy", "ˈhæpi", "счастливый, довольный", "😊"],
          ["hot", "hɒt", "(мне) жарко", "🥵", "I'm hot."],
          ["hungry", "ˈhʌŋgri", "голодный", "😋"],
          ["sad", "sæd", "грустный", "😢"],
          ["stressed", "strest", "в стрессе, напряжённый", "😫"],
          ["thirsty", "ˈθɜːsti", "испытывающий жажду (хочу пить)", "🥤"],
          ["tired", "ˈtaɪəd", "усталый", "😴"],
          ["worried", "ˈwʌrid", "обеспокоенный, встревоженный", "😟"],
          ["What's the matter?", "", "Что случилось? / В чём дело?"]
        ]
      }
    ]
  },

  {
    id: "file-3", source: "lesson", file: 3, page: "27", icon: "❓",
    title: "Question words", ru: "Вопросительные слова",
    groups: [
      {
        id: "question-words", title: "Question words", ru: "Вопросительные слова", lesson: "3C", page: 27,
        activation: "Ask and answer the questions with a partner.",
        tips: [
          { title: "What or Which?", text: "Which — выбор из нескольких известных вариантов: Which do you prefer, cats or dogs? What — когда выбор не ограничен. Wh- в Who читается /h/, в остальных словах — /w/." }
        ],
        words: [
          ["What", "wɒt", "что; какой", "", "What phone do you have?"],
          ["What kind of", "ˌwɒt ˈkaɪnd əv", "какого рода, какой (тип)", "", "What kind of music do you like?"],
          ["Which", "wɪtʃ", "который, какой (из)", "", "Which do you prefer, cats or dogs?"],
          ["Who", "huː", "кто", "", "Who's your favourite actor?"],
          ["Where", "weə", "где, куда", "", "Where do you work?"],
          ["When", "wen", "когда", "", "When do you have language classes?"],
          ["Why", "waɪ", "почему", "", "Why do you like him?"],
          ["Because", "bɪˈkɒz", "потому что", "", "Because he's a fantastic actor."],
          ["How many", "ˌhaʊ ˈmeni", "сколько (для исчисляемых)", "", "How many brothers and sisters do you have?"]
        ]
      }
    ]
  },

  {
    id: "file-4", source: "lesson", file: 4, page: "34", icon: "🗓️",
    title: "Months", ru: "Месяцы",
    groups: [
      {
        id: "months", title: "Months", ru: "Месяцы", lesson: "4C", page: 34,
        activation: "Say the month of your birthday round the class.",
        tips: [
          { title: "Months", text: "Месяцы пишутся с заглавной буквы. В пяти месяцах ударение на второй слог: July, September, October, November, December. С месяцами — предлог in: in May." }
        ],
        words: [
          ["January", "ˈdʒænjuəri", "январь", "❄️"],
          ["February", "ˈfebruəri", "февраль"],
          ["March", "mɑːtʃ", "март"],
          ["April", "ˈeɪprəl", "апрель"],
          ["May", "meɪ", "май", "🌸"],
          ["June", "dʒuːn", "июнь"],
          ["July", "dʒuˈlaɪ", "июль", "☀️"],
          ["August", "ˈɔːgəst", "август"],
          ["September", "sepˈtembə", "сентябрь", "🍁"],
          ["October", "ɒkˈtəʊbə", "октябрь"],
          ["November", "nəʊˈvembə", "ноябрь"],
          ["December", "dɪˈsembə", "декабрь", "🎄"]
        ]
      }
    ]
  },

  {
    id: "file-5", source: "lesson", file: 5, page: "40, 44", icon: "🔊",
    title: "Noise and clothes", ru: "Шум и одежда",
    groups: [
      {
        id: "noise", title: "Noise: verbs and verb phrases", ru: "Шум: глаголы и словосочетания", lesson: "5B", page: 40,
        activation: "What noises do your family or neighbours make? Are you noisy? Are people in your country noisy?",
        words: [
          ["noisy", "ˈnɔɪzi", "шумный", "🔊"],
          ["a neighbour", "ˈneɪbə", "сосед, соседка", "🏘️"],
          ["next door", "ˌnekst ˈdɔː", "по соседству, в соседней квартире", "", "the people next door"],
          ["cry", "kraɪ", "плакать", "😭", "The baby cries all the time."],
          ["practise the piano", "", "заниматься на пианино", "🎹"],
          ["bark", "bɑːk", "лаять", "🐕", "The dog barks all day."],
          ["have noisy parties", "", "устраивать шумные вечеринки", "🎉"],
          ["play loud music", "", "громко включать музыку", "🎶"],
          ["argue", "ˈɑːgjuː", "ссориться, спорить", "🗯️", "The couple next door argue a lot."],
          ["have the TV on very loud", "", "очень громко включать телевизор", "📺"],
          ["make a lot of noise", "", "сильно шуметь", "🔨", "The builders make a lot of noise."]
        ]
      },
      {
        id: "clothes", title: "Clothes", ru: "Одежда", lesson: "Practical English 3", page: 44,
        activation: "Cover the words and look at the photos. Say the words.",
        tips: [
          { title: "Sizes and prices", text: "S = small, M = medium, L = large, XL = extra large. £5.50 = five pounds fifty, 50p = fifty pence." }
        ],
        words: [
          ["a jacket", "ˈdʒækɪt", "куртка, пиджак", "🧥"],
          ["jeans", "dʒiːnz", "джинсы", "👖", "always plural"],
          ["a shirt", "ʃɜːt", "рубашка", "👔"],
          ["a T-shirt", "ˈtiː ʃɜːt", "футболка", "👕"],
          ["a skirt", "skɜːt", "юбка"],
          ["shoes", "ʃuːz", "туфли, обувь", "👞"],
          ["a sweater", "ˈswetə", "свитер", "🧶"],
          ["trousers", "ˈtraʊzəz", "брюки", "", "always plural"],
          ["medium", "ˈmiːdiəm", "средний (размер)", "", "M"],
          ["large", "lɑːdʒ", "большой (размер)", "", "L"],
          ["try something on", "", "примерить что-то", "🪞", "Can I try it on?"]
        ]
      }
    ]
  },

  {
    id: "file-6", source: "lesson", file: 6, page: "47, 50", icon: "🎸",
    title: "Stories and music", ru: "Слова из рассказа и музыка",
    groups: [
      {
        id: "story-words", title: "Words in a story", ru: "Слова из рассказа", lesson: "6A", page: 47,
        activation: "Put the words in the correct column: adjectives, verbs, nouns, prepositions.",
        tips: [
          { title: "desert or dessert?", text: "a desert /ˈdezət/ — пустыня, a dessert /dɪˈzɜːt/ — десерт. Into и through из этого упражнения есть в разделе Prepositions." }
        ],
        words: [
          ["arrive", "əˈraɪv", "прибывать, приезжать", "", "verb"],
          ["decide", "dɪˈsaɪd", "решать", "", "verb"],
          ["leave", "liːv", "уезжать, уходить", "", "verb"],
          ["sell", "sel", "продавать", "💰", "verb"],
          ["comfortable", "ˈkʌmftəbl", "удобный", "🛋️", "adjective"],
          ["strange", "streɪndʒ", "странный", "", "adjective"],
          ["surprised", "səˈpraɪzd", "удивлённый", "😮", "adjective"],
          ["valuable", "ˈvæljuəbl", "ценный", "💎", "adjective"],
          ["a desert", "ˈdezət", "пустыня", "🏜️", "noun"],
          ["a mountain", "ˈmaʊntən", "гора", "⛰️", "noun"],
          ["a palace", "ˈpæləs", "дворец", "👑", "noun"],
          ["a village", "ˈvɪlɪdʒ", "деревня", "🏡", "noun"],
          ["inside", "ˌɪnˈsaɪd", "внутри, внутрь", "", "preposition"],
          ["towards", "təˈwɔːdz", "по направлению к", "", "preposition"]
        ]
      },
      {
        id: "instruments", title: "Musical instruments", ru: "Музыкальные инструменты", lesson: "6C", page: 50,
        activation: "Do you play a musical instrument? How good are you?",
        tips: [
          { title: "play the …", text: "С инструментами говорят play the: play the piano, play the drums." }
        ],
        words: [
          ["accordion", "əˈkɔːdiən", "аккордеон", "🪗"],
          ["bass", "beɪs", "бас-гитара", "🎸"],
          ["drums", "drʌmz", "барабаны, ударная установка", "🥁"],
          ["guitar", "gɪˈtɑː", "гитара", "🎸"],
          ["keyboard", "ˈkiːbɔːd", "клавишные, синтезатор", "🎹"],
          ["piano", "piˈænəʊ", "фортепиано, пианино", "🎹"],
          ["saxophone", "ˈsæksəfəʊn", "саксофон", "🎷"],
          ["trumpet", "ˈtrʌmpɪt", "труба", "🎺"],
          ["violin", "ˌvaɪəˈlɪn", "скрипка", "🎻"]
        ]
      },
      {
        id: "musicians", title: "Musicians", ru: "Музыканты", lesson: "6C", page: 50,
        tips: [
          { title: "Stress", text: "У некоторых слов ударение смещается: piANo → PIanist, SAXophone → saxOPHonist." }
        ],
        words: [
          ["accordionist", "əˈkɔːdiənɪst", "аккордеонист"],
          ["bass player", "ˈbeɪs ˌpleɪə", "бас-гитарист"],
          ["drummer", "ˈdrʌmə", "барабанщик", "🥁"],
          ["guitarist", "gɪˈtɑːrɪst", "гитарист", "🎸"],
          ["keyboard player", "ˈkiːbɔːd ˌpleɪə", "клавишник"],
          ["pianist", "ˈpiːənɪst", "пианист", "🎹"],
          ["saxophonist", "sækˈsɒfənɪst", "саксофонист", "🎷"],
          ["trumpet player", "ˈtrʌmpɪt ˌpleɪə", "трубач", "🎺", "or trumpeter"],
          ["violinist", "ˌvaɪəˈlɪnɪst", "скрипач", "🎻"]
        ]
      }
    ]
  },

  {
    id: "file-7", source: "lesson", file: 7, page: "55, 57, 60", icon: "🧭",
    title: "Professions, past time, directions", ru: "Профессии, прошлое время и дорога",
    groups: [
      {
        id: "word-formation", title: "Word formation", ru: "Образование слов: профессии", lesson: "7A", page: 55,
        activation: "Write the names of famous people. Who's Sia? — She's an Australian singer. Who was Charles Darwin? — He was a British scientist.",
        tips: [
          { title: "Word building: professions", text: "К глаголу часто добавляют -er или -or: write → writer, act → actor. К существительному — -ian или -ist: music → musician, piano → pianist." }
        ],
        words: [
          ["writer", "ˈraɪtə", "писатель", "✍️", "write → writer"],
          ["singer", "ˈsɪŋə", "певец, певица", "🎤", "sing → singer"],
          ["painter", "ˈpeɪntə", "художник (живописец)", "🎨", "paint → painter"],
          ["composer", "kəmˈpəʊzə", "композитор", "🎼", "compose → composer"],
          ["dancer", "ˈdɑːnsə", "танцор, танцовщица", "💃", "dance → dancer"],
          ["director", "dəˈrektə", "режиссёр", "🎬", "direct → director"],
          ["inventor", "ɪnˈventə", "изобретатель", "💡", "invent → inventor"],
          ["artist", "ˈɑːtɪst", "художник", "🖼️", "art → artist"],
          ["novelist", "ˈnɒvəlɪst", "писатель-романист", "📚", "novel → novelist"],
          ["politician", "ˌpɒləˈtɪʃn", "политик", "🏛️", "politics → politician"],
          ["scientist", "ˈsaɪəntɪst", "учёный", "🔬", "science → scientist"]
        ]
      },
      {
        id: "past-time", title: "Past time expressions", ru: "Выражения прошедшего времени", lesson: "7B", page: 57,
        activation: "When was the last time...? I travelled by bus this morning. — Where to?",
        tips: [
          { title: "Past time expressions", text: "Говорим last week, last month — без the: NOT the last week. Ago ставится после промежутка времени: three days ago, a year ago." }
        ],
        words: [
          ["five minutes ago", "", "пять минут назад", "⏱️"],
          ["yesterday", "ˈjestədeɪ", "вчера"],
          ["yesterday morning", "", "вчера утром"],
          ["last night", "", "вчера вечером, прошлой ночью", "🌙"],
          ["the day before yesterday", "", "позавчера"],
          ["three days ago", "", "три дня назад"],
          ["last week", "", "на прошлой неделе"],
          ["last month", "", "в прошлом месяце"],
          ["last summer", "", "прошлым летом", "☀️"],
          ["a year ago", "", "год назад"],
          ["in 2017", "", "в 2017 году"]
        ]
      },
      {
        id: "directions", title: "Directions", ru: "Как пройти", lesson: "Practical English 4", page: 60,
        activation: "Cover the phrases and look at the pictures. Say the phrases.",
        words: [
          ["turn left", "ˌtɜːn ˈleft", "поверните налево", "⬅️"],
          ["turn right", "ˌtɜːn ˈraɪt", "поверните направо", "➡️"],
          ["go straight on", "ˌgəʊ ˈstreɪt ɒn", "идите прямо", "⬆️"],
          ["go past the church", "", "пройдите мимо церкви", "⛪"],
          ["at the traffic lights", "ˈtræfɪk laɪts", "на светофоре", "🚦"],
          ["on the corner", "ˈkɔːnə", "на углу"],
          ["at the end of the street", "", "в конце улицы"]
        ]
      }
    ]
  },

  {
    id: "file-9", source: "lesson", file: 9, page: "72, 76", icon: "🥫",
    title: "Food containers and menus", ru: "Упаковки и меню",
    groups: [
      {
        id: "containers", title: "Food containers", ru: "Упаковки для продуктов", lesson: "9B", page: 72,
        activation: "Make phrases with the containers and these words: biscuits, cereal, Coke, crisps, jam, milk, salt, sugar, tuna.",
        words: [
          ["a bottle", "ˈbɒtl", "бутылка", "🍾", "a bottle of water"],
          ["a box", "bɒks", "коробка", "📦", "a box of cereal"],
          ["a can", "kæn", "банка (жестяная, для напитков)", "🥤", "a can of Coke"],
          ["a carton", "ˈkɑːtn", "пакет (картонный)", "🧃", "a carton of milk"],
          ["a jar", "dʒɑː", "банка (стеклянная)", "🫙", "a jar of jam"],
          ["a packet", "ˈpækɪt", "пачка, упаковка", "", "a packet of biscuits / crisps"],
          ["a tin", "tɪn", "консервная банка", "🥫", "a tin of tuna"]
        ]
      },
      {
        id: "menu", title: "Understanding a menu", ru: "Как читать меню", lesson: "Practical English 5", page: 76,
        activation: "Cover the menu. In pairs, try to remember what's on it.",
        words: [
          ["a menu", "ˈmenjuː", "меню", "📋"],
          ["a course", "kɔːs", "блюдо (часть обеда)", "", "2 courses £15.00"],
          ["a starter", "ˈstɑːtə", "закуска (первое блюдо)", "🥗"],
          ["a main course", "ˌmeɪn ˈkɔːs", "основное блюдо", "🍽️"],
          ["soup", "suːp", "суп", "🍲", "onion soup"],
          ["grilled", "grɪld", "приготовленный на гриле", "", "grilled chicken breast"],
          ["home-made", "ˌhəʊm ˈmeɪd", "домашний, домашнего приготовления", "", "home-made ice cream"],
          ["sauce", "sɔːs", "соус", "", "hot chocolate sauce"],
          ["fresh", "freʃ", "свежий", "", "fresh fruit salad"],
          ["vegetarian", "ˌvedʒəˈteəriən", "вегетарианский", "🥕"],
          ["gluten-free", "ˌgluːtn ˈfriː", "без глютена"]
        ]
      }
    ]
  },

  {
    id: "file-10", source: "lesson", file: 10, page: "81, 82", icon: "🔮",
    title: "Holidays and the future", ru: "Путешествия и будущее",
    groups: [
      {
        id: "city-holidays", title: "City holidays", ru: "Поездка по городам", lesson: "10B", page: 81,
        activation: "With your partner, plan a dream trip. You are going to visit three cities in the same continent.",
        tips: [
          { title: "Making suggestions", text: "Let's go to... / Why don't we go to...? — That's a good idea." }
        ],
        words: [
          ["book a flight", "", "забронировать авиабилет", "✈️", "or a train, accommodation"],
          ["go by train", "", "ехать на поезде", "🚆", "or by bus, by plane"],
          ["rent a car", "", "арендовать машину", "🚗", "or a flat"],
          ["stay in a hotel", "", "остановиться в отеле", "🏨", "or a hostel"],
          ["eat out", "", "есть в ресторанах (не дома)", "🍝", "in local restaurants"],
          ["visit museums", "", "посещать музеи", "🏛️", "and art galleries"],
          ["buy souvenirs", "ˈsuːvənɪəz", "покупать сувениры", "🎁"],
          ["meet new people", "", "знакомиться с новыми людьми", "🤝"],
          ["Why don't we...?", "", "Может, нам...? (предложение)"],
          ["That's a good idea.", "", "Хорошая идея.", "👍"]
        ]
      },
      {
        id: "fortune", title: "Verb phrases", ru: "Что ждёт в будущем", lesson: "10C", page: 82,
        activation: "What pictures can you see on the fortune teller's cards? Match the cards and verb phrases.",
        words: [
          ["a fortune teller", "ˈfɔːtʃuːn ˌtelə", "гадалка", "🔮"],
          ["be lucky", "", "везти, быть удачливым", "🍀"],
          ["have a surprise", "", "получить сюрприз", "❗"],
          ["fall in love", "", "влюбиться", "❤️"],
          ["get married", "", "пожениться, выйти замуж / жениться", "💍"],
          ["become famous", "", "стать знаменитым", "⭐"],
          ["travel", "ˈtrævl", "путешествовать", "🧳"],
          ["meet somebody new", "", "познакомиться с кем-то новым"],
          ["get a new job", "", "найти новую работу", "💼"],
          ["get a lot of money", "", "получить много денег", "💰"],
          ["move house", "", "переехать (в другой дом)", "📦"]
        ]
      }
    ]
  },

  {
    id: "file-11", source: "lesson", file: 11, page: "87, 89, 90, 92", icon: "📱",
    title: "Adverbs, the internet, transport", ru: "Наречия, интернет, транспорт",
    groups: [
      {
        id: "adverbs", title: "Common adverbs", ru: "Наречия образа действия", lesson: "11A", page: 87,
        activation: "Do you think people in your country drive dangerously? How about you?",
        tips: [
          { title: "Adverbs", text: "Обычно наречие = прилагательное + -ly: dangerous → dangerously, polite → politely. Исключения: good → well, hard → hard, fast → fast." }
        ],
        words: [
          ["drive dangerously", "", "водить опасно", "🚗"],
          ["drive slowly and carefully", "", "ездить медленно и осторожно", "🐢"],
          ["speak foreign languages fluently", "", "свободно говорить на иностранных языках", "🗣️"],
          ["treat tourists well", "", "хорошо относиться к туристам"],
          ["talk loudly", "", "громко разговаривать", "📢"],
          ["work hard", "", "усердно работать", "💪"],
          ["take life seriously", "", "серьёзно относиться к жизни"],
          ["treat people politely", "", "вежливо обращаться с людьми", "", "in shops and restaurants"],
          ["dress well", "", "хорошо одеваться", "👔"],
          ["wait patiently in queues", "", "терпеливо стоять в очередях"],
          ["behave calmly in a crisis", "", "вести себя спокойно в трудной ситуации", "🧘"]
        ]
      },
      {
        id: "verb-infinitive", title: "Verbs that take the infinitive", ru: "Глаголы + to + инфинитив", lesson: "11B", page: 89,
        tips: [
          { title: "verb + to + infinitive", text: "После этих глаголов ставится to + инфинитив: I decided to save some money. NOT I decided save." }
        ],
        words: [
          ["decide to (do)", "", "решить (сделать)", "", "I decided to save some money."],
          ["forget to (do)", "", "забыть (сделать)"],
          ["hope to (do)", "", "надеяться (сделать)", "🤞"],
          ["learn to (do)", "", "научиться (делать)", "", "learn to play the guitar"],
          ["need to (do)", "", "нужно (сделать)"],
          ["plan to (do)", "", "планировать (сделать)"],
          ["promise to (do)", "", "обещать (сделать)"],
          ["remember to (do)", "", "не забыть (сделать)"],
          ["try to (do)", "", "пытаться (сделать)"],
          ["want to (do)", "", "хотеть (сделать)", "", "I want to go to Australia."]
        ]
      },
      {
        id: "internet", title: "Phones and the internet", ru: "Телефон и интернет", lesson: "11C", page: 90,
        activation: "Which activities can you do when you aren't online?",
        words: [
          ["share a photo", "", "поделиться фото", "🖼️", "on a social media website"],
          ["download an app", "", "скачать приложение", "⬇️"],
          ["Skype a friend", "", "позвонить другу по Skype"],
          ["upload a video", "", "загрузить видео (в сеть)", "⬆️"],
          ["message a friend", "", "написать другу (в мессенджере)", "💬"],
          ["post a tweet", "", "опубликовать твит", "🐦"],
          ["send an email", "", "отправить электронное письмо", "📧"],
          ["get directions", "", "проложить маршрут", "🗺️"],
          ["get fitter", "", "прийти в лучшую форму", "🏃"],
          ["listen to a song", "", "послушать песню", "🎧"],
          ["wi-fi", "ˈwaɪ faɪ", "вай-фай", "📶"],
          ["an attachment", "əˈtætʃmənt", "вложение (файл в письме)", "📎"],
          ["log in", "ˌlɒg ˈɪn", "войти (в аккаунт)", "🔑"],
          ["search", "sɜːtʃ", "искать; поиск", "🔍"],
          ["broadband", "ˈbrɔːdbænd", "широкополосный интернет"]
        ]
      },
      {
        id: "transport", title: "Public transport", ru: "Общественный транспорт", lesson: "Practical English 6", page: 92,
        activation: "Cover the words and look at the pictures. Say the words.",
        words: [
          ["a bus", "bʌs", "автобус", "🚌"],
          ["a coach", "kəʊtʃ", "междугородний автобус", "🚍"],
          ["a plane", "pleɪn", "самолёт", "✈️"],
          ["a taxi", "ˈtæksi", "такси", "🚕", "or a cab"],
          ["a train", "treɪn", "поезд", "🚆"],
          ["a tram", "træm", "трамвай", "🚋"]
        ]
      },
      {
        id: "travel-words", title: "At the station and the airport", ru: "На вокзале и в аэропорту", lesson: "Practical English 6", page: 92,
        activation: "Cover the facts and look at the headings. Try to remember two facts about each type of public transport.",
        words: [
          ["a taxi rank", "ˈtæksi ræŋk", "стоянка такси"],
          ["a tip", "tɪp", "чаевые", "", "= some extra money, about 5–10%"],
          ["a platform", "ˈplætfɔːm", "платформа, перрон", "🚉"],
          ["the underground", "ˈʌndəgraʊnd", "метро", "🚇", "in London: the Tube"],
          ["a bus stop", "ˈbʌs stɒp", "автобусная остановка", "🚏"],
          ["buy a ticket in advance", "", "купить билет заранее", "🎫"],
          ["check in", "ˌtʃek ˈɪn", "зарегистрироваться (на рейс)"],
          ["security", "sɪˈkjʊərəti", "досмотр (служба безопасности)", "🛂"],
          ["the departure lounge", "dɪˈpɑːtʃə laʊndʒ", "зал ожидания вылета"],
          ["a gate", "geɪt", "выход на посадку"]
        ]
      }
    ]
  }
];
