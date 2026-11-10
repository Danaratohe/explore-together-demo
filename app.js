"use strict";

const PRESENTATION_MODE = new URLSearchParams(window.location.search).get("presentation") === "1";
document.documentElement.classList.toggle("presentation-mode", PRESENTATION_MODE);

const TOPICS = [
  {
    key: "geo", title: "Geografía y la Tierra", short: "La Tierra", icon: "🌍",
    subtitle: "Un planeta lleno de lugares, formas y fuerzas sorprendentes.",
    lessonTitle: "Nuestro planeta cambiante",
    child: "La Tierra tiene continentes y países con banderas distintas. Un monumento como el Cristo Redentor está en Brasil. Los volcanes pueden expulsar lava; los terremotos ocurren cuando se mueve el suelo, y un tsunami puede empezar por un movimiento bajo el mar. La densidad compara cuánto material hay en un espacio: el hielo flota porque es menos denso que el agua líquida.",
    parent: "Un continente reúne grandes regiones de tierra y contiene muchos países, cada uno con símbolos como su bandera. El Cristo Redentor está en Río de Janeiro, Brasil. El magma que asciende puede formar volcanes; el deslizamiento repentino en una falla causa muchos terremotos, y un desplazamiento del fondo marino puede generar tsunamis. La densidad compara masa con volumen; materiales distintos, como agua, hielo y roca, tienen densidades distintas.",
    example: "Prueba en casa: coloca un cubito de hielo en un vaso con agua y observa dónde queda. ¿Qué crees que cambiaría si el hielo se hundiera?",
    visual: ["🌎", "🧊", "🌋"],
    facts: [
      { icon: "🧭", title: "Países y continentes", text: "Un modelo escolar común cuenta siete continentes. Cada país tiene símbolos propios; la bandera ayuda a reconocerlo." },
      { icon: "🗿", title: "Un monumento en Brasil", text: "El Cristo Redentor se alza sobre Río de Janeiro. La ciudad y su paisaje forman parte de un sitio del Patrimonio Mundial de la UNESCO." },
      { icon: "🌋", title: "Tierra en movimiento", text: "El magma que llega a la superficie puede formar un volcán. Un terremoto es un movimiento repentino del suelo; bajo el mar, un desplazamiento puede iniciar un tsunami." },
      { icon: "🧊", title: "Agua y densidad", text: "La densidad compara la masa con el volumen. El hielo común es menos denso que el agua líquida y por eso flota." }
    ],
    pairs: [
      { id: "brazil", left: ["🌿", "Brasil"], right: ["🇧🇷", "Bandera de Brasil"], explanation: "La bandera verde y amarilla pertenece a Brasil, un país de América del Sur." },
      { id: "japan", left: ["🌸", "Japón"], right: ["🇯🇵", "Bandera de Japón"], explanation: "La bandera con un círculo rojo pertenece a Japón, un país insular de Asia." },
      { id: "egypt", left: ["🏜️", "Egipto"], right: ["🇪🇬", "Bandera de Egipto"], explanation: "La bandera roja, blanca y negra pertenece a Egipto, un país de África." }
    ],
    matchTitle: "País con su bandera", matchDescription: "Toca un país y luego la bandera que lo representa.",
    challenge: { icon: "🧊", title: "El misterio del hielo", text: "¿Por qué flota el hielo? Compara un cubito en agua dulce con uno en agua salada. Pide ayuda adulta para manipular recipientes." },
    sources: [
      ["USGS · terremotos", "https://www.usgs.gov/programs/earthquake-hazards/earthquakes"],
      ["National Geographic · países", "https://kids.nationalgeographic.com/geography/countries/"],
      ["NOAA · tsunamis", "https://oceanservice.noaa.gov/facts/tsunami.html"],
      ["USGS · densidad del agua", "https://www.usgs.gov/special-topics/water-science-school/science/water-density"],
      ["UNESCO · Río de Janeiro", "https://whc.unesco.org/en/list/1100/"]
    ]
  },
  {
    key: "history", title: "Historia y cultura", short: "Historia", icon: "🏺",
    subtitle: "Personas, ideas y objetos que nos cuentan cómo vivían otros.",
    lessonTitle: "Pistas del pasado",
    child: "La historia nos ayuda a conocer cómo vivían las personas. Los museos guardan objetos y los arqueólogos estudian cosas que quedaron de civilizaciones antiguas. La Primera Guerra Mundial ocurrió entre 1914 y 1918; la Segunda, entre 1939 y 1945. Muchísimas personas sufrieron: podemos aprender sobre sus vidas y sobre la paz sin ver imágenes fuertes. Frida Kahlo fue una pintora mexicana.",
    parent: "La historia combina fuentes escritas, objetos, imágenes y testimonios, considerando quién los produjo y en qué contexto. Los museos conservan colecciones; la arqueología estudia restos materiales de sociedades y civilizaciones. La Primera Guerra Mundial ocurrió entre 1914–1918 y la Segunda entre 1939–1945. Con niños, prioricen causas, experiencias civiles, memoria y construcción de paz; ajusten el lenguaje a la edad y eviten detalles gráficos.",
    example: "Mira un objeto de casa: ¿quién pudo usarlo?, ¿de qué está hecho?, ¿qué preguntas quedan sin responder?",
    visual: ["🏺", "🖼️", "🔎"],
    facts: [
      { icon: "🖌️", title: "Frida y sus retratos", text: "Frida Kahlo fue una pintora mexicana; en sus autorretratos aparecen símbolos de su vida y cultura." },
      { icon: "🧮", title: "Einstein, físico", text: "Albert Einstein desarrolló la teoría de la relatividad; su trabajo cambió la manera de entender el espacio, el tiempo y la gravedad." },
      { icon: "🏛️", title: "Museos y arqueología", text: "Los museos cuidan objetos y relatos; la arqueología estudia huellas materiales de las civilizaciones, con atención a su contexto." },
      { icon: "🕊️", title: "Primera Guerra Mundial", text: "Ocurrió entre 1914 y 1918 y afectó a personas de muchos países. Podemos estudiar sus causas y las vidas civiles sin usar imágenes gráficas." },
      { icon: "🕊️", title: "Segunda Guerra Mundial", text: "Ocurrió entre 1939 y 1945. El estudio respetuoso de sus efectos puede abrir conversaciones sobre derechos, memoria y paz." }
    ],
    pairs: [
      { id: "einstein", left: ["🧮", "Albert Einstein"], right: ["🪐", "Físico; relatividad"], explanation: "Einstein fue un físico conocido por sus aportes a la teoría de la relatividad." },
      { id: "kahlo", left: ["🎨", "Frida Kahlo"], right: ["🖼️", "Pintora mexicana"], explanation: "Frida Kahlo fue una pintora mexicana, reconocida por sus autorretratos." },
      { id: "archaeology", left: ["🏺", "Arqueología"], right: ["🔎", "Estudia restos materiales"], explanation: "La arqueología estudia objetos y otros restos materiales de sociedades pasadas." }
    ],
    matchTitle: "Persona o disciplina con su pista", matchDescription: "Une cada nombre con una idea asociada.",
    challenge: { icon: "🧺", title: "Detectives de objetos", text: "Elijan un objeto antiguo de casa y formulen tres preguntas sobre su historia. No hace falta adivinar: las preguntas también son descubrimientos." },
    sources: [
      ["Nobel Prize · Albert Einstein", "https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/"],
      ["Museo Frida Kahlo · Casa Azul", "https://www.museofridakahlo.org.mx/"],
      ["National Park Service · arqueología", "https://www.nps.gov/subjects/archeology/index.htm"],
      ["Encyclopaedia Britannica · Primera Guerra Mundial", "https://www.britannica.com/event/World-War-I"],
      ["USHMM · Segunda Guerra Mundial", "https://encyclopedia.ushmm.org/content/en/article/world-war-ii-in-europe"]
    ]
  },
  {
    key: "body", title: "Cuerpo humano y biología", short: "El cuerpo", icon: "🫀",
    subtitle: "Un equipo de órganos que trabaja junto a cada momento.",
    lessonTitle: "Un cuerpo, muchos equipos",
    child: "El corazón impulsa la sangre por el cuerpo. Los pulmones ayudan a tomar oxígeno del aire y a sacar dióxido de carbono. El cerebro recibe información y ayuda a coordinar acciones. Los órganos trabajan en equipo.",
    parent: "Los sistemas cardiovascular, respiratorio y nervioso interactúan continuamente. El corazón mantiene el flujo sanguíneo; los pulmones realizan el intercambio de gases, y el sistema nervioso integra señales. Para observar sin instrumental, noten cómo cambia la respiración después de una caminata suave.",
    example: "Pon una mano sobre el pecho y siente el pulso después de caminar despacio. Descansen si alguien se siente incómodo.",
    visual: ["🧠", "🫀", "🫁"],
    facts: [
      { icon: "🦴", title: "Un esqueleto vivo", text: "Los huesos sostienen el cuerpo, protegen órganos y, junto con los músculos, ayudan al movimiento." },
      { icon: "🫁", title: "Aire en movimiento", text: "Al inhalar, el aire llega a los pulmones, donde parte del oxígeno pasa a la sangre." },
      { icon: "🧠", title: "Mensajes rápidos", text: "El sistema nervioso recibe y transmite señales entre el cerebro, la médula espinal y el resto del cuerpo." }
    ],
    pairs: [
      { id: "heart", left: ["🫀", "Corazón"], right: ["🩸", "Impulsa la sangre"], explanation: "El corazón bombea sangre para que circule por el cuerpo." },
      { id: "lungs", left: ["🫁", "Pulmones"], right: ["🌬️", "Intercambian gases"], explanation: "En los pulmones, el cuerpo toma oxígeno y elimina dióxido de carbono." },
      { id: "brain", left: ["🧠", "Cerebro"], right: ["⚡", "Coordina señales"], explanation: "El cerebro procesa información y coordina muchas funciones del cuerpo." }
    ],
    matchTitle: "Órgano con su función", matchDescription: "Elige un órgano y encuentra qué trabajo hace.",
    challenge: { icon: "🫁", title: "El cuerpo en movimiento", text: "Caminen suavemente durante un minuto y luego noten su respiración. ¿Qué cambió? Cada cuerpo puede sentirse distinto." },
    sources: [
      ["MedlinePlus · órganos y sistemas", "https://medlineplus.gov/spanish/ency/article/002368.htm"],
      ["NHLBI · cómo funciona el corazón", "https://www.nhlbi.nih.gov/health/heart"],
      ["NHLBI · pulmones", "https://www.nhlbi.nih.gov/health/lungs"]
    ]
  },
  {
    key: "nature", title: "Animales y plantas", short: "Vida natural", icon: "🌿",
    subtitle: "Seres vivos, sus hogares y las relaciones que los conectan.",
    lessonTitle: "La vida se adapta",
    child: "Las plantas crecen usando luz, agua y aire; con la fotosíntesis fabrican azúcares. Los animales se pueden clasificar de distintas maneras. “Mamífero” describe un grupo de animales y “ovíparo” uno que pone huevos: no son grupos opuestos. El ornitorrinco es un mamífero que pone huevos.",
    parent: "En la fotosíntesis, plantas, algas y algunas bacterias convierten energía luminosa en energía química, usando agua y dióxido de carbono y liberando oxígeno. Raíces absorben agua y minerales; tallos sostienen y transportan sustancias. “Mamífero” describe un grupo biológico y “ovíparo” un modo de reproducción: las categorías no son opuestas. Los monotremas, como ornitorrincos y equidnas, son mamíferos que ponen huevos.",
    example: "Busca una planta y observa sus hojas. ¿Qué partes reciben luz? ¿Qué otros seres vivos usan ese lugar?",
    visual: ["🌱", "☀️", "🦆"],
    facts: [
      { icon: "☀️", title: "La energía de las hojas", text: "La fotosíntesis transforma energía luminosa; muchas plantas liberan oxígeno durante el proceso." },
      { icon: "🦆", title: "Un mamífero que pone huevos", text: "El ornitorrinco es un mamífero monotremo: pone huevos y alimenta a sus crías con leche." },
      { icon: "🏞️", title: "Hogares conectados", text: "Un ecosistema incluye seres vivos y el entorno físico con el que interactúan." },
      { icon: "🥚", title: "Clasificar de varias formas", text: "Ovíparo se refiere a poner huevos; mamífero, a un grupo con varios rasgos. Un ornitorrinco es ambas cosas." }
    ],
    pairs: [
      { id: "camel", left: ["🐪", "Camello"], right: ["🏜️", "Desierto"], explanation: "El camello tiene adaptaciones que le ayudan a vivir en ambientes secos." },
      { id: "frog", left: ["🐸", "Rana"], right: ["🪷", "Humedales"], explanation: "Muchas ranas viven en ambientes húmedos y dependen del agua para parte de su ciclo de vida." },
      { id: "polar", left: ["🐻‍❄️", "Oso polar"], right: ["🧊", "Ártico"], explanation: "El oso polar vive en la región ártica y depende del hielo marino para cazar." }
    ],
    matchTitle: "Animal con su hábitat", matchDescription: "Une el animal con un hábitat donde puede vivir.",
    challenge: { icon: "🌿", title: "Un minuto de naturaleza", text: "Encuentren una planta cercana y dibujen lo que la rodea: suelo, luz, insectos u otras plantas. No recojan seres vivos." },
    sources: [
      ["OpenStax · fotosíntesis", "https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis"],
      ["Smithsonian National Zoo · animales", "https://nationalzoo.si.edu/animals"],
      ["Australian Museum · ornitorrinco", "https://australian.museum/learn/animals/mammals/platypus/"]
    ]
  },
  {
    key: "space", title: "Espacio, ingeniería y tecnología", short: "Espacio e inventos", icon: "🚀",
    subtitle: "Del sistema solar a los inventos que nos ayudan a movernos.",
    lessonTitle: "Ideas que giran y se construyen",
    child: "La Tierra es un planeta que gira alrededor del Sol, una estrella. La Luna gira alrededor de la Tierra. Puentes y castillos se diseñan para sostenerse; los autos y las computadoras se construyen con muchas piezas. Un barco desplaza agua para flotar; las alas y el movimiento del aire ayudan a que un avión vuele.",
    parent: "El sistema solar incluye el Sol, ocho planetas y sus satélites; la gravedad mantiene sus órbitas. Puentes y castillos distribuyen cargas por su forma y materiales. Autos y computadoras se fabrican ensamblando componentes distintos; una computadora procesa datos. Un barco flota cuando el empuje del agua desplazada equilibra su peso. En el vuelo intervienen sustentación, peso, empuje y resistencia del aire.",
    example: "Prueba segura: dobla una hoja de papel como acordeón y úsala como puente entre dos libros. Añade monedas una a una y observa cómo la forma distribuye la carga.",
    visual: ["🪐", "🌉", "🛶"],
    facts: [
      { icon: "🌙", title: "La Luna cambia de aspecto", text: "Las fases lunares ocurren porque desde la Tierra vemos distintas porciones de su mitad iluminada por el Sol." },
      { icon: "🛶", title: "Barcos que flotan", text: "El empuje del agua desplazada puede equilibrar el peso del barco, incluso si su material es más denso que el agua." },
      { icon: "🪐", title: "Una estrella y sus planetas", text: "El Sol es una estrella; la Tierra y Marte son dos de los ocho planetas que orbitan alrededor de él." },
      { icon: "🧱", title: "Formas y estructuras", text: "Arcos y triángulos aparecen en puentes y edificios porque sus formas pueden ayudar a repartir fuerzas." },
      { icon: "💻", title: "Muchas piezas, un sistema", text: "Autos y computadoras se ensamblan con componentes que cumplen trabajos distintos; una computadora procesa información." }
    ],
    pairs: [
      { id: "earth", left: ["🌎", "Tierra"], right: ["☀️", "Planeta que orbita el Sol"], explanation: "La Tierra es uno de los planetas que orbitan nuestra estrella, el Sol." },
      { id: "moon", left: ["🌙", "Luna"], right: ["🌎", "Satélite natural de la Tierra"], explanation: "La Luna es el satélite natural de la Tierra." },
      { id: "mars", left: ["🔴", "Marte"], right: ["🪐", "Planeta rocoso"], explanation: "Marte es un planeta rocoso del sistema solar." }
    ],
    matchTitle: "Planeta con una pista", matchDescription: "Une cada mundo con una descripción sencilla.",
    challenge: { icon: "🌉", title: "Puente de papel", text: "Coloquen una hoja entre dos libros y prueben primero plana y luego doblada como acordeón. Añadan monedas pequeñas de una en una con una persona adulta cerca." },
    sources: [
      ["NASA · datos del sistema solar", "https://science.nasa.gov/solar-system/solar-system-facts/"],
      ["NASA Space Place · la Luna", "https://spaceplace.nasa.gov/moon-phases/en/"],
      ["NASA · fuerzas de un avión", "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/four-forces-on-an-airplane/"],
      ["OpenStax · principio de Arquímedes", "https://openstax.org/books/college-physics-2e/pages/11-7-archimedes-principle"]
    ]
  }
];

const STORAGE_KEY = "explore-together-demo-v1";
const PROFILES = [
  { id: "mom", name: "Adultos", detail: "Guía familiar", role: "parent", icon: "🧭" },
  { id: "kids", name: "Niños", detail: "Exploren juntos", role: "child", icon: "🎒" }
];
const CHILD_AGE_BANDS = ["4-6", "7-9", "10-12"];
const LEGACY_CHILD_PROFILE_IDS = ["older", "younger", "kids"];

const DEMO_POST = {
  id: "demo-community-1", topic: "geo", profileId: "demo", caption: "Explorando Brasil y uno de sus monumentos más representativos.",
  image: "", visibility: "community", status: "approved", demo: true, createdAt: "Ejemplo de demostración"
};
function detectLanguage() {
  if (PRESENTATION_MODE) {
    const sessionLanguage = sessionStorage.getItem("explore-together-presentation-language");
    if (["es", "en", "ja", "tr"].includes(sessionLanguage)) return sessionLanguage;
    return "es";
  }
  const savedLanguage = localStorage.getItem("explore-together-language");
  if (["es", "en", "ja", "tr"].includes(savedLanguage)) return savedLanguage;
  const preferred = (navigator.languages || [navigator.language || "es"])[0].toLowerCase();
  if (preferred.startsWith("ja")) return "ja";
  if (preferred.startsWith("tr")) return "tr";
  if (preferred.startsWith("en")) return "en";
  return "es";
}
const safeImageData = (value) => /^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(String(value || "")) ? value : "";
const DEFAULT_STATE = {
  profileId: "mom", topic: "geo", section: "learn", albumView: "private", albumTopic: "all",
  ages: { older: 9, younger: 5 }, childBand: "7-9", progress: {}, posts: [DEMO_POST], reports: []
};

function loadState() {
  if (PRESENTATION_MODE) {
    return {
      ...structuredClone(DEFAULT_STATE),
      profileId: "mom",
      topic: "history",
      section: "learn",
      progress: {},
      posts: [DEMO_POST],
      reports: []
    };
  }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return structuredClone(DEFAULT_STATE);
    const legacySelectedAge = saved.ages?.[saved.profileId] || (saved.profileId === "younger" ? 4 : 7);
    const inferredBand = legacySelectedAge <= 6 ? "4-6" : legacySelectedAge <= 9 ? "7-9" : "10-12";
    return {
      ...structuredClone(DEFAULT_STATE), ...saved,
      profileId: LEGACY_CHILD_PROFILE_IDS.includes(saved.profileId) ? "kids" : saved.profileId,
      childBand: CHILD_AGE_BANDS.includes(saved.childBand) ? saved.childBand : inferredBand,
      ages: { ...DEFAULT_STATE.ages, ...(saved.ages || {}) },
      progress: saved.progress && typeof saved.progress === "object" ? saved.progress : {},
      posts: Array.isArray(saved.posts) ? saved.posts : [DEMO_POST],
      reports: Array.isArray(saved.reports) ? saved.reports : []
    };
  } catch (error) {
    console.warn("No se pudo leer el progreso local; se inicia una sesión de demostración.", error);
    return structuredClone(DEFAULT_STATE);
  }
}

let state = loadState();
let activeMatch = { selected: null, matched: [], feedback: "", kind: "" };
let selectedCountryId = "brazil";
let selectedCountryLanguageId = "pt-BR";
let selectedBodyPartId = "heart";
let adultSearchByTopic = Object.fromEntries(TOPICS.map((topic) => [topic.key, { query: "", articleId: "" }]));
let adultQuizState = { articleId: "", questionIndex: 0, selected: null, answered: false };
let guidedState = {
  key: "", lessonIndex: 0, stepIndex: 0, stage: "steps", feedback: "",
  optionOrder: null, orderOptions: null, orderPicked: [], moreOpen: false
};
let imageDraft = "";
let toastTimer;
let language = detectLanguage();
const GUIDE_AUDIO_KEY = "explore-together-audio-v1";
let guideAudioPreferences = (() => {
  try {
    const saved = JSON.parse(localStorage.getItem(GUIDE_AUDIO_KEY) || "{}");
    return { narration: saved.narration !== false, effects: saved.effects === true };
  } catch {
    return { narration: true, effects: false };
  }
})();
let activeUtterance = null;
let audioContext = null;
let narrationPaused = false;
const avatarImageURLs = {};
let avatarImagesRequested = false;
const AVATAR_FILES = {
  mom: ["assets/icons/guide.svg"],
  older: ["assets/icons/guide.svg"],
  younger: ["assets/icons/guide.svg"]
};

const byId = (id) => document.getElementById(id);
const activeProfile = () => PROFILES.find((profile) => profile.id === state.profileId) || PROFILES[0];
const isChildProfileId = (profileId) => LEGACY_CHILD_PROFILE_IDS.includes(profileId);
const canManagePost = (post) => activeProfile().role === "parent" ||
  (activeProfile().role === "child" && (post.profileId === "kids" || isChildProfileId(post.profileId)));
