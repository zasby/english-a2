// Vocabulary Bank — English File Elementary (4th edition), стр. 148–164,
// плюс таблица Irregular verbs (стр. 165).
//
// Раздел  = страница Vocabulary Bank.
// Группа  = пронумерованный блок на странице (1 DAYS OF THE WEEK, 2 NUMBERS 0–20 …).
// lesson  = урок учебника, из которого ведёт ссылка на эту страницу.
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
      },
      {
        id: "months", title: "Months", ru: "Месяцы", lesson: "4C",
        extra: "Месяцев нет на этой странице Vocabulary Bank — они из урока 4C, но нужны, чтобы называть даты.",
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
  }
];
