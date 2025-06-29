export interface Emoji {
  id: string;
  emoji: string;
  name: {
    en: string;
    es: string;
    zh: string;
    hi: string;
    ar: string;
    pt: string;
  };
  category: string;
  subcategory?: string;
  keywords: {
    en: string[];
    es: string[];
    zh: string[];
    hi: string[];
    ar: string[];
    pt: string[];
  };
  slug: {
    en: string;
    es: string;
    zh: string;
    hi: string;
    ar: string;
    pt: string;
  };
  unicode: string;
}

export const emojiDatabase: Emoji[] = [
  // Smileys & Emotion
  {
    id: "grinning-face",
    emoji: "😀",
    name: {
      en: "Grinning Face",
      es: "Cara Sonriente",
      zh: "咧嘴笑脸",
      hi: "मुस्कुराता चेहरा",
      ar: "وجه مبتسم",
      pt: "Rosto Sorridente"
    },
    category: "smileys-emotion",
    keywords: {
      en: ["smile", "happy", "joy", "grin"],
      es: ["sonrisa", "feliz", "alegría", "sonreír"],
      zh: ["微笑", "开心", "快乐", "笑"],
      hi: ["मुस्कान", "खुश", "आनंद", "हंसी"],
      ar: ["ابتسامة", "سعيد", "فرح", "ابتسم"],
      pt: ["sorriso", "feliz", "alegria", "sorrir"]
    },
    slug: {
      en: "grinning-face",
      es: "cara-sonriente",
      zh: "lie-zui-xiao-lian",
      hi: "muskurata-chehra",
      ar: "wajh-mubtasim",
      pt: "rosto-sorridente"
    },
    unicode: "U+1F600"
  },
  {
    id: "grinning-face-with-smiling-eyes",
    emoji: "😁",
    name: {
      en: "Beaming Face with Smiling Eyes",
      es: "Cara Radiante con Ojos Sonrientes",
      zh: "笑眼满面",
      hi: "मुस्कुराती आँखों वाला चेहरा",
      ar: "وجه مشرق بعيون مبتسمة",
      pt: "Rosto Radiante com Olhos Sorridentes"
    },
    category: "smileys-emotion",
    keywords: {
      en: ["happy", "joy", "smile", "grin", "eye"],
      es: ["feliz", "alegría", "sonrisa", "ojos"],
      zh: ["开心", "快乐", "微笑", "眼睛"],
      hi: ["खुश", "आनंद", "मुस्कान", "आंखें"],
      ar: ["سعيد", "فرح", "ابتسامة", "عيون"],
      pt: ["feliz", "alegria", "sorriso", "olhos"]
    },
    slug: {
      en: "beaming-face-smiling-eyes",
      es: "cara-radiante-ojos-sonrientes",
      zh: "xiao-yan-man-mian",
      hi: "muskurati-aankhon-wala-chehra",
      ar: "wajh-mushriq-uyun-mubtasima",
      pt: "rosto-radiante-olhos-sorridentes"
    },
    unicode: "U+1F601"
  },
  {
    id: "face-with-tears-of-joy",
    emoji: "😂",
    name: {
      en: "Face with Tears of Joy",
      es: "Cara con Lágrimas de Alegría",
      zh: "喜极而泣",
      hi: "खुशी के आंसू वाला चेहरा",
      ar: "وجه بدموع الفرح",
      pt: "Rosto com Lágrimas de Alegria"
    },
    category: "smileys-emotion",
    keywords: {
      en: ["laugh", "happy", "joy", "lol", "tears"],
      es: ["reír", "feliz", "alegría", "lágrimas"],
      zh: ["大笑", "开心", "快乐", "眼泪"],
      hi: ["हंसी", "खुश", "आनंद", "आंसू"],
      ar: ["ضحك", "سعيد", "فرح", "دموع"],
      pt: ["rir", "feliz", "alegria", "lágrimas"]
    },
    slug: {
      en: "face-tears-joy",
      es: "cara-lagrimas-alegria",
      zh: "xi-ji-er-qi",
      hi: "khushi-ke-aansu-wala-chehra",
      ar: "wajh-dumue-farah",
      pt: "rosto-lagrimas-alegria"
    },
    unicode: "U+1F602"
  },
  {
    id: "winking-face",
    emoji: "😉",
    name: {
      en: "Winking Face",
      es: "Cara Guiñando el Ojo",
      zh: "眨眼脸",
      hi: "आंख मारता चेहरा",
      ar: "وجه غامز",
      pt: "Rosto Piscando"
    },
    category: "smileys-emotion",
    keywords: {
      en: ["wink", "flirt", "playful", "joke"],
      es: ["guiño", "coquetear", "juguetón", "broma"],
      zh: ["眨眼", "调情", "俏皮", "玩笑"],
      hi: ["आंख मारना", "इशारा", "मजाक"],
      ar: ["غمزة", "مغازلة", "مزاح"],
      pt: ["piscada", "flerte", "brincalhão", "piada"]
    },
    slug: {
      en: "winking-face",
      es: "cara-guinando-ojo",
      zh: "zha-yan-lian",
      hi: "aankh-marta-chehra",
      ar: "wajh-ghamiz",
      pt: "rosto-piscando"
    },
    unicode: "U+1F609"
  },
  {
    id: "smiling-face-with-heart-eyes",
    emoji: "😍",
    name: {
      en: "Smiling Face with Heart-Eyes",
      es: "Cara Sonriente con Ojos de Corazón",
      zh: "花痴脸",
      hi: "दिल वाली आंखों का चेहरा",
      ar: "وجه مبتسم بعيون قلب",
      pt: "Rosto Sorridente com Olhos de Coração"
    },
    category: "smileys-emotion",
    keywords: {
      en: ["love", "crush", "hearts", "infatuation"],
      es: ["amor", "enamorado", "corazones"],
      zh: ["爱", "迷恋", "心形", "喜欢"],
      hi: ["प्यार", "दिल", "प्रेम", "आकर्षण"],
      ar: ["حب", "عشق", "قلوب", "إعجاب"],
      pt: ["amor", "paixão", "corações", "apaixonado"]
    },
    slug: {
      en: "smiling-face-heart-eyes",
      es: "cara-sonriente-ojos-corazon",
      zh: "hua-chi-lian",
      hi: "dil-wali-aankhon-ka-chehra",
      ar: "wajh-mubtasim-uyun-qalb",
      pt: "rosto-sorridente-olhos-coracao"
    },
    unicode: "U+1F60D"
  },
  // Animals & Nature
  {
    id: "dog-face",
    emoji: "🐶",
    name: {
      en: "Dog Face",
      es: "Cara de Perro",
      zh: "狗脸",
      hi: "कुत्ते का चेहरा",
      ar: "وجه كلب",
      pt: "Rosto de Cachorro"
    },
    category: "animals-nature",
    keywords: {
      en: ["dog", "puppy", "pet", "animal"],
      es: ["perro", "cachorro", "mascota", "animal"],
      zh: ["狗", "小狗", "宠物", "动物"],
      hi: ["कुत्ता", "पिल्ला", "पालतू", "जानवर"],
      ar: ["كلب", "جرو", "حيوان أليف", "حيوان"],
      pt: ["cão", "cachorro", "filhote", "animal"]
    },
    slug: {
      en: "dog-face",
      es: "cara-de-perro",
      zh: "gou-lian",
      hi: "kutte-ka-chehra",
      ar: "wajh-kalb",
      pt: "rosto-de-cachorro"
    },
    unicode: "U+1F436"
  },
  {
    id: "cat-face",
    emoji: "🐱",
    name: {
      en: "Cat Face",
      es: "Cara de Gato",
      zh: "猫脸",
      hi: "बिल्ली का चेहरा",
      ar: "وجه قطة",
      pt: "Rosto de Gato"
    },
    category: "animals-nature",
    keywords: {
      en: ["cat", "kitten", "pet", "animal"],
      es: ["gato", "gatito", "mascota", "animal"],
      zh: ["猫", "小猫", "宠物", "动物"],
      hi: ["बिल्ली", "बिल्ली का बच्चा", "पालतू", "जानवर"],
      ar: ["قطة", "قط صغير", "حيوان أليف", "حيوان"],
      pt: ["gato", "gatinho", "animal", "pet"]
    },
    slug: {
      en: "cat-face",
      es: "cara-de-gato",
      zh: "mao-lian",
      hi: "billi-ka-chehra",
      ar: "wajh-qitta",
      pt: "rosto-de-gato"
    },
    unicode: "U+1F431"
  },
  // Food & Drink
  {
    id: "red-apple",
    emoji: "🍎",
    name: {
      en: "Red Apple",
      es: "Manzana Roja",
      zh: "红苹果",
      hi: "लाल सेब",
      ar: "تفاحة حمراء",
      pt: "Maçã Vermelha"
    },
    category: "food-drink",
    keywords: {
      en: ["apple", "fruit", "red", "food"],
      es: ["manzana", "fruta", "roja", "comida"],
      zh: ["苹果", "水果", "红色", "食物"],
      hi: ["सेब", "फल", "लाल", "खाना"],
      ar: ["تفاحة", "فاكهة", "أحمر", "طعام"],
      pt: ["maçã", "fruta", "vermelho", "comida"]
    },
    slug: {
      en: "red-apple",
      es: "manzana-roja",
      zh: "hong-ping-guo",
      hi: "lal-seb",
      ar: "tuffaha-hamra",
      pt: "maca-vermelha"
    },
    unicode: "U+1F34E"
  },
  {
    id: "pizza",
    emoji: "🍕",
    name: {
      en: "Pizza",
      es: "Pizza",
      zh: "披萨",
      hi: "पिज़्ज़ा",
      ar: "بيتزا",
      pt: "Pizza"
    },
    category: "food-drink",
    keywords: {
      en: ["pizza", "food", "slice", "cheese"],
      es: ["pizza", "comida", "rebanada", "queso"],
      zh: ["披萨", "食物", "片", "奶酪"],
      hi: ["पिज़्ज़ा", "खाना", "स्लाइस", "चीज़"],
      ar: ["بيتزا", "طعام", "شريحة", "جبن"],
      pt: ["pizza", "comida", "fatia", "queijo"]
    },
    slug: {
      en: "pizza",
      es: "pizza",
      zh: "pi-sa",
      hi: "pizza",
      ar: "bitza",
      pt: "pizza"
    },
    unicode: "U+1F355"
  },
  // Activities
  {
    id: "soccer-ball",
    emoji: "⚽",
    name: {
      en: "Soccer Ball",
      es: "Balón de Fútbol",
      zh: "足球",
      hi: "फुटबॉल",
      ar: "كرة قدم",
      pt: "Bola de Futebol"
    },
    category: "activities",
    keywords: {
      en: ["soccer", "football", "sport", "ball"],
      es: ["fútbol", "deporte", "balón", "pelota"],
      zh: ["足球", "运动", "球"],
      hi: ["फुटबॉल", "खेल", "गेंद"],
      ar: ["كرة القدم", "رياضة", "كرة"],
      pt: ["futebol", "esporte", "bola"]
    },
    slug: {
      en: "soccer-ball",
      es: "balon-futbol",
      zh: "zu-qiu",
      hi: "football",
      ar: "kurat-qadam",
      pt: "bola-futebol"
    },
    unicode: "U+26BD"
  },
  // Travel & Places
  {
    id: "airplane",
    emoji: "✈️",
    name: {
      en: "Airplane",
      es: "Avión",
      zh: "飞机",
      hi: "हवाई जहाज़",
      ar: "طائرة",
      pt: "Avião"
    },
    category: "travel-places",
    keywords: {
      en: ["airplane", "flight", "travel", "fly"],
      es: ["avión", "vuelo", "viaje", "volar"],
      zh: ["飞机", "航班", "旅行", "飞"],
      hi: ["हवाई जहाज़", "उड़ान", "यात्रा"],
      ar: ["طائرة", "رحلة", "سفر", "طيران"],
      pt: ["avião", "voo", "viagem", "voar"]
    },
    slug: {
      en: "airplane",
      es: "avion",
      zh: "fei-ji",
      hi: "hawai-jahaz",
      ar: "taira",
      pt: "aviao"
    },
    unicode: "U+2708"
  },
  // Objects
  {
    id: "mobile-phone",
    emoji: "📱",
    name: {
      en: "Mobile Phone",
      es: "Teléfono Móvil",
      zh: "手机",
      hi: "मोबाइल फ़ोन",
      ar: "هاتف محمول",
      pt: "Telefone Celular"
    },
    category: "objects",
    keywords: {
      en: ["phone", "mobile", "smartphone", "call"],
      es: ["teléfono", "móvil", "smartphone", "llamar"],
      zh: ["手机", "电话", "智能手机", "打电话"],
      hi: ["फ़ोन", "मोबाइल", "स्मार्टफ़ोन", "कॉल"],
      ar: ["هاتف", "محمول", "هاتف ذكي", "اتصال"],
      pt: ["telefone", "celular", "smartphone", "ligar"]
    },
    slug: {
      en: "mobile-phone",
      es: "telefono-movil",
      zh: "shou-ji",
      hi: "mobile-phone",
      ar: "hatif-mahmul",
      pt: "telefone-celular"
    },
    unicode: "U+1F4F1"
  },
  // Symbols
  {
    id: "red-heart",
    emoji: "❤️",
    name: {
      en: "Red Heart",
      es: "Corazón Rojo",
      zh: "红心",
      hi: "लाल दिल",
      ar: "قلب أحمر",
      pt: "Coração Vermelho"
    },
    category: "symbols",
    keywords: {
      en: ["heart", "love", "red", "emotion"],
      es: ["corazón", "amor", "rojo", "emoción"],
      zh: ["心", "爱", "红色", "情感"],
      hi: ["दिल", "प्यार", "लाल", "भावना"],
      ar: ["قلب", "حب", "أحمر", "عاطفة"],
      pt: ["coração", "amor", "vermelho", "emoção"]
    },
    slug: {
      en: "red-heart",
      es: "corazon-rojo",
      zh: "hong-xin",
      hi: "lal-dil",
      ar: "qalb-ahmar",
      pt: "coracao-vermelho"
    },
    unicode: "U+2764"
  },
  // Flags
  {
    id: "flag-united-states",
    emoji: "🇺🇸",
    name: {
      en: "Flag: United States",
      es: "Bandera: Estados Unidos",
      zh: "旗帜：美国",
      hi: "झंडा: संयुक्त राज्य अमेरिका",
      ar: "علم: الولايات المتحدة",
      pt: "Bandeira: Estados Unidos"
    },
    category: "flags",
    keywords: {
      en: ["flag", "USA", "United States", "America"],
      es: ["bandera", "EEUU", "Estados Unidos", "América"],
      zh: ["旗帜", "美国", "美利坚"],
      hi: ["झंडा", "यूएसए", "अमेरिका"],
      ar: ["علم", "أمريكا", "الولايات المتحدة"],
      pt: ["bandeira", "EUA", "Estados Unidos", "América"]
    },
    slug: {
      en: "flag-united-states",
      es: "bandera-estados-unidos",
      zh: "qi-zhi-mei-guo",
      hi: "jhanda-america",
      ar: "alam-amrika",
      pt: "bandeira-estados-unidos"
    },
    unicode: "U+1F1FA U+1F1F8"
  },
  {
    id: "flag-spain",
    emoji: "🇪🇸",
    name: {
      en: "Flag: Spain",
      es: "Bandera: España",
      zh: "旗帜：西班牙",
      hi: "झंडा: स्पेन",
      ar: "علم: إسبانيا",
      pt: "Bandeira: Espanha"
    },
    category: "flags",
    keywords: {
      en: ["flag", "Spain", "Spanish"],
      es: ["bandera", "España", "español"],
      zh: ["旗帜", "西班牙"],
      hi: ["झंडा", "स्पेन"],
      ar: ["علم", "إسبانيا"],
      pt: ["bandeira", "Espanha", "espanhol"]
    },
    slug: {
      en: "flag-spain",
      es: "bandera-espana",
      zh: "qi-zhi-xi-ban-ya",
      hi: "jhanda-spain",
      ar: "alam-isbanya",
      pt: "bandeira-espanha"
    },
    unicode: "U+1F1EA U+1F1F8"
  },
  // More emojis
  {
    id: "thinking-face",
    emoji: "🤔",
    name: {
      en: "Thinking Face",
      es: "Cara Pensativa",
      zh: "思考的脸",
      hi: "सोचता हुआ चेहरा",
      ar: "وجه متفكر",
      pt: "Rosto Pensativo"
    },
    category: "smileys-emotion",
    keywords: {
      en: ["think", "consider", "ponder", "hmm"],
      es: ["pensar", "considerar", "reflexionar"],
      zh: ["思考", "考虑", "沉思"],
      hi: ["सोचना", "विचार", "चिंतन"],
      ar: ["تفكير", "تأمل", "تساؤل"],
      pt: ["pensar", "considerar", "refletir"]
    },
    slug: {
      en: "thinking-face",
      es: "cara-pensativa",
      zh: "si-kao-de-lian",
      hi: "sochta-hua-chehra",
      ar: "wajh-mutafakkir",
      pt: "rosto-pensativo"
    },
    unicode: "U+1F914"
  },
  {
    id: "fire",
    emoji: "🔥",
    name: {
      en: "Fire",
      es: "Fuego",
      zh: "火",
      hi: "आग",
      ar: "نار",
      pt: "Fogo"
    },
    category: "travel-places",
    keywords: {
      en: ["fire", "hot", "flame", "burn"],
      es: ["fuego", "caliente", "llama", "quemar"],
      zh: ["火", "热", "火焰", "燃烧"],
      hi: ["आग", "गर्म", "ज्वाला", "जलना"],
      ar: ["نار", "ساخن", "لهب", "حرق"],
      pt: ["fogo", "quente", "chama", "queimar"]
    },
    slug: {
      en: "fire",
      es: "fuego",
      zh: "huo",
      hi: "aag",
      ar: "nar",
      pt: "fogo"
    },
    unicode: "U+1F525"
  },
  {
    id: "thumbs-up",
    emoji: "👍",
    name: {
      en: "Thumbs Up",
      es: "Pulgar Arriba",
      zh: "竖起大拇指",
      hi: "अच्छा",
      ar: "إبهام لأعلى",
      pt: "Polegar para Cima"
    },
    category: "people-body",
    keywords: {
      en: ["thumbs up", "approve", "yes", "like"],
      es: ["pulgar arriba", "aprobar", "sí", "me gusta"],
      zh: ["竖起大拇指", "赞成", "好", "喜欢"],
      hi: ["अच्छा", "स्वीकृति", "हाँ", "पसंद"],
      ar: ["إبهام لأعلى", "موافقة", "نعم", "إعجاب"],
      pt: ["polegar para cima", "aprovar", "sim", "curtir"]
    },
    slug: {
      en: "thumbs-up",
      es: "pulgar-arriba",
      zh: "shu-qi-da-mu-zhi",
      hi: "accha",
      ar: "ibham-laala",
      pt: "polegar-para-cima"
    },
    unicode: "U+1F44D"
  },
  {
    id: "party-popper",
    emoji: "🎉",
    name: {
      en: "Party Popper",
      es: "Cohete de Fiesta",
      zh: "派对礼炮",
      hi: "पार्टी पॉपर",
      ar: "مفرقعة حفلة",
      pt: "Confete de Festa"
    },
    category: "activities",
    keywords: {
      en: ["party", "celebration", "birthday", "confetti"],
      es: ["fiesta", "celebración", "cumpleaños", "confeti"],
      zh: ["派对", "庆祝", "生日", "彩纸"],
      hi: ["पार्टी", "उत्सव", "जन्मदिन", "कंफ़ेटी"],
      ar: ["حفلة", "احتفال", "عيد ميلاد", "قصاصات"],
      pt: ["festa", "celebração", "aniversário", "confete"]
    },
    slug: {
      en: "party-popper",
      es: "cohete-fiesta",
      zh: "pai-dui-li-pao",
      hi: "party-popper",
      ar: "mufarqia-hafla",
      pt: "confete-festa"
    },
    unicode: "U+1F389"
  },
  {
    id: "rainbow",
    emoji: "🌈",
    name: {
      en: "Rainbow",
      es: "Arcoíris",
      zh: "彩虹",
      hi: "इंद्रधनुष",
      ar: "قوس قزح",
      pt: "Arco-íris"
    },
    category: "travel-places",
    keywords: {
      en: ["rainbow", "pride", "color", "weather"],
      es: ["arcoíris", "orgullo", "color", "clima"],
      zh: ["彩虹", "骄傲", "颜色", "天气"],
      hi: ["इंद्रधनुष", "गर्व", "रंग", "मौसम"],
      ar: ["قوس قزح", "فخر", "لون", "طقس"],
      pt: ["arco-íris", "orgulho", "cor", "clima"]
    },
    slug: {
      en: "rainbow",
      es: "arcoiris",
      zh: "cai-hong",
      hi: "indradhanush",
      ar: "qaws-quzah",
      pt: "arco-iris"
    },
    unicode: "U+1F308"
  },
  {
    id: "unicorn",
    emoji: "🦄",
    name: {
      en: "Unicorn",
      es: "Unicornio",
      zh: "独角兽",
      hi: "यूनिकॉर्न",
      ar: "وحيد القرن",
      pt: "Unicórnio"
    },
    category: "animals-nature",
    keywords: {
      en: ["unicorn", "fantasy", "magic", "mythical"],
      es: ["unicornio", "fantasía", "magia", "mítico"],
      zh: ["独角兽", "幻想", "魔法", "神话"],
      hi: ["यूनिकॉर्न", "कल्पना", "जादू", "पौराणिक"],
      ar: ["وحيد القرن", "خيال", "سحر", "أسطوري"],
      pt: ["unicórnio", "fantasia", "magia", "mítico"]
    },
    slug: {
      en: "unicorn",
      es: "unicornio",
      zh: "du-jiao-shou",
      hi: "unicorn",
      ar: "wahid-alqarn",
      pt: "unicornio"
    },
    unicode: "U+1F984"
  },
  {
    id: "rocket",
    emoji: "🚀",
    name: {
      en: "Rocket",
      es: "Cohete",
      zh: "火箭",
      hi: "रॉकेट",
      ar: "صاروخ",
      pt: "Foguete"
    },
    category: "travel-places",
    keywords: {
      en: ["rocket", "space", "launch", "fast"],
      es: ["cohete", "espacio", "lanzar", "rápido"],
      zh: ["火箭", "太空", "发射", "快速"],
      hi: ["रॉकेट", "अंतरिक्ष", "प्रक्षेपण", "तेज़"],
      ar: ["صاروخ", "فضاء", "إطلاق", "سريع"],
      pt: ["foguete", "espaço", "lançar", "rápido"]
    },
    slug: {
      en: "rocket",
      es: "cohete",
      zh: "huo-jian",
      hi: "rocket",
      ar: "sarukh",
      pt: "foguete"
    },
    unicode: "U+1F680"
  },
  {
    id: "star",
    emoji: "⭐",
    name: {
      en: "Star",
      es: "Estrella",
      zh: "星星",
      hi: "तारा",
      ar: "نجمة",
      pt: "Estrela"
    },
    category: "travel-places",
    keywords: {
      en: ["star", "favorite", "night", "shine"],
      es: ["estrella", "favorito", "noche", "brillar"],
      zh: ["星星", "收藏", "夜晚", "闪耀"],
      hi: ["तारा", "पसंदीदा", "रात", "चमक"],
      ar: ["نجمة", "مفضل", "ليل", "تألق"],
      pt: ["estrela", "favorito", "noite", "brilhar"]
    },
    slug: {
      en: "star",
      es: "estrella",
      zh: "xing-xing",
      hi: "tara",
      ar: "najma",
      pt: "estrela"
    },
    unicode: "U+2B50"
  },
  {
    id: "sun",
    emoji: "☀️",
    name: {
      en: "Sun",
      es: "Sol",
      zh: "太阳",
      hi: "सूरज",
      ar: "شمس",
      pt: "Sol"
    },
    category: "travel-places",
    keywords: {
      en: ["sun", "sunny", "weather", "bright"],
      es: ["sol", "soleado", "clima", "brillante"],
      zh: ["太阳", "晴天", "天气", "明亮"],
      hi: ["सूरज", "धूप", "मौसम", "उज्ज्वल"],
      ar: ["شمس", "مشمس", "طقس", "مشرق"],
      pt: ["sol", "ensolarado", "clima", "brilhante"]
    },
    slug: {
      en: "sun",
      es: "sol",
      zh: "tai-yang",
      hi: "suraj",
      ar: "shams",
      pt: "sol"
    },
    unicode: "U+2600"
  },
  {
    id: "moon",
    emoji: "🌙",
    name: {
      en: "Crescent Moon",
      es: "Luna Creciente",
      zh: "新月",
      hi: "अर्धचंद्र",
      ar: "هلال",
      pt: "Lua Crescente"
    },
    category: "travel-places",
    keywords: {
      en: ["moon", "night", "crescent", "sleep"],
      es: ["luna", "noche", "creciente", "dormir"],
      zh: ["月亮", "夜晚", "新月", "睡眠"],
      hi: ["चाँद", "रात", "अर्धचंद्र", "नींद"],
      ar: ["قمر", "ليل", "هلال", "نوم"],
      pt: ["lua", "noite", "crescente", "dormir"]
    },
    slug: {
      en: "crescent-moon",
      es: "luna-creciente",
      zh: "xin-yue",
      hi: "ardhchandra",
      ar: "hilal",
      pt: "lua-crescente"
    },
    unicode: "U+1F319"
  }
];

export function getEmojiBySlug(slug: string, locale: string): Emoji | undefined {
  return emojiDatabase.find(emoji => emoji.slug[locale as keyof typeof emoji.slug] === slug);
}

export function getEmojisByCategory(category: string): Emoji[] {
  return emojiDatabase.filter(emoji => emoji.category === category);
}

export function searchEmojis(query: string, locale: string): Emoji[] {
  const normalizedQuery = query.toLowerCase();
  return emojiDatabase.filter(emoji => {
    const name = emoji.name[locale as keyof typeof emoji.name].toLowerCase();
    const keywords = emoji.keywords[locale as keyof typeof emoji.keywords].map(k => k.toLowerCase());
    return name.includes(normalizedQuery) || keywords.some(k => k.includes(normalizedQuery));
  });
}

export const categories = [
  "smileys-emotion",
  "people-body", 
  "animals-nature",
  "food-drink",
  "travel-places",
  "activities",
  "objects",
  "symbols",
  "flags"
];

export function getAllEmojis(): Emoji[] {
  return emojiDatabase;
}