const activeTopic = () => TOPICS.find((topic) => topic.key === state.topic) || TOPICS[0];
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);
const safeURL = (url) => {
  try {
    const parsed = new URL(url, window.location.href);
    return parsed.protocol === "https:" ? parsed.href : "";
  } catch { return ""; }
};
const ENGLISH = {
  "Saltar al contenido": "Skip to content",
  "Pequeños descubrimientos, grandes conversaciones.": "Small discoveries, big conversations.",
  "Abrir álbum familiar": "Open family album", "Álbum familiar": "Family album",
  "Perfiles y ajustes": "Profiles and settings", "EXPLORAR": "EXPLORE",
  "Cinco temas": "Five topics", "Temas principales": "Main topics",
  "Un mundo de ideas para descubrir": "A world of ideas to discover",
  "juntos": "together", "Siempre gratis. Sin bloqueos.": "Always free. Nothing locked.",
  "Perfil familiar": "Family profile", "UN RINCÓN PARA CURIOSOS": "A PLACE FOR THE CURIOUS",
  "Hola, familia": "Hello, family", "¿Quién viene a explorar hoy?": "Who’s ready to explore today?",
  "Elegir perfil": "Choose a profile", "Edad:": "Age:",
  "Elige Adultos o Niños. En Niños, selecciona una franja de edad para adaptar las explicaciones y los retos.": "Choose Adults or Kids. In Kids, select an age range to adapt explanations and challenges.",
  "Un prototipo educativo · Comunidad de demostración": "An educational prototype · Demo community",
  "Ajustes y privacidad": "Settings & privacy", "EXPLORAR": "EXPLORE",
  "Geografía y la Tierra": "Geography & Earth", "La Tierra": "Earth",
  "Historia y cultura": "History & culture", "Historia": "History",
  "Cuerpo humano y biología": "Human body & biology", "El cuerpo": "The body",
  "Animales y plantas": "Animals & plants", "Vida natural": "Nature",
  "Espacio, ingeniería y tecnología": "Space, engineering & technology", "Espacio e inventos": "Space & inventions",
  "Mamá": "Mom", "Adultos": "Adults", "Niños": "Kids", "Guía familiar": "Family guides", "Exploren juntos": "Explore together", "Módulo para padres": "Parent mode",
  "Hijo mayor": "Older child", "Hijo menor": "Younger child",
  "Niño mayor": "Older kid", "Niño menor": "Younger kid",
  "Adult guide": "Adult guide", "Child guide A": "Child guide A", "Child guide B": "Child guide B",
  "Guía · Adult guide": "Guide · Adult guide", "Adult guide te da la bienvenida. Aprendamos a la altura de cada edad.": "Adult guide welcomes you. Let’s learn together at every age.",
  "Explorador · 7 años": "Explorer · 7 years old", "Explorador · 4 años": "Explorer · 4 years old",
  "Explorador · 8 años": "Explorer · 8 years old", "Explorador · 5 años": "Explorer · 5 years old",
  "Hoy aprendemos a la altura de cada edad.": "Today we learn at every age.",
  "¡Qué bueno verte,": "So good to see you,",
  "¿Qué descubrimos hoy?": "What shall we discover today?",
  "UN RINCÓN PARA CURIOSOS": "A PLACE FOR THE CURIOUS",
  "TEMA 01 · MODO FAMILIA": "TOPIC 01 · FAMILY MODE",
  "MODO FAMILIA": "FAMILY MODE", "MODO EXPLORADOR": "EXPLORER MODE",
  "ÁLBUM DE DESCUBRIMIENTOS": "DISCOVERY ALBUM",
  "Recuerdos y hallazgos": "Memories & discoveries",
  "Un espacio de práctica en este dispositivo. Las publicaciones no salen a una comunidad real.": "A practice space on this device. Posts are not shared with a real community.",
  "📖": "📖", "Aprende": "Learn", "✨": "✨", "¿Sabías que…?": "Did you know…?",
  "🧩": "🧩", "Juega": "Play", "📔": "📔", "Álbum": "Album",
  "PARA ACOMPAÑAR": "FOR PARENTS", "LECCIÓN CORTITA": "QUICK LESSON",
  "Prueba o conversa:": "Try it or talk about it:",
  "Pregunta para conversar:": "Conversation starter:",
  "Mira de cerca. Pregunta. Descubre.": "Look closely. Ask questions. Discover.",
  "Imagina · construye · prueba": "Imagine · build · test",
  "Marcar este tema como explorado en este navegador": "Mark this topic explored on this browser",
  "Un planeta lleno de lugares, formas y fuerzas sorprendentes.": "A planet full of remarkable places, shapes, and forces.",
  "Personas, ideas y objetos que nos cuentan cómo vivían otros.": "People, ideas, and objects that tell us how others lived.",
  "Un equipo de órganos que trabaja junto a cada momento.": "A team of organs working together every moment.",
  "Seres vivos, sus hogares y las relaciones que los conectan.": "Living things, their homes, and the connections between them.",
  "Del sistema solar a los inventos que nos ayudan a movernos.": "From the solar system to inventions that help us move.",
  "Nuestro planeta cambiante": "Our changing planet", "Pistas del pasado": "Clues from the past",
  "Un cuerpo, muchos equipos": "One body, many teams", "La vida se adapta": "Life adapts",
  "Ideas que giran y se construyen": "Ideas that orbit and take shape",
  "La Tierra tiene continentes y países con banderas distintas. Un monumento como el Cristo Redentor está en Brasil. Los volcanes pueden expulsar lava; los terremotos ocurren cuando se mueve el suelo, y un tsunami puede empezar por un movimiento bajo el mar. La densidad compara cuánto material hay en un espacio: el hielo flota porque es menos denso que el agua líquida.": "Earth has continents and countries with different flags. A landmark such as Christ the Redeemer is in Brazil. Volcanoes can release lava; earthquakes happen when the ground moves, and a tsunami can begin with movement beneath the sea. Density compares how much matter fits in a space: ice floats because it is less dense than liquid water.",
  "Un continente reúne grandes regiones de tierra y contiene muchos países, cada uno con símbolos como su bandera. El Cristo Redentor está en Río de Janeiro, Brasil. El magma que asciende puede formar volcanes; el deslizamiento repentino en una falla causa muchos terremotos, y un desplazamiento del fondo marino puede generar tsunamis. La densidad compara masa con volumen; materiales distintos, como agua, hielo y roca, tienen densidades distintas.": "A continent is a large land region containing many countries, each with symbols such as its flag. Christ the Redeemer is in Rio de Janeiro, Brazil. Rising magma can form volcanoes; sudden slipping along a fault causes many earthquakes, and movement of the seafloor can generate tsunamis. Density compares mass with volume, and materials such as water, ice, and rock have different densities.",
  "Prueba en casa: coloca un cubito de hielo en un vaso con agua y observa dónde queda. ¿Qué crees que cambiaría si el hielo se hundiera?": "Try at home: place an ice cube in a glass of water and observe where it rests. What do you think would change if the ice sank?",
  "La historia nos ayuda a conocer cómo vivían las personas. Los museos guardan objetos y los arqueólogos estudian cosas que quedaron de civilizaciones antiguas. La Primera Guerra Mundial ocurrió entre 1914 y 1918; la Segunda, entre 1939 y 1945. Muchísimas personas sufrieron: podemos aprender sobre sus vidas y sobre la paz sin ver imágenes fuertes. Frida Kahlo fue una pintora mexicana.": "History helps us learn how people lived. Museums preserve objects, and archaeologists study things left by ancient civilizations. World War I took place from 1914 to 1918; World War II, from 1939 to 1945. Many people suffered. We can learn about their lives and peace without graphic images. Frida Kahlo was a Mexican painter.",
  "La historia combina fuentes escritas, objetos, imágenes y testimonios, considerando quién los produjo y en qué contexto. Los museos conservan colecciones; la arqueología estudia restos materiales de sociedades y civilizaciones. La Primera Guerra Mundial ocurrió entre 1914–1918 y la Segunda entre 1939–1945. Con niños, prioricen causas, experiencias civiles, memoria y construcción de paz; ajusten el lenguaje a la edad y eviten detalles gráficos.": "History draws on written sources, objects, images, and testimony, while considering who created them and in what context. Museums preserve collections; archaeology studies material remains of societies and civilizations. World War I took place from 1914–1918 and World War II from 1939–1945. With children, focus on causes, civilian experiences, remembrance, and peacebuilding; adapt language to their age and avoid graphic details.",
  "Mira un objeto de casa: ¿quién pudo usarlo?, ¿de qué está hecho?, ¿qué preguntas quedan sin responder?": "Look at an object at home: who might have used it? What is it made of? What questions remain unanswered?",
  "El corazón impulsa la sangre por el cuerpo. Los pulmones ayudan a tomar oxígeno del aire y a sacar dióxido de carbono. El cerebro recibe información y ayuda a coordinar acciones. Los órganos trabajan en equipo.": "The heart pumps blood through the body. The lungs help take in oxygen and release carbon dioxide. The brain receives information and helps coordinate actions. Organs work as a team.",
  "Los sistemas cardiovascular, respiratorio y nervioso interactúan continuamente. El corazón mantiene el flujo sanguíneo; los pulmones realizan el intercambio de gases, y el sistema nervioso integra señales. Para observar sin instrumental, noten cómo cambia la respiración después de una caminata suave.": "The cardiovascular, respiratory, and nervous systems interact continuously. The heart keeps blood flowing; the lungs exchange gases, and the nervous system integrates signals. To observe without equipment, notice how breathing changes after a gentle walk.",
  "Pon una mano sobre el pecho y siente el pulso después de caminar despacio. Descansen si alguien se siente incómodo.": "Place a hand on your chest and feel your pulse after walking slowly. Rest if anyone feels uncomfortable.",
  "Las plantas crecen usando luz, agua y aire; con la fotosíntesis fabrican azúcares. Los animales se pueden clasificar de distintas maneras. “Mamífero” describe un grupo de animales y “ovíparo” uno que pone huevos: no son grupos opuestos. El ornitorrinco es un mamífero que pone huevos.": "Plants use light, water, and air to grow; through photosynthesis they make sugars. Animals can be classified in different ways. “Mammal” describes an animal group, while “egg-laying” describes how an animal reproduces: they are not opposites. The platypus is a mammal that lays eggs.",
  "En la fotosíntesis, plantas, algas y algunas bacterias convierten energía luminosa en energía química, usando agua y dióxido de carbono y liberando oxígeno. Raíces absorben agua y minerales; tallos sostienen y transportan sustancias. “Mamífero” describe un grupo biológico y “ovíparo” un modo de reproducción: las categorías no son opuestas. Los monotremas, como ornitorrincos y equidnas, son mamíferos que ponen huevos.": "In photosynthesis, plants, algae, and some bacteria convert light energy into chemical energy using water and carbon dioxide, releasing oxygen. Roots absorb water and minerals; stems support plants and transport substances. “Mammal” describes a biological group and “egg-laying” a reproductive method; these categories are not opposites. Monotremes, such as platypuses and echidnas, are mammals that lay eggs.",
  "Busca una planta y observa sus hojas. ¿Qué partes reciben luz? ¿Qué otros seres vivos usan ese lugar?": "Find a plant and observe its leaves. Which parts get light? What other living things use that place?",
  "La Tierra es un planeta que gira alrededor del Sol, una estrella. La Luna gira alrededor de la Tierra. Puentes y castillos se diseñan para sostenerse; los autos y las computadoras se construyen con muchas piezas. Un barco desplaza agua para flotar; las alas y el movimiento del aire ayudan a que un avión vuele.": "Earth is a planet orbiting the Sun, a star. The Moon orbits Earth. Bridges and castles are designed to stand; cars and computers are built from many parts. A boat displaces water to float; wings and moving air help an airplane fly.",
  "El sistema solar incluye el Sol, ocho planetas y sus satélites; la gravedad mantiene sus órbitas. Puentes y castillos distribuyen cargas por su forma y materiales. Autos y computadoras se fabrican ensamblando componentes distintos; una computadora procesa datos. Un barco flota cuando el empuje del agua desplazada equilibra su peso. En el vuelo intervienen sustentación, peso, empuje y resistencia del aire.": "The solar system includes the Sun, eight planets, and their moons; gravity keeps them in orbit. Bridges and castles distribute loads through their shapes and materials. Cars and computers are made by assembling different components; a computer processes data. A boat floats when the buoyant force from displaced water balances its weight. Lift, weight, thrust, and drag all affect flight.",
  "Prueba segura: dobla una hoja de papel como acordeón y úsala como puente entre dos libros. Añade monedas una a una y observa cómo la forma distribuye la carga.": "Safe experiment: fold a sheet of paper like an accordion and use it as a bridge between two books. Add coins one at a time and observe how its shape distributes the load.",
  "La densidad compara masa con volumen; materiales distintos, como agua, hielo y roca, tienen densidades distintas.": "Density compares mass with volume; different materials, such as water, ice, and rock, have different densities.",
  "Países y continentes": "Countries and continents", "Un modelo escolar común cuenta siete continentes. Cada país tiene símbolos propios; la bandera ayuda a reconocerlo.": "A common school model counts seven continents. Each country has its own symbols; its flag helps identify it.",
  "Un monumento en Brasil": "A landmark in Brazil", "El Cristo Redentor se alza sobre Río de Janeiro. La ciudad y su paisaje forman parte de un sitio del Patrimonio Mundial de la UNESCO.": "Christ the Redeemer overlooks Rio de Janeiro. The city and its landscape are part of a UNESCO World Heritage site.",
  "Tierra en movimiento": "Earth in motion", "El magma que llega a la superficie puede formar un volcán. Un terremoto es un movimiento repentino del suelo; bajo el mar, un desplazamiento puede iniciar un tsunami.": "Magma reaching the surface can form a volcano. An earthquake is sudden ground movement; under the sea, displacement can start a tsunami.",
  "Agua y densidad": "Water and density", "La densidad compara la masa con el volumen. El hielo común es menos denso que el agua líquida y por eso flota.": "Density compares mass with volume. Common ice is less dense than liquid water, which is why it floats.",
  "Frida y sus retratos": "Frida and her portraits", "Frida Kahlo fue una pintora mexicana; en sus autorretratos aparecen símbolos de su vida y cultura.": "Frida Kahlo was a Mexican painter; her self-portraits include symbols from her life and culture.",
  "Einstein, físico": "Einstein, physicist", "Albert Einstein desarrolló la teoría de la relatividad; su trabajo cambió la manera de entender el espacio, el tiempo y la gravedad.": "Albert Einstein developed the theory of relativity; his work changed how we understand space, time, and gravity.",
  "Museos y arqueología": "Museums and archaeology", "Los museos cuidan objetos y relatos; la arqueología estudia huellas materiales de las civilizaciones, con atención a su contexto.": "Museums care for objects and stories; archaeology studies material traces of civilizations in context.",
  "Primera Guerra Mundial": "World War I", "Ocurrió entre 1914 y 1918 y afectó a personas de muchos países. Podemos estudiar sus causas y las vidas civiles sin usar imágenes gráficas.": "It took place from 1914 to 1918 and affected people in many countries. We can study its causes and civilian lives without graphic images.",
  "Segunda Guerra Mundial": "World War II", "Ocurrió entre 1939 y 1945. El estudio respetuoso de sus efectos puede abrir conversaciones sobre derechos, memoria y paz.": "It took place from 1939 to 1945. Respectfully studying its effects can open conversations about rights, remembrance, and peace.",
  "Un esqueleto vivo": "A living skeleton", "Los huesos sostienen el cuerpo, protegen órganos y, junto con los músculos, ayudan al movimiento.": "Bones support the body, protect organs, and help us move together with muscles.",
  "Aire en movimiento": "Air in motion", "Al inhalar, el aire llega a los pulmones, donde parte del oxígeno pasa a la sangre.": "When you breathe in, air reaches the lungs, where some oxygen passes into the blood.",
  "Mensajes rápidos": "Fast messages", "El sistema nervioso recibe y transmite señales entre el cerebro, la médula espinal y el resto del cuerpo.": "The nervous system receives and sends signals between the brain, spinal cord, and the rest of the body.",
  "La energía de las hojas": "Energy in leaves", "La fotosíntesis transforma energía luminosa; muchas plantas liberan oxígeno durante el proceso.": "Photosynthesis transforms light energy; many plants release oxygen during the process.",
  "Un mamífero que pone huevos": "An egg-laying mammal", "El ornitorrinco es un mamífero monotremo: pone huevos y alimenta a sus crías con leche.": "The platypus is a monotreme mammal: it lays eggs and feeds its young with milk.",
  "Hogares conectados": "Connected homes", "Un ecosistema incluye seres vivos y el entorno físico con el que interactúan.": "An ecosystem includes living things and the physical environment they interact with.",
  "Clasificar de varias formas": "More than one way to classify", "Ovíparo se refiere a poner huevos; mamífero, a un grupo con varios rasgos. Un ornitorrinco es ambas cosas.": "Egg-laying refers to reproduction; mammal refers to an animal group with several traits. A platypus is both.",
  "La Luna cambia de aspecto": "The Moon's changing appearance", "Las fases lunares ocurren porque desde la Tierra vemos distintas porciones de su mitad iluminada por el Sol.": "Moon phases happen because from Earth we see different portions of its half lit by the Sun.",
  "Barcos que flotan": "Why boats float", "El empuje del agua desplazada puede equilibrar el peso del barco, incluso si su material es más denso que el agua.": "Buoyancy from displaced water can balance a boat's weight, even if its material is denser than water.",
  "Una estrella y sus planetas": "A star and its planets", "El Sol es una estrella; la Tierra y Marte son dos de los ocho planetas que orbitan alrededor de él.": "The Sun is a star; Earth and Mars are two of the eight planets orbiting it.",
  "Formas y estructuras": "Shapes and structures", "Arcos y triángulos aparecen en puentes y edificios porque sus formas pueden ayudar a repartir fuerzas.": "Arches and triangles appear in bridges and buildings because their shapes can help distribute forces.",
  "Muchas piezas, un sistema": "Many parts, one system", "Autos y computadoras se ensamblan con componentes que cumplen trabajos distintos; una computadora procesa información.": "Cars and computers are assembled from components with different jobs; a computer processes information.",
  "Prueba en casa:": "Try at home:",
  "País con su bandera": "Match a country to its flag", "Toca un país y luego la bandera que lo representa.": "Tap a country, then the flag that represents it.",
  "Persona o disciplina con su pista": "Match a person or field to a clue", "Une cada nombre con una idea asociada.": "Match each name with an associated idea.",
  "Órgano con su función": "Match an organ to its function", "Elige un órgano y encuentra qué trabajo hace.": "Choose an organ and find its job.",
  "Animal con su hábitat": "Match an animal to its habitat", "Une el animal con un hábitat donde puede vivir.": "Match the animal to a habitat where it can live.",
  "Planeta con una pista": "Match a planet to a clue", "Une cada mundo con una descripción sencilla.": "Match each world with a simple description.",
  "Elige dos tarjetas para comprobar una pareja.": "Choose two cards to check a match.",
  "Ahora elige la tarjeta que crees que corresponde.": "Now choose the card you think matches.",
  "Elige una tarjeta de la otra columna.": "Choose a card from the other column.",
  "¡Correcto!": "That's right!", "Todavía no hacen pareja. Prueba otra combinación; puedes volver a intentar cuando quieras.": "Not a match yet. Try another combination; you can try again whenever you like.",
  "Volver a intentar": "Try again", "JUEGO DE PAREJAS": "MATCHING GAME", "RETO FAMILIAR": "FAMILY CHALLENGE",
  "También puedes usar Tab y Enter.": "You can also use Tab and Enter.",
  "Columna A": "Column A", "Columna B": "Column B",
  "El misterio del hielo": "The ice mystery", "Detectives de objetos": "Object detectives",
  "El cuerpo en movimiento": "The moving body", "Un minuto de naturaleza": "One minute in nature",
  "Puente de papel": "Paper bridge", "Aprender juntos": "Learning together",
  "¿Por qué flota el hielo? Compara un cubito en agua dulce con uno en agua salada. Pide ayuda adulta para manipular recipientes.": "Why does ice float? Compare an ice cube in fresh water with one in salt water. Ask an adult to help handle containers.",
  "Elijan un objeto antiguo de casa y formulen tres preguntas sobre su historia. No hace falta adivinar: las preguntas también son descubrimientos.": "Choose an old object at home and ask three questions about its story. You don't have to guess; questions are discoveries too.",
  "Caminen suavemente durante un minuto y luego noten su respiración. ¿Qué cambió? Cada cuerpo puede sentirse distinto.": "Walk gently for one minute, then notice your breathing. What changed? Every body may feel different.",
  "Encuentren una planta cercana y dibujen lo que la rodea: suelo, luz, insectos u otras plantas. No recojan seres vivos.": "Find a nearby plant and draw what surrounds it: soil, light, insects, or other plants. Don't collect living things.",
  "Coloquen una hoja entre dos libros y prueben primero plana y luego doblada como acordeón. Añadan monedas pequeñas de una en una con una persona adulta cerca.": "Place a sheet of paper between two books and test it flat, then folded like an accordion. Add small coins one at a time with an adult nearby.",
  "Prueben el desafío sencillo para conversar y experimentar lejos de la pantalla.": "Try this simple challenge to talk and experiment away from the screen.",
  "Ver reto de hoy": "See today's challenge", "Elegir otro reto": "Choose another challenge",
  "Álbum privado": "Private album", "Comunidad de práctica": "Practice community", "Aprobaciones": "Approvals",
  "Todos los temas": "All topics", "Solo mi familia": "My family only",
  "Comunidad (demo)": "Community (demo)", "Crear publicación": "Create a post",
  "Pendiente": "Pending", "Privada": "Private", "Comunidad": "Community",
  "Este rincón está esperando": "This space is waiting", "No hay publicaciones infantiles pendientes de revisar.": "There are no children's posts waiting for review.",
  "Todavía no hay publicaciones comunitarias en este tema. El ejemplo puede estar en otra categoría.": "There are no community posts in this topic yet. The example may be in another category.",
  "Aún no hay descubrimientos guardados aquí. ¡Crea la primera publicación familiar!": "No discoveries saved here yet. Create your family's first post!",
  "Familia de demostración": "Demo family", "Ejemplo ficticio · no es una publicación real": "Fictional example · not a real post",
  "Editar": "Edit", "Eliminar": "Delete", "Aprobar": "Approve", "Dejar privada": "Keep private",
  "Hacer privada": "Make private", "Pedir compartir": "Request to share", "⚑ Reportar": "⚑ Report",
  "Solo mi familia": "My family only", "Las publicaciones privadas se guardan en este navegador. Elige “Solo mi familia” al crear una publicación para mantenerla fuera de la comunidad de práctica.": "Private posts are saved in this browser. Choose “My family only” when creating a post to keep it out of the practice community.",
  "Comunidad simulada:": "Simulated community:",
  "solo son datos de demostración guardados en este navegador. No se publica nada en Internet ni se muestra a familias reales.": "demo data saved in this browser only. Nothing is posted online or shown to real families.",
  "Revisa las publicaciones creadas desde perfiles infantiles antes de que aparezcan en esta comunidad simulada.": "Review posts created from child profiles before they appear in this simulated community.",
  "un perfil infantil": "a child profile",
  "Perfiles y ajustes": "Profiles & settings", "Cambia de módulo familiar y administra el progreso local.": "Switch family modes and manage local progress.",
  "Perfiles de demostración": "Demo profiles",
  "El perfil de mamá abre el módulo para padres. Los perfiles infantiles adaptan el lenguaje según la edad elegida.": "The Mom profile opens parent mode. Child profiles adapt the language to the selected age.",
  "Seleccionado": "Selected", "Elegir": "Choose", "Listo": "Done",
  "Avatares aprobados": "Approved avatars",
  "Esta demo pública usa iconos genéricos y no incluye avatares familiares.": "This public demo uses generic icons and excludes family avatar images.",
  "Esta demo pública usa iconos genéricos y no incluye avatares familiares.": "This public demo uses generic icons and excludes family avatar images.",
  "Ajustes y privacidad": "Settings & privacy",
  "Este prototipo no tiene cuentas ni servidor.": "This prototype has no accounts or server.",
  "Datos locales": "Local data",
  "Perfiles, avance, publicaciones y reportes se guardan en localStorage de este navegador. No es un control de privacidad seguro ni una cuenta protegida; quien use el mismo dispositivo podría ver esos datos.": "Profiles, progress, posts, and reports are saved in this browser's localStorage. This is not a secure privacy control or protected account; someone using the same device may see the data.",
  "Fotos y seguridad infantil": "Photos & child safety",
  "La vista previa se procesa en el navegador y la imagen se guarda localmente. Evita rostros identificables, nombres completos, escuela y ubicación precisa. La comunidad es una simulación local, no una plataforma moderada.": "The preview is processed in the browser and the image is saved locally. Avoid identifiable faces, full names, school, and precise location. The community is a local simulation, not a moderated platform.",
  "Avatares": "Avatars",
  "Reiniciar avance": "Reset progress", "Borrar datos de este navegador": "Clear this browser's data",
  "Nuevo descubrimiento familiar": "New family discovery", "Editar descubrimiento": "Edit discovery",
  "Evita nombres completos, escuela, contacto y ubicación precisa.": "Avoid full names, school, contact details, and precise location.",
  "Tema": "Topic", "Descripción": "Description", "Imagen (opcional)": "Image (optional)",
  "¿Dónde guardar?": "Where should it be saved?",
  "Opción predeterminada. Se queda en el álbum local de este navegador.": "Default option. It stays in this browser's local album.",
  "Necesita aprobación del módulo para padres antes de aparecer.": "Parent mode must approve it before it appears.",
  "Aparecerá solo en la comunidad simulada de este navegador.": "It will appear only in this browser's simulated community.",
  "Publicar desde un perfil infantil siempre requiere aprobación parental para solicitar compartir. No es una protección de servidor.": "Posts from a child profile always need parent approval before sharing. This is not server-side protection.",
  "Guardar cambios": "Save changes", "Guardar publicación": "Save post", "Cancelar": "Cancel",
  "La imagen aparecerá aquí": "Your image preview will appear here",
  "La imagen se guardará en este navegador.": "The image will be saved in this browser.",
  "Hasta 400 caracteres. Escribe sin incluir datos personales de niños.": "Up to 400 characters. Do not include children's personal information.",
  "Se guardará una copia reducida en este navegador. No se sube a Internet.": "A smaller copy will be saved in this browser. It is not uploaded to the internet.",
  "La imagen añadida a la publicación": "Image added to the post",
  "No se pudo guardar. Puede que el navegador se haya quedado sin espacio; intenta una imagen más pequeña.": "Could not save. The browser may be out of space; try a smaller image.",
  "Tema marcado como explorado en este navegador.": "Topic marked as explored in this browser.",
  "Se quitó la marca de exploración.": "Exploration mark removed.",
  "Completa la descripción y elige un tema.": "Add a description and choose a topic.",
  "No se pudo leer la imagen.": "Could not read the image.",
  "No se pudo abrir la imagen.": "Could not open the image.",
  "No se pudo preparar la vista previa.": "Could not prepare the preview.",
  "Elige un archivo de imagen válido.": "Choose a valid image file.",
  "Guardar en familia": "Save for family",
  "Solicitud enviada al módulo para padres.": "Request sent to parent mode.",
  "Aprobada para la comunidad simulada de este navegador.": "Approved for this browser's simulated community.",
  "Se guardó en el álbum familiar sin compartir.": "Saved to the family album without sharing.",
  "La publicación ahora es privada.": "The post is now private.",
  "Visible en la comunidad simulada.": "Visible in the simulated community.",
  "Reporte guardado en la simulación local; no lo recibe un equipo de moderación.": "Report saved in the local simulation; no moderation team receives it.",
  "Ya reportaste esta publicación en este navegador.": "You already reported this post in this browser.",
  "Cambia al módulo para padres o al perfil que creó la publicación.": "Switch to parent mode or the profile that created the post.",
  "Solo el módulo para padres puede aprobar.": "Only parent mode can approve.",
  "Solo el perfil creador o el módulo para padres puede eliminarla.": "Only the creator profile or parent mode can delete it.",
  "¿Eliminar publicación?": "Delete post?",
  "Esta acción solo afecta a los datos locales de este navegador.": "This only affects local data in this browser.",
  "Publicación eliminada de este navegador.": "Post deleted from this browser.",
  "El mensaje says": "The message says",
  "🔭 Astronomía": "🔭 Astronomy", "🌉 Ingeniería y tecnología": "🌉 Engineering & technology",
  "No se pudo guardar.": "Could not save.",
  "La Tierra": "Earth", "Bandera de Brasil": "Flag of Brazil", "Bandera de Japón": "Flag of Japan", "Bandera de Egipto": "Flag of Egypt",
  "Brasil": "Brazil", "Japón": "Japan", "Egipto": "Egypt", "América del Sur": "South America", "Asia": "Asia", "África": "Africa",
  "Albert Einstein": "Albert Einstein", "Frida Kahlo": "Frida Kahlo", "Arqueología": "Archaeology",
  "Físico; relatividad": "Physicist; relativity", "Pintora mexicana": "Mexican painter", "Estudia restos materiales": "Studies material remains",
  "Corazón": "Heart", "Pulmones": "Lungs", "Cerebro": "Brain", "Impulsa la sangre": "Pumps blood",
  "Intercambian gases": "Exchange gases", "Coordina señales": "Coordinates signals",
  "Camello": "Camel", "Rana": "Frog", "Oso polar": "Polar bear", "Desierto": "Desert", "Humedales": "Wetlands", "Ártico": "Arctic",
  "Tierra": "Earth", "Luna": "Moon", "Marte": "Mars", "Planeta que orbita el Sol": "Planet orbiting the Sun",
  "Satélite natural de la Tierra": "Earth's natural satellite", "Planeta rocoso": "Rocky planet",
  "MedlinePlus · órganos y sistemas": "MedlinePlus · organs and systems",
  "NHLBI · cómo funciona el corazón": "NHLBI · how the heart works", "NHLBI · pulmones": "NHLBI · lungs",
  "NHLBI · corazón": "NHLBI · heart", "NHLBI · órganos y sistemas": "NHLBI · organs and systems",
  "USGS · terremotos": "USGS · earthquakes", "National Geographic · países": "National Geographic · countries",
  "NOAA · tsunamis": "NOAA · tsunamis", "USGS · densidad del agua": "USGS · water density",
  "UNESCO · Río de Janeiro": "UNESCO · Rio de Janeiro",
  "Nobel Prize · Albert Einstein": "Nobel Prize · Albert Einstein", "Museo Frida Kahlo · Casa Azul": "Frida Kahlo Museum · Casa Azul",
  "National Park Service · arqueología": "National Park Service · archaeology",
  "Encyclopaedia Britannica · Primera Guerra Mundial": "Encyclopaedia Britannica · World War I",
  "USHMM · Segunda Guerra Mundial": "USHMM · World War II",
  "OpenStax · fotosíntesis": "OpenStax · photosynthesis", "Smithsonian National Zoo · animales": "Smithsonian National Zoo · animals",
  "Australian Museum · ornitorrinco": "Australian Museum · platypus",
  "NASA · datos del sistema solar": "NASA · solar system facts", "NASA Space Place · la Luna": "NASA Space Place · the Moon",
  "NASA · fuerzas de un avión": "NASA · forces on an airplane", "OpenStax · principio de Arquímedes": "OpenStax · Archimedes' principle",
  "No se encontró el archivo.": "File not found.",
  "🇧🇷": "🇧🇷", "🇯🇵": "🇯🇵", "🇪🇬": "🇪🇬",
  "Primeros pasos": "Getting started",
  "Aún no hay": "There are no",
  "MODO FAMILIA": "FAMILY MODE",
  "NO SE PUBLICA": "NOT SHARED",
  "Crea la primera publicación familiar": "Create the first family post",
  "Aún no hay descubrimientos guardados aquí. ¡Crea la primera publicación familiar!": "No discoveries saved here yet. Create your family's first post!",
  "Comunidad simulada:": "Simulated community:",
  "Revisa las publicaciones creadas desde perfiles infantiles antes de que aparezcan en esta comunidad simulada.": "Review posts created from child profiles before they appear in this simulated community.",
  "SOLO MI FAMILIA": "MY FAMILY ONLY",
  "EXPLORER": "EXPLORER",
  "Módulo para padres": "Parent mode",
  "Guarda": "Save",
  "Un mensaje educativo": "An educational message",
  "EN": "EN", "ES": "ES",
  "El aviso": "The notice",
  "¿Por qué necesitas acceso a": "Why do you need access to",
  "¿Podemos hacer esto con acceso solo a": "Can we do this with access only to",
  "Mis descubrimientos": "My discoveries",
  "Crear publicación": "Create a post",
  "Prueba en casa:": "Try at home:",
  "Escoge": "Choose",
  "La publicación ahora es privada.": "The post is now private.",
  "Familia de demostración": "Demo family",
  "Mi familia": "My family",
  "Peque explorador · familia": "Young explorer · family",
  "Ejemplo de demostración": "Demo example",
  "⭐": "⭐",
  "Elige un archivo de imagen válido.": "Choose a valid image file.",
  "Imagen añadida a la publicación": "Image added to the post",
  "Crear publicación familiar": "Create a family post",
  "Marcar este tema como explorado en este navegador": "Mark this topic as explored in this browser",
  "EXPLORAR": "EXPLORE",
  "El módulo para padres debe aprobarlo antes de compartir.": "Parent mode must approve it before sharing.",
  "La publicación se guardó en el álbum de este navegador.": "The post was saved in this browser's album.",
  "Un perfil familiar": "A family profile",
  "El sistema solar": "The solar system",
  "OTRA OPCIÓN": "ANOTHER OPTION",
  "Se actualizaron los ajustes": "Settings updated",
  "Adultos": "Adults", "Kid · mayor": "Older kid", "Kid · menor": "Younger kid",
  "Explorador · 5 años": "Explorer · 5 years old",
  "Abrir álbum familiar": "Open family album", "Álbum familiar": "Family album",
  "Perfiles y ajustes": "Profiles and settings", "Temas principales": "Main topics",
  "A PLACE FOR THE CURIOUS": "A PLACE FOR THE CURIOUS",
  "Elige un país y luego la bandera que lo representa.": "Choose a country, then the flag that represents it.",
  "La bandera verde y amarilla pertenece a Brasil, un país de América del Sur.": "The green and yellow flag belongs to Brazil, a country in South America.",
  "La bandera con un círculo rojo pertenece a Japón, un país insular de Asia.": "The flag with a red circle belongs to Japan, an island country in Asia.",
  "La bandera roja, blanca y negra pertenece a Egipto, un país de África.": "The red, white, and black flag belongs to Egypt, a country in Africa.",
  "Einstein fue un físico conocido por sus aportes a la teoría de la relatividad.": "Einstein was a physicist known for his contributions to the theory of relativity.",
  "Frida Kahlo fue una pintora mexicana, reconocida por sus autorretratos.": "Frida Kahlo was a Mexican painter known for her self-portraits.",
  "La arqueología estudia objetos y otros restos materiales de sociedades pasadas.": "Archaeology studies objects and other material remains from past societies.",
  "El corazón bombea sangre para que circule por el cuerpo.": "The heart pumps blood so it can circulate through the body.",
  "En los pulmones, el cuerpo toma oxígeno y elimina dióxido de carbono.": "In the lungs, the body takes in oxygen and releases carbon dioxide.",
  "El cerebro procesa información y coordina muchas funciones del cuerpo.": "The brain processes information and coordinates many body functions.",
  "El camello tiene adaptaciones que le ayudan a vivir en ambientes secos.": "Camels have adaptations that help them live in dry environments.",
  "Muchas ranas viven en ambientes húmedos y dependen del agua para parte de su ciclo de vida.": "Many frogs live in moist environments and depend on water for part of their life cycle.",
  "El oso polar vive en la región ártica y depende del hielo marino para cazar.": "Polar bears live in the Arctic and depend on sea ice to hunt.",
  "La Tierra es uno de los planetas que orbitan nuestra estrella, el Sol.": "Earth is one of the planets that orbit our star, the Sun.",
  "La Luna es el satélite natural de la Tierra.": "The Moon is Earth's natural satellite.",
  "Marte es un planeta rocoso del sistema solar.": "Mars is a rocky planet in the solar system.",
  "Elige una tarjeta y luego busca su pareja en la otra columna.": "Choose a card, then find its match in the other column.",
  "Encuentra las parejas tocando una tarjeta de cada columna.": "Find the pairs by tapping one card in each column.",
  "Las tarjetas se pueden seleccionar con clic o con teclado.": "Cards can be selected by clicking or using the keyboard.",
  "La densidad compara la masa con el volumen.": "Density compares mass with volume.",
  "El estudio respetuoso de sus efectos puede abrir conversaciones sobre derechos, memoria y paz.": "Respectfully studying its effects can open conversations about rights, remembrance, and peace.",
  "Los datos se guardan en este navegador.": "Data is saved in this browser.",
  "No se encontró el archivo.": "File not found.",
  "Ejemplo ficticio · no es una publicación real": "Fictional example · not a real post",
  "Publicación guardada en el álbum de este navegador.": "Post saved in this browser's album.",
  "Guardado. El módulo para padres debe aprobarlo antes de compartir.": "Saved. Parent mode must approve it before sharing.",
  "Reporte guardado en la simulación local; no lo recibe un equipo de moderación.": "Report saved in the local simulation; no moderation team receives it.",
  "Aprobada para la comunidad simulada de este navegador.": "Approved for this browser's simulated community.",
  "Solicitud enviada al módulo para padres.": "Request sent to parent mode.",
  "Cambiar idioma a inglés": "Switch language to English",
  "Subject:": "Subject:",
  "🇧🇷 Brasil": "🇧🇷 Brazil", "🇯🇵 Japón": "🇯🇵 Japan", "🇪🇬 Egipto": "🇪🇬 Egypt",
  "↗ USGS · terremotos": "↗ USGS · earthquakes",
  "↗ National Geographic · países": "↗ National Geographic · countries",
  "↗ NOAA · tsunamis": "↗ NOAA · tsunamis",
  "↗ USGS · densidad del agua": "↗ USGS · water density",
  "↗ UNESCO · Río de Janeiro": "↗ UNESCO · Rio de Janeiro",
  "↗ Nobel Prize · Albert Einstein": "↗ Nobel Prize · Albert Einstein",
  "↗ Museo Frida Kahlo · Casa Azul": "↗ Frida Kahlo Museum · Casa Azul",
  "↗ National Park Service · arqueología": "↗ National Park Service · archaeology",
  "↗ Encyclopaedia Britannica · Primera Guerra Mundial": "↗ Encyclopaedia Britannica · World War I",
  "↗ USHMM · Segunda Guerra Mundial": "↗ USHMM · World War II",
  "↗ OpenStax · fotosíntesis": "↗ OpenStax · photosynthesis",
  "↗ Smithsonian National Zoo · animales": "↗ Smithsonian National Zoo · animals",
  "↗ Australian Museum · ornitorrinco": "↗ Australian Museum · platypus",
  "↗ NASA · datos del sistema solar": "↗ NASA · solar system facts",
  "↗ NASA Space Place · la Luna": "↗ NASA Space Place · the Moon",
  "↗ NASA · fuerzas de un avión": "↗ NASA · forces on an airplane",
  "↗ OpenStax · principio de Arquímedes": "↗ OpenStax · Archimedes' principle",
  "¡Completado! Cada pareja tiene una explicación. Puedes volver a intentarlo.": "Complete! Every match has an explanation. You can try again.",
  "El mundo de la exploración": "A world of discovery",
  "A family profile": "A family profile",
  "Esta app no comparte contenido con usuarios reales.": "This app does not share content with real users.",
  "Solo mi familia": "My family only",
  "Solo mi familia": "My family only",
  "La comunidad es una simulación local, no una plataforma moderada.": "The community is a local simulation, not a moderated platform."
  ,"¿Qué evidencias nos ayudarían a explicar por qué unas cosas flotan y otras se hunden?": "What evidence could help explain why some things float and others sink?",
  "¿Qué puede contarnos un objeto y qué no podemos saber solo con mirarlo?": "What can an object tell us, and what can't we know just by looking at it?",
  "¿Qué cambios notamos en el cuerpo cuando caminamos y descansamos?": "What changes do we notice in our bodies when we walk and rest?",
  "¿Qué necesita una planta y qué seres vivos se relacionan con ella?": "What does a plant need, and what living things interact with it?",
  "¿Qué observaciones ayudan a distinguir una estrella, un planeta y un satélite?": "What observations help us tell a star, a planet, and a moon apart?",
  "Toca un país y luego la bandera que lo representa. También puedes usar Tab y Enter.": "Choose a country, then the flag that represents it. You can also use Tab and Enter.",
  "Une cada nombre con una idea asociada. También puedes usar Tab y Enter.": "Match each name with an associated idea. You can also use Tab and Enter.",
  "Elige un órgano y encuentra qué trabajo hace. También puedes usar Tab y Enter.": "Choose an organ and find its job. You can also use Tab and Enter.",
  "Une el animal con un hábitat donde puede vivir. También puedes usar Tab y Enter.": "Match the animal to a habitat where it can live. You can also use Tab and Enter.",
  "Une cada mundo con una descripción sencilla. También puedes usar Tab y Enter.": "Match each world with a simple description. You can also use Tab and Enter.",
  "Filtrar el álbum por tema": "Filter album by topic",
  "Idioma / Language / 言語 / Dil": "Language",
  " Adultos": " Adults",
  "Adultos": "Adults",
  "Kid · mayor": "Older kid",
  "Kid · menor": "Younger kid",
  "English": "English",
  "La app no comparte contenido con usuarios reales.": "The app does not share content with real users.",
  "Un planeta lleno de lugares, formas y fuerzas sorprendentes.": "A planet full of remarkable places, landforms, and forces.",
  "🧭": "🧭",
  "＋ Crear publicación": "＋ Create a post",
  "Todos los temas": "All topics",
  "La Tierra": "Earth",
  "Historia": "History",
  "El cuerpo": "The body",
  "Vida natural": "Nature",
  "Espacio e inventos": "Space & inventions",
  "↗ MedlinePlus · órganos y sistemas": "↗ MedlinePlus · organs and systems",
  "↗ NHLBI · cómo funciona el corazón": "↗ NHLBI · how the heart works",
  "↗ NHLBI · pulmones": "↗ NHLBI · lungs",
  "El perfil Adultos abre el módulo para padres. Los perfiles infantiles adaptan el lenguaje según la edad elegida.": "The Adults profile opens parent mode. Kids' profiles adapt the language to the selected age.",
  "El país y su bandera": "Country and flag",
  "Elige un país y luego la bandera que lo representa.": "Choose a country, then the flag that represents it.",
  "La bandera verde y amarilla pertenece a Brasil, un país de América del Sur.": "The green and yellow flag belongs to Brazil, a country in South America.",
  "La bandera con un círculo rojo pertenece a Japón, un país insular de Asia.": "The flag with a red circle belongs to Japan, an island country in Asia.",
  "La bandera roja, blanca y negra pertenece a Egipto, un país de África.": "The red, white, and black flag belongs to Egypt, a country in Africa.",
  "El sistema solar": "The solar system",
  "El camello tiene adaptaciones que le ayudan a vivir en ambientes secos.": "Camels have adaptations that help them live in dry environments.",
  "Muchas ranas viven en ambientes húmedos y dependen del agua para parte de su ciclo de vida.": "Many frogs live in moist environments and depend on water for part of their life cycle.",
  "El oso polar vive en la región ártica y depende del hielo marino para cazar.": "Polar bears live in the Arctic and depend on sea ice to hunt.",
  "La Tierra es uno de los planetas que orbitan nuestra estrella, el Sol.": "Earth is one of the planets that orbit our star, the Sun.",
  "La Luna es el satélite natural de la Tierra.": "The Moon is Earth's natural satellite.",
  "Marte es un planeta rocoso del sistema solar.": "Mars is a rocky planet in the solar system.",
  "Toca un país y luego la bandera que lo representa. También puedes usar Tab y Enter.": "Choose a country, then its flag. You can also use Tab and Enter.",
  "↗ OpenStax · fotosíntesis": "↗ OpenStax · photosynthesis",
  "↗ Smithsonian National Zoo · animales": "↗ Smithsonian National Zoo · animals",
  "↗ Australian Museum · ornitorrinco": "↗ Australian Museum · platypus",
  "↗ NASA · datos del sistema solar": "↗ NASA · solar system facts",
  "↗ NASA Space Place · la Luna": "↗ NASA Space Place · the Moon",
  "↗ NASA · fuerzas de un avión": "↗ NASA · forces on an airplane",
  "↗ OpenStax · principio de Arquímedes": "↗ OpenStax · Archimedes' principle",
  "El hielo": "Ice",
  "Agua y densidad": "Water and density",
  "Toca un país y luego la bandera que lo representa.": "Choose a country and then its flag.",
  "Pregunta para conversar:": "Conversation starter:",
  "¿Por qué flota el hielo? Compara un cubito en agua dulce con uno en agua salada. Pide ayuda adulta para manipular recipientes.": "Why does ice float? Compare an ice cube in fresh water with one in salt water. Ask an adult to help handle containers.",
  "Elijan un objeto antiguo de casa y formulen tres preguntas sobre su historia. No hace falta adivinar: las preguntas también son descubrimientos.": "Choose an old object at home and ask three questions about its story. You don't have to guess; questions are discoveries too.",
  "Caminen suavemente durante un minuto y luego noten su respiración. ¿Qué cambió? Cada cuerpo puede sentirse distinto.": "Walk gently for one minute, then notice your breathing. What changed? Every body may feel different.",
  "Encuentren una planta cercana y dibujen lo que la rodea: suelo, luz, insectos u otras plantas. No recojan seres vivos.": "Find a nearby plant and draw what surrounds it: soil, light, insects, or other plants. Don't collect living things.",
  "Coloquen una hoja entre dos libros y prueben primero plana y luego doblada como acordeón. Añadan monedas pequeñas de una en una con una persona adulta cerca.": "Place a sheet of paper between two books and test it flat, then folded like an accordion. Add small coins one at a time with an adult nearby.",
  "Ver reto de hoy": "See today's challenge",
  "El misterio del hielo": "The ice mystery",
  "Detectives de objetos": "Object detectives",
  "El cuerpo en movimiento": "The moving body",
  "Un minuto de naturaleza": "One minute in nature",
  "Puente de papel": "Paper bridge",
  "Aprender juntos": "Learning together",
  "Prueben el desafío sencillo para conversar y experimentar lejos de la pantalla.": "Try this simple challenge to talk and experiment away from the screen.",
  "0 de 3 parejas encontradas.": "0 of 3 matches found.",
  "Elige dos tarjetas para comprobar una pareja.": "Choose two cards to check a match.",
  "Toca un país y luego la bandera que lo representa. También puedes usar Tab y Enter.": "Choose a country, then the flag that represents it. You can also use Tab and Enter.",
  "Une cada nombre con una idea asociada. También puedes usar Tab y Enter.": "Match each name with an associated idea. You can also use Tab and Enter.",
  "Elige un órgano y encuentra qué trabajo hace. También puedes usar Tab y Enter.": "Choose an organ and find its job. You can also use Tab and Enter.",
  "Une el animal con un hábitat donde puede vivir. También puedes usar Tab y Enter.": "Match the animal to a habitat where it can live. You can also use Tab and Enter.",
  "Une cada mundo con una descripción sencilla. También puedes usar Tab y Enter.": "Match each world with a simple description. You can also use Tab and Enter.",
  "🌎": "🌎"
};
const JAPANESE = {
  "Saltar al contenido": "本文へスキップ",
  "Pequeños descubrimientos, grandes conversaciones.": "小さな発見から、大きな会話へ。",
  "Abrir álbum familiar": "家族アルバムを開く", "Álbum familiar": "家族アルバム",
  "Perfiles y ajustes": "プロフィールと設定", "EXPLORAR": "探検する",
  "Cinco temas": "5つのテーマ", "Temas principales": "主なテーマ",
  "Un mundo de ideas para descubrir": "発見がいっぱいの世界",
  "juntos": "一緒に", "Siempre gratis. Sin bloqueos.": "いつでも無料。ロックなし。",
  "Perfil familiar": "家族プロフィール", "UN RINCÓN PARA CURIOSOS": "好奇心いっぱいの場所",
  "Hola, familia": "こんにちは、みんな", "¿Quién viene a explorar hoy?": "今日は誰と探検する？",
  "Elegir perfil": "プロフィールを選ぶ", "Edad:": "年齢：",
  "Un prototipo educativo · Comunidad de demostración": "学習用プロトタイプ · デモコミュニティ",
  "Ajustes y privacidad": "設定とプライバシー", "Geografía y la Tierra": "地理と地球", "La Tierra": "地球",
  "Historia y cultura": "歴史と文化", "Historia": "歴史",
  "Cuerpo humano y biología": "人体と生物学", "El cuerpo": "体",
  "Animales y plantas": "動物と植物", "Vida natural": "自然",
  "Espacio, ingeniería y tecnología": "宇宙・工学・テクノロジー", "Espacio e inventos": "宇宙と発明",
  "Adultos": "大人", "Niños": "子ども", "Guía familiar": "家族のガイド", "Exploren juntos": "一緒に探検しよう", "Módulo para padres": "保護者モード",
  "Elige Adultos o Niños. En Niños, selecciona una franja de edad para adaptar las explicaciones y los retos.": "大人または子どもを選びます。子どもでは年齢層を選んで説明や課題を調整します。",
  "Niño mayor": "年上の子ども", "Niño menor": "年下の子ども",
  "Explorador · 7 años": "探検家 · 7歳", "Explorador · 4 años": "探検家 · 4歳",
  "Hoy aprendemos a la altura de cada edad.": "年齢に合わせて一緒に学びましょう。",
  "TEMA 01 · MODO FAMILIA": "テーマ01 · 家族モード", "MODO FAMILIA": "家族モード", "MODO EXPLORADOR": "探検モード",
  "ÁLBUM DE DESCUBRIMIENTOS": "発見アルバム", "Recuerdos y hallazgos": "思い出と発見",
  "Un espacio de práctica en este dispositivo. Las publicaciones no salen a una comunidad real.": "この端末だけで使う練習スペースです。投稿は実際のコミュニティには共有されません。",
  "Aprende": "学ぶ", "¿Sabías que…?": "知ってた？", "Juega": "遊ぶ", "Álbum": "アルバム",
  "PARA ACOMPAÑAR": "保護者向け", "LECCIÓN CORTITA": "ミニレッスン",
  "Prueba o conversa:": "試して話してみよう：", "Pregunta para conversar:": "話し合う質問：",
  "Mira de cerca. Pregunta. Descubre.": "よく見て、質問して、発見しよう。",
  "Imagina · construye · prueba": "想像する · 作る · 試す",
  "Marcar este tema como explorado en este navegador": "このブラウザーで学習済みにする",
  "Un planeta lleno de lugares, formas y fuerzas sorprendentes.": "驚きの場所、地形、力にあふれた惑星。",
  "Personas, ideas y objetos que nos cuentan cómo vivían otros.": "昔の暮らしを伝える人々、考え、もの。",
  "Un equipo de órganos que trabaja junto a cada momento.": "いつも協力して働く体の器官。",
  "Seres vivos, sus hogares y las relaciones que los conectan.": "生き物とすみか、つながりを見つけよう。",
  "Del sistema solar a los inventos que nos ayudan a movernos.": "太陽系から、暮らしを支える発明まで。",
  "Nuestro planeta cambiante": "変化する地球", "Pistas del pasado": "過去の手がかり",
  "Un cuerpo, muchos equipos": "体の中のチーム", "La vida se adapta": "生き物の適応",
  "Ideas que giran y se construyen": "宇宙とものづくり",
  "País con su bandera": "国と国旗をマッチ", "Toca un país y luego la bandera que lo representa。": "国を選んで、その国の旗を選ぼう。",
  "Persona o disciplina con su pista": "人物・分野とヒントをマッチ", "Une cada nombre con una idea asociada.": "名前と関連する説明を組み合わせよう。",
  "Órgano con su función": "器官と働きをマッチ", "Elige un órgano y encuentra qué trabajo hace.": "器官を選び、その働きを見つけよう。",
  "Animal con su hábitat": "動物とすみかをマッチ", "Une el animal con un hábitat donde puede vivir.": "動物と暮らせる環境を組み合わせよう。",
  "Planeta con una pista": "惑星とヒントをマッチ", "Une cada mundo con una descripción sencilla.": "天体と簡単な説明を組み合わせよう。",
  "Elige dos tarjetas para comprobar una pareja.": "カードを2枚選んで組み合わせを確かめよう。",
  "Ahora elige la tarjeta que crees que corresponde.": "次に、合うと思うカードを選ぼう。",
  "Elige una tarjeta de la otra columna.": "反対側の列からカードを選ぼう。",
  "Volver a intentar": "もう一度", "JUEGO DE PAREJAS": "ペアゲーム", "RETO FAMILIAR": "家族チャレンジ",
  "También puedes usar Tab y Enter.": "TabキーとEnterキーも使えます。",
  "Columna A": "Aの列", "Columna B": "Bの列",
  "Álbum privado": "家族アルバム", "Comunidad de práctica": "練習コミュニティ", "Aprobaciones": "承認",
  "Todos los temas": "すべてのテーマ", "Solo mi familia": "家族だけ", "Comunidad (demo)": "コミュニティ（デモ）",
  "Crear publicación": "投稿を作成", "Pendiente": "承認待ち", "Privada": "非公開", "Comunidad": "コミュニティ",
  "Este rincón está esperando": "ここに発見を残そう", "No hay publicaciones infantiles pendientes de revisar.": "確認待ちの子どもの投稿はありません。",
  "Familia de demostración": "デモ家族", "Ejemplo ficticio · no es una publicación real": "架空の例 · 実際の投稿ではありません",
  "Editar": "編集", "Eliminar": "削除", "Aprobar": "承認", "Dejar privada": "家族だけにする",
  "Hacer privada": "非公開にする", "Pedir compartir": "共有を申請", "⚑ Reportar": "⚑ 報告",
  "Ajustes y privacidad": "設定とプライバシー", "Datos locales": "端末内のデータ",
  "Fotos y seguridad infantil": "写真と子どもの安全", "Avatares": "アバター",
  "Avatares aprobados": "承認済みアバター",
  "Esta demo pública usa iconos genéricos y no incluye avatares familiares.": "この公開デモは汎用アイコンを使用し、家族のアバター画像は含まれません。",
  "Esta demo pública usa iconos genéricos y no incluye avatares familiares.": "この公開デモは汎用アイコンを使用し、家族のアバター画像は含まれません。",
  "Tema": "テーマ", "Descripción": "説明", "Imagen (opcional)": "画像（任意）",
  "¿Dónde guardar?": "保存先", "Cancelar": "キャンセル", "Guardar cambios": "変更を保存",
  "Guardar publicación": "投稿を保存", "Nuevo descubrimiento familiar": "家族の新しい発見",
  "Editar descubrimiento": "発見を編集", "Elegir": "選択", "Seleccionado": "選択済み",
  "Listo": "完了", "Aprobar publicación": "投稿を承認", "Mi familia": "家族",
  "USGS · terremotos": "USGS · 地震", "National Geographic · países": "National Geographic · 国",
  "NOAA · tsunamis": "NOAA · 津波", "USGS · densidad del agua": "USGS · 水の密度",
  "UNESCO · Río de Janeiro": "UNESCO · リオデジャネイロ",
  "Nobel Prize · Albert Einstein": "ノーベル賞 · アルバート・アインシュタイン",
  "Museo Frida Kahlo · Casa Azul": "フリーダ・カーロ美術館 · 青い家",
  "National Park Service · arqueología": "米国国立公園局 · 考古学",
  "OpenStax · fotosíntesis": "OpenStax · 光合成",
  "Smithsonian National Zoo · animales": "スミソニアン国立動物園 · 動物",
  "Australian Museum · ornitorrinco": "オーストラリア博物館 · カモノハシ",
  "NASA · datos del sistema solar": "NASA · 太陽系のデータ", "NASA Space Place · la Luna": "NASA Space Place · 月",
  "NASA · fuerzas de un avión": "NASA · 飛行機に働く力",
  "Brasil": "ブラジル", "Japón": "日本", "Egipto": "エジプト",
  "Bandera de Brasil": "ブラジルの国旗", "Bandera de Japón": "日本の国旗", "Bandera de Egipto": "エジプトの国旗",
  "Corazón": "心臓", "Pulmones": "肺", "Cerebro": "脳",
  "Camello": "ラクダ", "Rana": "カエル", "Oso polar": "ホッキョクグマ",
  "Desierto": "砂漠", "Humedales": "湿地", "Ártico": "北極圏",
  "Tierra": "地球", "Luna": "月", "Marte": "火星",
  "La energía de las hojas": "葉のエネルギー",
  "Un mamífero que pone huevos": "卵を産む哺乳類",
  "Hogares conectados": "つながる生態系",
  "Clasificar de varias formas": "いろいろな分類",
  "Un esqueleto vivo": "生きた骨格", "Aire en movimiento": "動く空気",
  "Mensajes rápidos": "すばやいメッセージ",
  "La Luna cambia de aspecto": "形を変える月", "Barcos que flotan": "浮かぶ船",
  "Una estrella y sus planetas": "恒星と惑星", "Formas y estructuras": "形と構造",
  "Muchas piezas, un sistema": "たくさんの部品、一つのシステム",
  "Primera Guerra Mundial": "第一次世界大戦", "Segunda Guerra Mundial": "第二次世界大戦",
  "Frida y sus retratos": "フリーダと自画像", "Einstein, físico": "物理学者アインシュタイン",
  "Museos y arqueología": "博物館と考古学"
  ,"La Tierra tiene continentes y países con banderas distintas. Un monumento como el Cristo Redentor está en Brasil. Los volcanes pueden expulsar lava; los terremotos ocurren cuando se mueve el suelo, y un tsunami puede empezar por un movimiento bajo el mar. La densidad compara cuánto material hay en un espacio: el hielo flota porque es menos denso que el agua líquida。": "地球には大陸があり、国ごとに異なる国旗があります。ブラジルにはキリスト像のような名所があります。火山は溶岩を噴き出すことがあり、地震では地面が動きます。津波は海底の動きから始まることがあります。密度は一定の空間にどれだけ物質があるかを表します。氷は液体の水より密度が低いため浮かびます。",
  "La Tierra tiene continentes y países con banderas distintas. Un monumento como el Cristo Redentor está en Brasil. Los volcanes pueden expulsar lava; los terremotos ocurren cuando se mueve el suelo, y un tsunami puede empezar por un movimiento bajo el mar. La densidad compara cuánto material hay en un espacio: el hielo flota porque es menos denso que el agua líquida.": "地球には大陸があり、国ごとに異なる国旗があります。ブラジルにはキリスト像のような名所があります。火山は溶岩を噴き出すことがあり、地震では地面が動きます。津波は海底の動きから始まることがあります。密度は一定の空間にどれだけ物質があるかを表します。氷は液体の水より密度が低いため浮かびます。",
  "Un continente reúne grandes regiones de tierra y contiene muchos países, cada uno con símbolos como su bandera. El Cristo Redentor está en Río de Janeiro, Brasil. El magma que asciende puede formar volcanes; el deslizamiento repentino en una falla causa muchos terremotos, y un desplazamiento del fondo marino puede generar tsunamis. La densidad compara masa con volumen; materiales distintos, como agua, hielo y roca, tienen densidades distintas.": "大陸は広い陸地のまとまりで、多くの国があります。各国には国旗などのシンボルがあります。キリスト像はブラジルのリオデジャネイロにあります。上昇するマグマが火山を作ることがあり、断層の急なずれが多くの地震を起こします。海底の動きは津波を発生させることがあります。密度は質量と体積の関係で、水、氷、岩石では異なります。",
  "Prueba en casa: coloca un cubito de hielo en un vaso con agua y observa dónde queda. ¿Qué crees que cambiaría si el hielo se hundiera?": "家で試してみよう：水の入ったコップに氷を入れて、どこに浮かぶか観察しよう。もし氷が沈んだら何が変わると思う？",
  "La historia nos ayuda a conocer cómo vivían las personas. Los museos guardan objetos y los arqueólogos estudian cosas que quedaron de civilizaciones antiguas. La Primera Guerra Mundial ocurrió entre 1914 y 1918; la Segunda, entre 1939 y 1945. Muchísimas personas sufrieron: podemos aprender sobre sus vidas y sobre la paz sin ver imágenes fuertes. Frida Kahlo fue una pintora mexicana.": "歴史を学ぶと、昔の人々の暮らしがわかります。博物館は品物を保存し、考古学者は古代文明の遺物を調べます。第一次世界大戦は1914年から1918年、第二次世界大戦は1939年から1945年に起きました。多くの人が苦しみました。刺激の強い画像を見なくても、人々の暮らしや平和について学べます。フリーダ・カーロはメキシコの画家です。",
  "La historia combina fuentes escritas, objetos, imágenes y testimonios, considerando quién los produjo y en qué contexto. Los museos conservan colecciones; la arqueología estudia restos materiales de sociedades y civilizaciones. La Primera Guerra Mundial ocurrió entre 1914–1918 y la Segunda entre 1939–1945. Con niños, prioricen causas, experiencias civiles, memoria y construcción de paz; ajusten el lenguaje a la edad y eviten detalles gráficos.": "歴史では、誰がどのような背景で作ったかを考えながら、文書、品物、画像、証言を組み合わせます。博物館は収蔵品を保存し、考古学は社会や文明の物質的な遺跡を調べます。第一次世界大戦は1914～1918年、第二次世界大戦は1939～1945年に起きました。子どもとは原因、市民の経験、記憶、平和について話し、年齢に合わせた言葉を使い、刺激の強い描写は避けましょう。",
  "Mira un objeto de casa: ¿quién pudo usarlo?, ¿de qué está hecho?, ¿qué preguntas quedan sin responder?": "家にある物を見てみよう。誰が使ったのかな？何でできている？まだわからないことは何だろう？",
  "El corazón impulsa la sangre por el cuerpo. Los pulmones ayudan a tomar oxígeno del aire y a sacar dióxido de carbono. El cerebro recibe información y ayuda a coordinar acciones. Los órganos trabajan en equipo.": "心臓は血液を体に送り出します。肺は空気から酸素を取り込み、二酸化炭素を出します。脳は情報を受け取り、体の動きを調整します。器官は協力して働きます。",
  "Los sistemas cardiovascular, respiratorio y nervioso interactúan continuamente. El corazón mantiene el flujo sanguíneo; los pulmones realizan el intercambio de gases, y el sistema nervioso integra señales. Para observar sin instrumental, noten cómo cambia la respiración después de una caminata suave.": "循環器系、呼吸器系、神経系は常に連携しています。心臓は血流を保ち、肺はガス交換を行い、神経系は信号を統合します。特別な道具を使わずに、軽く歩いた後の呼吸の変化を観察できます。",
  "Pon una mano sobre el pecho y siente el pulso después de caminar despacio. Descansen si alguien se siente incómodo.": "ゆっくり歩いたあと、胸に手を当てて脈を感じてみよう。気分が悪くなったら休んでね。",
  "Las plantas crecen usando luz, agua y aire; con la fotosíntesis fabrican azúcares. Los animales se pueden clasificar de distintas maneras. “Mamífero” describe un grupo de animales y “ovíparo” uno que pone huevos: no son grupos opuestos. El ornitorrinco es un mamífero que pone huevos.": "植物は光、水、空気を使って育ち、光合成で糖を作ります。動物にはいろいろな分類方法があります。「哺乳類」は動物のグループ、「卵生」は卵を産むことを表します。反対の分類ではありません。カモノハシは卵を産む哺乳類です。",
  "En la fotosíntesis, plantas, algas y algunas bacterias convierten energía luminosa en energía química, usando agua y dióxido de carbono y liberando oxígeno. Raíces absorben agua y minerales; tallos sostienen y transportan sustancias. “Mamífero” describe un grupo biológico y “ovíparo” un modo de reproducción: las categorías no son opuestas. Los monotremas, como ornitorrincos y equidnas, son mamíferos que ponen huevos.": "光合成では、植物、藻類、一部の細菌が水と二酸化炭素を使って光エネルギーを化学エネルギーに変え、酸素を放出します。根は水やミネラルを吸収し、茎は体を支えて物質を運びます。「哺乳類」は生物のグループ、「卵生」は繁殖方法で、互いに反対ではありません。カモノハシやハリモグラなどの単孔類は卵を産む哺乳類です。",
  "Busca una planta y observa sus hojas. ¿Qué partes reciben luz? ¿Qué otros seres vivos usan ese lugar?": "植物を見つけて葉を観察しよう。どの部分に光が当たる？ほかにどんな生き物がいるかな？",
  "La Tierra es un planeta que gira alrededor del Sol, una estrella. La Luna gira alrededor de la Tierra. Puentes y castillos se diseñan para sostenerse; los autos y las computadoras se construyen con muchas piezas. Un barco desplaza agua para flotar; las alas y el movimiento del aire ayudan a que un avión vuele.": "地球は恒星である太陽の周りを回る惑星です。月は地球の周りを回ります。橋や城は支えられるように設計され、車やコンピューターは多くの部品で作られます。船は水を押しのけて浮かび、翼と空気の動きが飛行機の飛行を助けます。",
  "El sistema solar incluye el Sol, ocho planetas y sus satélites; la gravedad mantiene sus órbitas. Puentes y castillos distribuyen cargas por su forma y materiales. Autos y computadoras se fabrican ensamblando componentes distintos; una computadora procesa datos. Un barco flota cuando el empuje del agua desplazada equilibra su peso. En el vuelo intervienen sustentación, peso, empuje y resistencia del aire.": "太陽系には太陽、8つの惑星、衛星があり、重力が軌道を保ちます。橋や城は形や材料によって荷重を分散します。車やコンピューターは異なる部品を組み立てて作られ、コンピューターはデータを処理します。船は押しのけた水の浮力が重さと釣り合うと浮かびます。飛行には揚力、重力、推力、抗力が関係します。",
  "Prueba segura: dobla una hoja de papel como acordeón y úsala como puente entre dos libros. Añade monedas una a una y observa cómo la forma distribuye la carga.": "安全な実験：紙を蛇腹に折り、2冊の本の間に橋のように置きます。コインを1枚ずつ載せ、形が重さをどう分散するか観察しよう。",
  "Mira de cerca. Pregunta. Descubre.": "よく見て、質問して、発見しよう。",
  "Prueba o conversa:": "試して話してみよう：",
  "Pregunta para conversar:": "話し合う質問：",
  "¡Correcto!": "正解！", "Volver a intentar": "もう一度",
  "¡Completado! Cada pareja tiene una explicación. Puedes volver a intentarlo.": "クリア！すべてのペアに説明があります。もう一度挑戦できます。",
  "🌎": "🌎",
  "↗ USGS · terremotos": "↗ USGS · 地震",
  "↗ National Geographic · países": "↗ National Geographic · 国",
  "↗ NOAA · tsunamis": "↗ NOAA · 津波",
  "↗ USGS · densidad del agua": "↗ USGS · 水の密度",
  "↗ UNESCO · Río de Janeiro": "↗ UNESCO · リオデジャネイロ",
  "↗ Nobel Prize · Albert Einstein": "↗ ノーベル賞 · アルバート・アインシュタイン",
  "↗ Museo Frida Kahlo · Casa Azul": "↗ フリーダ・カーロ美術館 · 青い家",
  "↗ National Park Service · arqueología": "↗ 米国国立公園局 · 考古学",
  "↗ OpenStax · fotosíntesis": "↗ OpenStax · 光合成",
  "↗ Smithsonian National Zoo · animales": "↗ スミソニアン国立動物園 · 動物",
  "↗ Australian Museum · ornitorrinco": "↗ オーストラリア博物館 · カモノハシ",
  "↗ NASA · datos del sistema solar": "↗ NASA · 太陽系のデータ",
  "↗ NASA Space Place · la Luna": "↗ NASA Space Place · 月",
  "↗ NASA · fuerzas de un avión": "↗ NASA · 飛行機に働く力"
};
const TURKISH = {
  "Saltar al contenido": "İçeriğe geç",
  "Pequeños descubrimientos, grandes conversaciones.": "Küçük keşifler, büyük sohbetler.",
  "Abrir álbum familiar": "Aile albümünü aç", "Álbum familiar": "Aile albümü",
  "Perfiles y ajustes": "Profiller ve ayarlar", "EXPLORAR": "KEŞFET",
  "Cinco temas": "Beş konu", "Temas principales": "Ana konular",
  "Un mundo de ideas para descubrir": "Keşfedilecek fikirlerle dolu bir dünya",
  "juntos": "birlikte", "Siempre gratis. Sin bloqueos.": "Her zaman ücretsiz. Kilitli içerik yok.",
  "Perfil familiar": "Aile profili", "UN RINCÓN PARA CURIOSOS": "MERAKLILAR İÇİN BİR KÖŞE",
  "Hola, familia": "Merhaba aile", "¿Quién viene a explorar hoy?": "Bugün kim keşfe çıkıyor?",
  "Elegir perfil": "Profil seç", "Edad:": "Yaş:",
  "Un prototipo educativo · Comunidad de demostración": "Eğitim prototipi · Deneme topluluğu",
  "Ajustes y privacidad": "Ayarlar ve gizlilik", "Geografía y la Tierra": "Coğrafya ve Dünya", "La Tierra": "Dünya",
  "Historia y cultura": "Tarih ve kültür", "Historia": "Tarih",
  "Cuerpo humano y biología": "İnsan vücudu ve biyoloji", "El cuerpo": "Vücut",
  "Animales y plantas": "Hayvanlar ve bitkiler", "Vida natural": "Doğa",
  "Espacio, ingeniería y tecnología": "Uzay, mühendislik ve teknoloji", "Espacio e inventos": "Uzay ve icatlar",
  "Adultos": "Yetişkinler", "Niños": "Çocuklar", "Guía familiar": "Aile rehberi", "Exploren juntos": "Birlikte keşfedin", "Módulo para padres": "Ebeveyn modu",
  "Elige Adultos o Niños. En Niños, selecciona una franja de edad para adaptar las explicaciones y los retos.": "Yetişkinler veya Çocuklar bölümünü seçin. Çocuklar bölümünde açıklamaları ve etkinlikleri uyarlamak için yaş aralığı seçin.",
  "Niño mayor": "Büyük çocuk", "Niño menor": "Küçük çocuk",
  "Explorador · 7 años": "Kaşif · 7 yaş", "Explorador · 4 años": "Kaşif · 4 yaş",
  "Hoy aprendemos a la altura de cada edad.": "Bugün her yaşa uygun öğreniyoruz.",
  "TEMA 01 · MODO FAMILIA": "KONU 01 · AİLE MODU", "MODO FAMILIA": "AİLE MODU", "MODO EXPLORADOR": "KAŞİF MODU",
  "ÁLBUM DE DESCUBRIMIENTOS": "KEŞİF ALBÜMÜ", "Recuerdos y hallazgos": "Anılar ve keşifler",
  "Un espacio de práctica en este dispositivo. Las publicaciones no salen a una comunidad real.": "Bu cihazda bir deneme alanı. Gönderiler gerçek bir toplulukla paylaşılmaz.",
  "Aprende": "Öğren", "¿Sabías que…?": "Biliyor muydun…?", "Juega": "Oyna", "Álbum": "Albüm",
  "PARA ACOMPAÑAR": "EBEVEYNLER İÇİN", "LECCIÓN CORTITA": "KISA DERS",
  "Prueba o conversa:": "Dene veya konuş:", "Pregunta para conversar:": "Sohbet sorusu:",
  "Mira de cerca. Pregunta. Descubre.": "Yakından bak. Sor. Keşfet.",
  "Imagina · construye · prueba": "Hayal et · yap · dene",
  "Marcar este tema como explorado en este navegador": "Bu konuyu bu tarayıcıda tamamlandı olarak işaretle",
  "Un planeta lleno de lugares, formas y fuerzas sorprendentes.": "Şaşırtıcı yerler, şekiller ve güçlerle dolu bir gezegen.",
  "Personas, ideas y objetos que nos cuentan cómo vivían otros.": "Geçmişte insanların nasıl yaşadığını anlatan kişiler, fikirler ve nesneler.",
  "Un equipo de órganos que trabaja junto a cada momento.": "Her an birlikte çalışan organlardan oluşan bir ekip.",
  "Seres vivos, sus hogares y las relaciones que los conectan.": "Canlılar, yaşam alanları ve aralarındaki bağlantılar.",
  "Del sistema solar a los inventos que nos ayudan a movernos.": "Güneş sisteminden hareket etmemize yardımcı olan icatlara.",
  "Nuestro planeta cambiante": "Değişen gezegenimiz", "Pistas del pasado": "Geçmişten ipuçları",
  "Un cuerpo, muchos equipos": "Tek vücut, birçok ekip", "La vida se adapta": "Yaşam uyum sağlar",
  "Ideas que giran y se construyen": "Yörüngeler ve yapılar",
  "País con su bandera": "Ülkeyi bayrağıyla eşleştir", "Toca un país y luego la bandera que lo representa.": "Bir ülkeye, sonra onu temsil eden bayrağa dokun.",
  "Persona o disciplina con su pista": "Kişi veya alanı ipucuyla eşleştir", "Une cada nombre con una idea asociada.": "Her adı ilişkili bir fikirle eşleştir.",
  "Órgano con su función": "Organı göreviyle eşleştir", "Elige un órgano y encuentra qué trabajo hace.": "Bir organ seç ve görevini bul.",
  "Animal con su hábitat": "Hayvanı yaşam alanıyla eşleştir", "Une el animal con un hábitat donde puede vivir.": "Hayvanı yaşayabileceği ortamla eşleştir.",
  "Planeta con una pista": "Gezegeni ipucuyla eşleştir", "Une cada mundo con una descripción sencilla.": "Her gök cismini basit bir açıklamayla eşleştir.",
  "Elige dos tarjetas para comprobar una pareja.": "Eşleşmeyi kontrol etmek için iki kart seç.",
  "Ahora elige la tarjeta que crees que corresponde.": "Şimdi uygun olduğunu düşündüğün kartı seç.",
  "Elige una tarjeta de la otra columna.": "Diğer sütundan bir kart seç.",
  "Volver a intentar": "Yeniden dene", "JUEGO DE PAREJAS": "EŞLEŞTİRME OYUNU", "RETO FAMILIAR": "AİLE GÖREVİ",
  "También puedes usar Tab y Enter.": "Tab ve Enter tuşlarını da kullanabilirsin.",
  "Columna A": "A sütunu", "Columna B": "B sütunu",
  "Álbum privado": "Özel albüm", "Comunidad de práctica": "Deneme topluluğu", "Aprobaciones": "Onaylar",
  "Todos los temas": "Tüm konular", "Solo mi familia": "Yalnızca ailem", "Comunidad (demo)": "Topluluk (demo)",
  "Crear publicación": "Gönderi oluştur", "Pendiente": "Bekliyor", "Privada": "Özel", "Comunidad": "Topluluk",
  "Este rincón está esperando": "Bu alan seni bekliyor", "No hay publicaciones infantiles pendientes de revisar.": "İncelenmeyi bekleyen çocuk gönderisi yok.",
  "Familia de demostración": "Örnek aile", "Ejemplo ficticio · no es una publicación real": "Kurgusal örnek · gerçek bir gönderi değil",
  "Editar": "Düzenle", "Eliminar": "Sil", "Aprobar": "Onayla", "Dejar privada": "Özel tut",
  "Hacer privada": "Özel yap", "Pedir compartir": "Paylaşım iste", "⚑ Reportar": "⚑ Bildir",
  "Ajustes y privacidad": "Ayarlar ve gizlilik", "Datos locales": "Yerel veriler",
  "Fotos y seguridad infantil": "Fotoğraflar ve çocuk güvenliği", "Avatares": "Avatarlar",
  "Avatares aprobados": "Onaylanan avatarlar",
  "Esta demo pública usa iconos genéricos y no incluye avatares familiares.": "Bu herkese açık demo genel simgeler kullanır; aile avatarlarını içermez.",
  "Esta demo pública usa iconos genéricos y no incluye avatares familiares.": "Bu herkese açık demo genel simgeler kullanır; aile avatarlarını içermez.",
  "Tema": "Konu", "Descripción": "Açıklama", "Imagen (opcional)": "Görsel (isteğe bağlı)",
  "¿Dónde guardar?": "Nereye kaydedilsin?", "Cancelar": "İptal", "Guardar cambios": "Değişiklikleri kaydet",
  "Guardar publicación": "Gönderiyi kaydet", "Nuevo descubrimiento familiar": "Yeni aile keşfi",
  "Editar descubrimiento": "Keşfi düzenle", "Elegir": "Seç", "Seleccionado": "Seçildi",
  "Listo": "Tamam", "Mi familia": "Ailem",
  "USGS · terremotos": "USGS · depremler", "National Geographic · países": "National Geographic · ülkeler",
  "NOAA · tsunamis": "NOAA · tsunamiler", "USGS · densidad del agua": "USGS · su yoğunluğu",
  "UNESCO · Río de Janeiro": "UNESCO · Rio de Janeiro",
  "Nobel Prize · Albert Einstein": "Nobel Ödülü · Albert Einstein",
  "Museo Frida Kahlo · Casa Azul": "Frida Kahlo Müzesi · Casa Azul",
  "National Park Service · arqueología": "ABD Ulusal Park Servisi · arkeoloji",
  "OpenStax · fotosíntesis": "OpenStax · fotosentez",
  "Smithsonian National Zoo · animales": "Smithsonian Ulusal Hayvanat Bahçesi · hayvanlar",
  "Australian Museum · ornitorrinco": "Avustralya Müzesi · ornitorenk",
  "NASA · datos del sistema solar": "NASA · güneş sistemi bilgileri", "NASA Space Place · la Luna": "NASA Space Place · Ay",
  "NASA · fuerzas de un avión": "NASA · uçağa etki eden kuvvetler",
  "Brasil": "Brezilya", "Japón": "Japonya", "Egipto": "Mısır",
  "Bandera de Brasil": "Brezilya bayrağı", "Bandera de Japón": "Japonya bayrağı", "Bandera de Egipto": "Mısır bayrağı",
  "Corazón": "Kalp", "Pulmones": "Akciğerler", "Cerebro": "Beyin",
  "Camello": "Deve", "Rana": "Kurbağa", "Oso polar": "Kutup ayısı",
  "Desierto": "Çöl", "Humedales": "Sulak alanlar", "Ártico": "Arktik",
  "Tierra": "Dünya", "Luna": "Ay", "Marte": "Mars",
  "La energía de las hojas": "Yapraklardaki enerji",
  "Un mamífero que pone huevos": "Yumurta bırakan bir memeli",
  "Hogares conectados": "Birbirine bağlı yaşam alanları",
  "Clasificar de varias formas": "Farklı sınıflandırma yolları",
  "Un esqueleto vivo": "Canlı bir iskelet", "Aire en movimiento": "Hareket eden hava",
  "Mensajes rápidos": "Hızlı mesajlar",
  "La Luna cambia de aspecto": "Ay'ın değişen görünümü", "Barcos que flotan": "Yüzen tekneler",
  "Una estrella y sus planetas": "Bir yıldız ve gezegenleri", "Formas y estructuras": "Şekiller ve yapılar",
  "Muchas piezas, un sistema": "Birçok parça, tek sistem",
  "Primera Guerra Mundial": "Birinci Dünya Savaşı", "Segunda Guerra Mundial": "İkinci Dünya Savaşı",
  "Frida y sus retratos": "Frida ve portreleri", "Einstein, físico": "Fizikçi Einstein",
  "Museos y arqueología": "Müzeler ve arkeoloji",
  "La Tierra tiene continentes y países con banderas distintas. Un monumento como el Cristo Redentor está en Brasil. Los volcanes pueden expulsar lava; los terremotos ocurren cuando se mueve el suelo, y un tsunami puede empezar por un movimiento bajo el mar. La densidad compara cuánto material hay en un espacio: el hielo flota porque es menos denso que el agua líquida.": "Dünya'da kıtalar ve farklı bayraklara sahip ülkeler vardır. Kurtarıcı İsa gibi bir anıt Brezilya'dadır. Volkanlar lav püskürtebilir; depremler yer hareket ettiğinde olur ve tsunami deniz tabanındaki bir hareketle başlayabilir. Yoğunluk, bir alandaki madde miktarını karşılaştırır: buz, sıvı sudan daha az yoğun olduğu için yüzer.",
  "Un continente reúne grandes regiones de tierra y contiene muchos países, cada uno con símbolos como su bandera. El Cristo Redentor está en Río de Janeiro, Brasil. El magma que asciende puede formar volcanes; el deslizamiento repentino en una falla causa muchos terremotos, y un desplazamiento del fondo marino puede generar tsunamis. La densidad compara masa con volumen; materiales distintos, como agua, hielo y roca, tienen densidades distintas.": "Kıta, birçok ülkeyi kapsayan geniş bir kara bölgesidir; her ülkenin bayrağı gibi sembolleri vardır. Kurtarıcı İsa, Brezilya'nın Rio de Janeiro kentindedir. Yükselen magma volkan oluşturabilir; bir fay boyunca ani kayma birçok depreme yol açar ve deniz tabanındaki hareket tsunamiler oluşturabilir. Yoğunluk kütle ile hacmi karşılaştırır; su, buz ve kaya gibi maddelerin yoğunlukları farklıdır.",
  "Prueba en casa: coloca un cubito de hielo en un vaso con agua y observa dónde queda. ¿Qué crees que cambiaría si el hielo se hundiera?": "Evde dene: Bir bardak suya buz koy ve nerede kaldığını gözlemle. Buz batsaydı ne değişirdi?",
  "La historia nos ayuda a conocer cómo vivían las personas. Los museos guardan objetos y los arqueólogos estudian cosas que quedaron de civilizaciones antiguas. La Primera Guerra Mundial ocurrió entre 1914 y 1918; la Segunda, entre 1939 y 1945. Muchísimas personas sufrieron: podemos aprender sobre sus vidas y sobre la paz sin ver imágenes fuertes. Frida Kahlo fue una pintora mexicana.": "Tarih, insanların geçmişte nasıl yaşadığını öğrenmemize yardımcı olur. Müzeler nesneleri korur; arkeologlar eski uygarlıklardan kalanları inceler. Birinci Dünya Savaşı 1914–1918, İkinci Dünya Savaşı 1939–1945 arasında yaşandı. Pek çok insan acı çekti. Zorlayıcı görüntüler görmeden insanların yaşamlarını ve barışı öğrenebiliriz. Frida Kahlo Meksikalı bir ressamdı.",
  "La historia combina fuentes escritas, objetos, imágenes y testimonios, considerando quién los produjo y en qué contexto. Los museos conservan colecciones; la arqueología estudia restos materiales de sociedades y civilizaciones. La Primera Guerra Mundial ocurrió entre 1914–1918 y la Segunda entre 1939–1945. Con niños, prioricen causas, experiencias civiles, memoria y construcción de paz; ajusten el lenguaje a la edad y eviten detalles gráficos.": "Tarih; belgeleri, nesneleri, görselleri ve tanıklıkları, kimin hangi koşullarda oluşturduğunu dikkate alarak birleştirir. Müzeler koleksiyonları korur; arkeoloji toplumların ve uygarlıkların maddi kalıntılarını inceler. Birinci Dünya Savaşı 1914–1918, İkinci Dünya Savaşı 1939–1945 arasında yaşandı. Çocuklarla nedenlere, sivillerin deneyimlerine, hafızaya ve barışa odaklanın; dili yaşa göre uyarlayın ve sarsıcı ayrıntılardan kaçının.",
  "Mira un objeto de casa: ¿quién pudo usarlo?, ¿de qué está hecho?, ¿qué preguntas quedan sin responder?": "Evdeki bir nesneye bak: Kim kullanmış olabilir? Nelerden yapılmış? Hangi sorular hâlâ yanıtsız?",
  "El corazón impulsa la sangre por el cuerpo. Los pulmones ayudan a tomar oxígeno del aire y a sacar dióxido de carbono. El cerebro recibe información y ayuda a coordinar acciones. Los órganos trabajan en equipo.": "Kalp kanı vücuda pompalar. Akciğerler havadan oksijen almaya ve karbondioksiti dışarı vermeye yardımcı olur. Beyin bilgi alır ve hareketleri koordine eder. Organlar birlikte çalışır.",
  "Los sistemas cardiovascular, respiratorio y nervioso interactúan continuamente. El corazón mantiene el flujo sanguíneo; los pulmones realizan el intercambio de gases, y el sistema nervioso integra señales. Para observar sin instrumental, noten cómo cambia la respiración después de una caminata suave.": "Dolaşım, solunum ve sinir sistemleri sürekli etkileşim hâlindedir. Kalp kan akışını sağlar; akciğerler gaz alışverişi yapar ve sinir sistemi sinyalleri birleştirir. Araç kullanmadan gözlemlemek için hafif bir yürüyüşten sonra nefesinizin nasıl değiştiğine bakın.",
  "Pon una mano sobre el pecho y siente el pulso después de caminar despacio. Descansen si alguien se siente incómodo.": "Yavaşça yürüdükten sonra elini göğsüne koy ve nabzını hisset. Rahatsız hisseden olursa dinlensin.",
  "Las plantas crecen usando luz, agua y aire; con la fotosíntesis fabrican azúcares. Los animales se pueden clasificar de distintas maneras. “Mamífero” describe un grupo de animales y “ovíparo” uno que pone huevos: no son grupos opuestos. El ornitorrinco es un mamífero que pone huevos.": "Bitkiler ışık, su ve havayı kullanarak büyür; fotosentezle şeker üretir. Hayvanlar farklı şekillerde sınıflandırılabilir. “Memeli” bir hayvan grubunu, “yumurtlayan” ise üreme biçimini anlatır; birbirinin zıddı değildir. Ornitorenk yumurtlayan bir memelidir.",
  "En la fotosíntesis, plantas, algas y algunas bacterias convierten energía luminosa en energía química, usando agua y dióxido de carbono y liberando oxígeno. Raíces absorben agua y minerales; tallos sostienen y transportan sustancias. “Mamífero” describe un grupo biológico y “ovíparo” un modo de reproducción: las categorías no son opuestas. Los monotremas, como ornitorrincos y equidnas, son mamíferos que ponen huevos.": "Fotosentezde bitkiler, algler ve bazı bakteriler su ve karbondioksit kullanarak ışık enerjisini kimyasal enerjiye dönüştürür ve oksijen salar. Kökler su ve mineralleri emer; gövdeler bitkiyi destekler ve maddeleri taşır. “Memeli” biyolojik bir grubu, “yumurtlayan” üreme biçimini tanımlar; zıt kategoriler değildir. Ornitorenk ve ekidne gibi tek delikliler yumurtlayan memelilerdir.",
  "Busca una planta y observa sus hojas. ¿Qué partes reciben luz? ¿Qué otros seres vivos usan ese lugar?": "Bir bitki bul ve yapraklarına bak. Hangi bölümleri ışık alıyor? Bu yeri başka hangi canlılar kullanıyor?",
  "La Tierra es un planeta que gira alrededor del Sol, una estrella. La Luna gira alrededor de la Tierra. Puentes y castillos se diseñan para sostenerse; los autos y las computadoras se construyen con muchas piezas. Un barco desplaza agua para flotar; las alas y el movimiento del aire ayudan a que un avión vuele.": "Dünya, bir yıldız olan Güneş'in çevresinde dönen bir gezegendir. Ay, Dünya'nın çevresinde döner. Köprüler ve kaleler ayakta kalacak şekilde tasarlanır; arabalar ve bilgisayarlar birçok parçadan oluşur. Tekne suyu yerinden iterek yüzer; kanatlar ve hava akımı uçağın uçmasına yardımcı olur.",
  "El sistema solar incluye el Sol, ocho planetas y sus satélites; la gravedad mantiene sus órbitas. Puentes y castillos distribuyen cargas por su forma y materiales. Autos y computadoras se fabrican ensamblando componentes distintos; una computadora procesa datos. Un barco flota cuando el empuje del agua desplazada equilibra su peso. En el vuelo intervienen sustentación, peso, empuje y resistencia del aire.": "Güneş sistemi, Güneş'i, sekiz gezegeni ve uydularını içerir; yerçekimi yörüngelerini korur. Köprüler ve kaleler yükleri şekil ve malzemeleriyle dağıtır. Arabalar ve bilgisayarlar farklı parçalar birleştirilerek üretilir; bilgisayarlar verileri işler. Yerinden edilen suyun kaldırma kuvveti ağırlığı dengelediğinde tekne yüzer. Uçuşta kaldırma, ağırlık, itme ve hava direnci rol oynar.",
  "Prueba segura: dobla una hoja de papel como acordeón y úsala como puente entre dos libros. Añade monedas una a una y observa cómo la forma distribuye la carga.": "Güvenli deney: Bir kâğıdı akordeon gibi katlayıp iki kitap arasında köprü olarak kullan. Küçük paraları teker teker ekle ve şeklin yükü nasıl dağıttığını gözlemle.",
  "↗ USGS · terremotos": "↗ USGS · depremler",
  "↗ National Geographic · países": "↗ National Geographic · ülkeler",
  "↗ NOAA · tsunamis": "↗ NOAA · tsunamiler",
  "↗ USGS · densidad del agua": "↗ USGS · su yoğunluğu",
  "↗ UNESCO · Río de Janeiro": "↗ UNESCO · Rio de Janeiro",
  "↗ Nobel Prize · Albert Einstein": "↗ Nobel Ödülü · Albert Einstein",
  "↗ Museo Frida Kahlo · Casa Azul": "↗ Frida Kahlo Müzesi · Casa Azul",
  "↗ National Park Service · arqueología": "↗ ABD Ulusal Park Servisi · arkeoloji",
  "↗ OpenStax · fotosíntesis": "↗ OpenStax · fotosentez",
  "↗ Smithsonian National Zoo · animales": "↗ Smithsonian Ulusal Hayvanat Bahçesi · hayvanlar",
  "↗ Australian Museum · ornitorrinco": "↗ Avustralya Müzesi · ornitorenk",
  "↗ NASA · datos del sistema solar": "↗ NASA · güneş sistemi bilgileri",
  "↗ NASA Space Place · la Luna": "↗ NASA Space Place · Ay",
  "↗ NASA · fuerzas de un avión": "↗ NASA · uçağa etki eden kuvvetler"
};
const LOCALE_MAPS = { en: ENGLISH, ja: JAPANESE, tr: TURKISH };

function translated(value) {
  const text = String(value ?? "");
  const trimmed = text.trim();
  if (language === "es" || !trimmed) return text;
  const dictionary = LOCALE_MAPS[language] || ENGLISH;
  let replacement = dictionary[trimmed];
  if (!replacement) {
    let match = trimmed.match(/^(\d+) de (\d+) parejas encontradas\.$/);
    if (match) replacement = language === "ja"
      ? `${match[1]} / ${match[2]} 組が見つかりました。`
      : language === "tr" ? `${match[1]} / ${match[2]} eşleşme bulundu.` : `${match[1]} of ${match[2]} matches found.`;
    match = trimmed.match(/^TEMA (\d+) · MODO FAMILIA$/);
    if (match) replacement = language === "ja" ? `テーマ${match[1]} · 家族モード` : language === "tr" ? `KONU ${match[1]} · AİLE MODU` : `TOPIC ${match[1]} · FAMILY MODE`;
    match = trimmed.match(/^TEMA (\d+) · MODO EXPLORADOR$/);
    if (match) replacement = language === "ja" ? `テーマ${match[1]} · 探検モード` : language === "tr" ? `KONU ${match[1]} · KAŞİF MODU` : `TOPIC ${match[1]} · EXPLORER MODE`;
    match = trimmed.match(/^Explorador · (\d+) años$/);
    if (match) replacement = language === "ja" ? `探検家 · ${match[1]}歳` : language === "tr" ? `Kaşif · ${match[1]} yaş` : `Explorer · ${match[1]} years old`;
    match = trimmed.match(/^(Adult guide|Child guide A|Child guide B) · Explorador · (\d+) años$/);
    if (match) replacement = language === "ja"
      ? `${match[1]} · 探検家 · ${match[2]}歳`
      : language === "tr" ? `${match[1]} · Kaşif · ${match[2]} yaş`
        : `${match[1]} · Explorer · ${match[2]} years old`;
    match = trimmed.match(/^(.+) · activo$/);
    if (match) replacement = `${translated(match[1])} · ${language === "ja" ? "選択中" : language === "tr" ? "etkin" : "active"}`;
    match = trimmed.match(/^¡Qué bueno verte, (.+)! ¿Qué descubrimos hoy\?$/);
    if (match) replacement = language === "ja" ? `${translated(match[1])}さん、こんにちは！今日は何を発見しよう？` : language === "tr" ? `Seni görmek güzel, ${translated(match[1])}! Bugün ne keşfedelim?` : `So good to see you, ${translated(match[1])}! What shall we discover today?`;
    match = trimmed.match(/^(\d+) años$/);
    if (match) replacement = language === "ja" ? `${match[1]}歳` : language === "tr" ? `${match[1]} yaş` : `${match[1]} years`;
    match = trimmed.match(/^Explicación para (\d+) años: (.+)$/);
    if (match) {
      const ageText = language === "ja"
        ? (match[1] <= 5 ? "観察しながら一歩ずつ進もう。" : match[1] <= 8 ? "例を見て、どんな質問が浮かぶか考えよう。" : "原因と考えのつながりに注目しよう。")
        : language === "tr"
          ? (match[1] <= 5 ? "Gözlem fikirleriyle adım adım ilerleyelim." : match[1] <= 8 ? "Örneğe bak ve aklına gelen soruları düşün." : "Nedenlere ve fikirlerin bağlantısına dikkat et.")
          : (match[1] <= 5 ? "let's go step by step, with ideas to observe." : match[1] <= 8 ? "look at the example and think about your questions." : "notice the causes and how ideas connect.");
      replacement = language === "ja" ? `${match[1]}歳向け：${ageText}` : language === "tr" ? `${match[1]} yaş için: ${ageText}` : `For age ${match[1]}: ${ageText}`;
    }
    match = trimmed.match(/^¡Correcto! (.+)$/);
    if (match) replacement = `${dictionary["¡Correcto!"] || "¡Correcto!"} ${dictionary[match[1]] || match[1]}`;
    match = trimmed.match(/^([A-ZÁÉÍÓÚÜÑ ]+) · (\d+) años$/);
    if (match) replacement = `${translated(match[1])} · ${match[2]} years old`;
  }
  if (!replacement) return text;
  const leading = text.match(/^\s*/)?.[0] || "";
  const trailing = text.match(/\s*$/)?.[0] || "";
  return `${leading}${replacement}${trailing}`;
}

function applyLanguage() {
  const languageMeta = { es: ["es", "Explore Together — aprendemos en familia"], en: ["en", "Explore Together — learn as a family"], ja: ["ja", "Explore Together — 家族で学ぼう"], tr: ["tr", "Explore Together — ailece öğrenin"] };
  const [htmlLanguage, title] = languageMeta[language] || languageMeta.es;
  const isEnglish = language === "en";
  document.documentElement.lang = htmlLanguage;
  document.title = title;
  const description = document.querySelector('meta[name="description"]');
  const descriptions = {
    es: "Un espacio gratuito para aprender, jugar y descubrir en familia.",
    en: "A free space for families to learn, play, and discover together.",
    ja: "家族で学び、遊び、一緒に発見する無料のスペースです。",
    tr: "Ailece öğrenmek, oynamak ve keşfetmek için ücretsiz bir alan."
  };
  if (description) description.content = descriptions[language] || descriptions.es;
  const languageSelect = byId("language-select");
  if (languageSelect) languageSelect.value = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement?.closest("script, style, textarea, input")) continue;
    if (node.parentElement?.closest("[data-language-locked='true']")) continue;
    node.nodeValue = translated(node.nodeValue);
  }
  document.querySelectorAll("[aria-label], [title], [placeholder]").forEach((element) => {
    if (element.closest("[data-language-locked='true']")) return;
    for (const attribute of ["aria-label", "title", "placeholder"]) {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, translated(element.getAttribute(attribute)));
    }
  });
}

function persist() {
  if (PRESENTATION_MODE) return true;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("No se pudo guardar en este navegador.", error);
    toast("No se pudo guardar. Puede que el navegador se haya quedado sin espacio; intenta una imagen más pequeña.");
    return false;
  }
}

function toast(message) {
  const region = byId("toast-region");
  region.innerHTML = `<div class="toast" role="status">${escapeHTML(message)}</div>`;
  applyLanguage();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { region.innerHTML = ""; }, 3400);
}

function profileAvatar(profile, small = false) {
  if (profile.id === "kids") {
    if (PRESENTATION_MODE) {
      return `<span class="avatar-pair${small ? " small" : ""}" aria-hidden="true"><span>🧭</span><span>✦</span></span>`;
    }
    return `<span class="avatar-pair${small ? " small" : ""}" aria-hidden="true">
      <img src="${avatarPath("older")}" alt="" loading="eager">
      <img src="${avatarPath("younger")}" alt="" loading="eager">
    </span>`;
  }
  return `<span class="avatar-placeholder${small ? " small" : ""}" data-person="${profile.id}" aria-hidden="true"><span class="avatar-fallback">${profile.icon}</span></span>`;
}

function applyAvatarSheet() {
  document.querySelectorAll(".avatar-placeholder[data-person]").forEach((avatar) => {
    const fullBodyURL = avatarImageURLs[avatar.dataset.person];
    if (fullBodyURL) {
      avatar.dataset.avatarReady = "full";
      avatar.style.backgroundImage = `url("${fullBodyURL}")`;
    }
  });
}

function avatarPath(person) {
  if (PRESENTATION_MODE) return "assets/icons/guide.svg";
  return AVATAR_FILES[person]?.[0] || "";
}

function findAvatarFile(person, index = 0) {
  const files = AVATAR_FILES[person] || [];
  if (index >= files.length) return;
  const image = new Image();
  image.onload = () => {
    avatarImageURLs[person] = files[index];
    applyAvatarSheet();
  };
  image.onerror = () => findAvatarFile(person, index + 1);
  image.src = files[index];
}

function renderTopicLinks(targetId) {
  const nav = byId(targetId);
  nav.innerHTML = TOPICS.map((topic) => `
    <button class="topic-link" data-key="${topic.key}" data-topic="${topic.key}" type="button"
      aria-current="${state.topic === topic.key ? "page" : "false"}">
      <span class="topic-icon" aria-hidden="true">${topic.icon}</span><span>${escapeHTML(topic.title)}</span>
    </button>`).join("");
}

function renderProfilePicker() {
  byId("profile-picker").innerHTML = PROFILES.filter((profile) => !PRESENTATION_MODE || profile.id === "mom").map((profile) => `
    <button class="profile-chip" data-profile="${profile.id}" type="button" aria-pressed="${state.profileId === profile.id}">
      ${profileAvatar(profile)}
      <span><b>${escapeHTML(profile.name)}</b><small>${escapeHTML(profile.detail)}</small></span>
    </button>`).join("");

  const profile = activeProfile();
  const welcomeText = PRESENTATION_MODE ? {
    es: { title: "Hola, familia", subtitle: "Un espacio para consultar y descubrir." },
    en: { title: "Hello, everyone", subtitle: "A place to explore and find answers." },
    ja: { title: "こんにちは", subtitle: "調べて発見するための場所です。" },
    tr: { title: "Merhaba", subtitle: "Keşfetmek ve bilgi edinmek için bir alan." }
  }[language] || { title: "Hola, familia", subtitle: "Un espacio para consultar y descubrir." } : {
    es: {
      title: profile.role === "child" ? "¡Hola, exploradores!" : "Hola, familia",
      subtitle: profile.role === "child" ? "Child guide A y Child guide B te acompañan en cada descubrimiento." : "Adult guide acompaña sus descubrimientos en familia."
    },
    en: {
      title: profile.role === "child" ? "Hello, explorers!" : "Hello, family",
      subtitle: profile.role === "child" ? "Child guide A and Child guide B are your guides for every discovery." : "Adult guide is here to explore together."
    },
    ja: {
      title: profile.role === "child" ? "探検家のみなさん、こんにちは！" : "家族のみなさん、こんにちは",
      subtitle: profile.role === "child" ? "子どもの案内役Aと子どもの案内役Bが発見の旅を案内します。" : "大人の案内役と一緒に家族で発見しましょう。"
    },
    tr: {
      title: profile.role === "child" ? "Merhaba, kaşifler!" : "Merhaba, aile!",
      subtitle: profile.role === "child" ? "Child guide A ve Child guide B her keşifte rehberiniz." : "Adult guide ailece keşfetmenize eşlik ediyor."
    }
  }[language] || {
    title: profile.role === "child" ? "¡Hola, exploradores!" : "Hola, familia",
    subtitle: profile.role === "child" ? "Child guide A y Child guide B te acompañan en cada descubrimiento." : "Adult guide acompaña sus descubrimientos en familia."
  };
  byId("welcome-title").innerHTML = `${welcomeText.title} <span aria-hidden="true">☀</span>`;
  byId("welcome-subtitle").textContent = welcomeText.subtitle;
  const guide = byId("welcome-guide");
  if (guide) {
    if (PRESENTATION_MODE) {
      guide.hidden = true;
      guide.innerHTML = "";
      guide.removeAttribute("role");
      guide.removeAttribute("aria-label");
    } else {
      guide.hidden = false;
    guide.classList.toggle("kids-guides", profile.role === "child");
    guide.innerHTML = profile.role === "child"
      ? `<img src="${avatarPath("older")}" alt=""><img src="${avatarPath("younger")}" alt="">`
      : `<img src="${avatarPath("mom")}" alt="">`;
    guide.setAttribute("role", "img");
    guide.removeAttribute("aria-hidden");
    guide.setAttribute("aria-label", profile.role === "child"
      ? (language === "en" ? "Child guide A and Child guide B, learning guides" : language === "ja" ? "学習ガイドの子どもの案内役Aと子どもの案内役B" : language === "tr" ? "Öğrenme rehberleri Child guide A ve Child guide B" : "Child guide A y Child guide B, guías de aprendizaje")
      : (language === "en" ? "Adult guide, learning guide" : language === "ja" ? "学習ガイドの大人の案内役" : language === "tr" ? "Öğrenme rehberi Adult guide" : "Adult guide, guía de aprendizaje"));
    }
  }
  const ageControl = byId("age-control");
  ageControl.classList.toggle("is-visible", profile.role === "child");
  ageControl.innerHTML = profile.role === "child"
    ? `<span class="age-band-label">${language === "en" ? "Age range:" : language === "ja" ? "年齢:" : language === "tr" ? "Yaş aralığı:" : "Franja:"}</span>
       <div class="age-band-picker" role="group" aria-label="${language === "en" ? "Choose an age range" : language === "ja" ? "年齢層を選択" : language === "tr" ? "Yaş aralığı seçin" : "Elegir una franja de edad"}">
         ${CHILD_AGE_BANDS.map((band) => `<button type="button" class="age-band-button" data-age-band="${band}" aria-pressed="${state.childBand === band}">${ageBandButtonLabel(band)}</button>`).join("")}
       </div>`
    : "";
}

function ageBandButtonLabel(band) {
  const labels = {
    es: { "4-6": "4–6 años", "7-9": "7–9 años", "10-12": "10–12 años" },
    en: { "4-6": "Ages 4–6", "7-9": "Ages 7–9", "10-12": "Ages 10–12" },
    ja: { "4-6": "4～6歳", "7-9": "7～9歳", "10-12": "10～12歳" },
    tr: { "4-6": "4–6 yaş", "7-9": "7–9 yaş", "10-12": "10–12 yaş" }
  };
  return (labels[language] || labels.es)[band];
}

function render() {
  renderTopicLinks("topic-nav");
  renderTopicLinks("mobile-topic-nav");
  renderProfilePicker();
  renderMainView();
  if (!PRESENTATION_MODE && !avatarImagesRequested) {
    avatarImagesRequested = true;
    Object.keys(AVATAR_FILES).forEach((person) => findAvatarFile(person));
  }
  applyAvatarSheet();
  applyLanguage();
}

function adultSectionCopy(locale = language) {
  const copy = {
    es: {
      assessment: "¿Qué tanto aprendiste?", searchTitle: "Buscar en este módulo",
      searchHint: "Busca en las fichas y lecciones disponibles; no es una búsqueda de todo Internet.",
      searchPlaceholder: "Ej.: Guerra Mundial, corazón, densidad…",
      results: "Resultados", noResults: "No encontramos coincidencias en el catálogo disponible.",
      related: "Temas disponibles para explorar", fallback: "La ficha educativa está temporalmente en inglés porque aún no hay traducción completa.",
      summary: "Respuesta breve", details: "Explicación", dates: "Fechas", place: "Lugar", people: "Personas y grupos",
      fact: "Dato interesante", sources: "Fuentes y lecturas adicionales", imageNote: "Ilustración educativa original; no es una fotografía.",
      imageCredit: "Procedencia y uso", relatedLinks: "También puedes explorar", backResults: "Volver a resultados",
      openQuiz: "¿Qué tanto aprendiste?", quizTitle: "Comprobación opcional", question: "Pregunta",
      correct: "¡Correcto!", incorrect: "Aún no. Revisa la explicación y vuelve a intentarlo.",
      explanation: "Por qué", retry: "Intentar de nuevo", next: "Siguiente pregunta",
      returnArticle: "Volver a la ficha", finish: "Terminaste esta comprobación. La ficha sigue disponible.",
      answerNote: "Selecciona una respuesta. Esta actividad es opcional y no bloquea la ficha.",
      searchCount: "fichas disponibles"
    },
    en: {
      assessment: "How much did you learn?", searchTitle: "Search this module",
      searchHint: "Search available lessons and articles; this is not a search of the whole internet.",
      searchPlaceholder: "e.g. World War, heart, density…",
      results: "Results", noResults: "No matches were found in the available catalog.",
      related: "Available topics to explore", fallback: "The educational article is temporarily in English because a complete translation is not available yet.",
      summary: "Short answer", details: "Explanation", dates: "Dates", place: "Place", people: "People and groups",
      fact: "Interesting fact", sources: "Sources and further reading", imageNote: "Original educational illustration; not a photograph.",
      imageCredit: "Provenance and use", relatedLinks: "You can also explore", backResults: "Back to results",
      openQuiz: "How much did you learn?", quizTitle: "Optional knowledge check", question: "Question",
      correct: "Correct!", incorrect: "Not quite. Review the explanation and try again.",
      explanation: "Why", retry: "Try again", next: "Next question",
      returnArticle: "Back to article", finish: "You finished this check. The article remains available.",
      answerNote: "Choose an answer. This activity is optional and never blocks the article.",
      searchCount: "available articles"
    },
    ja: {
      assessment: "どれだけ学べたかな？", searchTitle: "このテーマを検索",
      searchHint: "利用可能なレッスンと記事を検索します。インターネット全体の検索ではありません。",
      searchPlaceholder: "例：World War、heart、density…",
      results: "検索結果", noResults: "利用可能なカタログに一致する項目がありません。",
      related: "関連する利用可能なテーマ", fallback: "この記事は日本語訳がまだないため、英語で表示しています。",
      summary: "要約", details: "説明", dates: "日付", place: "場所", people: "人物・集団",
      fact: "興味深い事実", sources: "参考資料", imageNote: "オリジナルの教育用イラスト（写真ではありません）。",
      imageCredit: "出典と利用", relatedLinks: "関連テーマ", backResults: "検索結果に戻る",
      openQuiz: "どれだけ学べたかな？", quizTitle: "任意の理解チェック", question: "質問",
      correct: "正解です！", incorrect: "もう一度。説明を確認して再挑戦できます。",
      explanation: "解説", retry: "もう一度挑戦", next: "次の質問",
      returnArticle: "記事に戻る", finish: "チェック完了。記事は引き続き読めます。",
      answerNote: "答えを選んでください。記事の閲覧を妨げることはありません。",
      searchCount: "件の記事"
    },
    tr: {
      assessment: "Ne kadar öğrendin?", searchTitle: "Bu modülde ara",
      searchHint: "Mevcut ders ve makalelerde arar; tüm interneti taramaz.",
      searchPlaceholder: "Örn. World War, heart, density…",
      results: "Sonuçlar", noResults: "Mevcut katalogda eşleşme bulunamadı.",
      related: "Keşfedilebilecek mevcut konular", fallback: "Tam çeviri henüz bulunmadığından eğitim içeriği şimdilik İngilizce gösteriliyor.",
      summary: "Kısa yanıt", details: "Açıklama", dates: "Tarihler", place: "Yer", people: "Kişiler ve gruplar",
      fact: "İlginç bilgi", sources: "Kaynaklar ve ileri okuma", imageNote: "Özgün eğitim çizimi; fotoğraf değildir.",
      imageCredit: "Kaynak ve kullanım", relatedLinks: "Şunları da keşfet", backResults: "Sonuçlara dön",
      openQuiz: "Ne kadar öğrendin?", quizTitle: "İsteğe bağlı bilgi kontrolü", question: "Soru",
      correct: "Doğru!", incorrect: "Henüz değil. Açıklamayı inceleyip tekrar deneyebilirsin.",
      explanation: "Neden", retry: "Tekrar dene", next: "Sonraki soru",
      returnArticle: "Makaleye dön", finish: "Kontrol tamamlandı. Makale erişilebilir durumda.",
      answerNote: "Bir yanıt seç. Bu etkinlik isteğe bağlıdır ve makaleyi kilitlemez.",
      searchCount: "mevcut makale"
    }
  };
  return copy[locale] || copy.es;
}

function adultContentLocale() {
  return language === "es" ? "es" : "en";
}

function adultArticleCopy() {
  return adultSectionCopy(adultContentLocale());
}

function adultTopicTitle(topicKey) {
  const names = {
    geo: { es: "Geografía y la Tierra", en: "Geography & Earth" },
    history: { es: "Historia y cultura", en: "History & culture" },
    body: { es: "Cuerpo humano y biología", en: "Human body & biology" },
    nature: { es: "Animales y plantas", en: "Animals & plants" },
    space: { es: "Espacio, ingeniería y tecnología", en: "Space, engineering & technology" }
  };
  return names[topicKey]?.[adultContentLocale()] || "";
}

function normalizeSearchText(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function adultArticleFromLesson(topic, lesson, locale, siblings) {
  let art = window.EXPLORE_LEARNING_ART?.[lesson.illustration] || "";
  art = art.replace(/aria-label="[^"]*"/, `aria-label="${escapeHTML(lesson.title)}"`);
  const activity = lesson.activity;
  const correct = activity?.options?.find((option) => option.id === activity.correct);
  return {
    id: `lesson-${topic.key}-${lesson.id}`, module: topic.key, title: lesson.title,
    keywords: [lesson.title, lesson.question, ...lesson.steps.map((step) => `${step.title} ${step.text}`), lesson.adult?.overview, lesson.adult?.coaching],
    question: lesson.question,
    shortAnswer: lesson.adult?.overview || lesson.steps.map((step) => step.text).join(" "),
    image: { svg: art, alt: art.match(/aria-label="([^"]+)"/)?.[1] || lesson.title, creator: "Original project illustration", license: "Created for Explore Together; no third-party image is embedded." },
    sections: lesson.steps.map((step) => ({ title: step.title, text: step.text })).concat(lesson.adult?.coaching ? [{ title: locale === "es" ? "Para acompañar" : "Guidance", text: lesson.adult.coaching }] : []),
    place: "", people: "", date: "", fact: correct?.feedback || "",
    related: siblings.filter((item) => item.id !== lesson.id).map((item) => `lesson-${topic.key}-${item.id}`),
    sources: lesson.adult?.sources || [],
    questions: activity ? [{
      prompt: activity.prompt,
      options: activity.options.map((option) => option.label),
      correct: activity.options.findIndex((option) => option.id === activity.correct),
      explanation: correct?.feedback || ""
    }] : [],
    language: locale
  };
}

function adultOrganThumbnail(organId, organName) {
  const drawings = {
    brain: `<path d="M72 30q-8-13-18-5-8 7-2 16-9 10 1 18 9 6 17-2 8 9 17 2 11-6 3-17 6-10-3-17-10-6-18 5Z" fill="#c89898"/><path d="M72 26v39m-15-22q9-2 15 6m14-15q-9 2-13 10m-15 12q8-5 15 1m13-3q-8-6-13 2" fill="none" stroke="#765b52" stroke-width="2"/>`,
    lungs: `<path d="M62 36q-13-13-20 4-5 15 2 27 6 10 16 4Zm20 0q13-13 20 4 5 15-2 27-6 10-16 4Z" fill="#8fb8bd"/>`,
    heart: `<path d="M72 41q-15-16-22-3-7 15 22 38 29-23 22-38-7-13-22 3Z" fill="#cf7370"/>`,
    liver: `<path d="M43 45q13-13 34-5l8 14q-12 17-34 13-16-2-8-22Z" fill="#a97852"/>`,
    stomach: `<path d="M67 31q9-7 14 2 4 8-1 16-6 8 1 14 6 12-6 17-16 4-20-10-4-10 3-18 8-9 4-21Z" fill="#d9a270"/>`,
    kidneys: `<path d="M55 38q-12-5-14 8-1 14 10 16 10 0 12-12 1-9-8-12Zm34 0q12-5 14 8 1 14-10 16-10 0-12-12-1-9 8-12Z" fill="#a75f63"/>`,
    intestines: `<path d="M54 33q18-8 36 0l-2 34q-16 11-33 0Z" fill="#d6ad7e"/><path d="M61 40q-7 8 1 14t-1 8m12-22q-7 8 1 14t-1 8m12-22q-7 8 1 14t-1 8" fill="none" stroke="#986f58" stroke-width="3" stroke-linecap="round"/>`,
    bones: `<path d="M49 32q-6-7 0-12 6-5 12 1l21 24 11-10q6-5 11 1 5 6-1 11L89 59l17 18q5 6-1 11-6 5-11-1L73 64 58 79q-6 5-11-1-5-6 1-11l15-15Z" fill="#f3e7cb" stroke="#9e8d70" stroke-width="3" stroke-linejoin="round"/>`
  };
  const alt = adultContentLocale() === "es" ? `Ilustración anatómica educativa original de ${organName}` : `Original educational anatomical illustration of ${organName}`;
  return `<svg viewBox="0 0 144 100" role="img" aria-label="${escapeHTML(alt)}"><rect width="144" height="100" rx="15" fill="#f3f0e8"/><path d="M57 25q15-9 30 0l8 16-6 42H55l-6-42Z" fill="#ded7c9" stroke="#928575" stroke-width="3" stroke-linejoin="round"/>${drawings[organId] || drawings.heart}</svg>`;
}

function getAdultCatalog(topic) {
  const locale = adultContentLocale();
  const catalog = [];
  const curated = window.EXPLORE_ADULT_ARTICLES?.[topic.key]?.[locale] || [];
  catalog.push(...curated.map((article) => ({
    ...article,
    image: {
      svg: (window.EXPLORE_ADULT_ARTICLES.illustrations?.[article.image] || "")
        .replace("Western Front · schematic, not to scale", locale === "es" ? "Frente occidental · esquema, no a escala" : "Western Front · schematic, not to scale")
        .replace("Multiple regions and theaters · schematic", locale === "es" ? "Varias regiones y teatros · esquema" : "Multiple regions and theaters · schematic")
        .replace("Machines · factories · social change", locale === "es" ? "Máquinas · fábricas · cambio social" : "Machines · factories · social change")
        .replace("Mechanical design", locale === "es" ? "Diseño mecánico" : "Mechanical design")
        .replace("Electronic machine", locale === "es" ? "Máquina electrónica" : "Electronic machine")
        .replace("Stored program", locale === "es" ? "Programa almacenado" : "Stored program")
        .replace("Different criteria · different “firsts”", locale === "es" ? "Criterios distintos · distintas “primeras”" : "Different criteria · different “firsts”")
        .replace('aria-label="Original schematic illustration of a 1914 to 1918 timeline and trenches"', `aria-label="${escapeHTML(article.imageAlt)}"`)
        .replace('aria-label="Original schematic illustration of the 1939 to 1945 timeline and multiple theaters"', `aria-label="${escapeHTML(article.imageAlt)}"`)
        .replace('aria-label="Original illustration of a textile mill, a steam engine, and gradual industrial change"', `aria-label="${escapeHTML(article.imageAlt)}"`),
      alt: article.imageAlt || article.title,
      creator: window.EXPLORE_ADULT_ARTICLES.imageRights?.creator || "",
      license: window.EXPLORE_ADULT_ARTICLES.imageRights?.license || ""
    }
  })));
  const lessons = window.EXPLORE_LESSONS?.[locale]?.[topic.key] || [];
  catalog.push(...lessons.map((lesson) => adultArticleFromLesson(topic, lesson, locale, lessons)));
  if (topic.key === "geo") {
    const countries = window.EXPLORE_EXPLORERS?.countries || [];
    catalog.push(...countries.map((country) => {
      const name = country.name[locale];
      const keywords = [
        name, country.capital[locale], country.continent[locale], country.landmark[locale],
        ...country.languages.map((item) => item.name[locale])
      ];
      const otherContinents = [...new Set(countries.map((item) => item.continent[locale]).filter((item) => item !== country.continent[locale]))];
      const answerOptions = [country.continent[locale], ...otherContinents.slice(0, 2)];
      const sources = country.sources || [];
      return {
        id: `country-${country.id}`, module: "geo", title: name, keywords,
        question: locale === "es" ? `¿Qué podemos descubrir sobre ${name}?` : `What can we discover about ${name}?`,
        shortAnswer: locale === "es"
          ? `${country.capital[locale]} es su capital; está en ${country.continent[locale]}.`
          : `${country.capital[locale]} is its capital; it is in ${country.continent[locale]}.`,
        image: {
          svg: `<svg viewBox="0 0 300 170" role="img" aria-label="${locale === "es" ? `Bandera de ${escapeHTML(name)}` : `${escapeHTML(name)} flag`}"><rect width="300" height="170" rx="18" fill="#f3f0e8"/><text x="150" y="97" text-anchor="middle" font-size="75">${country.flag}</text><text x="150" y="145" text-anchor="middle" fill="#455b4d" font-size="21" font-family="Georgia">${escapeHTML(name)}</text></svg>`,
          alt: locale === "es" ? `Bandera de ${name}` : `${name} flag`,
          creator: "Original card layout; national flag symbol rendered as an emoji glyph.",
          license: "The flag is shown as a country-identification symbol; this is not a photograph."
        },
        sections: [
          { title: locale === "es" ? "Capital y continente" : "Capital and continent", text: locale === "es" ? `${country.capital[locale]} es la capital. ${name} se encuentra en ${country.continent[locale]}.` : `${country.capital[locale]} is the capital. ${name} is in ${country.continent[locale]}.` },
          { title: locale === "es" ? "Lugar representativo" : "Landmark", text: country.landmark[locale] },
          { title: locale === "es" ? "Lenguas" : "Languages", text: country.languages.map((item) => item.name[locale]).join(", ") }
        ],
        place: country.continent[locale], people: "", date: "", fact: "",
        related: countries.filter((item) => item.id !== country.id).slice(0, 2).map((item) => `country-${item.id}`),
        sources,
        questions: [{
          prompt: locale === "es" ? `¿En qué continente está ${name}?` : `Which continent is ${name} in?`,
          options: answerOptions,
          correct: 0,
          explanation: locale === "es" ? `${name} está en ${country.continent[locale]}.` : `${name} is in ${country.continent[locale]}.`
        }],
        language: locale
      };
    }));
  }
  if (topic.key === "body") {
    const organs = adultOrgans();
    catalog.push(...organs.map((organ) => {
      const otherFunctions = organs.filter((item) => item.id !== organ.id).slice(0, 2).map((item) => item.function);
      return {
        id: `body-organ-${organ.id}`, module: "body", title: organ.name,
        keywords: [organ.name, organ.system, organ.location, organ.function, organ.detail],
        question: locale === "es" ? `¿Qué función cumple ${organ.name.toLowerCase()}?` : `What does the ${organ.name.toLowerCase()} do?`,
        shortAnswer: `${organ.location} ${organ.function}`,
        image: {
          svg: adultOrganThumbnail(organ.id, organ.name), alt: locale === "es" ? `${organ.name} en un diagrama anatómico simplificado original` : `${organ.name} in an original simplified anatomical diagram`,
          creator: "Original project illustration", license: "Created for Explore Together; no third-party image is embedded."
        },
        sections: [
          { title: locale === "es" ? "Ubicación" : "Location", text: organ.location },
          { title: locale === "es" ? "Función y sistema" : "Function and system", text: `${organ.function} ${locale === "es" ? "Pertenece a" : "It is part of"} ${organ.system}.` },
          { title: locale === "es" ? "Ampliar explicación" : "Explore further", text: organ.detail }
        ],
        place: "", people: "", date: "", fact: "",
        related: organs.filter((item) => item.id !== organ.id).slice(0, 2).map((item) => `body-organ-${item.id}`),
        sources: organ.sources,
        questions: [{
          prompt: locale === "es" ? `¿Cuál descripción corresponde a ${organ.name.toLowerCase()}?` : `Which description matches the ${organ.name.toLowerCase()}?`,
          options: [organ.function, ...otherFunctions],
          correct: 0,
          explanation: organ.function
        }],
        language: locale
      };
    }));
  }
  if (locale === "es") {
    topic.facts.filter((fact) => !(topic.key === "history" && /guerra mundial/i.test(fact.title))).forEach((fact, index) => {
      const artKey = topic.key === "geo" ? (index === 3 ? "ice" : "plates")
        : topic.key === "history" ? (index === 0 ? "portrait" : "archaeology")
          : topic.key === "body" ? (index === 0 ? "skeleton" : "heart")
            : topic.key === "nature" ? (index === 1 ? "habitat" : "photosynthesis")
              : (index === 1 ? "bridge" : "solar");
      catalog.push({
        id: `fact-${topic.key}-${index}`, module: topic.key, title: fact.title, keywords: [fact.title, fact.text],
        question: fact.title, shortAnswer: fact.text, image: {
          svg: window.EXPLORE_LEARNING_ART?.[artKey] || "",
          alt: window.EXPLORE_LEARNING_ART?.[artKey]?.match(/aria-label="([^"]+)"/)?.[1] || fact.title,
          creator: "Original project illustration", license: "Created for Explore Together; no third-party image is embedded."
        },
        sections: [{ title: fact.title, text: fact.text }], place: "", people: "", date: "", fact: "",
        related: [], sources: topic.sources.slice(0, 3), questions: [], language: locale
      });
    });
  }
  return catalog;
}

function renderAdultSearch(topic) {
  const copy = adultSectionCopy();
  const search = adultSearchByTopic[topic.key] || { query: "", articleId: "" };
  const count = getAdultCatalog(topic).length;
  return `<section class="adult-search" aria-label="${copy.searchTitle}">
    <label for="adult-module-search">${copy.searchTitle}</label>
    <div class="adult-search-control"><span aria-hidden="true">⌕</span><input id="adult-module-search" type="search" value="${escapeHTML(search.query)}" placeholder="${copy.searchPlaceholder}" autocomplete="off" aria-controls="adult-search-results"><span class="adult-search-count">${count} ${copy.searchCount}</span></div>
    <p class="adult-search-hint">${copy.searchHint}</p>
    ${language === "es" || language === "en" ? "" : `<p class="adult-fallback-note" lang="${language}">${copy.fallback}</p>`}
    <div id="adult-search-results" class="adult-search-results">${renderAdultSearchResults(topic)}</div>
  </section>`;
}

function renderAdultSearchResults(topic) {
  const copy = adultSectionCopy();
  const search = adultSearchByTopic[topic.key] || { query: "", articleId: "" };
  const query = normalizeSearchText(search.query);
  if (!query) return "";
  const catalog = getAdultCatalog(topic);
  const terms = query.split(/\s+/).filter(Boolean);
  const results = catalog.filter((article) => {
    const text = normalizeSearchText([article.title, article.question, article.shortAnswer, ...(article.keywords || [])].join(" "));
    return terms.every((term) => text.includes(term));
  });
  if (!results.length) {
    const related = catalog.slice(0, 3);
    return `<div class="adult-no-results" role="status"><h3>${copy.noResults}</h3><p>${copy.related}</p><div class="adult-related-list">${related.map((article) => `<button type="button" class="adult-related-link" data-language-locked="true" lang="${article.language || adultContentLocale()}" data-adult-article="${escapeHTML(article.id)}"><span>${escapeHTML(article.title)}</span><small>${escapeHTML(article.shortAnswer)}</small></button>`).join("")}</div></div>`;
  }
  return `<div class="adult-result-heading"><h3>${copy.results}</h3><span>${results.length}</span></div>
    <div class="adult-result-grid">${results.map((article) => `<button type="button" class="adult-result-card" data-language-locked="true" lang="${article.language || adultContentLocale()}" data-adult-article="${escapeHTML(article.id)}">
      <span class="adult-result-art">${article.image?.svg || ""}</span>
      <span class="adult-result-copy"><b>${escapeHTML(article.title)}</b><span>${escapeHTML(article.shortAnswer)}</span></span>
    </button>`).join("")}</div>`;
}

function renderAdultArticleView(topic, articleId) {
  const copy = adultArticleCopy();
  const article = getAdultCatalog(topic).find((item) => item.id === articleId);
  if (!article) return `<div class="adult-no-results" role="status"><p>${copy.noResults}</p></div>`;
  const image = typeof article.image === "string"
    ? { svg: article.image, alt: article.imageAlt || article.title, creator: window.EXPLORE_ADULT_ARTICLES?.imageRights?.creator || "", license: window.EXPLORE_ADULT_ARTICLES?.imageRights?.license || "" }
    : article.image || {};
  const related = (article.related || []).map((id) => {
    const item = getAdultCatalog(TOPICS.find((candidate) => candidate.key === topic.key) || topic).find((candidate) => candidate.id === id);
    return item ? `<button type="button" class="adult-related-link" data-adult-article="${escapeHTML(item.id)}"><span>${escapeHTML(item.title)}</span><small>${escapeHTML(item.shortAnswer)}</small></button>` : "";
  }).filter(Boolean).join("");
  return `<article class="adult-article" data-language-locked="true" lang="${adultContentLocale()}">
    <button type="button" class="quiet-button adult-back-button" data-adult-back>${copy.backResults}</button>
    <header class="adult-article-header"><p class="section-kicker">${escapeHTML(adultTopicTitle(topic.key))}</p><h2>${escapeHTML(article.title)}</h2><p class="adult-article-question">${escapeHTML(article.question || "")}</p></header>
    <div class="adult-article-layout">
      <div>
        <section class="adult-article-summary"><h3>${copy.summary}</h3><p>${escapeHTML(article.shortAnswer)}</p></section>
        <figure class="adult-article-illustration">${image.svg || ""}<figcaption>${escapeHTML(image.alt || article.title)}<span>${copy.imageNote} ${escapeHTML(image.creator || "")}${image.license ? ` · ${escapeHTML(image.license)}` : ""}</span></figcaption></figure>
      </div>
      <div class="adult-article-copy">
        <h3>${copy.details}</h3>
        ${article.sections.map((section) => `<section class="adult-article-section"><h4>${escapeHTML(section.title)}</h4><p>${escapeHTML(section.text)}</p></section>`).join("")}
        ${article.date ? `<p class="adult-article-metadata"><b>${copy.dates}:</b> ${escapeHTML(article.date)}</p>` : ""}
        ${article.place ? `<p class="adult-article-metadata"><b>${copy.place}:</b> ${escapeHTML(article.place)}</p>` : ""}
        ${article.people ? `<p class="adult-article-metadata"><b>${copy.people}:</b> ${escapeHTML(article.people)}</p>` : ""}
        ${article.fact ? `<aside class="adult-article-fact"><b>${copy.fact}</b><p>${escapeHTML(article.fact)}</p></aside>` : ""}
      </div>
    </div>
    <div class="adult-article-actions"><button type="button" class="action-button" data-adult-quiz-start="${escapeHTML(article.id)}">${copy.openQuiz}</button></div>
    ${related ? `<section class="adult-related"><h3>${copy.relatedLinks}</h3><div class="adult-related-list">${related}</div></section>` : ""}
    <section class="adult-sources"><h3>${copy.sources}</h3><div class="source-list">${(article.sources || []).map(([label, url]) => {
      const href = safeURL(url);
      return href ? `<a class="source-link" href="${href}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(label)}</a>` : "";
    }).join("")}</div><p>${copy.imageCredit}: ${escapeHTML(image.creator || "")}. ${escapeHTML(image.license || "")}</p></section>
  </article>`;
}

function renderAdultQuiz(topic) {
  const copy = adultArticleCopy();
  const search = adultSearchByTopic[topic.key] || { query: "", articleId: "" };
  const catalog = getAdultCatalog(topic);
  const selectedArticleId = search.articleId || adultQuizState.articleId;
  const article = catalog.find((item) => item.id === selectedArticleId) || catalog.find((item) => item.questions?.length);
  const questions = article?.questions || [];
  if (!article || !questions.length) {
    return `<section class="adult-quiz" data-language-locked="true" lang="${adultContentLocale()}"><h3>${copy.quizTitle}</h3><p>${copy.answerNote}</p><p>${copy.noResults}</p></section>`;
  }
  if (adultQuizState.articleId !== article.id) adultQuizState = { articleId: article.id, questionIndex: 0, selected: null, answered: false };
  const question = questions[adultQuizState.questionIndex];
  if (!question) {
    return `<section class="adult-quiz" data-language-locked="true" lang="${adultContentLocale()}"><p class="section-kicker">${copy.quizTitle}</p><h3>${escapeHTML(article.title)}</h3><p class="adult-quiz-finish" role="status">${copy.finish}</p><button type="button" class="quiet-button" data-adult-quiz-retry>${copy.retry}</button><button type="button" class="quiet-button" data-adult-return>${copy.returnArticle}</button></section>`;
  }
  const isCorrect = adultQuizState.selected === question.correct;
  const isFinalCorrect = adultQuizState.answered && isCorrect && adultQuizState.questionIndex === questions.length - 1;
  return `<section class="adult-quiz" data-language-locked="true" lang="${adultContentLocale()}">
    <p class="section-kicker">${copy.quizTitle} · ${escapeHTML(article.title)}</p><h3>${copy.question} ${adultQuizState.questionIndex + 1} / ${questions.length}</h3>
    <p class="adult-quiz-prompt">${escapeHTML(question.prompt)}</p>
    <p class="adult-quiz-hint">${copy.answerNote}</p>
    <div class="adult-quiz-options" role="group" aria-label="${escapeHTML(question.prompt)}">${question.options.map((option, index) => `<button type="button" class="adult-quiz-option${adultQuizState.answered && index === question.correct ? " is-correct" : ""}${adultQuizState.answered && adultQuizState.selected === index && !isCorrect ? " is-incorrect" : ""}" data-adult-quiz-option="${index}" ${adultQuizState.answered ? "disabled" : ""}><span>${String.fromCharCode(65 + index)}</span>${escapeHTML(option)}</button>`).join("")}</div>
    ${adultQuizState.answered ? `<div class="adult-quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" role="status" aria-live="polite"><b>${isCorrect ? copy.correct : copy.incorrect}</b><p><strong>${copy.explanation}:</strong> ${escapeHTML(question.explanation)}</p>${isFinalCorrect ? `<p>${copy.finish}</p>` : ""}</div>
      <div class="adult-quiz-actions">${isCorrect && adultQuizState.questionIndex < questions.length - 1 ? `<button type="button" class="action-button" data-adult-quiz-next>${copy.next}</button>` : `<button type="button" class="quiet-button" data-adult-quiz-retry>${copy.retry}</button>`}<button type="button" class="quiet-button" data-adult-return>${copy.returnArticle}</button></div>` : ""}
  </section>`;
}

function renderMainView() {
  const topic = activeTopic();
  const profile = activeProfile();
  const onAlbum = state.section === "album";
  const isParent = profile.role === "parent";
  const sectionCopy = adultSectionCopy();
  byId("view-root").innerHTML = `
    <section class="theme-hero" data-key="${topic.key}" aria-labelledby="theme-title">
      <div class="hero-text">
        <p class="eyebrow">${onAlbum ? "ÁLBUM DE DESCUBRIMIENTOS" : `TEMA ${String(TOPICS.indexOf(topic) + 1).padStart(2, "0")} · ${profile.role === "parent" ? "MODO FAMILIA" : "MODO EXPLORADOR"}`}</p>
        <h2 id="theme-title">${onAlbum ? "Recuerdos y hallazgos" : escapeHTML(topic.title)}</h2>
        <p>${onAlbum ? "Un espacio de práctica en este dispositivo. Las publicaciones no salen a una comunidad real." : escapeHTML(topic.subtitle)}</p>
      </div>
      <div class="hero-art" aria-hidden="true">${onAlbum ? "📔" : topic.icon}</div>
    </section>
    <section class="content-card" aria-label="${onAlbum ? "Álbum familiar" : `${escapeHTML(topic.title)}: espacios de aprendizaje`}">
      ${onAlbum ? renderAlbum() : `
        <nav class="section-nav" aria-label="Espacios del tema">
          <button type="button" class="section-tab" data-section="learn" aria-current="${state.section === "learn" ? "page" : "false"}"><span aria-hidden="true">📖</span> Aprende</button>
          <button type="button" class="section-tab" data-section="facts" aria-current="${state.section === "facts" ? "page" : "false"}"><span aria-hidden="true">✨</span> ¿Sabías que…?</button>
          <button type="button" class="section-tab${isParent ? " adult-assessment-tab" : ""}" data-section="play" aria-current="${state.section === "play" ? "page" : "false"}"><span aria-hidden="true">${isParent ? "✓" : "🧩"}</span> ${isParent ? sectionCopy.assessment : "Juega"}</button>
          <button type="button" class="section-tab" data-section="album" aria-current="false"><span aria-hidden="true">📔</span> Álbum</button>
        </nav>
        ${isParent ? renderAdultSearch(topic) : ""}
        <div class="section-content">${renderSection(topic, profile)}</div>`}
    </section>`;
  applyLanguage();
}

function renderSection(topic, profile) {
  if (profile.role === "parent") {
    const search = adultSearchByTopic[topic.key] || { query: "", articleId: "" };
    if (state.section === "play") return renderAdultQuiz(topic);
    if (search.articleId) return renderAdultArticleView(topic, search.articleId);
  }
  if (state.section === "facts") return renderFacts(topic);
  if (state.section === "play") return renderPlay(topic);
  if (state.section === "album") return renderAlbum();
  return renderLearn(topic, profile);
}

function renderLearn(topic, profile) {
  const isParent = profile.role === "parent";
  const partSelector = topic.key === "space" ? `
    <div class="topic-subnav" aria-label="Áreas de espacio y tecnología">
      <button class="pill-button" type="button" data-space-area="astronomy" aria-pressed="${(state.spaceArea || "astronomy") === "astronomy"}">🔭 Astronomía</button>
      <button class="pill-button" type="button" data-space-area="engineering" aria-pressed="${state.spaceArea === "engineering"}">🌉 Ingeniería y tecnología</button>
    </div>` : "";
  if (!isParent) return `${partSelector}${renderGuidedLessons(topic, state.childBand)}${renderTopicExplorer(topic)}`;
  const engineeringCopy = topic.key === "space" && state.spaceArea === "engineering";
  const title = engineeringCopy ? "Diseñar para resolver problemas" : topic.lessonTitle;
  const learner = isParent
    ? (engineeringCopy
      ? "La ingeniería aplica ciencia y diseño para resolver necesidades. Un puente conduce cargas a sus apoyos; los barcos desplazan agua y el empuje ayuda a sostenerlos; las computadoras procesan datos con circuitos. Aviones, autos y castillos combinan materiales, forma y propósito."
      : topic.parent)
    : (engineeringCopy ? childEngineeringLesson(age) : childLesson(topic.key, age));
  const ageSentence = !isParent
    ? `<p class="age-note">Explicación para ${age} años: ${age <= 5 ? "vamos paso a paso, con ideas para observar." : age <= 8 ? "mira el ejemplo y piensa qué preguntas te nacen." : "fíjate en las causas y en cómo se conectan las ideas."}</p>`
    : "";
  const progressDone = Boolean(state.progress[topic.key]);
  return `${partSelector}
    <div class="learn-layout">
      <article class="lesson-card">
        <p class="section-kicker">${isParent ? "PARA ACOMPAÑAR" : "LECCIÓN CORTITA"}</p>
        <h3>${escapeHTML(title)}</h3>
        ${ageSentence}
        <p>${escapeHTML(learner)}</p>
        <div class="lesson-example"><span aria-hidden="true">💡</span><span><b>Prueba o conversa:</b> ${escapeHTML(engineeringCopy ? "Construyan el puente de papel de la actividad. Antes de probarlo, dibujen cómo creen que se repartirá el peso." : topic.example)}</span></div>
        ${isParent ? `<div class="parent-tip"><b>Pregunta para conversar:</b> ${escapeHTML(parentPrompt(topic.key, engineeringCopy))}</div>` : ""}
        <div class="source-list" aria-label="Fuentes para aprender más">${topic.sources.slice(0, 2).map(([label, url]) => {
          const href = safeURL(url);
          return href ? `<a class="source-link" href="${href}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(label)}</a>` : "";
        }).join("")}</div>
      </article>
      <aside class="lesson-visual" data-key="${topic.key}" aria-label="Ilustración decorativa de ${escapeHTML(topic.short)}">
        <span class="visual-orbit" aria-hidden="true"></span>
        <div class="visual-icons" aria-hidden="true">${topic.visual.map((icon) => `<span>${icon}</span>`).join("")}</div>
        <p>${escapeHTML(engineeringCopy ? "Imagina · construye · prueba" : "Mira de cerca. Pregunta. Descubre.")}</p>
      </aside>
    </div>
    <div class="lesson-actions">
      <label class="challenge-check"><input id="learned-check" type="checkbox" ${progressDone ? "checked" : ""}> Marcar este tema como explorado en este navegador</label>
    </div>
    ${renderAdultLessonExtensions(topic)}
    ${renderTopicExplorer(topic)}`;
}

function childLesson(key, age) {
  const younger = {
    geo: "La Tierra tiene tierra y agua. Hay países con banderas. El hielo flota en el agua. Los volcanes y terremotos pueden cambiar el suelo.",
    history: "La historia nos cuenta cómo vivían las personas. Los museos guardan objetos antiguos. Frida Kahlo fue artista. Las guerras hicieron daño; podemos aprender sobre la paz.",
    body: "El corazón mueve la sangre. Los pulmones nos ayudan a respirar. El cerebro nos ayuda a pensar y movernos.",
    nature: "Las plantas necesitan luz y agua para crecer. Los animales viven en lugares distintos. El ornitorrinco es un mamífero que pone huevos.",
    space: "La Tierra es un planeta. El Sol es una estrella y la Luna da vueltas alrededor de la Tierra."
  };
  const older = {
    geo: "La Tierra tiene placas que se mueven lentamente; los continentes descansan sobre esas placas. Un terremoto libera energía cuando se deslizan rocas en una falla; algunos volcanes expulsan magma, y los movimientos del fondo marino pueden causar tsunamis. El hielo flota porque su densidad es menor que la del agua líquida.",
    history: "La historia usa relatos, documentos y objetos para entender otras épocas. La Primera Guerra Mundial ocurrió entre 1914 y 1918; la Segunda, entre 1939 y 1945. Los museos y la arqueología conservan evidencias. Frida Kahlo fue una pintora mexicana; Albert Einstein fue un físico que desarrolló la relatividad.",
    body: "El corazón bombea sangre; los pulmones intercambian oxígeno y dióxido de carbono, y el sistema nervioso procesa señales. Los sistemas trabajan juntos: la sangre transporta oxígeno y el cerebro coordina muchas respuestas.",
    nature: "En la fotosíntesis, plantas, algas y algunas bacterias transforman energía luminosa usando agua y dióxido de carbono. “Mamífero” es un grupo biológico; “ovíparo” describe poner huevos. No son categorías opuestas: los ornitorrincos son mamíferos ovíparos.",
    space: "El sistema solar tiene ocho planetas que orbitan el Sol, una estrella. La Luna es el satélite natural de la Tierra. La gravedad mantiene esos cuerpos en órbita."
  };
  if (age <= 5) return younger[key];
  if (age >= 9) return older[key];
  return activeTopic().child;
}

function childEngineeringLesson(age) {
  if (age <= 5) return "Un puente ayuda a cruzar y un castillo tiene muros. Los autos y las computadoras tienen muchas piezas. Los barcos flotan y los aviones vuelan.";
  if (age >= 9) return "La ingeniería usa materiales y diseño para resolver problemas. Puentes y castillos distribuyen cargas; los autos convierten energía para moverse; las computadoras procesan información. El empuje ayuda a flotar a los barcos y cuatro fuerzas actúan sobre un avión.";
  return "Las personas ingenieras diseñan cosas para resolver problemas. Un puente sostiene peso y un barco desplaza agua para flotar. Los autos y las computadoras también se construyen con muchas piezas que trabajan juntas.";
}

function parentPrompt(key, engineering) {
  if (engineering) return "¿Qué parte del puente conviene reforzar y cómo podríamos comprobarlo con seguridad?";
  const prompts = {
    geo: "¿Qué evidencias nos ayudarían a explicar por qué unas cosas flotan y otras se hunden?",
    history: "¿Qué puede contarnos un objeto y qué no podemos saber solo con mirarlo?",
    body: "¿Qué cambios notamos en el cuerpo cuando caminamos y descansamos?",
    nature: "¿Qué necesita una planta y qué seres vivos se relacionan con ella?",
    space: "¿Qué observaciones ayudan a distinguir una estrella, un planeta y un satélite?"
  };
  return prompts[key];
}

function lessonLocale() {
  return language === "es" ? "es" : "en";
}

function guideUI() {
  return lessonLocale() === "es" ? {
    lessons: "LECCIONES PARA EXPLORAR", child: "EXPLORADOR", step: "PASO", of: "de",
    listen: "Escuchar", pause: "Pausar", repeat: "Repetir", narration: "Narración",
    effects: "Efectos", on: "Activada", off: "Desactivada", previous: "Anterior",
    next: "Siguiente", startActivity: "Ir a la actividad", question: "PREGUNTA",
    choose: "Elige una respuesta", retry: "Volver a intentar", completed: "¡Lo lograste!",
    done: "Lección completada", family: "ACTIVIDAD FAMILIAR OPCIONAL",
    nextLesson: "Explorar otra lección", adult: "PARA ADULTOS",
    more: "Quiero saber más", less: "Mostrar menos",
    orderActivity: "ORDENA LAS IDEAS", orderTitle: "¿Qué ocurre primero?",
    orderInstruction: "Toca las tarjetas en el orden que explica este descubrimiento.",
    orderHint: "Pista: piensa qué debe ocurrir primero para que lo siguiente sea posible.",
    orderWrong: "Esa idea va después. Busca qué debe ocurrir antes.",
    orderRight: "¡Bien! Esa idea va en este lugar.",
    orderComplete: "¡Ordenaste todas las ideas y explicaste la secuencia!",
    reasoningActivity: "RETO DE RAZONAMIENTO",
    reasoningInstruction: "Usa la explicación y la evidencia para elegir la mejor respuesta.",
    deepDive: "EXPLICACIÓN CON MÁS DETALLE",
    imageUnavailable: "Las instrucciones siguen disponibles en texto.",
    fallback: "La narración de voz no está disponible en este dispositivo."
  } : {
    lessons: "LESSONS TO EXPLORE", child: "EXPLORER", step: "STEP", of: "of",
    listen: "Listen", pause: "Pause", repeat: "Repeat", narration: "Narration",
    effects: "Effects", on: "On", off: "Off", previous: "Previous",
    next: "Next", startActivity: "Start activity", question: "QUESTION",
    choose: "Choose an answer", retry: "Try again", completed: "You did it!",
    done: "Lesson complete", family: "OPTIONAL FAMILY ACTIVITY",
    nextLesson: "Explore another lesson", adult: "FOR ADULTS",
    more: "I want to know more", less: "Show less",
    orderActivity: "PUT THE IDEAS IN ORDER", orderTitle: "What happens first?",
    orderInstruction: "Tap the cards in the order that explains this discovery.",
    orderHint: "Hint: think about what must happen first for the next event to be possible.",
    orderWrong: "That idea comes later. Look for what needs to happen before it.",
    orderRight: "Good thinking! That idea belongs here.",
    orderComplete: "You put the ideas in order and explained the sequence!",
    reasoningActivity: "REASONING CHALLENGE",
    reasoningInstruction: "Use the explanation and evidence to choose the best answer.",
    deepDive: "A CLOSER EXPLANATION",
    imageUnavailable: "Written instructions are still available.",
    fallback: "Voice narration is not available on this device."
  };
}

function lessonsFor(topic) {
  return window.EXPLORE_LESSONS?.[lessonLocale()]?.[topic.key] || [];
}

function currentGuideLesson(topic, lessons) {
  const key = `${topic.key}:${lessonLocale()}`;
  if (guidedState.key !== key) {
    guidedState = {
      key, lessonIndex: topic.key === "space" && state.spaceArea === "engineering" ? 1 : 0,
      stepIndex: 0, stage: "steps", feedback: "", optionOrder: null,
      orderOptions: null, orderPicked: [], moreOpen: false
    };
  }
  if (topic.key === "space") guidedState.lessonIndex = state.spaceArea === "engineering" ? 1 : 0;
  guidedState.lessonIndex = Math.max(0, Math.min(guidedState.lessonIndex, lessons.length - 1));
  return lessons[guidedState.lessonIndex];
}

function renderGuideAudioControls(ui) {
  return `<div class="guide-audio" role="group" aria-label="${lessonLocale() === "es" ? "Controles de audio" : "Audio controls"}">
    <div class="guide-audio-actions">
      <button class="quiet-button" type="button" data-guide-action="listen">🔊 ${ui.listen}</button>
      <button class="quiet-button" type="button" data-guide-action="pause" ${guideAudioPreferences.narration ? "" : "disabled"}>⏸ ${ui.pause}</button>
      <button class="quiet-button" type="button" data-guide-action="repeat">↻ ${ui.repeat}</button>
    </div>
    <div class="guide-audio-toggles">
      <button class="audio-toggle" type="button" data-guide-action="toggle-narration" aria-pressed="${guideAudioPreferences.narration}">${ui.narration}: ${guideAudioPreferences.narration ? ui.on : ui.off}</button>
      <button class="audio-toggle" type="button" data-guide-action="toggle-effects" aria-pressed="${guideAudioPreferences.effects}">${ui.effects}: ${guideAudioPreferences.effects ? ui.on : ui.off}</button>
    </div>
  </div>`;
}

function ageBandSteps(lesson, band) {
  return band === "4-6" ? lesson.simpleSteps : lesson.steps;
}

function ageBandReasoningPrompt(topic) {
  const prompts = {
    es: {
      geo: "Causa y consecuencia: ¿qué explicación conecta mejor el cambio observado con su resultado?",
      history: "Pistas y conclusiones: ¿qué idea está mejor respaldada por la evidencia?",
      body: "Relación entre sistemas: ¿qué explicación conecta mejor la función con el efecto en el cuerpo?",
      nature: "Relación en el ecosistema: ¿qué explicación conecta mejor las necesidades de los seres vivos?",
      space: "Predicción: ¿qué principio explica mejor lo que ocurre en este sistema?"
    },
    en: {
      geo: "Cause and effect: which explanation best connects the change with its result?",
      history: "Evidence and conclusions: which idea is best supported by the clues?",
      body: "Systems thinking: which explanation best connects the function with its effect on the body?",
      nature: "Ecosystem relationships: which explanation best connects living things and their needs?",
      space: "Prediction: which principle best explains what happens in this system?"
    }
  };
  return (prompts[lessonLocale()] || prompts.en)[topic.key];
}

function lessonMoreText(lesson, band) {
  if (band === "4-6") return lesson.steps.map((step) => `${step.title}. ${step.text}`).join(" ");
  if (band === "7-9") return lesson.adult.overview;
  return `${lesson.adult.coaching} ${lesson.family}`;
}

function renderMoreButton(lesson, band, ui) {
  const moreText = lessonMoreText(lesson, band);
  return `<div class="guide-more">
    <button class="quiet-button" type="button" data-guide-action="more" aria-expanded="${Boolean(guidedState.moreOpen)}">${ui.more}</button>
    ${guidedState.moreOpen ? `<div class="guide-more-copy"><p>${escapeHTML(moreText)}</p><button class="quiet-button" type="button" data-guide-action="less">${ui.less}</button></div>` : ""}
  </div>`;
}

function renderGuidedLessons(topic, band) {
  const lessons = lessonsFor(topic);
  if (!lessons.length) return `<p class="guide-unavailable">No hay lecciones nuevas disponibles para este tema.</p>`;
  const ui = guideUI();
  const lesson = currentGuideLesson(topic, lessons);
  const steps = ageBandSteps(lesson, band);
  const isReasoning = band === "10-12";
  const isOrdering = band === "7-9";
  const stepIndex = Math.min(guidedState.stepIndex, steps.length - 1);
  const illustration = window.EXPLORE_LEARNING_ART?.[lesson.illustration] || "";
  const lessonButtons = lessons.map((item, index) => {
    return `<button class="guide-lesson-tab" type="button" data-lesson-index="${index}" aria-current="${guidedState.lessonIndex === index ? "page" : "false"}">${escapeHTML(item.title)}</button>`;
  }).join("");
  const bandLabel = {
    es: { "4-6": "4–6 años · paso a paso", "7-9": "7–9 años · conecta ideas", "10-12": "10–12 años · razona y explica" },
    en: { "4-6": "Ages 4–6 · one step at a time", "7-9": "Ages 7–9 · connect ideas", "10-12": "Ages 10–12 · reason and explain" },
    ja: { "4-6": "4～6歳 · ひとつずつ", "7-9": "7～9歳 · 考えをつなげる", "10-12": "10～12歳 · 理由を考える" },
    tr: { "4-6": "4–6 yaş · adım adım", "7-9": "7–9 yaş · fikirleri bağla", "10-12": "10–12 yaş · düşün ve açıkla" }
  };
  const rangeLabel = (bandLabel[lessonLocale()] || bandLabel.en)[band];
  const guideHeader = `<nav class="guide-lesson-nav" aria-label="${ui.lessons}">${lessonButtons}</nav>
    <div class="guide-family-tip"><span>${rangeLabel}</span><p>${escapeHTML(lesson.question)}</p></div>
    <figure class="guide-illustration">${illustration}</figure>`;
  const sound = renderGuideAudioControls(ui);
  const moreButton = renderMoreButton(lesson, band, ui);

  if (isOrdering && (guidedState.stage === "order" || guidedState.stage === "done")) {
    if (!guidedState.orderOptions || guidedState.orderOptions.length !== steps.length) {
      guidedState.orderOptions = shuffled(steps.map((_, index) => index));
      guidedState.orderPicked = [];
    }
    const picked = guidedState.orderPicked || [];
    const answerOptions = guidedState.orderOptions.map((index) => {
      const step = steps[index];
      const alreadyPicked = picked.includes(index);
      return `<button class="guide-order-choice${alreadyPicked ? " is-ordered" : ""}" type="button" data-guide-action="order-step" data-order-step="${index}" ${alreadyPicked || guidedState.stage === "done" ? "disabled" : ""}>
        <span class="order-choice-number">${alreadyPicked ? picked.indexOf(index) + 1 : "↕"}</span>
        <span><b>${escapeHTML(step.title)}</b><small>${escapeHTML(step.text)}</small></span>
      </button>`;
    }).join("");
    const feedback = guidedState.feedback
      ? `<p class="guide-feedback ${guidedState.stage === "done" ? "good" : "try"}" role="status" aria-live="polite">${escapeHTML(guidedState.feedback)}</p>` : "";
    return `<section class="guided-lesson" data-topic="${topic.key}" data-age-band="${band}">
      ${guideHeader}
      <article class="guide-screen">
        <p class="section-kicker">${ui.orderActivity}</p>
        <h3>${ui.orderTitle}</h3>
        <p class="guide-instruction">${ui.orderInstruction}</p>
        <p class="guide-hint">${ui.orderHint}</p>
        <div class="guide-order-list">${answerOptions}</div>
        ${feedback}
        ${guidedState.stage === "done"
          ? `<div class="guide-completion"><strong>${ui.completed}</strong><span>${ui.done}</span></div><button class="action-button" type="button" data-guide-action="retry">${ui.retry}</button>`
          : `<button class="quiet-button guide-retry" type="button" data-guide-action="retry">${ui.retry}</button>`}
        ${moreButton}
      </article>
      ${sound}
      <aside class="guide-family-activity"><p class="section-kicker">${ui.family}</p><p>${escapeHTML(lesson.family)}</p></aside>
    </section>`;
  }

  if (guidedState.stage === "quiz" || guidedState.stage === "done") {
    const optionCount = isReasoning ? 3 : 2;
    if (!guidedState.optionOrder || guidedState.optionOrder.length !== optionCount) {
      const correctOption = lesson.activity.options.find((option) => option.id === lesson.activity.correct);
      const distractors = lesson.activity.options.filter((option) => option.id !== lesson.activity.correct);
      guidedState.optionOrder = shuffled([correctOption, ...distractors.slice(0, optionCount - 1)]);
    }
    const answerOptions = guidedState.optionOrder.map((option) => `
      <button class="guide-answer" type="button" data-guide-action="answer" data-answer-id="${escapeHTML(option.id)}" ${guidedState.stage === "done" ? "disabled" : ""}>
        ${renderOptionIllustration(option.visual)}<span>${escapeHTML(option.label)}</span>
      </button>`).join("");
    const feedback = guidedState.feedback
      ? `<p class="guide-feedback ${guidedState.stage === "done" ? "good" : "try"}" role="status" aria-live="polite">${escapeHTML(guidedState.feedback)}</p>` : "";
    const completion = guidedState.stage === "done"
      ? `<div class="guide-completion"><strong>${ui.completed}</strong><span>${ui.done}</span></div>
        <button class="action-button" type="button" data-guide-action="retry">${ui.retry}</button>`
      : `<button class="quiet-button guide-retry" type="button" data-guide-action="retry">${ui.retry}</button>`;
    return `<section class="guided-lesson${isReasoning ? " reasoning-lesson" : ""}" data-topic="${topic.key}" data-age-band="${band}">
      ${guideHeader}
      <article class="guide-screen">
        ${isReasoning ? `<div class="reasoning-explanation"><p class="section-kicker">${ui.deepDive}</p><p>${escapeHTML(lesson.adult.overview)}</p></div>` : ""}
        <p class="section-kicker">${isReasoning ? ui.reasoningActivity : ui.question}</p>
        ${isReasoning ? `<p class="reasoning-lens">${escapeHTML(ageBandReasoningPrompt(topic))}</p>` : ""}
        <h3>${escapeHTML(lesson.activity.prompt)}</h3>
        <p class="guide-instruction">${isReasoning ? ui.reasoningInstruction : ui.choose}</p>
        <div class="guide-answer-grid">${answerOptions}</div>
        ${feedback}${completion}${moreButton}
      </article>
      ${sound}
      <aside class="guide-family-activity"><p class="section-kicker">${ui.family}</p><p>${escapeHTML(lesson.family)}</p></aside>
    </section>`;
  }

  const step = steps[stepIndex];
  const completed = Boolean(state.progress[`lesson:${topic.key}:${lesson.id}`]);
  return `<section class="guided-lesson" data-topic="${topic.key}" data-age-band="${band}">
    ${guideHeader}
    <article class="guide-screen">
      ${isReasoning ? `<div class="reasoning-explanation"><p class="section-kicker">${ui.deepDive}</p><p>${escapeHTML(lesson.adult.overview)}</p></div>` : ""}
      <p class="section-kicker">${ui.step} ${stepIndex + 1} ${ui.of} ${steps.length}</p>
      <div class="guide-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${steps.length}" aria-valuenow="${stepIndex + 1}" aria-label="${ui.step} ${stepIndex + 1} ${ui.of} ${steps.length}">
        <span style="width:${((stepIndex + 1) / steps.length) * 100}%"></span>
      </div>
      <h3>${escapeHTML(step.title)}</h3>
      <p class="guide-step-text">${escapeHTML(step.text)}</p>
      ${moreButton}
      ${sound}
      <div class="guide-navigation">
        <button class="quiet-button" type="button" data-guide-action="previous" ${stepIndex === 0 ? "disabled" : ""}>← ${ui.previous}</button>
        ${stepIndex + 1 < steps.length
          ? `<button class="action-button" type="button" data-guide-action="next">${ui.next} →</button>`
          : `<button class="action-button" type="button" data-guide-action="start-quiz">${ui.startActivity} →</button>`}
      </div>
      ${completed ? `<p class="guide-completion" role="status">${ui.done}</p>` : ""}
    </article>
    <aside class="guide-family-activity"><p class="section-kicker">${ui.family}</p><p>${escapeHTML(lesson.family)}</p></aside>
  </section>`;
}

function renderAdultLessonExtensions(topic) {
  const lessons = lessonsFor(topic);
  if (!lessons.length) return "";
  const title = lessonLocale() === "es" ? "Lecciones nuevas para acompañar" : "New lessons to guide";
  return `<section class="adult-lesson-extensions">
    <h3>${title}</h3>
    ${lessons.map((lesson) => `<details class="adult-lesson-detail">
      <summary>${escapeHTML(lesson.title)}</summary>
      <p><b>${lessonLocale() === "es" ? "Pregunta de inicio:" : "Opening question:"}</b> ${escapeHTML(lesson.question)}</p>
      <p><b>${lessonLocale() === "es" ? "Explicación:" : "Explanation:"}</b> ${escapeHTML(lesson.adult.overview)}</p>
      <p><b>${lessonLocale() === "es" ? "Sugerencia para acompañar:" : "Guidance:"}</b> ${escapeHTML(lesson.adult.coaching)}</p>
      <p><b>${lessonLocale() === "es" ? "Actividad familiar:" : "Family activity:"}</b> ${escapeHTML(lesson.family)}</p>
      <div class="source-list">${lesson.adult.sources.map(([label, url]) => `<a class="source-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(label)}</a>`).join("")}</div>
    </details>`).join("")}
  </section>`;
}

function explorerLocale() {
  return language === "es" ? "es" : "en";
}

function renderTopicExplorer(topic) {
  if (topic.key === "geo") return renderCountryExplorer();
  if (topic.key === "body") return renderHumanBodyExplorer();
  return "";
}

function renderCountryExplorer() {
  const data = window.EXPLORE_EXPLORERS?.countries || [];
  const locale = explorerLocale();
  if (!data.length) return "";
  const selected = data.find((country) => country.id === selectedCountryId) || data[0];
  if (!selected.languages.some((item) => item.id === selectedCountryLanguageId)) {
    selectedCountryLanguageId = selected.languages[0].id;
  }
  const selectedLanguage = selected.languages.find((item) => item.id === selectedCountryLanguageId) || selected.languages[0];
  const copy = locale === "es" ? {
    kicker: "EXPLORA UN PAÍS", title: "Elige un país para descubrirlo",
    instruction: "Toca una bandera para ver su continente, capital, lugar y lengua.",
    capital: "Capital", continent: "Continente", landmark: "Lugar representativo",
    language: "Idioma para escuchar", listen: "Escuchar un saludo",
    heading: "Cada lugar tiene historias y lenguas distintas."
  } : {
    kicker: "EXPLORE A COUNTRY", title: "Choose a country to discover",
    instruction: "Tap a flag to see its continent, capital, landmark, and language.",
    capital: "Capital", continent: "Continent", landmark: "Landmark",
    language: "Language to hear", listen: "Listen to a greeting",
    heading: "Every place has its own stories and languages."
  };
  const countryButtons = data.map((country) => `<button class="country-choice" type="button" data-country="${country.id}" aria-pressed="${country.id === selected.id}">
    <span class="country-flag" aria-hidden="true">${country.flag}</span><span>${escapeHTML(country.name[locale])}</span>
  </button>`).join("");
  const sourceLinks = selected.sources.map((source, index) => {
    const label = index === 0
      ? `National Geographic Kids · ${selected.name[locale]}`
      : selected.id === "france" ? (locale === "es" ? "Torre Eiffel · sitio oficial" : "Eiffel Tower · official site")
        : locale === "es" ? `UNESCO · ${selected.landmark.es}` : `UNESCO · ${selected.landmark.en}`;
    return `<a class="source-link" href="${escapeHTML(source[1])}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(label)}</a>`;
  }).join("");
  return `<section class="country-explorer" aria-labelledby="country-explorer-title">
    <div class="explorer-heading"><p class="section-kicker">${copy.kicker}</p><h3 id="country-explorer-title">${copy.title}</h3><p>${copy.instruction}</p></div>
    <div class="country-picker" role="group" aria-label="${copy.title}">${countryButtons}</div>
    <article class="country-detail" aria-live="polite">
      <div class="country-detail-flag" aria-hidden="true">${selected.flag}</div>
      <div class="country-detail-content">
        <h4>${escapeHTML(selected.name[locale])}</h4>
        <p>${escapeHTML(copy.continent)}: <b>${escapeHTML(selected.continent[locale])}</b> · ${escapeHTML(copy.capital)}: <b>${escapeHTML(selected.capital[locale])}</b></p>
        <p>${escapeHTML(copy.landmark)}: <b>${escapeHTML(selected.landmark[locale])}</b></p>
        <label class="country-language-label" for="country-language-select">${copy.language}</label>
        <div class="country-audio-row">
          <select id="country-language-select" aria-label="${copy.language}">
            ${selected.languages.map((item) => `<option value="${item.id}" ${item.id === selectedLanguage.id ? "selected" : ""}>${escapeHTML(item.name[locale])}</option>`).join("")}
          </select>
          <button type="button" class="quiet-button" data-explorer-action="country-speak">${copy.listen}</button>
        </div>
      </div>
    </article>
    <p class="country-greeting" lang="${selectedLanguage.id}">${escapeHTML(selectedLanguage.greeting)}</p>
    <p class="explorer-note">${copy.heading}</p>
    <div class="source-list" aria-label="${locale === "es" ? "Fuentes del explorador de países" : "Country explorer sources"}">${sourceLinks}</div>
  </section>`;
}

function renderHumanBodyExplorer() {
  if (activeProfile().role === "parent") return renderAdultBodyExplorer();
  const parts = window.EXPLORE_EXPLORERS?.bodyParts || [];
  const locale = explorerLocale();
  const selected = parts.find((part) => part.id === selectedBodyPartId) || parts[0];
  if (!selected) return "";
  const copy = locale === "es" ? {
    kicker: "CUERPO HUMANO INTERACTIVO", title: "Toca una parte para explorarla",
    instruction: "El cuerpo tiene sistemas que trabajan juntos.", more: "Para adultos:", listen: "Escuchar explicación"
  } : {
    kicker: "INTERACTIVE HUMAN BODY", title: "Choose a body part to explore",
    instruction: "Body systems work together.", more: "For adults:", listen: "Listen to explanation"
  };
  const buttons = parts.map((part) => `<button type="button" class="body-part-button${part.id === selected.id ? " is-selected" : ""}" data-body-part="${part.id}" aria-pressed="${part.id === selected.id}">
    <span aria-hidden="true">${part.icon}</span><span><b>${escapeHTML(part.name[locale])}</b><small>${escapeHTML(part.system[locale])}</small></span>
  </button>`).join("");
  const adultDetail = activeProfile().role === "parent"
    ? `<p class="body-adult-detail"><b>${copy.more}</b> ${escapeHTML(selected.adult[locale])}</p>` : "";
  const focusPoint = {
    brain: [130, 39], heart: [130, 136], lungs: [130, 132], stomach: [130, 174], bones: [130, 221]
  }[selected.id];
  return `<section class="human-body-explorer" aria-labelledby="human-body-title">
    <div class="explorer-heading"><p class="section-kicker">${copy.kicker}</p><h3 id="human-body-title">${copy.title}</h3><p>${copy.instruction}</p></div>
    <div class="body-explorer-layout">
      <figure class="body-map" aria-label="${locale === "es" ? "Ilustración esquemática del cuerpo humano" : "Schematic illustration of the human body"}">
        <svg viewBox="0 0 260 360" role="img" aria-label="${locale === "es" ? "Cerebro, pulmones, corazón, estómago y huesos" : "Brain, lungs, heart, stomach, and bones"}">
          <circle cx="130" cy="50" r="31" fill="#e4b999" stroke="#8c6953" stroke-width="4"/>
          <path d="M99 43q3-36 32-34 29 1 32 34l-14-12-17 8-16-8Z" fill="#584539"/>
          <path d="M102 91q28-16 56 0l17 91-25 17 4 96h-27l-7-78-7 78H86l4-96-25-17Z" fill="#d9e7dc" stroke="#64816e" stroke-width="5" stroke-linejoin="round"/>
          <path d="m88 112-30 65m114-65 30 65m-83 119-12 47m40-47 12 47" fill="none" stroke="#64816e" stroke-width="13" stroke-linecap="round"/>
          <path d="M117 25q-8 9 0 17 7-8 13 0 9-10-2-18-5-4-11 1Zm19-1q-7 7-1 14 7-8 13 1 8-8 0-15-6-5-12 0Z" fill="#c69963"/>
          <path d="M128 112q-19-24-31-9-11 18 2 43 12 21 29 4Zm6 0q19-24 31-9 11 18-2 43-12 21-29 4Z" fill="#8fb5bd" stroke="#5d8892" stroke-width="3"/>
          <path d="M132 123q-17-12-18 5 0 12 17 23 16-11 17-23 0-17-16-5Z" fill="#d66f70" stroke="#975257" stroke-width="3"/>
          <path d="M122 163q-12 8-5 25 7 11 17 8 12-4 9-18-2-17-21-15Z" fill="#d5aa76" stroke="#9e7954" stroke-width="3"/>
          <path d="M130 94v195m-24-92h47m-43 31h38m-32 31h27" fill="none" stroke="#f1e5c7" stroke-width="5" stroke-linecap="round"/>
          <circle class="body-focus" cx="${focusPoint[0]}" cy="${focusPoint[1]}" r="28"/>
        </svg>
      </figure>
      <div class="body-part-list" role="group" aria-label="${copy.title}">${buttons}</div>
    </div>
    <article class="body-part-detail" aria-live="polite">
      <p class="section-kicker">${escapeHTML(selected.system[locale])}</p>
      <h4><span aria-hidden="true">${selected.icon}</span> ${escapeHTML(selected.name[locale])}</h4>
      <p>${escapeHTML(selected.function[locale])}</p>
      ${adultDetail}
      <button type="button" class="quiet-button body-listen" data-explorer-action="body-speak">${copy.listen}</button>
    </article>
    <div class="source-list" aria-label="${locale === "es" ? "Fuentes del explorador del cuerpo" : "Human body explorer sources"}">
      ${(window.EXPLORE_EXPLORERS.sources || []).map(([, sourceUrl], index) => {
        const label = index === 0
          ? (locale === "es" ? "MedlinePlus · órganos y sistemas" : "MedlinePlus · organs and systems")
          : index === 1 ? (locale === "es" ? "NHLBI · corazón" : "NHLBI · heart")
            : (locale === "es" ? "NHLBI · pulmones" : "NHLBI · lungs");
        const url = index === 0 && locale === "en" ? "https://medlineplus.gov/ency/article/002368.htm" : sourceUrl;
        return `<a class="source-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(label)}</a>`;
      }).join("")}
    </div>
  </section>`;
}

function adultOrgans() {
  const es = [
    { id: "brain", name: "Cerebro", system: "Sistema nervioso", location: "Dentro del cráneo.", function: "Recibe e integra información y participa en el control del movimiento, la memoria, el lenguaje y muchas funciones corporales.", detail: "El cerebro forma parte del encéfalo. Se comunica con el cuerpo a través de la médula espinal y los nervios; no actúa aislado de otros sistemas.", x: 141, y: 58, sources: [["OpenStax · sistema nervioso", "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-introduction"]] },
    { id: "lungs", name: "Pulmones", system: "Sistema respiratorio", location: "En el tórax, a ambos lados del corazón.", function: "En los alvéolos, el oxígeno pasa del aire a la sangre y el dióxido de carbono pasa de la sangre al aire que exhalamos.", detail: "El diafragma y otros músculos ayudan a ventilar los pulmones. La circulación transporta los gases entre pulmones y tejidos.", x: 112, y: 158, sources: [["NHLBI · pulmones", "https://www.nhlbi.nih.gov/health/lungs"]] },
    { id: "heart", name: "Corazón", system: "Sistema cardiovascular", location: "En el tórax, entre los pulmones, un poco hacia la izquierda del centro del cuerpo.", function: "Es un músculo que bombea sangre hacia los pulmones y el resto del cuerpo.", detail: "Sus cavidades y válvulas mantienen el flujo en una dirección. La sangre lleva oxígeno y nutrientes y recoge productos de desecho.", x: 141, y: 190, sources: [["OpenStax · anatomía del corazón", "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy"], ["NHLBI · corazón", "https://www.nhlbi.nih.gov/health/heart"]] },
    { id: "liver", name: "Hígado", system: "Sistema digestivo (y otras funciones)", location: "En la parte superior derecha del abdomen, debajo del diafragma.", function: "Procesa nutrientes, produce bilis y participa en el metabolismo y la transformación de sustancias.", detail: "La bilis ayuda a la digestión de grasas. El hígado también almacena algunos nutrientes y modifica muchas sustancias que circulan en la sangre.", x: 109, y: 229, sources: [["OpenStax · sistema digestivo", "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1-overview-of-the-digestive-system"]] },
    { id: "stomach", name: "Estómago", system: "Sistema digestivo", location: "En la parte superior del abdomen, hacia la izquierda del cuerpo.", function: "Mezcla los alimentos con jugos gástricos y comienza su digestión antes de que pasen al intestino delgado.", detail: "El estómago almacena y mezcla temporalmente el alimento. La mayor parte de la absorción de nutrientes ocurre después, principalmente en el intestino delgado.", x: 170, y: 231, sources: [["OpenStax · sistema digestivo", "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1-overview-of-the-digestive-system"]] },
    { id: "kidneys", name: "Riñones", system: "Sistema urinario", location: "En la parte posterior del abdomen, uno a cada lado de la columna.", function: "Filtran la sangre para regular agua y sales y formar la orina.", detail: "Los riñones también participan en el equilibrio interno del organismo. La ubicación dibujada es aproximada: están hacia la espalda, no en la parte frontal del cuerpo.", x: 108, y: 268, sources: [["MedlinePlus · riñones", "https://medlineplus.gov/kidneydiseases.html"]] },
    { id: "intestines", name: "Intestinos", system: "Sistema digestivo", location: "En el abdomen, debajo del estómago.", function: "El intestino delgado absorbe la mayoría de los nutrientes; el intestino grueso absorbe agua y ayuda a formar las heces.", detail: "El tubo digestivo trabaja con otros órganos, como el hígado y el páncreas. La digestión es un proceso coordinado, no una tarea de un solo órgano.", x: 141, y: 291, sources: [["OpenStax · sistema digestivo", "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1-overview-of-the-digestive-system"]] },
    { id: "bones", name: "Huesos", system: "Sistema esquelético", location: "Forman el esqueleto por todo el cuerpo.", function: "Dan soporte, protegen órganos y, junto con músculos y articulaciones, permiten el movimiento.", detail: "El tejido óseo está vivo. La médula de ciertos huesos participa en la producción de células sanguíneas y el hueso almacena minerales.", x: 141, y: 333, sources: [["MedlinePlus · huesos, articulaciones y músculos", "https://medlineplus.gov/bonesjointsandmuscles.html"]] }
  ];
  const en = [
    { id: "brain", name: "Brain", system: "Nervous system", location: "Inside the skull.", function: "Receives and integrates information and helps control movement, memory, language, and many body functions.", detail: "The brain is part of the encephalon. It communicates with the body through the spinal cord and nerves; it does not work in isolation from other systems.", x: 141, y: 58, sources: [["OpenStax · nervous system", "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-introduction"]] },
    { id: "lungs", name: "Lungs", system: "Respiratory system", location: "In the chest, on either side of the heart.", function: "In the alveoli, oxygen moves from air into the blood, and carbon dioxide moves from blood into the air we exhale.", detail: "The diaphragm and other muscles help ventilate the lungs. Circulation transports gases between the lungs and tissues.", x: 112, y: 158, sources: [["NHLBI · lungs", "https://www.nhlbi.nih.gov/health/lungs"]] },
    { id: "heart", name: "Heart", system: "Cardiovascular system", location: "In the chest between the lungs, slightly left of the body's center.", function: "A muscle that pumps blood to the lungs and the rest of the body.", detail: "Its chambers and valves keep blood flowing in one direction. Blood carries oxygen and nutrients and collects waste products.", x: 141, y: 190, sources: [["OpenStax · heart anatomy", "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy"], ["NHLBI · heart", "https://www.nhlbi.nih.gov/health/heart"]] },
    { id: "liver", name: "Liver", system: "Digestive system (and other functions)", location: "Upper right abdomen, beneath the diaphragm.", function: "Processes nutrients, produces bile, and contributes to metabolism and the processing of substances.", detail: "Bile helps digest fats. The liver also stores some nutrients and modifies many substances that circulate in the blood.", x: 109, y: 229, sources: [["OpenStax · digestive system", "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1-overview-of-the-digestive-system"]] },
    { id: "stomach", name: "Stomach", system: "Digestive system", location: "Upper abdomen, toward the body's left side.", function: "Mixes food with gastric juices and begins digestion before food passes into the small intestine.", detail: "The stomach temporarily stores and mixes food. Most nutrient absorption happens later, mainly in the small intestine.", x: 170, y: 231, sources: [["OpenStax · digestive system", "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1-overview-of-the-digestive-system"]] },
    { id: "kidneys", name: "Kidneys", system: "Urinary system", location: "Toward the back of the abdomen, one on each side of the spine.", function: "Filter blood to regulate water and salts and produce urine.", detail: "The kidneys also help maintain the body's internal balance. Their position in this drawing is approximate: they are toward the back, not the front of the body.", x: 108, y: 268, sources: [["MedlinePlus · kidneys", "https://medlineplus.gov/kidneydiseases.html"]] },
    { id: "intestines", name: "Intestines", system: "Digestive system", location: "In the abdomen, below the stomach.", function: "The small intestine absorbs most nutrients; the large intestine absorbs water and helps form stool.", detail: "The digestive tract works with other organs, including the liver and pancreas. Digestion is coordinated, not the job of one organ alone.", x: 141, y: 291, sources: [["OpenStax · digestive system", "https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1-overview-of-the-digestive-system"]] },
    { id: "bones", name: "Bones", system: "Skeletal system", location: "Form the skeleton throughout the body.", function: "Support the body, protect organs, and work with muscles and joints to enable movement.", detail: "Bone tissue is living. Marrow in certain bones helps produce blood cells, and bone stores minerals.", x: 141, y: 333, sources: [["MedlinePlus · bones, joints, and muscles", "https://medlineplus.gov/bonesjointsandmuscles.html"]] }
  ];
  return adultContentLocale() === "es" ? es : en;
}

function renderAdultBodyExplorer() {
  const organs = adultOrgans();
  const selected = organs.find((organ) => organ.id === selectedBodyPartId) || organs[0];
  if (!selected) return "";
  const copy = {
    es: { kicker: "CUERPO HUMANO INTERACTIVO", title: "Selecciona un órgano o estructura", instruction: "Elige un marcador en la ilustración o usa la lista. La posición es educativa y aproximada.", location: "Ubicación", function: "Función", system: "Sistema", more: "Ampliar explicación", list: "Lista de órganos y estructuras", source: "Fuentes anatómicas", fallback: "La ficha anatómica se muestra en inglés porque aún no hay traducción completa." },
    en: { kicker: "INTERACTIVE HUMAN BODY", title: "Select an organ or structure", instruction: "Choose a marker on the illustration or use the list. Locations are approximate and for learning.", location: "Location", function: "Function", system: "System", more: "Explore further", list: "Organs and structures", source: "Anatomy sources", fallback: "The anatomy guide is temporarily shown in English because a complete translation is not available." },
    ja: { kicker: "人体インタラクティブ", title: "臓器または構造を選択", instruction: "図のマーカーまたは一覧から選択してください。位置は学習用の概略図です。", location: "位置", function: "機能", system: "系", more: "詳しく見る", list: "臓器と構造", source: "解剖学の参考資料", fallback: "完全な翻訳がないため、解剖学ガイドは英語で表示しています。" },
    tr: { kicker: "ETKİLEŞİMLİ İNSAN VÜCUDU", title: "Bir organ veya yapı seç", instruction: "Çizimdeki işaretçiyi ya da listeyi seç. Konumlar yaklaşık ve eğitim amaçlıdır.", location: "Konum", function: "İşlev", system: "Sistem", more: "Daha fazlasını öğren", list: "Organlar ve yapılar", source: "Anatomi kaynakları", fallback: "Tam çeviri bulunmadığından anatomi rehberi şimdilik İngilizce gösteriliyor." }
  };
  const view = language === "es" ? copy.es : copy.en;
  const isSpanish = adultContentLocale() === "es";
  const name = (organ) => organ.name;
  const svgLabel = isSpanish
    ? "Ilustración anatómica educativa, vista frontal y no gráfica; las ubicaciones son aproximadas"
    : "Educational, non-graphic anatomical illustration, front view; locations are approximate";
  const markers = organs.map((organ, index) => `<g class="anatomy-marker${organ.id === selected.id ? " is-selected" : ""}" data-body-part="${organ.id}" role="button" tabindex="0" aria-pressed="${organ.id === selected.id}" aria-label="${escapeHTML(name(organ))}">
      <circle cx="${organ.x}" cy="${organ.y}" r="16" class="anatomy-hit-area"/><circle cx="${organ.x}" cy="${organ.y}" r="11" class="anatomy-marker-dot"/><text x="${organ.x}" y="${organ.y + 4}" text-anchor="middle">${index + 1}</text>
    </g>`).join("");
  return `<section class="human-body-explorer adult-body-explorer" data-language-locked="true" lang="${adultContentLocale()}" aria-labelledby="adult-body-title">
    <div class="explorer-heading"><p class="section-kicker">${view.kicker}</p><h3 id="adult-body-title">${view.title}</h3><p>${view.instruction}</p></div>
    ${language === "es" || language === "en" ? "" : `<p class="adult-fallback-note" lang="${language}">${copy[language]?.fallback || copy.en.fallback}</p>`}
    <div class="adult-anatomy-layout">
      <figure class="adult-anatomy-map">
        <svg viewBox="0 0 282 390" role="img" aria-label="${svgLabel}">
          <path class="anatomy-body-silhouette" d="M114 100Q87 105 75 131L53 208Q49 225 62 230Q75 235 81 219L98 171L92 245Q91 260 104 267L94 332Q91 348 106 350Q121 352 124 337L141 274L158 337Q161 352 176 350Q191 348 188 332L178 267Q191 260 190 245L184 171L201 219Q207 235 220 230Q233 225 229 208L207 131Q195 105 168 100Z"/>
          <path class="anatomy-head" d="M110 51Q110 18 141 18Q172 18 172 51L167 77Q161 96 141 98Q121 96 115 77Z"/>
          <path class="anatomy-neck" d="M126 91h30v21h-30z"/>
          <path class="anatomy-organ brain" d="M140 35q-8-13-18-5-8 7-2 16-9 10 1 18 9 6 17-2 8 9 17 2 11-6 3-17 6-10-3-17-10-6-18 5Z"/>
          <path class="anatomy-brain-line" d="M141 31v35m-16-22q9-2 15 6m14-15q-9 2-13 10m-15 12q8-5 15 1m13-3q-8-6-13 2"/>
          <path class="anatomy-organ lung" d="M132 137q-18-17-28 4-7 19 3 39 8 15 22 5Zm18 0q18-17 28 4 7 19-3 39-8 15-22 5Z"/>
          <path class="anatomy-organ heart" d="M139 164q-15-13-22 0-5 12 23 32 27-19 22-32-7-13-23 0Z"/>
          <path class="anatomy-organ liver" d="M101 209q13-13 35-5l7 15q-13 18-37 14-14-2-5-24Z"/>
          <path class="anatomy-organ stomach" d="M157 211q12-8 22 2 9 10 1 25-8 13-21 7-11-6-4-17 7-8 2-17Z"/>
          <path class="anatomy-organ kidney" d="M102 253q-13-5-15 9-2 14 11 17 10 0 13-12 1-10-9-14Zm78 0q13-5 15 9 2 14-11 17-10 0-13-12-1-10 9-14Z"/>
          <path class="anatomy-organ intestine" d="M120 275q21-8 42 0l-2 33q-18 12-38 0Z"/>
          <path class="anatomy-intestine-line" d="M126 282q-8 10 1 17t-1 7m12-24q-8 10 1 17t-1 7m12-24q-8 10 1 17t-1 7"/>
          <path class="anatomy-bones" d="M141 107v235m-27-145h54m-50 38h45m-38 38h32" />
          <path class="anatomy-leg-bones" d="m125 271-15 70m47-70 15 70" />
          ${markers}
        </svg>
        <figcaption>${svgLabel}</figcaption>
      </figure>
      <div class="adult-organ-list" role="group" aria-label="${view.list}">
        <h4>${view.list}</h4>
        ${organs.map((organ) => `<button type="button" class="body-part-button${organ.id === selected.id ? " is-selected" : ""}" data-body-part="${organ.id}" aria-pressed="${organ.id === selected.id}">
          <span class="adult-organ-number" aria-hidden="true">${organs.indexOf(organ) + 1}</span><span><b>${escapeHTML(name(organ))}</b><small>${escapeHTML(organ.system)}</small></span>
        </button>`).join("")}
      </div>
    </div>
    <article class="body-part-detail adult-organ-detail" aria-live="polite">
      <p class="section-kicker">${escapeHTML(selected.system)}</p><h4>${escapeHTML(name(selected))}</h4>
      <p><b>${view.location}:</b> ${escapeHTML(selected.location)}</p>
      <p><b>${view.function}:</b> ${escapeHTML(selected.function)}</p>
      <details class="adult-organ-more"><summary>${view.more}</summary><p>${escapeHTML(selected.detail)}</p></details>
      <div class="source-list" aria-label="${view.source}">${selected.sources.map(([label, url]) => {
        const href = safeURL(url);
        return href ? `<a class="source-link" href="${href}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(label)}</a>` : "";
      }).join("")}</div>
    </article>
  </section>`;
}

function renderOptionIllustration(visual) {
  const drawings = {
    plates: `<path d="M7 39h35l9-13 12 13h18v23H7Z" fill="#ad8260"/><path d="M8 40h29l8-10 9 10h27M26 27v-9m35 9v-9" fill="none" stroke="#547b60" stroke-width="5"/><path d="m19 17 7 7 7-7m20 0 7 7 7-7" fill="none" stroke="#547b60" stroke-width="4"/>`,
    cloud: `<path d="M20 53a13 13 0 0 1-1-26 20 20 0 0 1 39-2 14 14 0 1 1 4 28Z" fill="#d7e8ee" stroke="#69899a" stroke-width="4"/><path d="M19 61h49" stroke="#93a9b0" stroke-width="4" stroke-linecap="round"/>`,
    water: `<path d="M44 12C35 26 23 38 23 49a21 21 0 0 0 42 0c0-11-12-23-21-37Z" fill="#87bfd0" stroke="#4e879d" stroke-width="4"/><path d="M35 52q9 7 18 0" fill="none" stroke="#e9f8f6" stroke-width="4" stroke-linecap="round"/>`,
    ice: `<path d="m44 12 25 14v29L44 69 19 55V26Z" fill="#d6f1f3" stroke="#5b9eaa" stroke-width="4"/><path d="m19 26 25 15 25-15M44 41v28" fill="none" stroke="#8dcbd1" stroke-width="3"/>`,
    stone: `<path d="m17 51 3-19 18-14 20 5 13 17-11 20-27 4Z" fill="#a5a599" stroke="#676960" stroke-width="4" stroke-linejoin="round"/><path d="m25 42 15-12 15 2" fill="none" stroke="#d7d6c9" stroke-width="3"/>`,
    rock: `<path d="m17 51 3-19 18-14 20 5 13 17-11 20-27 4Z" fill="#a5a599" stroke="#676960" stroke-width="4" stroke-linejoin="round"/><path d="m25 42 15-12 15 2" fill="none" stroke="#d7d6c9" stroke-width="3"/>`,
    pot: `<path d="M29 22h30l-3 10 10 8-7 23q-15 9-30 0l-7-23 10-8Z" fill="#ca795e" stroke="#88513f" stroke-width="4" stroke-linejoin="round"/><path d="M28 42h32m-24-20-2-9h19l-2 9" fill="none" stroke="#89533f" stroke-width="4"/>`,
    portrait: `<rect x="14" y="12" width="60" height="57" rx="4" fill="#f3e7d2" stroke="#8d7158" stroke-width="4"/><circle cx="44" cy="31" r="13" fill="#d99976"/><path d="M23 63q7-20 21-20t21 20" fill="#668671"/><path d="M30 29q4-14 14-14m2 0q13 2 14 15" fill="none" stroke="#55372f" stroke-width="6"/>`,
    map: `<path d="m14 23 19-9 23 8 18-9v45l-18 9-23-8-19 9Z" fill="#e1e9d8" stroke="#67826a" stroke-width="4" stroke-linejoin="round"/><path d="M33 14v45m23-37v45M22 35h9m36 11h7" stroke="#91aa83" stroke-width="3"/><path d="M53 29q-9 12-9 17a9 9 0 0 0 18 0q0-5-9-17Z" fill="#cd7859"/>`,
    heart: `<path d="M44 67 18 42Q3 25 20 15q13-8 24 8 12-16 25-8 17 10 2 27Z" fill="#d67172" stroke="#914d52" stroke-width="4"/><path d="M43 22q-9 19 1 26m8-25q-5 11 1 17" fill="none" stroke="#f3b4a1" stroke-width="4" stroke-linecap="round"/>`,
    lungs: `<path d="M42 19v27m0-14q-7-12-15-10-10 5-12 26-2 17 12 16 15-2 15-19m0-13q7-12 15-10 10 5 12 26 2 17-12 16-15-2-15-19" fill="#e5a1a1" stroke="#995e66" stroke-width="4" stroke-linejoin="round"/>`,
    bone: `<path d="M23 20q-10-8-15 2-4 9 6 13l31 30q4 10 13 6 10-5 3-14L30 26q3-10-7-12-9-2-11 6Z" fill="#f1e2c3" stroke="#9b896d" stroke-width="4" stroke-linejoin="round"/>`,
    joint: `<path d="M17 25q-8-8-14 1-5 8 5 14l20 16q2 13 15 10 12-4 6-16l-20-17q-2-12-12-8Zm54 23q8 8 1 15-8 8-16 0L42 45q-12-2-9-15 4-12 16-6Z" transform="translate(9 0)" fill="#f1e2c3" stroke="#927c61" stroke-width="4" stroke-linejoin="round"/>`,
    leaf: `<path d="M15 61Q15 20 69 14q-4 47-42 51Z" fill="#82ac77" stroke="#557b56" stroke-width="4"/><path d="M20 60 59 22m-24 23-1-15m13 3 12 0" fill="none" stroke="#e2efc9" stroke-width="3" stroke-linecap="round"/>`,
    sun: `<circle cx="44" cy="41" r="17" fill="#f0ce67"/><path d="M44 9v11m0 42v11M12 41h11m42 0h11M21 18l8 8m30 30 8 8m0-46-8 8M29 56l-8 8" stroke="#c79743" stroke-width="5" stroke-linecap="round"/>`,
    moon: `<path d="M56 14q-26 8-24 31 2 19 23 25-12 9-28 3-24-10-17-35Q18 14 42 11q8 0 14 3Z" fill="#f0d47a" stroke="#bd9b50" stroke-width="4"/><circle cx="59" cy="20" r="3" fill="#fff3c8"/>`,
    habitat: `<path d="M7 49q18-12 36 0t36 0v23H7Z" fill="#98b67f"/><circle cx="63" cy="20" r="11" fill="#f1d77d"/><path d="M28 51V30m0 10q-16-18-22-5 7 15 22 13m0-8q14-19 26-7-6 13-25 16" fill="none" stroke="#527b51" stroke-width="5" stroke-linecap="round"/>`,
    tool: `<path d="m20 57 34-34m-39 40 14-3-7-8Zm28-39 19-7-7 19-12 5Z" fill="#c98a60" stroke="#815c43" stroke-width="4" stroke-linejoin="round"/>`,
    toy: `<rect x="15" y="38" width="25" height="25" rx="3" fill="#d88963" stroke="#865744" stroke-width="4"/><rect x="44" y="23" width="27" height="40" rx="3" fill="#8caf91" stroke="#58765f" stroke-width="4"/><circle cx="28" cy="29" r="10" fill="#e8c86d"/>`,
    waterDrop: `<path d="M44 12C35 26 23 38 23 49a21 21 0 0 0 42 0c0-11-12-23-21-37Z" fill="#87bfd0" stroke="#4e879d" stroke-width="4"/>`,
    planet: `<circle cx="44" cy="41" r="18" fill="#83aec0" stroke="#547d91" stroke-width="4"/><path d="M11 45q30-26 65-10l-2 9q-35-16-60 12Z" fill="none" stroke="#c18a65" stroke-width="6"/>`,
    bridge: `<path d="M9 35h70M15 39q6 28 29 28t29-28" fill="none" stroke="#bd8060" stroke-width="7" stroke-linecap="round"/><path d="M19 35v15m25-15v18m25-18v15" stroke="#82644d" stroke-width="4"/><path d="M44 8v17" stroke="#567b8d" stroke-width="5"/>`,
    paint: `<path d="m24 52 35-36 11 10-35 36-16 6Z" fill="#c28c58" stroke="#73563f" stroke-width="4" stroke-linejoin="round"/><path d="m57 16 8-8q5-4 9 1l4 4q4 5-1 9l-7 7Z" fill="#b85b58"/><circle cx="21" cy="25" r="8" fill="#5f866c"/><circle cx="36" cy="18" r="6" fill="#e5bf61"/>`,
    flag: `<path d="M24 69V12m4 5q22-10 43 2v29q-21-12-43-2Z" fill="#8cae8c" stroke="#5a765f" stroke-width="4" stroke-linejoin="round"/><path d="M30 28h36M30 37h36" stroke="#f1e4c9" stroke-width="5"/>`
  };
  return `<svg class="guide-option-art" viewBox="0 0 88 82" aria-hidden="true" focusable="false">${drawings[visual] || drawings.cloud}</svg>`;
}

function guideSpeechText() {
  const topic = activeTopic();
  const lessons = lessonsFor(topic);
  const lesson = lessons[guidedState.lessonIndex];
  if (!lesson) return "";
  if (guidedState.stage === "steps") {
    const steps = ageBandSteps(lesson, state.childBand);
    const step = steps[guidedState.stepIndex];
    return `${lesson.question} ${step.title}. ${step.text}`;
  }
  if (guidedState.stage === "order") {
    const steps = ageBandSteps(lesson, state.childBand);
    const remaining = (guidedState.orderOptions || []).filter((index) => !guidedState.orderPicked.includes(index));
    return `${guideUI().orderInstruction}. ${guideUI().orderHint}. ${remaining.map((index) => steps[index].title).join(". ")}. ${guidedState.feedback}`;
  }
  if (guidedState.stage === "quiz") {
    const count = state.childBand === "10-12" ? 3 : 2;
    const options = guidedState.optionOrder || lesson.activity.options.slice(0, count);
    return `${lesson.activity.prompt} ${options.map((option) => option.label).join(". ")}` +
      (guidedState.feedback ? `. ${guidedState.feedback}` : "");
  }
  return `${guideUI().completed}. ${guidedState.feedback}`;
}

function speakGuideText(text = guideSpeechText()) {
  const ui = guideUI();
  if (!guideAudioPreferences.narration) return;
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    toast(ui.fallback);
    return;
  }
  window.speechSynthesis.cancel();
  narrationPaused = false;
  const utterance = new SpeechSynthesisUtterance(text);
  const speechLocale = lessonLocale() === "es" ? "es-MX" : "en-US";
  utterance.lang = speechLocale;
  const availableVoices = window.speechSynthesis.getVoices();
  utterance.voice = availableVoices.find((voice) => voice.lang.toLowerCase().startsWith(speechLocale.slice(0, 2))) || null;
  utterance.onerror = (event) => {
    if (event.error !== "canceled" && event.error !== "interrupted") toast(ui.fallback);
  };
  activeUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function speakCountryGreeting() {
  const country = (window.EXPLORE_EXPLORERS?.countries || []).find((item) => item.id === selectedCountryId);
  const selectedLanguage = country?.languages.find((item) => item.id === selectedCountryLanguageId);
  if (!country || !selectedLanguage) return;
  speakExplorerText(selectedLanguage.greeting, selectedLanguage.id);
}

function speakExplorerText(text, speechLocale) {
  if (!guideAudioPreferences.narration) {
    toast(language === "es" ? "Activa la narración para escuchar." : "Turn narration on to listen.");
    return;
  }
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    toast(guideUI().fallback);
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechLocale;
  utterance.voice = window.speechSynthesis.getVoices().find((voice) =>
    voice.lang.toLowerCase().startsWith(speechLocale.slice(0, 2).toLowerCase())
  ) || null;
  utterance.onerror = (event) => {
    if (event.error !== "canceled" && event.error !== "interrupted") toast(guideUI().fallback);
  };
  activeUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function saveGuideAudioPreferences() {
  try {
    localStorage.setItem(GUIDE_AUDIO_KEY, JSON.stringify(guideAudioPreferences));
  } catch (error) {
    console.warn("No se pudieron guardar las preferencias de audio.", error);
  }
}

function playGuideEffect(isCorrect) {
  if (!guideAudioPreferences.effects) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  try {
    audioContext ||= new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = isCorrect ? 660 : 240;
    gain.gain.setValueAtTime(.035, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .12);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + .13);
  } catch (error) {
    console.warn("No se pudo reproducir el efecto de sonido.", error);
  }
}

function handleGuideAction(action, button) {
  const topic = activeTopic();
  const lessons = lessonsFor(topic);
  const lesson = lessons[guidedState.lessonIndex];
  if (!lesson) return;
  const steps = ageBandSteps(lesson, state.childBand);

  if (action === "listen" || action === "repeat") {
    speakGuideText();
    return;
  }
  if (action === "pause") {
    if (!("speechSynthesis" in window)) { toast(guideUI().fallback); return; }
    if (window.speechSynthesis.paused || narrationPaused) {
      window.speechSynthesis.resume();
      narrationPaused = false;
    } else {
      window.speechSynthesis.pause();
      narrationPaused = true;
    }
    return;
  }
  if (action === "toggle-narration") {
    guideAudioPreferences.narration = !guideAudioPreferences.narration;
    if (!guideAudioPreferences.narration && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      narrationPaused = false;
    }
    saveGuideAudioPreferences();
    renderMainView();
    return;
  }
  if (action === "toggle-effects") {
    guideAudioPreferences.effects = !guideAudioPreferences.effects;
    saveGuideAudioPreferences();
    renderMainView();
    return;
  }
  if (action === "more") {
    guidedState.moreOpen = true;
    renderMainView();
    speakGuideText(lessonMoreText(lesson, state.childBand));
    return;
  }
  if (action === "less") {
    guidedState.moreOpen = false;
    renderMainView();
    return;
  }
  if (action === "previous" || action === "next") {
    guidedState.stepIndex = Math.max(0, Math.min(steps.length - 1, guidedState.stepIndex + (action === "next" ? 1 : -1)));
    guidedState.moreOpen = false;
  } else if (action === "start-quiz") {
    guidedState.stage = state.childBand === "7-9" ? "order" : "quiz";
    guidedState.feedback = "";
    guidedState.optionOrder = null;
    guidedState.orderPicked = [];
  } else if (action === "retry") {
    guidedState.stage = state.childBand === "7-9" ? "order" : "quiz";
    guidedState.feedback = "";
    guidedState.optionOrder = null;
    guidedState.orderPicked = [];
    if (activeProfile().role === "child") {
      delete state.progress[`lesson:${topic.key}:${lesson.id}`];
      persist();
    }
  } else if (action === "order-step") {
    if (guidedState.stage !== "order") return;
    const index = Number(button.dataset.orderStep);
    if (index !== guidedState.orderPicked.length) {
      guidedState.feedback = guideUI().orderWrong;
      playGuideEffect(false);
    } else {
      guidedState.orderPicked.push(index);
      const completed = guidedState.orderPicked.length === steps.length;
      guidedState.feedback = completed ? guideUI().orderComplete : guideUI().orderRight;
      playGuideEffect(true);
      if (completed) {
        guidedState.stage = "done";
        state.progress[`lesson:${topic.key}:${lesson.id}`] = true;
        persist();
      }
    }
    const feedback = guidedState.feedback;
    renderMainView();
    if (guideAudioPreferences.narration) speakGuideText(feedback);
    return;
  } else if (action === "answer") {
    if (guidedState.stage !== "quiz") return;
    const option = lesson.activity.options.find((item) => item.id === button.dataset.answerId);
    if (!option) return;
    guidedState.feedback = option.feedback;
    if (option.id === lesson.activity.correct) {
      guidedState.stage = "done";
      state.progress[`lesson:${topic.key}:${lesson.id}`] = true;
      persist();
      playGuideEffect(true);
    } else {
      playGuideEffect(false);
    }
    const feedback = guidedState.feedback;
    renderMainView();
    if (guideAudioPreferences.narration) speakGuideText(feedback);
    return;
  }
  renderMainView();
}

function renderFacts(topic) {
  return `<div class="facts-grid">${topic.facts.map((fact) => `
    <article class="fact-card">
      <span class="fact-icon" aria-hidden="true">${fact.icon}</span>
      <h3>${escapeHTML(fact.title)}</h3>
      <p>${escapeHTML(fact.text)}</p>
    </article>`).join("")}</div>
    <div class="source-list" aria-label="Fuentes de los datos curiosos">${topic.sources.map(([label, url]) => {
      const href = safeURL(url);
      return href ? `<a class="source-link" href="${href}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(label)}</a>` : "";
    }).join("")}</div>`;
}

function shuffled(array) {
  const result = [...array];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [result[index], result[swap]] = [result[swap], result[index]];
  }
  return result;
}

function renderPlay(topic) {
  const pairs = topic.pairs;
  const leftItems = shuffled(pairs.map((pair) => ({ id: pair.id, icon: pair.left[0], text: pair.left[1] })));
  const rightItems = shuffled(pairs.map((pair) => ({ id: pair.id, icon: pair.right[0], text: pair.right[1] })));
  const completed = activeMatch.matched.length === pairs.length;
  const matchedCount = activeMatch.matched.length;
  return `<div class="activity-layout">
    <article class="activity-card challenge-card">
      ${activeGuideMarkup("family")}
      <div class="challenge-icon" aria-hidden="true">${activeMatch.kind === topic.key ? topic.challenge.icon : "👪"}</div>
      <div class="challenge-family" aria-hidden="true">${PROFILES.map((profile) => profileAvatar(profile, true)).join("")}</div>
      <p class="section-kicker">RETO FAMILIAR</p>
      <h3>${activeMatch.kind === topic.key ? escapeHTML(topic.challenge.title) : "Aprender juntos"}</h3>
      <p>${activeMatch.kind === topic.key ? escapeHTML(topic.challenge.text) : "Prueben el desafío sencillo para conversar y experimentar lejos de la pantalla."}</p>
      <button class="action-button" type="button" data-action="challenge">${activeMatch.kind === topic.key ? "Elegir otro reto" : "Ver reto de hoy"}</button>
      <p class="progress-label">${matchedCount} de ${pairs.length} parejas encontradas.</p>
    </article>
    <article class="activity-card">
      ${activeGuideMarkup("game", true)}
      <p class="section-kicker">JUEGO DE PAREJAS</p>
      <h3>${escapeHTML(topic.matchTitle)}</h3>
      <p>${escapeHTML(topic.matchDescription)} También puedes usar Tab y Enter.</p>
      <div class="match-board">
        <div class="match-column"><h4>Columna A</h4>${leftItems.map((item) => renderMatchOption(item, "left")).join("")}</div>
        <div class="match-column"><h4>Columna B</h4>${rightItems.map((item) => renderMatchOption(item, "right")).join("")}</div>
      </div>
      <p class="match-feedback ${activeMatch.feedback ? activeMatch.feedback.kind : ""}" role="status" aria-live="polite">${escapeHTML(activeMatch.feedback ? activeMatch.feedback.text : "Elige dos tarjetas para comprobar una pareja.")}</p>
      ${completed ? `<p class="match-feedback good" role="status">¡Completado! Cada pareja tiene una explicación. Puedes volver a intentarlo.</p>` : ""}
      <button class="quiet-button" type="button" data-action="reset-match" style="margin-top:8px">Volver a intentar</button>
    </article>
  </div>`;
}

function activeGuideMarkup(kind, compact = false) {
  const profile = activeProfile();
  const copy = {
    es: { children: "Child guide A y Child guide B", adult: "Adult guide", family: "guía familiar", game: "guía del juego" },
    en: { children: "Child guide A and Child guide B", adult: "Adult guide", family: "family guide", game: "game guide" },
    ja: { children: "子どもの案内役Aと子どもの案内役B", adult: "大人の案内役", family: "家族のガイド", game: "ゲームのガイド" },
    tr: { children: "Child guide A ve Child guide B", adult: "Adult guide", family: "aile rehberi", game: "oyun rehberi" }
  }[language] || { children: "Child guide A y Child guide B", adult: "Adult guide", family: "guía familiar", game: "guía del juego" };
  const guideName = profile.role === "child" ? copy.children : copy.adult;
  const avatars = profile.role === "child"
    ? `<span class="activity-avatar-pair"><img src="${avatarPath("older")}" alt=""><img src="${avatarPath("younger")}" alt=""></span>`
    : `<img class="activity-avatar" src="${avatarPath("mom")}" alt="">`;
  return `<div class="activity-guide${compact ? " compact" : ""}">
    ${avatars}
    <span>${guideName} · ${copy[kind]}</span>
  </div>`;
}

function renderMatchOption(item, side) {
  const matched = activeMatch.matched.includes(item.id);
  const selected = activeMatch.selected && activeMatch.selected.id === item.id && activeMatch.selected.side === side;
  return `<button type="button" class="match-option${matched ? " is-matched" : ""}${selected ? " is-selected" : ""}"
    data-match-id="${item.id}" data-match-side="${side}" aria-pressed="${selected}" ${matched ? "disabled" : ""}>
    <span class="option-icon" aria-hidden="true">${item.icon}</span><span>${escapeHTML(item.text)}</span>${matched ? `<span aria-label="Pareja encontrada">✓</span>` : ""}
  </button>`;
}

function renderAlbum() {
  const profile = activeProfile();
  const topicFilter = state.albumTopic || "all";
  const allPosts = state.posts.filter((post) => !post.demo || state.albumView === "community");
  let posts = allPosts.filter((post) => {
    if (topicFilter !== "all" && post.topic !== topicFilter) return false;
    if (state.albumView === "private") return post.status !== "pending" && (post.visibility === "private" || post.status === "rejected") && post.profileId !== "demo";
    if (state.albumView === "community") return post.visibility === "community" && post.status === "approved";
    return post.status === "pending" && profile.role === "parent";
  });
  if (state.albumView === "pending" && profile.role !== "parent") posts = [];
  const pendingCount = state.posts.filter((post) => post.status === "pending").length;
  const sectionName = state.albumView === "private" ? "Álbum privado" : state.albumView === "community" ? "Comunidad de práctica" : "Aprobaciones";
  return `<div class="album-toolbar">
      <h3 class="album-title">${sectionName}</h3>
      <label class="sr-only" for="album-topic-filter">Filtrar el álbum por tema</label>
      <select id="album-topic-filter" aria-label="Filtrar publicaciones por tema">
        <option value="all" ${topicFilter === "all" ? "selected" : ""}>Todos los temas</option>
        ${TOPICS.map((topic) => `<option value="${topic.key}" ${topicFilter === topic.key ? "selected" : ""}>${escapeHTML(topic.short)}</option>`).join("")}
      </select>
      ${state.albumView !== "pending" ? `<button class="action-button" type="button" data-action="new-post">＋ Crear publicación</button>` : ""}
    </div>
    <div class="album-tabs" role="group" aria-label="Vistas del álbum">
      <button class="album-tab" type="button" data-album-view="private" aria-pressed="${state.albumView === "private"}">Solo mi familia</button>
      <button class="album-tab" type="button" data-album-view="community" aria-pressed="${state.albumView === "community"}">Comunidad (demo)</button>
      ${profile.role === "parent" ? `<button class="album-tab" type="button" data-album-view="pending" aria-pressed="${state.albumView === "pending"}">Aprobaciones ${pendingCount ? `· ${pendingCount}` : ""}</button>` : ""}
    </div>
    ${state.albumView === "community" ? `<p class="demo-banner"><b>Comunidad simulada:</b> solo son datos de demostración guardados en este navegador. No se publica nada en Internet ni se muestra a familias reales.</p>` : ""}
    ${state.albumView === "pending" ? `<p class="approval-banner">Revisa las publicaciones creadas desde perfiles infantiles antes de que aparezcan en esta comunidad simulada.</p>` : ""}
    ${state.albumView === "private" ? `<p class="demo-banner">Las publicaciones privadas se guardan en este navegador. Elige “Solo mi familia” al crear una publicación para mantenerla fuera de la comunidad de práctica.</p>` : ""}
    <div class="post-grid">${posts.length ? posts.map((post) => renderPost(post)).join("") : renderEmptyAlbum()}</div>`;
}

function renderPost(post) {
  const profile = PROFILES.find((person) => person.id === post.profileId);
  const ownPost = !post.demo && canManagePost(post);
  const topic = TOPICS.find((item) => item.key === post.topic) || TOPICS[0];
  const statusText = post.status === "pending" ? "Pendiente" : post.status === "rejected" ? "Solo familia" : post.visibility === "community" ? "Comunidad" : "Privada";
  const statusClass = post.status === "approved" && post.visibility === "community" ? "public" : "";
  const imageData = safeImageData(post.image);
  const image = imageData
    ? `<img class="post-image" src="${escapeHTML(imageData)}" alt="Imagen añadida a la publicación" loading="lazy">`
    : `<div class="post-image post-image-placeholder" aria-hidden="true">${topic.icon}<span>✦</span></div>`;
  const author = post.demo
    ? "Familia de demostración"
    : (profile && profile.role === "child") || isChildProfileId(post.profileId)
      ? "Peque explorador · familia" : "Mi familia";
  return `<article class="post-card" data-post-id="${escapeHTML(post.id)}">
      ${image}
      <div class="post-body">
        <div class="post-meta"><span>${topic.icon} ${escapeHTML(topic.short)}</span><span class="status-tag ${statusClass}">${statusText}</span></div>
        <h3>${escapeHTML(author)}</h3>
        <p>${escapeHTML(post.caption)}</p>
        ${post.demo ? `<small class="form-hint">Ejemplo ficticio · no es una publicación real</small>` : ""}
        <div class="post-actions">${ownPost ? `
          ${post.status === "pending" && activeProfile().role === "parent" ? `<button type="button" data-action="approve-post" data-id="${escapeHTML(post.id)}">Aprobar</button><button type="button" data-action="reject-post" data-id="${escapeHTML(post.id)}">Dejar privada</button>` : ""}
          <button type="button" data-action="edit-post" data-id="${escapeHTML(post.id)}">Editar</button>
          <button type="button" data-action="toggle-visibility" data-id="${escapeHTML(post.id)}">${post.visibility === "community" ? "Hacer privada" : "Pedir compartir"}</button>
          <button type="button" data-action="delete-post" data-id="${escapeHTML(post.id)}">Eliminar</button>` : post.visibility === "community" ? `<button class="report-button" type="button" data-action="report-post" data-id="${escapeHTML(post.id)}">⚑ Reportar</button>` : ""}
        </div>
      </div>
    </article>`;
}

function renderEmptyAlbum() {
  const text = state.albumView === "pending"
    ? "No hay publicaciones infantiles pendientes de revisar."
    : state.albumView === "community"
      ? "Todavía no hay publicaciones comunitarias en este tema. El ejemplo puede estar en otra categoría."
      : "Aún no hay descubrimientos guardados aquí. ¡Crea la primera publicación familiar!";
  return `<div class="empty-state"><span aria-hidden="true">📔</span><h3>Este rincón está esperando</h3><p>${text}</p></div>`;
}

function openDialog(content) {
  byId("dialog-content").innerHTML = content;
  applyAvatarSheet();
  applyLanguage();
  const dialog = byId("app-dialog");
  if (!dialog.open) dialog.showModal();
}

function dialogHead(title, description = "") {
  return `<div class="dialog-head"><div><h2 id="dialog-title">${escapeHTML(title)}</h2><p>${escapeHTML(description)}</p></div><button class="close-button" type="button" data-action="close-dialog" aria-label="Cerrar">×</button></div>`;
}

function openProfileDialog() {
  const current = activeProfile();
  openDialog(`<div class="dialog-inner">${dialogHead("Perfiles y ajustes", "Cambia de módulo familiar y administra el progreso local.")}
    <div class="settings-block"><h3>Perfiles de demostración</h3><p>Elige Adultos o Niños. En Niños, selecciona una franja de edad para adaptar las explicaciones y los retos.</p></div>
    <div class="dialog-list">${PROFILES.map((profile) => `<div class="profile-row">${profileAvatar(profile)}<span><b>${escapeHTML(profile.name)}${current.id === profile.id ? " · activo" : ""}</b><small>${escapeHTML(profile.detail)}</small></span>
      <button type="button" class="quiet-button" data-action="choose-profile" data-id="${profile.id}">${current.id === profile.id ? "Seleccionado" : "Elegir"}</button></div>`).join("")}</div>
    <div class="settings-block"><h3>Avatares aprobados</h3><p>Esta demo pública usa iconos genéricos y no incluye avatares familiares.</p></div>
    <div class="dialog-actions"><button class="danger-button" type="button" data-action="reset-demo">Borrar datos de este navegador</button></div>
  </div>`);
}

function openSettingsDialog() {
  openDialog(`<div class="dialog-inner">${dialogHead("Ajustes y privacidad", "Este prototipo no tiene cuentas ni servidor.")}
    <div class="settings-block"><h3>Datos locales</h3><p>Perfiles, avance, publicaciones y reportes se guardan en localStorage de este navegador. No es un control de privacidad seguro ni una cuenta protegida; quien use el mismo dispositivo podría ver esos datos.</p></div>
    <div class="settings-block"><h3>Fotos y seguridad infantil</h3><p>La vista previa se procesa en el navegador y la imagen se guarda localmente. Evita rostros identificables, nombres completos, escuela y ubicación precisa. La comunidad es una simulación local, no una plataforma moderada.</p></div>
    <div class="settings-block"><h3>Avatares</h3><p>Esta demo pública usa iconos genéricos y no incluye avatares familiares.</p></div>
    <div class="dialog-actions"><button class="quiet-button" type="button" data-action="reset-progress">Reiniciar avance</button><button class="action-button" type="button" data-action="close-dialog">Listo</button></div>
  </div>`);
}

function openPostDialog(postId = "") {
  const existing = state.posts.find((item) => item.id === postId && item.profileId !== "demo");
  if (postId && !existing) return;
  imageDraft = existing?.image || "";
  const profile = activeProfile();
  const visibility = existing?.visibility || "private";
  const currentTopic = existing?.topic || state.topic;
  const imageMarkup = imageDraft
    ? `<img src="${escapeHTML(imageDraft)}" alt="Vista previa de la imagen seleccionada">`
    : `<span>📷 La imagen aparecerá aquí</span>`;
  openDialog(`<form class="dialog-inner" id="post-form" data-post-id="${escapeHTML(existing?.id || "")}">
    ${dialogHead(existing ? "Editar descubrimiento" : "Nuevo descubrimiento familiar", "Evita nombres completos, escuela, contacto y ubicación precisa.")}
    <div class="form-field"><label for="post-topic">Tema</label><select id="post-topic" required>${TOPICS.map((topic) => `<option value="${topic.key}" ${topic.key === currentTopic ? "selected" : ""}>${escapeHTML(topic.title)}</option>`).join("")}</select></div>
    <div class="form-field"><label for="post-caption">Descripción</label><textarea id="post-caption" maxlength="400" required placeholder="¿Qué descubrimos juntos?">${escapeHTML(existing?.caption || "")}</textarea><span class="form-hint">Hasta 400 caracteres. Escribe sin incluir datos personales de niños.</span></div>
    <div class="form-field"><label for="post-image">Imagen (opcional)</label><input id="post-image" type="file" accept="image/*"><div class="upload-preview" id="upload-preview">${imageMarkup}</div><span class="form-hint">Se guardará una copia reducida en este navegador. No se sube a Internet.</span></div>
    <span class="visibility-label">¿Dónde guardar?</span>
    <div class="visibility-options">
      <label class="visibility-option"><input type="radio" name="visibility" value="private" ${visibility === "private" ? "checked" : ""}><span><b>Solo mi familia</b><small>Opción predeterminada. Se queda en el álbum local de este navegador.</small></span></label>
      <label class="visibility-option"><input type="radio" name="visibility" value="community" ${visibility === "community" ? "checked" : ""}><span><b>Compartir con la comunidad</b><small>${profile.role === "child" ? "Necesita aprobación del módulo para padres antes de aparecer." : "Aparecerá solo en la comunidad simulada de este navegador."}</small></span></label>
    </div>
    ${profile.role === "child" ? `<p class="approval-banner">Publicar desde un perfil infantil siempre requiere aprobación parental para solicitar compartir. No es una protección de servidor.</p>` : ""}
    <div class="dialog-actions"><button class="quiet-button" type="button" data-action="close-dialog">Cancelar</button><button class="action-button" type="submit">${existing ? "Guardar cambios" : "Guardar publicación"}</button></div>
  </form>`);
}

function openAlbum() {
  state.section = "album";
  state.albumView = "private";
  state.albumTopic = "all";
  persist();
  render();
}

function showTopic(topicKey) {
  if (!TOPICS.some((topic) => topic.key === topicKey)) return;
  state.topic = topicKey;
  state.section = "learn";
  guidedState.key = "";
  state.spaceArea = topicKey === "space" ? (state.spaceArea || "astronomy") : state.spaceArea;
  activeMatch = { selected: null, matched: [], feedback: "", kind: "" };
  persist();
  render();
  byId("main-content").focus({ preventScroll: true });
}

function chooseProfile(profileId) {
  const profile = PROFILES.find((item) => item.id === profileId);
  if (!profile) return;
  state.profileId = profile.id;
  persist();
  render();
}

function handleMatch(button) {
  const id = button.dataset.matchId;
  const side = button.dataset.matchSide;
  const topic = activeTopic();
  if (activeMatch.matched.includes(id)) return;
  if (!activeMatch.selected) {
    activeMatch.selected = { id, side };
    activeMatch.feedback = { kind: "", text: "Ahora elige la tarjeta que crees que corresponde." };
    activeMatch.kind = topic.key;
    renderMainView();
    return;
  }
  if (activeMatch.selected.side === side) {
    activeMatch.selected = { id, side };
    activeMatch.feedback = { kind: "", text: "Elige una tarjeta de la otra columna." };
    activeMatch.kind = topic.key;
    renderMainView();
    return;
  }
  const firstId = activeMatch.selected.id;
  activeMatch.selected = null;
  activeMatch.kind = topic.key;
  if (id === firstId) {
    const pair = topic.pairs.find((item) => item.id === id);
    activeMatch.matched = [...activeMatch.matched, id];
    activeMatch.feedback = { kind: "good", text: `¡Correcto! ${pair.explanation}` };
  } else {
    activeMatch.feedback = { kind: "try", text: "Todavía no hacen pareja. Prueba otra combinación; puedes volver a intentar cuando quieras." };
  }
  renderMainView();
}

function resetMatch() {
  activeMatch = { selected: null, matched: [], feedback: { kind: "", text: "Elige dos tarjetas para comprobar una pareja." }, kind: "" };
  renderMainView();
}

function toggleProgress(checked) {
  if (checked) state.progress[state.topic] = true;
  else delete state.progress[state.topic];
  persist();
  toast(checked ? "Tema marcado como explorado en este navegador." : "Se quitó la marca de exploración.");
}

function markChallenge() {
  activeMatch.kind = activeTopic().key;
  renderMainView();
}

function readAndCompressImage(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("Elige un archivo de imagen válido."));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("No se pudo abrir la imagen."));
      image.onload = () => {
        const scale = Math.min(1, 1200 / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");
        if (!context) { reject(new Error("No se pudo preparar la vista previa.")); return; }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", .78));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

function savePost(form) {
  const postId = form.dataset.postId;
  const caption = form.querySelector("#post-caption").value.trim();
  const topic = form.querySelector("#post-topic").value;
  const visibility = form.querySelector('input[name="visibility"]:checked')?.value || "private";
  if (!caption || !TOPICS.some((item) => item.key === topic)) {
    toast("Completa la descripción y elige un tema.");
    return;
  }
  const profile = activeProfile();
  const existingIndex = state.posts.findIndex((post) => post.id === postId);
  const previous = existingIndex >= 0 ? state.posts[existingIndex] : null;
  let status = "approved";
  if (visibility === "community" && profile.role === "child") status = "pending";
  else if (visibility === "community" && previous?.status === "pending") status = "pending";
  const post = {
    id: previous?.id || `post-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    profileId: previous?.profileId || profile.id,
    topic, caption, image: imageDraft, visibility, status,
    createdAt: previous?.createdAt || new Date().toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" }),
    demo: false
  };
  if (existingIndex >= 0) state.posts[existingIndex] = post;
  else state.posts.unshift(post);
  const saved = persist();
  if (saved) {
    byId("app-dialog").close();
    state.section = "album";
    state.albumView = status === "pending" ? "private" : visibility;
    state.albumTopic = "all";
    render();
    toast(status === "pending" ? "Guardado. El módulo para padres debe aprobarlo antes de compartir." : "Publicación guardada en el álbum de este navegador.");
  }
}

function handlePostAction(action, id) {
  const post = state.posts.find((item) => item.id === id);
  if (action === "report-post") {
    if (!post || state.reports.includes(id)) { toast("Ya reportaste esta publicación en este navegador."); return; }
    state.reports.push(id);
    persist();
    renderMainView();
    toast("Reporte guardado en la simulación local; no lo recibe un equipo de moderación.");
    return;
  }
  if (!post || post.demo) return;
  if (action === "approve-post") {
    if (activeProfile().role !== "parent") { toast("Solo el módulo para padres puede aprobar."); return; }
    post.status = "approved";
    post.visibility = "community";
    persist();
    renderMainView();
    toast("Aprobada para la comunidad simulada de este navegador.");
  } else if (action === "reject-post") {
    if (activeProfile().role !== "parent") return;
    post.status = "rejected";
    post.visibility = "private";
    persist();
    renderMainView();
    toast("Se guardó en el álbum familiar sin compartir.");
  } else if (action === "edit-post") {
    if (!canManagePost(post)) {
      toast("Cambia al módulo para padres o al perfil que creó la publicación.");
      return;
    }
    openPostDialog(id);
  } else if (action === "delete-post") {
    if (!canManagePost(post)) {
      toast("Solo el perfil creador o el módulo para padres puede eliminarla.");
      return;
    }
    openDialog(`<div class="dialog-inner">${dialogHead("¿Eliminar publicación?", "Esta acción solo afecta a los datos locales de este navegador.")}<p class="form-hint">${escapeHTML(post.caption)}</p><div class="dialog-actions"><button class="quiet-button" type="button" data-action="close-dialog">Cancelar</button><button class="danger-button" type="button" data-action="confirm-delete" data-id="${escapeHTML(id)}">Eliminar</button></div></div>`);
  } else if (action === "confirm-delete") {
    state.posts = state.posts.filter((item) => item.id !== id);
    persist();
    byId("app-dialog").close();
    renderMainView();
    toast("Publicación eliminada de este navegador.");
  } else if (action === "toggle-visibility") {
    if (!canManagePost(post)) {
      toast("Cambia al módulo para padres o al perfil que creó la publicación.");
      return;
    }
    if (post.visibility === "community") {
      post.visibility = "private";
      post.status = "approved";
    } else if (activeProfile().role === "child") {
      post.visibility = "community";
      post.status = "pending";
    } else {
      post.visibility = "community";
      post.status = "approved";
    }
    persist();
    renderMainView();
    toast(post.status === "pending" ? "Solicitud enviada al módulo para padres." : post.visibility === "community" ? "Visible en la comunidad simulada." : "La publicación ahora es privada.");
  }
}

function handleClick(event) {
  if (PRESENTATION_MODE && event.target.closest(".brand")) {
    event.preventDefault();
    state.profileId = "mom";
    state.topic = "history";
    state.section = "learn";
    adultSearchByTopic.history = { query: "", articleId: "" };
    adultQuizState = { articleId: "", questionIndex: 0, selected: null, answered: false };
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const button = event.target.closest("button");
  if (!button) {
    const hotspot = event.target.closest("[data-body-part]");
    if (!hotspot) return;
    selectedBodyPartId = hotspot.dataset.bodyPart;
    renderMainView();
    return;
  }
  if (button.dataset.topic) { showTopic(button.dataset.topic); return; }
  if (button.dataset.profile) { chooseProfile(button.dataset.profile); return; }
  if (button.dataset.country) {
    const country = window.EXPLORE_EXPLORERS?.countries.find((item) => item.id === button.dataset.country);
    if (!country) return;
    selectedCountryId = country.id;
    selectedCountryLanguageId = country.languages[0].id;
    renderMainView();
    return;
  }
  if (button.dataset.bodyPart) {
    const part = activeProfile().role === "parent"
      ? adultOrgans().find((item) => item.id === button.dataset.bodyPart)
      : window.EXPLORE_EXPLORERS?.bodyParts.find((item) => item.id === button.dataset.bodyPart);
    if (!part) return;
    selectedBodyPartId = part.id;
    renderMainView();
    return;
  }
  if (button.dataset.adultArticle) {
    const article = getAdultCatalog(activeTopic()).find((item) => item.id === button.dataset.adultArticle);
    if (!article) return;
    adultSearchByTopic[activeTopic().key].articleId = article.id;
    state.section = "learn";
    renderMainView();
    return;
  }
  if (button.hasAttribute("data-adult-back")) {
    adultSearchByTopic[activeTopic().key].articleId = "";
    state.section = "learn";
    renderMainView();
    return;
  }
  if (button.dataset.adultQuizStart) {
    adultSearchByTopic[activeTopic().key].articleId = button.dataset.adultQuizStart;
    adultQuizState = { articleId: button.dataset.adultQuizStart, questionIndex: 0, selected: null, answered: false };
    state.section = "play";
    renderMainView();
    return;
  }
  if (button.dataset.adultQuizOption !== undefined) {
    adultQuizState.selected = Number(button.dataset.adultQuizOption);
    adultQuizState.answered = true;
    renderMainView();
    return;
  }
  if (button.hasAttribute("data-adult-quiz-retry")) {
    adultQuizState = { articleId: adultQuizState.articleId, questionIndex: 0, selected: null, answered: false };
    renderMainView();
    return;
  }
  if (button.hasAttribute("data-adult-quiz-next")) {
    adultQuizState = { ...adultQuizState, questionIndex: adultQuizState.questionIndex + 1, selected: null, answered: false };
    renderMainView();
    return;
  }
  if (button.hasAttribute("data-adult-return")) {
    const articleId = adultSearchByTopic[activeTopic().key].articleId || adultQuizState.articleId;
    adultSearchByTopic[activeTopic().key].articleId = articleId;
    state.section = "learn";
    renderMainView();
    return;
  }
  if (button.dataset.explorerAction === "country-speak") {
    speakCountryGreeting();
    return;
  }
  if (button.dataset.explorerAction === "body-speak") {
    const locale = explorerLocale();
    const part = window.EXPLORE_EXPLORERS?.bodyParts.find((item) => item.id === selectedBodyPartId);
    if (part) {
      const adultText = activeProfile().role === "parent" ? ` ${part.adult[locale]}` : "";
      speakExplorerText(`${part.name[locale]}. ${part.system[locale]}. ${part.function[locale]}${adultText}`, locale === "es" ? "es-MX" : "en-US");
    }
    return;
  }
  if (button.dataset.ageBand) {
    if (!CHILD_AGE_BANDS.includes(button.dataset.ageBand)) return;
    state.childBand = button.dataset.ageBand;
    guidedState = {
      key: `${state.topic}:${lessonLocale()}`, lessonIndex: state.topic === "space" && state.spaceArea === "engineering" ? 1 : 0,
      stepIndex: 0, stage: "steps", feedback: "", optionOrder: null,
      orderOptions: null, orderPicked: [], moreOpen: false
    };
    persist();
    render();
    return;
  }
  if (button.dataset.lessonIndex !== undefined) {
    if (state.topic === "space") {
      state.spaceArea = Number(button.dataset.lessonIndex) === 1 ? "engineering" : "astronomy";
    }
    guidedState = {
      key: `${state.topic}:${lessonLocale()}`, lessonIndex: Number(button.dataset.lessonIndex),
      stepIndex: 0, stage: "steps", feedback: "", optionOrder: null,
      orderOptions: null, orderPicked: [], moreOpen: false
    };
    renderMainView();
    return;
  }
  if (button.dataset.guideAction) {
    handleGuideAction(button.dataset.guideAction, button);
    return;
  }
  if (button.dataset.section) {
    state.section = button.dataset.section;
    if (state.section === "album") state.albumView = "private";
    activeMatch = { selected: null, matched: [], feedback: "", kind: "" };
    persist();
    renderMainView();
    return;
  }
  if (button.dataset.spaceArea) {
    state.spaceArea = button.dataset.spaceArea;
    guidedState = {
      key: `${state.topic}:${lessonLocale()}`,
      lessonIndex: button.dataset.spaceArea === "engineering" ? 1 : 0,
      stepIndex: 0, stage: "steps", feedback: "", optionOrder: null,
      orderOptions: null, orderPicked: [], moreOpen: false
    };
    renderMainView();
    return;
  }
  if (button.dataset.matchId) { handleMatch(button); return; }
  if (button.dataset.albumView) {
    state.albumView = button.dataset.albumView;
    if (state.albumView === "community") state.albumTopic = "all";
    renderMainView();
    return;
  }
  if (button.dataset.action) {
    const { action, id } = button.dataset;
    if (action === "new-post") openPostDialog();
    else if (action === "close-dialog") byId("app-dialog").close();
    else if (action === "reset-match") resetMatch();
    else if (action === "challenge") markChallenge();
    else if (action === "choose-profile") {
      chooseProfile(id);
      byId("app-dialog").close();
    } else if (action === "reset-demo") {
      if (window.confirm("¿Borrar publicaciones, reportes y avance guardados por este prototipo en este navegador?")) {
        if (!PRESENTATION_MODE) localStorage.removeItem(STORAGE_KEY);
        state = PRESENTATION_MODE ? loadState() : structuredClone(DEFAULT_STATE);
        byId("app-dialog").close();
        render();
        toast("Datos de demostración reiniciados.");
      }
    } else if (action === "reset-progress") {
      state.progress = {};
      persist();
      byId("app-dialog").close();
      render();
      toast("Se reinició el avance.");
    } else {
      handlePostAction(action, id);
    }
  }
}

document.addEventListener("click", handleClick);
document.addEventListener("input", (event) => {
  if (event.target.id !== "adult-module-search") return;
  const topic = activeTopic();
  adultSearchByTopic[topic.key] = { query: event.target.value, articleId: "" };
  const results = byId("adult-search-results");
  if (results) results.innerHTML = renderAdultSearchResults(topic);
});
document.addEventListener("keydown", (event) => {
  const hotspot = event.target.closest?.("[data-body-part][role='button']");
  if (!hotspot || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  hotspot.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
});
byId("language-select").addEventListener("change", (event) => {
  const nextLanguage = event.target.value;
  if (!["es", "en", "ja", "tr"].includes(nextLanguage)) return;
  if (PRESENTATION_MODE) sessionStorage.setItem("explore-together-presentation-language", nextLanguage);
  else localStorage.setItem("explore-together-language", nextLanguage);
  window.location.reload();
});
document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.id === "country-language-select") {
    selectedCountryLanguageId = target.value;
    renderMainView();
  } else if (target.id === "learned-check") {
    toggleProgress(target.checked);
  } else if (target.id === "album-topic-filter") {
    state.albumTopic = target.value;
    renderMainView();
  } else if (target.id === "post-image" && target.files?.[0]) {
    readAndCompressImage(target.files[0]).then((dataURL) => {
      imageDraft = dataURL;
      byId("upload-preview").innerHTML = `<img src="${escapeHTML(imageDraft)}" alt="Vista previa de la imagen seleccionada">`;
    }).catch((error) => toast(error.message));
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "post-form") {
    event.preventDefault();
    savePost(event.target);
  }
});

byId("open-album").addEventListener("click", openAlbum);
byId("open-profile").addEventListener("click", openProfileDialog);
byId("open-settings").addEventListener("click", openSettingsDialog);
byId("app-dialog").addEventListener("click", (event) => {
  if (event.target === byId("app-dialog")) byId("app-dialog").close();
});

render();
