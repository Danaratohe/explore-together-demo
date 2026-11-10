"use strict";

window.EXPLORE_LEARNING_ART = {
  plates: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración de placas terrestres que se mueven"><rect width="640" height="360" rx="26" fill="#e7f0e5"/><circle cx="500" cy="70" r="44" fill="#f3d982"/><path d="M0 193q85-34 165-2t160-4q82-35 161 0t154-1v174H0Z" fill="#8eb18d"/><path d="M0 228q107-23 210 8l-35 34L0 284Zm640 0q-107-23-210 8l35 34 175-14Z" fill="#c28b63" stroke="#7d664e" stroke-width="8"/><path d="m306 220 14 51 18-51m-34 10-53 20m87-19 53 20" fill="none" stroke="#a95745" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M267 178v35m107-35v35" stroke="#456b58" stroke-width="10" stroke-linecap="round"/><path d="m249 202 18 18-18 18m143-36-18 18 18 18" fill="none" stroke="#456b58" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ice: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración de un cubo de hielo flotando en agua"><rect width="640" height="360" rx="26" fill="#e7f1f3"/><circle cx="500" cy="72" r="43" fill="#f1d779"/><path d="M0 193q150-22 320 0t320 0v167H0Z" fill="#81bfce"/><path d="M0 224q152-22 320 0t320 0" fill="none" stroke="#f4fbf7" stroke-width="9"/><path d="m269 115 56-23 57 29-3 72-57 28-55-29Z" fill="#d9f3f5" stroke="#5895a3" stroke-width="7" stroke-linejoin="round"/><path d="m269 115 53 31 60-25m-60 25-2 75m2-75 56 22" fill="none" stroke="#91cad0" stroke-width="5"/><path d="M215 260q24-18 48 0t48 0m80 0q24-18 48 0t48 0" fill="none" stroke="#e8f7f5" stroke-width="7" stroke-linecap="round"/></svg>`,
  archaeology: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración de una excavación arqueológica con capas de suelo y cerámica"><rect width="640" height="360" rx="26" fill="#f4e9dc"/><path d="M0 141h640v219H0Z" fill="#bb8862"/><path d="M0 194q160-18 320 0t320 0v55q-160-18-320 0T0 249Zm0 92q160-18 320 0t320 0v57H0Z" fill="#d4aa7d"/><path d="M270 114v148m-50 0h145" stroke="#55745d" stroke-width="12" stroke-linecap="round"/><path d="m335 176 25 10-8 38-20-10Z" fill="#84613f"/><path d="M376 202q-29 1-28 25l9 23q25 12 48-1l8-21q-4-25-37-26Z" fill="#c6674e" stroke="#784d3b" stroke-width="6"/><path d="m363 202 2-23 24 0 4 25" fill="#d88768" stroke="#784d3b" stroke-width="5"/><path d="M83 171h74m-60 20h60m-74 92h50m-30 20h30" stroke="#f3d7b6" stroke-width="8" stroke-linecap="round"/><circle cx="494" cy="107" r="37" fill="#f0d788"/><path d="m475 106 14 15 30-34" fill="none" stroke="#537958" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  portrait: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración de una artista pintando un autorretrato"><rect width="640" height="360" rx="26" fill="#f5e4df"/><path d="M130 57h250v250H130Z" fill="#fff9ef" stroke="#8c7059" stroke-width="10"/><path d="M155 284q42-94 95-84 47-5 94 84" fill="#577c69"/><ellipse cx="252" cy="147" rx="63" ry="78" fill="#d59675"/><path d="M190 140q-8-74 60-78 67 6 68 78l-22-29-44 17-44-13Z" fill="#392f30"/><path d="M218 143q14-9 28 0m20 0q14-9 28 0" fill="none" stroke="#483331" stroke-width="6" stroke-linecap="round"/><circle cx="233" cy="148" r="5" fill="#372b29"/><circle cx="280" cy="148" r="5" fill="#372b29"/><path d="M236 184q18 12 37 0" fill="none" stroke="#a64d51" stroke-width="6" stroke-linecap="round"/><path d="m453 266 69-145 22 11-68 146-28 20Z" fill="#c78d59" stroke="#765b43" stroke-width="5" stroke-linejoin="round"/><path d="m518 121 13-27q6-10 15-2l8 7q8 6 1 16l-11 20Z" fill="#5c765b"/><path d="M431 282q-6 28-29 32 9-25 29-32Z" fill="#c14f52"/><circle cx="462" cy="78" r="18" fill="#ddbb63"/><circle cx="500" cy="71" r="13" fill="#678f77"/></svg>`,
  heart: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración del corazón y el recorrido de la sangre"><rect width="640" height="360" rx="26" fill="#f5e7e8"/><path d="M303 282q-26-26-76-77-50-55 2-94 43-31 77 17 34-48 77-17 52 39 2 94-50 51-76 77Z" fill="#d76f70" stroke="#934c53" stroke-width="8"/><path d="M305 130q-15 52 9 73 22 20 1 55m37-126q-11 28 3 45m-93 8q18 14 40 14" fill="none" stroke="#f4b2a1" stroke-width="9" stroke-linecap="round"/><path d="M307 110q-29-42-67-36-40 7-44 49m132-13q27-42 65-34 38 8 42 46" fill="none" stroke="#5b83a6" stroke-width="12" stroke-linecap="round"/><path d="M196 126q-24 70 7 110 33 43 102 39m143-113q23 62-10 103-32 40-94 37" fill="none" stroke="#c95c5e" stroke-width="12" stroke-linecap="round"/><path d="m188 128 11-22 14 20m234-10 13 22 8-24" fill="none" stroke="#58789a" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="105" cy="88" r="35" fill="#f3d880"/><path d="M81 91h48" stroke="#b65d62" stroke-width="8" stroke-linecap="round"/></svg>`,
  skeleton: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración de huesos y una articulación que permite doblar el brazo"><rect width="640" height="360" rx="26" fill="#edf0e9"/><path d="M138 83q18-17 36 0l44 46 38-37q19-16 36 4 15 18-2 35l-50 50-37 33 60 59q16 18-1 35-18 17-36 0l-85-84-60-61q-18-18 0-36 17-18 35-2l34 33 25-26-36-37q-18-17-1-32Z" fill="#f5e5c4" stroke="#9e8d70" stroke-width="7" stroke-linejoin="round"/><circle cx="238" cy="178" r="34" fill="#d9a876" stroke="#8c634b" stroke-width="7"/><path d="M370 245q64-118 144-84 52 22 36 73-16 47-75 30l-53 64q-29 17-51-8-19-24-1-51Z" fill="#d7a07d" stroke="#8b604b" stroke-width="7"/><path d="M404 228q47 24 83 21" fill="none" stroke="#efc7a6" stroke-width="17" stroke-linecap="round"/><path d="m450 190 26 12-10 23-26-12Z" fill="#f0d684" stroke="#8c634b" stroke-width="5"/><path d="M499 104v46m-23-23h46" stroke="#63866e" stroke-width="8" stroke-linecap="round"/></svg>`,
  photosynthesis: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración de una planta que recibe luz, agua y aire"><rect width="640" height="360" rx="26" fill="#e8f1e4"/><circle cx="463" cy="83" r="45" fill="#f2d879"/><path d="M0 279q120-20 240 0t240 0 160 0v81H0Z" fill="#b99470"/><path d="M304 281q-5-82 12-151m-14 87q-91-77-119-20 23 55 119 48m13-37q56-90 111-48-15 54-113 77" fill="none" stroke="#558253" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="M305 279q-41 23-73 1m74 1q43 24 77 1" fill="none" stroke="#a7784e" stroke-width="12" stroke-linecap="round"/><path d="m108 93 23 22 41-48m-46 97q44 22 72 0m211 43 22-18m-15 40 22 12" fill="none" stroke="#70a6be" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="m171 131 15-17 15 17m204 14 15-17 15 17" fill="none" stroke="#fff4c9" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  habitat: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración de un ecosistema con planta, insecto y ave"><rect width="640" height="360" rx="26" fill="#e7efe4"/><circle cx="507" cy="69" r="39" fill="#f2d97e"/><path d="M0 222q122-66 246 0t239 0q76-35 155 2v136H0Z" fill="#91ae7b"/><path d="M0 278q118-27 236 0t239 0q85-23 165 0v82H0Z" fill="#b99470"/><path d="M178 253v-94m0 50q-49-40-72-8 17 39 72 31m2-27q41-52 74-20-14 36-73 44" fill="none" stroke="#557e52" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M414 134q25-31 52-1-27 28-52 1Zm16 1 27-22m-44 26-18-14" fill="none" stroke="#52758b" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="438" cy="137" rx="18" ry="12" fill="#e4b962"/><path d="M440 146v25m-13-6h26" stroke="#526a4d" stroke-width="5"/><path d="M299 241q10-48 31-37 19 13-8 43-23 16-23-6Zm15-7 32-27" fill="#c98f59" stroke="#805d43" stroke-width="4"/><path d="M296 250q-24 20-42 15m55-11q28 14 44 6" fill="none" stroke="#53744c" stroke-width="6" stroke-linecap="round"/></svg>`,
  solar: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración del Sol y los planetas en órbita"><rect width="640" height="360" rx="26" fill="#e6e8f3"/><ellipse cx="319" cy="180" rx="245" ry="123" fill="none" stroke="#a4a9c5" stroke-width="3" stroke-dasharray="8 10"/><ellipse cx="319" cy="180" rx="175" ry="82" fill="none" stroke="#b0b3cc" stroke-width="3" stroke-dasharray="8 10"/><ellipse cx="319" cy="180" rx="105" ry="50" fill="none" stroke="#c0bfd0" stroke-width="3" stroke-dasharray="8 10"/><circle cx="319" cy="180" r="54" fill="#f2cd63"/><path d="m319 106 10 30m58-10-24 22m74 32-31 1m-28 56-20-24m-71 42 5-33m-69 1 23-21m-52-54 32 2m4-69 20 24" stroke="#e7b44b" stroke-width="8" stroke-linecap="round"/><circle cx="487" cy="166" r="20" fill="#79a2b3"/><circle cx="425" cy="132" r="15" fill="#bc7557"/><circle cx="383" cy="158" r="11" fill="#91a868"/><circle cx="242" cy="137" r="13" fill="#c87e5d"/><circle cx="145" cy="151" r="25" fill="#b8765e"/><path d="m476 165 20-3m-357-11 17-10" stroke="#f3e2be" stroke-width="4" stroke-linecap="round"/></svg>`,
  bridge: `<svg viewBox="0 0 640 360" role="img" aria-label="Ilustración de un puente de arco que reparte el peso hacia sus apoyos"><rect width="640" height="360" rx="26" fill="#eaf0ef"/><path d="M0 267h640v93H0Z" fill="#8fc2c7"/><path d="M0 282q95-17 190 0t190 0 260 0" fill="none" stroke="#e5f7f2" stroke-width="9"/><path d="M60 220h520" stroke="#7d7160" stroke-width="22" stroke-linecap="round"/><path d="M91 232q34 108 99 108h260q65 0 99-108" fill="none" stroke="#bd8060" stroke-width="20"/><path d="M100 230v76m105-72v87m115-86v88m115-87v-2m105-4v-80" stroke="#82644d" stroke-width="9"/><path d="M320 83v70m-23-24 23 24 23-24" fill="none" stroke="#567b8d" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M88 215h464" stroke="#e0c690" stroke-width="5" stroke-dasharray="13 11"/><circle cx="320" cy="72" r="28" fill="#f1d67a"/></svg>`
};

window.EXPLORE_LESSONS = {
  es: {
    geo: [
      {
        id: "moving-ground", title: "¿Por qué tiembla el suelo?", question: "¿La superficie de la Tierra está quieta o se mueve muy despacio?", illustration: "plates",
        steps: [
          { title: "La corteza está en piezas", text: "La parte exterior rígida de la Tierra está dividida en grandes placas." },
          { title: "Las placas se mueven", text: "Las placas se desplazan lentamente. A veces sus bordes se traban." },
          { title: "La energía se libera", text: "Cuando las rocas se deslizan de pronto, el suelo tiembla. Eso es un terremoto." }
        ],
        simpleSteps: [
          { title: "La Tierra tiene placas", text: "La capa de afuera está hecha de piezas enormes." },
          { title: "Las piezas se mueven", text: "Se mueven muy, muy despacio." },
          { title: "El suelo tiembla", text: "A veces las rocas se mueven de golpe." }
        ],
        activity: { prompt: "¿Qué puede hacer temblar el suelo?", correct: "rocks", options: [
          { id: "rocks", label: "Rocas que se deslizan", visual: "plates", feedback: "¡Sí! El movimiento repentino de rocas en una falla puede causar un terremoto." },
          { id: "clouds", label: "Nubes que pasan", visual: "cloud", feedback: "Las nubes se mueven por el cielo, pero no hacen temblar el suelo como un terremoto." },
          { id: "waves", label: "Olas en la playa", visual: "water", feedback: "Las olas mueven el agua. Los terremotos comienzan por movimientos de rocas." }
        ] },
        family: "Con un adulto, coloca dos libros juntos y empújalos muy despacio. Nota que el movimiento pequeño no es igual a un deslizamiento rápido. No simules sacudidas ni alarmas.",
        adult: { overview: "Los terremotos ocurren cuando se libera energía acumulada en rocas, con frecuencia en fallas asociadas al movimiento de placas tectónicas.", coaching: "Usa el dibujo para distinguir el movimiento lento de placas de un deslizamiento repentino. Explica que no es posible predecir la fecha exacta de un terremoto; si conversan de seguridad, sigan la guía oficial local.", sources: [["USGS · qué es un terremoto", "https://www.usgs.gov/programs/earthquake-hazards/earthquakes"], ["USGS · placas tectónicas", "https://pubs.usgs.gov/gip/dynamic/understanding.html"]] }
      },
      {
        id: "floating-ice", title: "¿Por qué flota el hielo?", question: "¿El hielo se hunde o se queda arriba del agua?", illustration: "ice",
        steps: [
          { title: "El agua puede ser sólida", text: "Cuando el agua se congela, forma hielo." },
          { title: "El hielo ocupa espacio", text: "La misma cantidad de agua ocupa más espacio al congelarse." },
          { title: "El hielo flota", text: "El hielo común es menos denso que el agua líquida, por eso queda arriba." }
        ],
        simpleSteps: [
          { title: "El agua se congela", text: "El agua fría puede volverse hielo." },
          { title: "El hielo ocupa más espacio", text: "Al congelarse, el agua se expande un poco." },
          { title: "El hielo flota", text: "Por eso vemos el hielo arriba del agua." }
        ],
        activity: { prompt: "¿Qué queda flotando en un vaso con agua?", correct: "ice", options: [
          { id: "ice", label: "Un cubo de hielo", visual: "ice", feedback: "¡Correcto! El hielo común es menos denso que el agua líquida y flota." },
          { id: "stone", label: "Una piedra", visual: "stone", feedback: "La mayoría de las piedras se hunden en agua porque son más densas que el agua." },
          { id: "water", label: "Una gota de agua", visual: "water", feedback: "Una gota se mezcla con el agua; no forma un objeto que flote como un cubo de hielo." }
        ] },
        family: "Con un adulto, observa un cubito de hielo en un vaso transparente. Mira qué parte queda sobre el agua. No uses agua caliente ni pruebes el hielo.",
        adult: { overview: "La densidad es la masa dividida entre el volumen. El agua se expande al congelarse y el hielo de agua dulce tiene menor densidad que el agua líquida.", coaching: "Invita a describir lo observado antes de explicar la densidad. La salinidad puede cambiar la densidad del agua; no es necesario hacer una comparación con recipientes sin supervisión.", sources: [["USGS · densidad del agua", "https://www.usgs.gov/special-topics/water-science-school/science/water-density"], ["NOAA · agua y hielo", "https://oceanservice.noaa.gov/facts/why-ocean.html"]] }
      }
    ],
    history: [
      {
        id: "past-clues", title: "Pistas de quienes vivieron antes", question: "¿Qué nos puede contar una vasija antigua?", illustration: "archaeology",
        steps: [
          { title: "Las cosas dejan pistas", text: "Herramientas, vasijas y edificios pueden quedar después de que las personas los usaron." },
          { title: "El lugar importa", text: "Quienes estudian arqueología anotan dónde aparece cada objeto y qué hay cerca." },
          { title: "Las pistas cuentan parte", text: "Los objetos ayudan a hacer preguntas sobre el pasado, pero no cuentan toda la historia por sí solos." }
        ],
        simpleSteps: [
          { title: "Hay objetos antiguos", text: "Una vasija puede durar mucho tiempo." },
          { title: "Mira dónde estaba", text: "El lugar también es una pista." },
          { title: "Haz una pregunta", text: "¿Quién pudo usarla?" }
        ],
        activity: { prompt: "¿Qué ayuda a entender un objeto antiguo?", correct: "context", options: [
          { id: "context", label: "El objeto y el lugar donde se encontró", visual: "pot", feedback: "¡Eso es! El objeto, su lugar y los objetos cercanos ayudan a interpretarlo." },
          { id: "guess", label: "Adivinar sin mirar", visual: "cloud", feedback: "Una idea puede ser un comienzo, pero la arqueología busca pistas y registra dónde aparecen." },
          { id: "color", label: "Mirar solo el color", visual: "rock", feedback: "El color da una pista, pero también importan la forma, el material y el lugar." }
        ] },
        family: "Elijan un objeto cotidiano y describan su forma, material y posible uso. Digan qué saben y qué solo están imaginando.",
        adult: { overview: "La arqueología estudia sociedades del pasado a partir de restos materiales y su contexto. El registro del sitio es crucial: mover un hallazgo sin documentarlo puede hacer perder información.", coaching: "Anima a distinguir observación e hipótesis: «veo una asa» frente a «quizá servía para cargar agua». Evita presentar una conjetura como hecho.", sources: [["National Park Service · arqueología", "https://www.nps.gov/subjects/archeology/index.htm"], ["Smithsonian · arqueología", "https://naturalhistory.si.edu/education/teaching-resources/social-studies/archaeology"]] }
      },
      {
        id: "frida-art", title: "Frida pinta su mundo", question: "¿Qué detalles de una pintura nos dan pistas de la artista?", illustration: "portrait",
        steps: [
          { title: "Una artista mexicana", text: "Frida Kahlo fue una pintora mexicana que vivió entre 1907 y 1954." },
          { title: "Un autorretrato", text: "Frida pintó muchos retratos de sí misma y añadió detalles importantes para ella." },
          { title: "Mira con curiosidad", text: "Colores, objetos y plantas pueden ayudar a preguntar por la vida y el contexto de una obra." }
        ],
        simpleSteps: [
          { title: "Frida era artista", text: "Frida Kahlo pintaba cuadros." },
          { title: "Se pintó a sí misma", text: "Eso se llama autorretrato." },
          { title: "Mira los detalles", text: "¿Qué colores y objetos ves?" }
        ],
        activity: { prompt: "¿Cómo se llama una pintura en la que la artista se pinta a sí misma?", correct: "self", options: [
          { id: "self", label: "Autorretrato", visual: "portrait", feedback: "¡Exacto! Un autorretrato es una representación que hace una persona de sí misma." },
          { id: "map", label: "Un mapa", visual: "map", feedback: "Un mapa representa un lugar. Una imagen de la propia artista es un autorretrato." },
          { id: "tool", label: "Una herramienta", visual: "pot", feedback: "Una herramienta sirve para hacer un trabajo. La pintura de una persona es un retrato." }
        ] },
        family: "Miren una imagen de una obra de Frida en el sitio del museo. Cada persona elija un detalle y diga qué pregunta le inspira.",
        adult: { overview: "Frida Kahlo (1907–1954) fue una artista mexicana conocida por sus autorretratos. Las interpretaciones deben apoyarse en la obra y fuentes biográficas confiables.", coaching: "Invita a observar primero y a interpretar después. Evita atribuir un significado único a cada símbolo: pregunta qué ven y qué información ofrece el museo.", sources: [["Museo Frida Kahlo · Casa Azul", "https://www.museofridakahlo.org.mx/"], ["MoMA · Frida Kahlo", "https://www.moma.org/artists/2963"]] }
      }
    ],
    body: [
      {
        id: "heart-route", title: "El corazón mantiene la sangre en movimiento", question: "¿A dónde viaja la sangre que impulsa el corazón?", illustration: "heart",
        steps: [
          { title: "El corazón se contrae", text: "El corazón es un músculo que se aprieta y se relaja para impulsar sangre." },
          { title: "La sangre viaja", text: "Los vasos sanguíneos llevan sangre hacia distintas partes del cuerpo." },
          { title: "El cuerpo trabaja en equipo", text: "La sangre transporta oxígeno y otras sustancias que las células necesitan." }
        ],
        simpleSteps: [
          { title: "El corazón se mueve", text: "El corazón se aprieta y se relaja." },
          { title: "La sangre viaja", text: "La sangre recorre el cuerpo." },
          { title: "El cuerpo trabaja junto", text: "La sangre lleva cosas que el cuerpo necesita." }
        ],
        activity: { prompt: "¿Qué órgano impulsa la sangre por el cuerpo?", correct: "heart", options: [
          { id: "heart", label: "El corazón", visual: "heart", feedback: "¡Sí! El corazón se contrae para impulsar la sangre." },
          { id: "lungs", label: "Los pulmones", visual: "lungs", feedback: "Los pulmones intercambian gases; el corazón impulsa la sangre." },
          { id: "bone", label: "Un hueso", visual: "bone", feedback: "Los huesos sostienen y protegen; no bombean la sangre." }
        ] },
        family: "Si les resulta cómodo, sientan el pulso en la muñeca después de descansar. No hace falta contar ni comparar cuerpos.",
        adult: { overview: "El corazón bombea sangre a través de los circuitos pulmonar y sistémico. Los pulmones oxigenan la sangre y el sistema cardiovascular distribuye oxígeno y nutrientes.", coaching: "Relaciona el corazón, los pulmones y los vasos con un circuito. Evita convertir una medición casera en diagnóstico o comparar ritmos entre niños.", sources: [["NHLBI · cómo funciona el corazón", "https://www.nhlbi.nih.gov/health/heart"], ["MedlinePlus · sistema circulatorio", "https://medlineplus.gov/spanish/ency/article/002303.htm"]] }
      },
      {
        id: "bones-joints", title: "Huesos, músculos y articulaciones", question: "¿Cómo puede doblarse un brazo sin doblar sus huesos?", illustration: "skeleton",
        steps: [
          { title: "Los huesos sostienen", text: "El esqueleto da soporte al cuerpo y protege algunos órganos." },
          { title: "Las articulaciones conectan", text: "Una articulación une huesos y permite ciertos movimientos." },
          { title: "Los músculos tiran", text: "Los músculos se contraen y tiran de los huesos para mover el cuerpo." }
        ],
        simpleSteps: [
          { title: "Los huesos sostienen", text: "Los huesos ayudan a sostener el cuerpo." },
          { title: "El codo se dobla", text: "El codo es una articulación." },
          { title: "Los músculos mueven", text: "Los músculos ayudan a doblar el brazo." }
        ],
        activity: { prompt: "¿Qué conecta los huesos y ayuda a doblar el codo?", correct: "joint", options: [
          { id: "joint", label: "Una articulación", visual: "joint", feedback: "¡Correcto! El codo es una articulación entre huesos que permite mover el brazo." },
          { id: "lung", label: "Un pulmón", visual: "lungs", feedback: "Los pulmones ayudan a respirar; el codo se mueve gracias a la articulación y los músculos." },
          { id: "leaf", label: "Una hoja", visual: "leaf", feedback: "Una hoja es parte de una planta. El punto donde se unen los huesos se llama articulación." }
        ] },
        family: "Con cuidado, doblen y estiren el codo sin forzar. Paren si algo molesta; los movimientos y capacidades varían.",
        adult: { overview: "El sistema musculoesquelético integra huesos, músculos, tendones y articulaciones. Los músculos esqueléticos producen movimiento al ejercer fuerza sobre los huesos.", coaching: "Usa el brazo como modelo y diferencia el hueso rígido de la articulación móvil. No pidas movimientos extremos ni diagnostiques dolor.", sources: [["MedlinePlus · huesos, articulaciones y músculos", "https://medlineplus.gov/spanish/bonesjointsandmuscles.html"], ["NIH MedlinePlus · sistema esquelético", "https://medlineplus.gov/ency/article/002368.htm"]] }
      }
    ],
    nature: [
      {
        id: "leaf-food", title: "Una hoja usa la luz", question: "¿Qué ayuda a una planta a fabricar su alimento?", illustration: "photosynthesis",
        steps: [
          { title: "La hoja recibe luz", text: "Las hojas capturan energía de la luz del Sol." },
          { title: "Entran agua y aire", text: "La planta usa agua y dióxido de carbono en la fotosíntesis." },
          { title: "La planta guarda energía", text: "La fotosíntesis produce azúcares para la planta y libera oxígeno." }
        ],
        simpleSteps: [
          { title: "La hoja recibe luz", text: "La luz del Sol llega a la hoja." },
          { title: "La planta toma agua", text: "Las raíces ayudan a tomar agua." },
          { title: "La planta crece", text: "La planta usa la energía para crecer." }
        ],
        activity: { prompt: "¿Qué fuente de energía ayuda a la fotosíntesis?", correct: "sunlight", options: [
          { id: "sunlight", label: "La luz del Sol", visual: "sun", feedback: "¡Sí! La fotosíntesis usa energía luminosa para fabricar azúcares." },
          { id: "stone", label: "Una piedra", visual: "stone", feedback: "Una piedra no proporciona la energía que impulsa la fotosíntesis." },
          { id: "moon", label: "La luz de la Luna", visual: "moon", feedback: "La luz lunar es reflejo de la solar y es mucho más débil; las plantas usan energía luminosa, principalmente del Sol." }
        ] },
        family: "Observen una planta desde un lugar seguro. Busquen una hoja iluminada y otra a la sombra; no la arranquen.",
        adult: { overview: "En la fotosíntesis, plantas, algas y algunas bacterias transforman energía luminosa en energía química, usando agua y dióxido de carbono y liberando oxígeno.", coaching: "Presenta el dibujo como modelo simplificado: no muestra moléculas ni todos los procesos. Las plantas también respiran; evita decir que solo «comen luz».", sources: [["OpenStax · fotosíntesis", "https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis"], ["Royal Botanic Gardens, Kew · photosynthesis", "https://www.kew.org/read-and-watch/what-is-photosynthesis"]] }
      },
      {
        id: "habitat-links", title: "Un hábitat es un hogar compartido", question: "¿Qué necesita un animal para vivir en un lugar?", illustration: "habitat",
        steps: [
          { title: "Un hábitat tiene recursos", text: "Un hábitat ofrece cosas que los seres vivos necesitan, como alimento, agua y refugio." },
          { title: "Los seres vivos se relacionan", text: "Animales, plantas, hongos y otros organismos interactúan entre sí y con su entorno." },
          { title: "Todo está conectado", text: "Un cambio en el entorno puede afectar a varios seres vivos." }
        ],
        simpleSteps: [
          { title: "Los animales tienen hogares", text: "Un hábitat es el lugar donde vive un ser vivo." },
          { title: "Hay cosas importantes", text: "Puede haber agua, comida y refugio." },
          { title: "Los seres vivos se conectan", text: "Las plantas y los animales comparten su hogar." }
        ],
        activity: { prompt: "¿Qué forma parte de un hábitat?", correct: "resources", options: [
          { id: "resources", label: "Agua, alimento y refugio", visual: "habitat", feedback: "¡Así es! Los seres vivos necesitan recursos y un entorno adecuado." },
          { id: "toy", label: "Solo juguetes", visual: "tool", feedback: "Los juguetes no forman las necesidades básicas de un hábitat natural." },
          { id: "sky", label: "Solo el cielo", visual: "cloud", feedback: "El cielo puede ser parte del entorno, pero un hábitat incluye recursos y relaciones." }
        ] },
        family: "Dibujen un rincón natural cercano e incluyan seres vivos y elementos no vivos. Observen sin tocar ni alimentar animales.",
        adult: { overview: "Un hábitat es el lugar y conjunto de condiciones donde vive un organismo. Los ecosistemas incluyen comunidades de organismos y los componentes físicos con los que interactúan.", coaching: "Pide identificar elementos vivos y no vivos y una relación posible. No presenten una ilustración simplificada como una cadena alimentaria completa.", sources: [["National Geographic · hábitat", "https://education.nationalgeographic.org/resource/habitat/"], ["NOAA · ecosistemas", "https://oceanservice.noaa.gov/facts/ecosystem.html"]] }
      }
    ],
    space: [
      {
        id: "solar-system", title: "El vecindario del Sol", question: "¿La Tierra es una estrella o un planeta?", illustration: "solar",
        steps: [
          { title: "El Sol es una estrella", text: "El Sol produce luz y calor. Es la estrella más cercana a la Tierra." },
          { title: "Los planetas orbitan", text: "Ocho planetas orbitan el Sol; la Tierra es uno de ellos." },
          { title: "La Luna acompaña a la Tierra", text: "La Luna es un satélite natural que orbita nuestro planeta." }
        ],
        simpleSteps: [
          { title: "El Sol es una estrella", text: "El Sol nos da luz y calor." },
          { title: "La Tierra es un planeta", text: "La Tierra gira alrededor del Sol." },
          { title: "La Luna gira con la Tierra", text: "La Luna es nuestra compañera cercana." }
        ],
        activity: { prompt: "¿Cuál de estos cuerpos es una estrella?", correct: "sun", options: [
          { id: "sun", label: "El Sol", visual: "sun", feedback: "¡Sí! El Sol es una estrella. La Tierra y Marte son planetas." },
          { id: "earth", label: "La Tierra", visual: "planet", feedback: "La Tierra es un planeta que orbita el Sol." },
          { id: "moon", label: "La Luna", visual: "moon", feedback: "La Luna es el satélite natural de la Tierra, no una estrella." }
        ] },
        family: "Miren la Luna desde una ventana o al aire libre con una persona adulta. Dibujen la forma que parece tener; nunca miren directamente al Sol.",
        adult: { overview: "El sistema solar incluye el Sol, ocho planetas, planetas enanos, lunas y otros cuerpos. La gravedad mantiene los cuerpos en órbita.", coaching: "Aclara que los dibujos no están a escala. Para observar el Sol, nunca miren directamente ni usen instrumentos sin filtros certificados y supervisión experta.", sources: [["NASA · datos del sistema solar", "https://science.nasa.gov/solar-system/solar-system-facts/"], ["NASA Space Place · planetas", "https://spaceplace.nasa.gov/planets/en/"]] }
      },
      {
        id: "bridge-arches", title: "¿Cómo sostiene un puente el peso?", question: "¿Qué pasa con el peso cuando cruza un puente?", illustration: "bridge",
        steps: [
          { title: "El puente recibe una carga", text: "Una persona o un vehículo ejerce peso sobre la superficie del puente." },
          { title: "La forma reparte fuerzas", text: "Vigas y arcos transmiten parte de la carga hacia los apoyos." },
          { title: "Los apoyos llevan la carga al suelo", text: "Los pilares y extremos deben transferir las fuerzas a una base firme." }
        ],
        simpleSteps: [
          { title: "El puente sostiene", text: "El puente aguanta el peso de quien lo cruza." },
          { title: "El peso se reparte", text: "La forma ayuda a llevar el peso a los lados." },
          { title: "Los apoyos lo sostienen", text: "Los apoyos llevan el peso al suelo." }
        ],
        activity: { prompt: "¿Qué ayuda a que un puente lleve el peso al suelo?", correct: "supports", options: [
          { id: "supports", label: "Vigas o arcos y apoyos firmes", visual: "bridge", feedback: "¡Exacto! La forma y los apoyos distribuyen las cargas hacia el suelo." },
          { id: "paint", label: "Solo el color de la pintura", visual: "paint", feedback: "La pintura puede proteger una superficie, pero no sustituye la estructura que soporta las cargas." },
          { id: "flag", label: "Una bandera en el puente", visual: "flag", feedback: "Una bandera no sostiene el puente. La estructura y sus apoyos son los que llevan las cargas." }
        ] },
        family: "Con un adulto, coloquen una hoja entre dos libros estables. Prueben la hoja plana y luego plegada en acordeón; agreguen monedas pequeñas de una en una y deténganse si algo se mueve.",
        adult: { overview: "Los puentes transfieren cargas permanentes y variables a estribos, pilares y cimientos. Arcos, cerchas y vigas distribuyen esfuerzos de maneras distintas. Los castillos también dependían de muros, torres y cimientos de piedra; autos y computadoras reúnen componentes con funciones diferentes, mientras que los barcos desplazan agua y los aviones equilibran sustentación, peso, empuje y resistencia.", coaching: "El experimento de papel muestra cómo cambia la rigidez con la forma, pero no reproduce una estructura real ni permite calcular su seguridad. Para ampliar, comparen un arco de piedra en un castillo con una cercha moderna; usen únicamente observaciones y fuentes confiables.", sources: [["FHWA · puente y estructuras", "https://www.fhwa.dot.gov/bridge/"], ["Science Museum · castillos", "https://www.sciencemuseum.org.uk/objects-and-stories/everyday-wonders/castles"], ["NASA · fuerzas de un avión", "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/four-forces-on-an-airplane/"], ["OpenStax · principio de Arquímedes", "https://openstax.org/books/college-physics-2e/pages/11-7-archimedes-principle"]] }
      }
    ]
  },
  en: {
    geo: [
      {
        id: "moving-ground", title: "Why does the ground shake?", question: "Is Earth's surface still, or does it move very slowly?", illustration: "plates",
        steps: [
          { title: "The crust is in pieces", text: "Earth's rigid outer layer is divided into large plates." },
          { title: "The plates move", text: "The plates move slowly. Sometimes their edges get stuck." },
          { title: "Energy is released", text: "When rocks suddenly slip, the ground shakes. That is an earthquake." }
        ],
        simpleSteps: [
          { title: "Earth has plates", text: "The outer layer is made of enormous pieces." },
          { title: "The pieces move", text: "They move very, very slowly." },
          { title: "The ground shakes", text: "Sometimes rocks move all at once." }
        ],
        activity: { prompt: "What can make the ground shake?", correct: "rocks", options: [
          { id: "rocks", label: "Rocks that slip", visual: "plates", feedback: "Yes! A sudden movement of rocks along a fault can cause an earthquake." },
          { id: "clouds", label: "Passing clouds", visual: "cloud", feedback: "Clouds move across the sky, but they do not shake the ground like an earthquake." },
          { id: "waves", label: "Waves at the beach", visual: "water", feedback: "Waves move water. Earthquakes begin with movements of rocks." }
        ] },
        family: "With an adult, place two books together and push them slowly. Notice that a small slow movement is not the same as a sudden slip. Do not imitate shaking or alarms.",
        adult: { overview: "Earthquakes occur when stored energy in rocks is released, often along faults associated with tectonic plate movement.", coaching: "Use the drawing to distinguish slow plate motion from a sudden slip. Explain that an earthquake's exact date cannot be predicted; follow official local guidance for safety conversations.", sources: [["USGS · what is an earthquake?", "https://www.usgs.gov/programs/earthquake-hazards/earthquakes"], ["USGS · tectonic plates", "https://pubs.usgs.gov/gip/dynamic/understanding.html"]] }
      },
      {
        id: "floating-ice", title: "Why does ice float?", question: "Does ice sink or stay near the top of water?", illustration: "ice",
        steps: [
          { title: "Water can be solid", text: "When water freezes, it becomes ice." },
          { title: "Ice takes up space", text: "The same amount of water takes up more space when it freezes." },
          { title: "Ice floats", text: "Common ice is less dense than liquid water, so it stays near the top." }
        ],
        simpleSteps: [
          { title: "Water freezes", text: "Cold water can turn into ice." },
          { title: "Ice takes up more space", text: "Water expands a little when it freezes." },
          { title: "Ice floats", text: "That is why ice sits on top of water." }
        ],
        activity: { prompt: "What floats in a glass of water?", correct: "ice", options: [
          { id: "ice", label: "An ice cube", visual: "ice", feedback: "Correct! Common ice is less dense than liquid water, so it floats." },
          { id: "stone", label: "A stone", visual: "stone", feedback: "Most stones sink in water because they are denser than water." },
          { id: "water", label: "A drop of water", visual: "water", feedback: "A drop mixes with the water; it does not make a floating object like an ice cube." }
        ] },
        family: "With an adult, watch an ice cube in a clear glass. Notice how much stays above the water. Do not use hot water or taste the ice.",
        adult: { overview: "Density is mass divided by volume. Water expands as it freezes, and freshwater ice is less dense than liquid water.", coaching: "Invite observations before explaining density. Salinity can change water density; a comparison is not necessary without adult supervision.", sources: [["USGS · water density", "https://www.usgs.gov/special-topics/water-science-school/science/water-density"], ["NOAA · ocean water", "https://oceanservice.noaa.gov/facts/why-ocean.html"]] }
      }
    ],
    history: [
      {
        id: "past-clues", title: "Clues from people in the past", question: "What might an old pot tell us?", illustration: "archaeology",
        steps: [
          { title: "Things leave clues", text: "Tools, pots, and buildings may remain after people used them." },
          { title: "Place matters", text: "Archaeologists record where an object is found and what is nearby." },
          { title: "Clues tell only part", text: "Objects help us ask questions about the past, but they do not tell the whole story by themselves." }
        ],
        simpleSteps: [
          { title: "There are old objects", text: "A pot can last a long time." },
          { title: "Look where it was", text: "The place is a clue, too." },
          { title: "Ask a question", text: "Who might have used it?" }
        ],
        activity: { prompt: "What helps us understand an old object?", correct: "context", options: [
          { id: "context", label: "The object and where it was found", visual: "pot", feedback: "That is it! The object, its location, and nearby finds help us interpret it." },
          { id: "guess", label: "Guessing without looking", visual: "cloud", feedback: "An idea can be a start, but archaeology looks for clues and records where they appear." },
          { id: "color", label: "Looking only at its color", visual: "rock", feedback: "Color is one clue, but shape, material, and location matter too." }
        ] },
        family: "Choose an everyday object and describe its shape, material, and possible use. Say what you know and what you are only imagining.",
        adult: { overview: "Archaeology studies past societies through material remains and their context. Site documentation matters: moving a find without recording it can erase information.", coaching: "Help distinguish observation from hypothesis: “I see a handle” versus “maybe it carried water.” Do not present a guess as fact.", sources: [["National Park Service · archaeology", "https://www.nps.gov/subjects/archeology/index.htm"], ["Smithsonian · archaeology", "https://naturalhistory.si.edu/education/teaching-resources/social-studies/archaeology"]] }
      },
      {
        id: "frida-art", title: "Frida paints her world", question: "What details in a painting give us clues about its artist?", illustration: "portrait",
        steps: [
          { title: "A Mexican artist", text: "Frida Kahlo was a Mexican painter who lived from 1907 to 1954." },
          { title: "A self-portrait", text: "Frida painted many pictures of herself and included details important to her." },
          { title: "Look with curiosity", text: "Colors, objects, and plants can lead to questions about a work's life and context." }
        ],
        simpleSteps: [
          { title: "Frida was an artist", text: "Frida Kahlo painted pictures." },
          { title: "She painted herself", text: "That is called a self-portrait." },
          { title: "Look at the details", text: "What colors and objects do you see?" }
        ],
        activity: { prompt: "What is a painting called when an artist paints themself?", correct: "self", options: [
          { id: "self", label: "A self-portrait", visual: "portrait", feedback: "Exactly! A self-portrait is an image an artist makes of themself." },
          { id: "map", label: "A map", visual: "map", feedback: "A map represents a place. A picture of the artist is a self-portrait." },
          { id: "tool", label: "A tool", visual: "pot", feedback: "A tool helps with a task. A painting of a person is a portrait." }
        ] },
        family: "Look at an artwork by Frida on the museum website. Each person can choose one detail and share a question it brings to mind.",
        adult: { overview: "Frida Kahlo (1907–1954) was a Mexican artist known for her self-portraits. Interpretations should be grounded in the artwork and reliable biographical sources.", coaching: "Invite observation before interpretation. Avoid assigning one fixed meaning to every symbol; ask what viewers notice and what the museum says.", sources: [["Frida Kahlo Museum · Casa Azul", "https://www.museofridakahlo.org.mx/"], ["MoMA · Frida Kahlo", "https://www.moma.org/artists/2963"]] }
      }
    ],
    body: [
      {
        id: "heart-route", title: "The heart keeps blood moving", question: "Where does blood travel after the heart pumps it?", illustration: "heart",
        steps: [
          { title: "The heart contracts", text: "The heart is a muscle that squeezes and relaxes to move blood." },
          { title: "Blood travels", text: "Blood vessels carry blood to different parts of the body." },
          { title: "The body works as a team", text: "Blood carries oxygen and other substances that cells need." }
        ],
        simpleSteps: [
          { title: "The heart moves", text: "The heart squeezes and relaxes." },
          { title: "Blood travels", text: "Blood moves around the body." },
          { title: "The body works together", text: "Blood carries things the body needs." }
        ],
        activity: { prompt: "Which organ pumps blood through the body?", correct: "heart", options: [
          { id: "heart", label: "The heart", visual: "heart", feedback: "Yes! The heart contracts to pump blood." },
          { id: "lungs", label: "The lungs", visual: "lungs", feedback: "The lungs exchange gases; the heart pumps blood." },
          { id: "bone", label: "A bone", visual: "bone", feedback: "Bones support and protect; they do not pump blood." }
        ] },
        family: "If comfortable, feel the pulse at the wrist after resting. There is no need to count or compare bodies.",
        adult: { overview: "The heart pumps blood through the pulmonary and systemic circuits. The lungs oxygenate blood, and the cardiovascular system distributes oxygen and nutrients.", coaching: "Connect the heart, lungs, and vessels as a circuit. Do not turn a home observation into a diagnosis or compare children's pulse rates.", sources: [["NHLBI · how the heart works", "https://www.nhlbi.nih.gov/health/heart"], ["MedlinePlus · circulatory system", "https://medlineplus.gov/ency/article/002303.htm"]] }
      },
      {
        id: "bones-joints", title: "Bones, muscles, and joints", question: "How can an arm bend without its bones bending?", illustration: "skeleton",
        steps: [
          { title: "Bones support us", text: "The skeleton supports the body and protects some organs." },
          { title: "Joints connect bones", text: "A joint connects bones and allows certain movements." },
          { title: "Muscles pull", text: "Muscles contract and pull on bones to move the body." }
        ],
        simpleSteps: [
          { title: "Bones support us", text: "Bones help hold the body up." },
          { title: "The elbow bends", text: "The elbow is a joint." },
          { title: "Muscles help us move", text: "Muscles help bend the arm." }
        ],
        activity: { prompt: "What connects bones and helps the elbow bend?", correct: "joint", options: [
          { id: "joint", label: "A joint", visual: "joint", feedback: "Correct! The elbow is a joint between bones that lets the arm move." },
          { id: "lung", label: "A lung", visual: "lungs", feedback: "Lungs help us breathe; the elbow moves with help from a joint and muscles." },
          { id: "leaf", label: "A leaf", visual: "leaf", feedback: "A leaf is part of a plant. The place where bones meet is a joint." }
        ] },
        family: "Gently bend and straighten the elbow. Stop if anything feels uncomfortable; movements and abilities vary.",
        adult: { overview: "The musculoskeletal system integrates bones, muscles, tendons, and joints. Skeletal muscles create movement by exerting force on bones.", coaching: "Use the arm as a model and distinguish the rigid bone from the moving joint. Do not request extreme movements or diagnose pain.", sources: [["MedlinePlus · bones, joints, and muscles", "https://medlineplus.gov/bonesjointsandmuscles.html"], ["NIH MedlinePlus · skeletal system", "https://medlineplus.gov/ency/article/002368.htm"]] }
      }
    ],
    nature: [
      {
        id: "leaf-food", title: "A leaf uses light", question: "What helps a plant make its food?", illustration: "photosynthesis",
        steps: [
          { title: "A leaf receives light", text: "Leaves capture energy from sunlight." },
          { title: "Water and air enter", text: "The plant uses water and carbon dioxide in photosynthesis." },
          { title: "The plant stores energy", text: "Photosynthesis makes sugars for the plant and releases oxygen." }
        ],
        simpleSteps: [
          { title: "A leaf gets light", text: "Sunlight reaches the leaf." },
          { title: "The plant takes in water", text: "Roots help take in water." },
          { title: "The plant grows", text: "The plant uses energy to grow." }
        ],
        activity: { prompt: "What energy source helps photosynthesis?", correct: "sunlight", options: [
          { id: "sunlight", label: "Sunlight", visual: "sun", feedback: "Yes! Photosynthesis uses light energy to make sugars." },
          { id: "stone", label: "A stone", visual: "stone", feedback: "A stone does not provide the energy that drives photosynthesis." },
          { id: "moon", label: "Moonlight", visual: "moon", feedback: "Moonlight is reflected sunlight and much dimmer; plants use light energy, mainly from the Sun." }
        ] },
        family: "Observe a plant from a safe place. Look for a leaf in the light and another in shade; do not pick them.",
        adult: { overview: "In photosynthesis, plants, algae, and some bacteria transform light energy into chemical energy using water and carbon dioxide and releasing oxygen.", coaching: "Present the picture as a simplified model: it does not show molecules or every process. Plants also respire; avoid saying they only “eat light.”", sources: [["OpenStax · photosynthesis", "https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis"], ["Royal Botanic Gardens, Kew · photosynthesis", "https://www.kew.org/read-and-watch/what-is-photosynthesis"]] }
      },
      {
        id: "habitat-links", title: "A habitat is a shared home", question: "What does an animal need to live in a place?", illustration: "habitat",
        steps: [
          { title: "A habitat has resources", text: "A habitat offers things living beings need, such as food, water, and shelter." },
          { title: "Living things interact", text: "Animals, plants, fungi, and other organisms interact with each other and their surroundings." },
          { title: "Everything is connected", text: "A change in the environment can affect many living things." }
        ],
        simpleSteps: [
          { title: "Animals have homes", text: "A habitat is where a living thing lives." },
          { title: "Important things are there", text: "There may be water, food, and shelter." },
          { title: "Living things connect", text: "Plants and animals share their home." }
        ],
        activity: { prompt: "What belongs in a habitat?", correct: "resources", options: [
          { id: "resources", label: "Water, food, and shelter", visual: "habitat", feedback: "That's right! Living things need resources and a suitable environment." },
          { id: "toy", label: "Only toys", visual: "tool", feedback: "Toys are not the basic needs of a natural habitat." },
          { id: "sky", label: "Only the sky", visual: "cloud", feedback: "The sky can be part of the surroundings, but a habitat includes resources and relationships." }
        ] },
        family: "Draw a nearby natural place and include living and nonliving things. Observe without touching or feeding animals.",
        adult: { overview: "A habitat is the place and set of conditions where an organism lives. Ecosystems include communities of organisms and the physical components with which they interact.", coaching: "Ask learners to identify living and nonliving features and one possible relationship. Do not present a simplified picture as a complete food web.", sources: [["National Geographic · habitat", "https://education.nationalgeographic.org/resource/habitat/"], ["NOAA · ecosystems", "https://oceanservice.noaa.gov/facts/ecosystem.html"]] }
      }
    ],
    space: [
      {
        id: "solar-system", title: "The Sun's neighborhood", question: "Is Earth a star or a planet?", illustration: "solar",
        steps: [
          { title: "The Sun is a star", text: "The Sun gives off light and heat. It is the closest star to Earth." },
          { title: "Planets orbit", text: "Eight planets orbit the Sun; Earth is one of them." },
          { title: "The Moon travels with Earth", text: "The Moon is a natural satellite that orbits our planet." }
        ],
        simpleSteps: [
          { title: "The Sun is a star", text: "The Sun gives us light and heat." },
          { title: "Earth is a planet", text: "Earth goes around the Sun." },
          { title: "The Moon goes with Earth", text: "The Moon is our nearby companion." }
        ],
        activity: { prompt: "Which of these objects is a star?", correct: "sun", options: [
          { id: "sun", label: "The Sun", visual: "sun", feedback: "Yes! The Sun is a star. Earth and Mars are planets." },
          { id: "earth", label: "Earth", visual: "planet", feedback: "Earth is a planet that orbits the Sun." },
          { id: "moon", label: "The Moon", visual: "moon", feedback: "The Moon is Earth's natural satellite, not a star." }
        ] },
        family: "Look at the Moon from a window or outside with an adult. Draw the shape it seems to have; never look directly at the Sun.",
        adult: { overview: "The solar system includes the Sun, eight planets, dwarf planets, moons, and other bodies. Gravity keeps bodies in orbit.", coaching: "Clarify that the drawing is not to scale. Never look directly at the Sun or use instruments without certified filters and expert supervision.", sources: [["NASA · solar system facts", "https://science.nasa.gov/solar-system/solar-system-facts/"], ["NASA Space Place · planets", "https://spaceplace.nasa.gov/planets/en/"]] }
      },
      {
        id: "bridge-arches", title: "How does a bridge hold weight?", question: "What happens to the weight as it crosses a bridge?", illustration: "bridge",
        steps: [
          { title: "A bridge receives a load", text: "A person or vehicle puts weight on the bridge surface." },
          { title: "Shape spreads forces", text: "Beams and arches transfer some of the load toward supports." },
          { title: "Supports carry it to the ground", text: "Piers and ends must transfer forces to a firm foundation." }
        ],
        simpleSteps: [
          { title: "A bridge supports", text: "A bridge holds the weight of someone crossing." },
          { title: "Weight is shared", text: "Its shape helps move weight toward the sides." },
          { title: "Supports hold it up", text: "The supports carry weight to the ground." }
        ],
        activity: { prompt: "What helps a bridge carry weight to the ground?", correct: "supports", options: [
          { id: "supports", label: "Beams or arches and firm supports", visual: "bridge", feedback: "Exactly! The shape and supports distribute loads toward the ground." },
          { id: "paint", label: "Only the paint color", visual: "paint", feedback: "Paint can protect a surface, but it does not replace the structure that carries loads." },
          { id: "flag", label: "A flag on the bridge", visual: "flag", feedback: "A flag does not hold up a bridge. Its structure and supports carry the loads." }
        ] },
        family: "With an adult, place a sheet of paper between two stable books. Test it flat, then folded like an accordion; add small coins one at a time and stop if anything shifts.",
        adult: { overview: "Bridges transfer permanent and moving loads to abutments, piers, and foundations. Arches, trusses, and beams distribute forces in different ways. Castles also depended on walls, towers, and stone foundations; cars and computers combine components with different jobs, while boats displace water and airplanes balance lift, weight, thrust, and drag.", coaching: "The paper experiment shows how shape changes stiffness; it does not model a real structure or establish safety. For more, compare a stone castle arch with a modern truss using observations and reliable sources.", sources: [["FHWA · bridges and structures", "https://www.fhwa.dot.gov/bridge/"], ["Science Museum · castles", "https://www.sciencemuseum.org.uk/objects-and-stories/everyday-wonders/castles"], ["NASA · four forces on an airplane", "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/four-forces-on-an-airplane/"], ["OpenStax · Archimedes' principle", "https://openstax.org/books/college-physics-2e/pages/11-7-archimedes-principle"]] }
      }
    ]
  }
};

window.EXPLORE_ADULT_ARTICLES = {
  history: {
    es: [
      {
        id: "history-world-war-i",
        module: "history",
        title: "Primera Guerra Mundial",
        keywords: ["Primera Guerra Mundial", "Gran Guerra", "1914", "1918", "trincheras", "armisticio", "Europa", "causas", "Sarajevo"],
        question: "¿Cuándo ocurrió la Primera Guerra Mundial y cómo se desarrolló?",
        shortAnswer: "Fue una guerra internacional de 1914 a 1918, marcada por alianzas, movilización de imperios y una guerra de trincheras especialmente devastadora en el frente occidental.",
        image: "adult-wwi",
        sections: [
          { title: "Fechas y alcance", text: "La guerra comenzó en 1914 y terminó con el armisticio del 11 de noviembre de 1918. Involucró a potencias de Europa y, con el tiempo, a países de otras regiones. La entrada de Estados Unidos en 1917 fue un cambio importante, pero no explica por sí sola el conflicto." },
          { title: "Causas y detonante", text: "El asesinato del archiduque Francisco Fernando en Sarajevo, el 28 de junio de 1914, precipitó una crisis entre Estados. Las alianzas, el militarismo, el imperialismo y los nacionalismos contribuyeron a que la crisis se ampliara. Los historiadores debaten el peso relativo de estos factores; no hubo una causa única." },
          { title: "La guerra de trincheras", text: "En el frente occidental, las líneas de trincheras atravesaron partes de Francia y Bélgica. Ametralladoras, artillería, alambradas y otros factores hicieron muy peligroso cruzar el terreno entre posiciones. Hubo otros frentes y formas de combate, por lo que la experiencia no fue igual para todos." },
          { title: "Consecuencias", text: "El armisticio detuvo los combates principales, pero no fue por sí mismo el tratado de paz. Los acuerdos posteriores, en especial el Tratado de Versalles de 1919, redibujaron fronteras y establecieron nuevas condiciones. Cuatro imperios —alemán, austrohúngaro, otomano y ruso— dejaron de existir en su forma anterior." }
        ],
        people: "Francisco Fernando; dirigentes de los Estados beligerantes; soldados y civiles de numerosos países.",
        place: "Sarajevo y varios frentes; el frente occidental se extendió por Francia y Bélgica.",
        date: "1914–1918; armisticio el 11 de noviembre de 1918.",
        fact: "La red de trincheras del frente occidental se extendió por cientos de kilómetros, desde la costa del canal hasta la frontera suiza.",
        related: ["history-world-war-ii", "history-industrial-revolution"],
        imageAlt: "Ilustración original de una línea temporal de 1914 a 1918 y trincheras esquemáticas, sin representar una fotografía.",
        sources: [
          ["National Army Museum · The First World War", "https://www.nam.ac.uk/explore/first-world-war"],
          ["U.S. Department of State, Office of the Historian · World War I", "https://history.state.gov/milestones/1914-1920/wwi"],
          ["Encyclopaedia Britannica · World War I", "https://www.britannica.com/event/World-War-I"]
        ],
        questions: [
          { prompt: "¿Qué hecho precipitó la crisis de julio de 1914?", options: ["El asesinato de Francisco Fernando en Sarajevo", "La firma del Tratado de Versalles", "La invasión de Polonia"], correct: 0, explanation: "El asesinato en Sarajevo precipitó la crisis diplomática de 1914. Las alianzas y otros factores hicieron que el conflicto se extendiera." },
          { prompt: "¿Qué ocurrió el 11 de noviembre de 1918?", options: ["Se firmó el Tratado de Versalles", "Entró en vigor el armisticio que detuvo los combates principales", "Comenzó la guerra"], correct: 1, explanation: "El armisticio detuvo los combates principales; el Tratado de Versalles se firmó en 1919." }
        ]
      },
      {
        id: "history-world-war-ii",
        module: "history",
        title: "Segunda Guerra Mundial",
        keywords: ["Segunda Guerra Mundial", "1939", "1945", "Alemania", "Polonia", "Holocausto", "Eje", "Aliados", "guerra global"],
        question: "¿Cómo se extendió la Segunda Guerra Mundial y cuándo terminó?",
        shortAnswer: "Fue una guerra global de 1939 a 1945. En Europa, comenzó con la invasión alemana de Polonia; el régimen nazi también perpetró el Holocausto, el asesinato sistemático de seis millones de judíos y millones de otras víctimas.",
        image: "adult-wwii",
        sections: [
          { title: "Inicio y expansión", text: "En Europa, la Alemania nazi invadió Polonia el 1 de septiembre de 1939. Reino Unido y Francia declararon la guerra a Alemania el 3 de septiembre. La guerra se extendió a múltiples regiones y teatros; en Asia y el Pacífico, los conflictos tenían antecedentes y cronologías relacionadas pero no idénticas." },
          { title: "Bandos y ocupación", text: "Las principales potencias del Eje fueron Alemania, Italia y Japón. Entre los Aliados estuvieron, en distintos momentos, Reino Unido, la Unión Soviética, Estados Unidos, China y otros países. Las alianzas y la participación cambiaron durante la guerra." },
          { title: "Persecución y Holocausto", text: "El régimen nazi y sus colaboradores persiguieron y asesinaron sistemáticamente a seis millones de judíos europeos. También persiguieron y mataron a millones de personas, incluidos romaníes, personas con discapacidades, civiles soviéticos, prisioneros de guerra, polacos y otros grupos. La persecución y el Holocausto forman parte central de la historia del conflicto." },
          { title: "Final y consecuencias", text: "La guerra terminó en 1945: Alemania se rindió en mayo y Japón en septiembre, tras las bombas atómicas de Hiroshima y Nagasaki y la entrada soviética en la guerra contra Japón. La guerra causó decenas de millones de muertes, desplazamientos masivos y cambios políticos profundos. Las cifras varían según las definiciones y fuentes." }
        ],
        people: "Civiles y militares de decenas de países; víctimas del Holocausto y de otras persecuciones.",
        place: "Europa, Asia, África, el Pacífico y otros teatros de guerra.",
        date: "1939–1945; rendición alemana en mayo y japonesa en septiembre de 1945.",
        fact: "La invasión alemana de Polonia el 1 de septiembre de 1939 marca el inicio de la guerra en Europa en la cronología del US Holocaust Memorial Museum.",
        related: ["history-world-war-i", "history-industrial-revolution"],
        imageAlt: "Ilustración original y no fotográfica de una línea temporal de 1939 a 1945 y un mapa esquemático de varios teatros de guerra.",
        sources: [
          ["U.S. Holocaust Memorial Museum · World War II in Europe", "https://encyclopedia.ushmm.org/content/en/article/world-war-ii-in-europe"],
          ["U.S. Holocaust Memorial Museum · Holocaust Encyclopedia", "https://encyclopedia.ushmm.org/"],
          ["U.S. Department of State, Office of the Historian · World War II", "https://history.state.gov/milestones/1937-1945"]
        ],
        questions: [
          { prompt: "¿Qué hecho marca el inicio de la guerra en Europa en 1939?", options: ["La invasión alemana de Polonia", "La rendición de Japón", "La firma del Tratado de Versalles"], correct: 0, explanation: "El US Holocaust Memorial Museum señala la invasión alemana de Polonia el 1 de septiembre de 1939 como el inicio de la guerra en Europa." },
          { prompt: "¿Qué describe correctamente el Holocausto?", options: ["El asesinato sistemático de seis millones de judíos por el régimen nazi y sus colaboradores", "Una batalla naval de 1945", "Un tratado firmado al terminar la guerra"], correct: 0, explanation: "El Holocausto fue la persecución y el asesinato sistemático de seis millones de judíos europeos por la Alemania nazi y sus colaboradores; también hubo millones de otras víctimas de persecución nazi." }
        ]
      },
      {
        id: "history-industrial-revolution",
        module: "history",
        title: "Revolución Industrial",
        keywords: ["Revolución Industrial", "máquina de vapor", "fábricas", "textiles", "Gran Bretaña", "siglo XVIII", "industrialización", "trabajo"],
        question: "¿Qué cambió durante la Revolución Industrial?",
        shortAnswer: "Fue una transformación gradual de la producción y la sociedad, que comenzó en Gran Bretaña en el siglo XVIII y se extendió de manera desigual: crecieron las máquinas, las fábricas y el uso de energía fósil.",
        image: "adult-industry",
        sections: [
          { title: "Cuándo y dónde", text: "Suele situarse su inicio en Gran Bretaña durante la segunda mitad del siglo XVIII. No existe una única fecha de comienzo o final: la industrialización ocurrió a ritmos distintos según la región y el sector, y continuó durante el siglo XIX." },
          { title: "Cambios en la producción", text: "En la industria textil, inventos como la lanzadera volante, la hiladora Jenny, la water frame y el telar mecánico aceleraron etapas de producción. Las fábricas concentraron maquinaria y trabajadores, aunque la producción doméstica y artesanal no desapareció de inmediato." },
          { title: "Energía, transporte y materiales", text: "El carbón alimentó máquinas de vapor y procesos metalúrgicos. El hierro y, después, el ferrocarril permitieron transportar personas y mercancías con mayor rapidez. Las tecnologías se desarrollaron a partir de conocimientos y trabajos acumulados; no fueron obra de una sola persona." },
          { title: "Consecuencias y matices", text: "La industrialización contribuyó a la urbanización y a cambios en el trabajo, la producción y el comercio. También estuvo asociada con contaminación, condiciones laborales duras y desigualdad. La experiencia varió por clase, género, región y periodo, y estuvo conectada con el imperio y el comercio global." }
        ],
        people: "Inventores, trabajadores, empresarios y comunidades; entre los protagonistas técnicos estuvieron James Watt y Richard Arkwright, dentro de procesos colectivos.",
        place: "Comenzó en Gran Bretaña y se extendió a otras regiones de manera desigual.",
        date: "Desde mediados/finales del siglo XVIII; la periodización varía según región y tema.",
        fact: "La máquina de vapor de Newcomen apareció a comienzos del siglo XVIII; su uso y las mejoras posteriores contribuyeron a la industrialización, pero no la explican por sí solos.",
        related: ["history-world-war-i", "history-world-war-ii"],
        imageAlt: "Ilustración original de una fábrica textil esquemática y una línea de tiempo; no es una fotografía histórica.",
        sources: [
          ["HISTORY · Industrial Revolution", "https://www.history.com/articles/industrial-revolution"],
          ["Encyclopaedia Britannica · Industrial Revolution", "https://www.britannica.com/event/Industrial-Revolution"]
        ],
        questions: [
          { prompt: "¿Dónde comenzó la primera industrialización, según la periodización habitual?", options: ["Gran Bretaña", "Japón", "Brasil"], correct: 0, explanation: "La transformación industrial temprana comenzó en Gran Bretaña durante el siglo XVIII, aunque su expansión posterior fue desigual." },
          { prompt: "¿Por qué es impreciso explicar la Revolución Industrial con un solo invento?", options: ["Porque combinó tecnología, energía, trabajo, producción y cambios sociales a lo largo del tiempo", "Porque no se usaron máquinas", "Porque ocurrió en un solo día"], correct: 0, explanation: "Fue un proceso gradual y complejo con múltiples innovaciones y transformaciones, no un acontecimiento causado por un solo invento." }
        ]
      }
    ],
    en: [
      {
        id: "history-world-war-i", module: "history", title: "World War I",
        keywords: ["First World War", "Great War", "1914", "1918", "trenches", "armistice", "Europe", "causes", "Sarajevo"],
        question: "When did World War I take place, and how did it unfold?",
        shortAnswer: "An international war from 1914 to 1918, it was shaped by alliances, imperial mobilization, and especially devastating trench warfare on the Western Front.",
        image: "adult-wwi",
        sections: [
          { title: "Dates and scope", text: "The war began in 1914 and ended with the armistice of November 11, 1918. It involved European powers and, over time, countries from other regions. The United States entered in 1917, an important change but not an explanation for the conflict by itself." },
          { title: "Causes and trigger", text: "The assassination of Archduke Franz Ferdinand in Sarajevo on June 28, 1914, precipitated a crisis among states. Alliances, militarism, imperialism, and nationalism contributed to its expansion. Historians debate the relative weight of these factors; there was no single cause." },
          { title: "Trench warfare", text: "On the Western Front, trench lines crossed parts of France and Belgium. Machine guns, artillery, barbed wire, and other factors made crossing the ground between positions extremely dangerous. There were other fronts and forms of combat, so experiences differed." },
          { title: "Consequences", text: "The armistice stopped the main fighting, but was not itself the peace treaty. Later agreements, especially the 1919 Treaty of Versailles, redrew borders and set new conditions. The German, Austro-Hungarian, Ottoman, and Russian empires ceased to exist in their previous forms." }
        ],
        people: "Franz Ferdinand; leaders of the belligerent states; soldiers and civilians from many countries.",
        place: "Sarajevo and several fronts; the Western Front crossed France and Belgium.",
        date: "1914–1918; armistice on November 11, 1918.",
        fact: "The Western Front's trench system stretched hundreds of kilometers, from the Channel coast to the Swiss frontier.",
        related: ["history-world-war-ii", "history-industrial-revolution"],
        imageAlt: "Original, non-photographic illustration of a 1914–1918 timeline and schematic trenches.",
        sources: [
          ["National Army Museum · The First World War", "https://www.nam.ac.uk/explore/first-world-war"],
          ["U.S. Department of State, Office of the Historian · World War I", "https://history.state.gov/milestones/1914-1920/wwi"],
          ["Encyclopaedia Britannica · World War I", "https://www.britannica.com/event/World-War-I"]
        ],
        questions: [
          { prompt: "What event precipitated the July Crisis of 1914?", options: ["The assassination of Franz Ferdinand in Sarajevo", "The signing of the Treaty of Versailles", "The invasion of Poland"], correct: 0, explanation: "The Sarajevo assassination precipitated the 1914 diplomatic crisis. Alliances and other factors helped expand the conflict." },
          { prompt: "What happened on November 11, 1918?", options: ["The Treaty of Versailles was signed", "The armistice stopping the main fighting took effect", "The war began"], correct: 1, explanation: "The armistice stopped the main fighting; the Treaty of Versailles was signed in 1919." }
        ]
      },
      {
        id: "history-world-war-ii", module: "history", title: "World War II",
        keywords: ["Second World War", "1939", "1945", "Germany", "Poland", "Holocaust", "Axis", "Allies", "global war"],
        question: "How did World War II spread, and when did it end?",
        shortAnswer: "A global war from 1939 to 1945, it began in Europe with Germany's invasion of Poland. The Nazi regime also perpetrated the Holocaust, the systematic murder of six million Jews and millions of other victims.",
        image: "adult-wwii",
        sections: [
          { title: "Beginning and expansion", text: "In Europe, Nazi Germany invaded Poland on September 1, 1939. Britain and France declared war on Germany on September 3. The conflict spread across multiple regions and theaters; wars in Asia and the Pacific had related but not identical histories and timelines." },
          { title: "Alliances and occupation", text: "The principal Axis powers were Germany, Italy, and Japan. The Allies included, at different times, Britain, the Soviet Union, the United States, China, and other countries. Alliances and participation changed during the war." },
          { title: "Persecution and the Holocaust", text: "The Nazi regime and its collaborators systematically persecuted and murdered six million European Jews. They also persecuted and killed millions of others, including Roma, people with disabilities, Soviet civilians and prisoners of war, Poles, and other groups. Persecution and the Holocaust are central to the history of the conflict." },
          { title: "End and consequences", text: "The war ended in 1945: Germany surrendered in May and Japan in September, after the atomic bombings of Hiroshima and Nagasaki and the Soviet Union's entry into the war against Japan. The war caused tens of millions of deaths, mass displacement, and profound political changes. Estimates vary by definition and source." }
        ],
        people: "Civilians and service members from dozens of countries; victims of the Holocaust and other persecutions.",
        place: "Europe, Asia, Africa, the Pacific, and other theaters of war.",
        date: "1939–1945; German surrender in May and Japanese surrender in September 1945.",
        fact: "The U.S. Holocaust Memorial Museum's timeline marks Germany's invasion of Poland on September 1, 1939, as the beginning of the war in Europe.",
        related: ["history-world-war-i", "history-industrial-revolution"],
        imageAlt: "Original, non-photographic illustration of a 1939–1945 timeline and schematic map of multiple war theaters.",
        sources: [
          ["U.S. Holocaust Memorial Museum · World War II in Europe", "https://encyclopedia.ushmm.org/content/en/article/world-war-ii-in-europe"],
          ["U.S. Holocaust Memorial Museum · Holocaust Encyclopedia", "https://encyclopedia.ushmm.org/"],
          ["U.S. Department of State, Office of the Historian · World War II", "https://history.state.gov/milestones/1937-1945"]
        ],
        questions: [
          { prompt: "What event marks the beginning of the war in Europe in 1939?", options: ["Germany's invasion of Poland", "Japan's surrender", "The signing of the Treaty of Versailles"], correct: 0, explanation: "The U.S. Holocaust Memorial Museum identifies Germany's invasion of Poland on September 1, 1939, as the beginning of the war in Europe." },
          { prompt: "Which statement describes the Holocaust?", options: ["The Nazi regime and its collaborators systematically murdered six million Jews", "A naval battle in 1945", "A treaty signed at the end of the war"], correct: 0, explanation: "The Holocaust was the persecution and systematic murder of six million European Jews by Nazi Germany and its collaborators; millions of other people were also victims of Nazi persecution." }
        ]
      },
      {
        id: "history-industrial-revolution", module: "history", title: "Industrial Revolution",
        keywords: ["steam engine", "factories", "textiles", "Britain", "eighteenth century", "industrialization", "work"],
        question: "What changed during the Industrial Revolution?",
        shortAnswer: "A gradual transformation of production and society, it began in Britain in the eighteenth century and spread unevenly as machinery, factories, and fossil-fuel energy grew.",
        image: "adult-industry",
        sections: [
          { title: "When and where", text: "Its beginning is usually placed in Britain in the second half of the eighteenth century. There is no single start or end date: industrialization proceeded at different rates by region and sector and continued through the nineteenth century." },
          { title: "Changes in production", text: "In textiles, inventions such as the flying shuttle, spinning jenny, water frame, and power loom sped up stages of production. Factories concentrated machinery and workers, although domestic and craft production did not disappear immediately." },
          { title: "Energy, transport, and materials", text: "Coal powered steam engines and metallurgical processes. Iron and later railways helped transport people and goods more quickly. Technologies built on accumulated knowledge and labor; they were not the work of one person alone." },
          { title: "Consequences and nuance", text: "Industrialization contributed to urbanization and changes in work, production, and trade. It was also associated with pollution, harsh labor conditions, and inequality. Experiences varied by class, gender, region, and period and were connected to empire and global trade." }
        ],
        people: "Inventors, workers, business owners, and communities; technical figures included James Watt and Richard Arkwright within broader collective processes.",
        place: "It began in Britain and spread unevenly to other regions.",
        date: "From the mid-to-late eighteenth century; periodization varies by region and subject.",
        fact: "Newcomen's steam engine appeared in the early eighteenth century; its use and later improvements contributed to industrialization but do not explain it on their own.",
        related: ["history-world-war-i", "history-world-war-ii"],
        imageAlt: "Original illustration of a schematic textile mill and timeline; not a historical photograph.",
        sources: [
          ["HISTORY · Industrial Revolution", "https://www.history.com/articles/industrial-revolution"],
          ["Encyclopaedia Britannica · Industrial Revolution", "https://www.britannica.com/event/Industrial-Revolution"]
        ],
        questions: [
          { prompt: "Where did early industrialization begin, according to the usual periodization?", options: ["Britain", "Japan", "Brazil"], correct: 0, explanation: "Early industrial transformation began in Britain during the eighteenth century, although later expansion was uneven." },
          { prompt: "Why is it inaccurate to explain the Industrial Revolution with one invention?", options: ["It combined technology, energy, labor, production, and social change over time", "It used no machines", "It happened in a single day"], correct: 0, explanation: "It was a gradual, complex process involving many innovations and transformations, not an event caused by one invention." }
        ]
      }
    ]
  },
  space: {
    es: [{
      id: "space-first-computer",
      module: "space",
      title: "¿Cuál fue la primera computadora?",
      keywords: ["primera computadora", "primer ordenador", "historia de la computación", "Babbage", "Analytical Engine", "Colossus", "ENIAC", "Manchester Baby", "programa almacenado", "electrónica"],
      question: "¿Por qué depende de qué entendemos por “computadora”?",
      shortAnswer: "No hay una única respuesta: depende de si se pregunta por una máquina mecánica diseñada, una computadora electrónica de propósito general o la primera que ejecutó un programa almacenado.",
      image: "adult-first-computer",
      sections: [
        { title: "Antecedentes mecánicos", text: "En el siglo XIX, Charles Babbage diseñó la Difference Engine y la Analytical Engine. La segunda anticipaba una máquina programable de propósito general, pero no se completó durante su vida. Un diseño importante no es lo mismo que una computadora construida y operativa." },
        { title: "Máquinas electrónicas durante la guerra", text: "Colossus fue una computadora electrónica digital de propósito especial usada en Bletchley Park durante la Segunda Guerra Mundial para ayudar a descifrar comunicaciones cifradas. ENIAC, construido entre 1943 y 1945, fue una computadora electrónica de gran escala que podía realizar cálculos a velocidad electrónica; se dio a conocer en 1946. Sus historias corresponden a criterios diferentes de “primera”." },
        { title: "El programa almacenado", text: "En 1948, la Small-Scale Experimental Machine (SSEM), conocida como Manchester Baby, ejecutó un programa en una computadora digital electrónica con programa almacenado. Por ese logro específico suele describirse como la primera de ese tipo en ejecutar un programa." },
        { title: "Cómo responder con precisión", text: "Conviene precisar el criterio: propuesta mecánica, máquina electrónica digital, uso especial o programa almacenado. Charles Babbage, los equipos de ENIAC —incluidos John Mauchly y J. Presper Eckert— y el equipo de Manchester —Frederic Williams, Tom Kilburn y Geoff Toothill— fueron protagonistas de etapas distintas; no hubo un único inventor de todas las computadoras." }
      ],
      people: "Charles Babbage; John Mauchly y J. Presper Eckert; Frederic Williams, Tom Kilburn y Geoff Toothill; equipos técnicos y científicos.",
      place: "Reino Unido y Estados Unidos; Bletchley Park fue un centro británico de descifrado durante la guerra.",
      date: "Diseños de Babbage: siglo XIX; ENIAC: construido entre 1943 y 1945; Manchester Baby ejecutó su programa en 1948.",
      fact: "El programa de prueba del Manchester Baby tenía 17 instrucciones y se ejecutó el 21 de junio de 1948.",
      related: ["lesson-space-bridge-arches", "lesson-space-solar-system"],
      imageAlt: "Ilustración educativa original que compara una máquina mecánica, una computadora electrónica y un programa almacenado; no es una fotografía.",
      sources: [
        ["Computer History Museum · Charles Babbage", "https://www.computerhistory.org/babbage/"],
        ["Computer History Museum · ENIAC", "https://www.computerhistory.org/revolution/birth-of-the-computer/4/78"],
        ["Computer History Museum · 1946 computing timeline", "https://www.computerhistory.org/timeline/1946/"],
        ["Computer History Museum · 1948 Manchester Baby", "https://www.computerhistory.org/timeline/1948/"],
        ["The National Museum of Computing · Colossus", "https://www.tnmoc.org/colossus"]
      ],
      questions: [
        { prompt: "¿Por qué la pregunta «cuál fue la primera computadora» necesita precisar el criterio?", options: ["Porque puede referirse a diseños mecánicos, máquinas electrónicas o equipos con programa almacenado", "Porque todas las computadoras se inventaron el mismo año", "Porque antes de 1948 no existían herramientas de cálculo"], correct: 0, explanation: "Babbage diseñó máquinas mecánicas; Colossus y ENIAC responden a criterios electrónicos distintos; Manchester Baby destaca por ejecutar un programa almacenado." },
        { prompt: "¿Qué logró el Manchester Baby en 1948?", options: ["Ejecutó un programa en una computadora digital electrónica con programa almacenado", "Fue la primera máquina mecánica diseñada por Babbage", "Se utilizó para descifrar mensajes durante la Segunda Guerra Mundial"], correct: 0, explanation: "El Computer History Museum registra que el Manchester Baby ejecutó un programa de 17 instrucciones el 21 de junio de 1948." }
      ]
    }],
    en: [{
      id: "space-first-computer",
      module: "space",
      title: "What was the first computer?",
      keywords: ["first computer", "history of computing", "Babbage", "Analytical Engine", "Colossus", "ENIAC", "Manchester Baby", "stored program", "electronic"],
      question: "Why does the answer depend on what we mean by “computer”?",
      shortAnswer: "There is no single answer: it depends on whether the question means a designed mechanical engine, a general-purpose electronic computer, or the first computer to run a stored program.",
      image: "adult-first-computer",
      sections: [
        { title: "Mechanical predecessors", text: "In the nineteenth century, Charles Babbage designed the Difference Engine and Analytical Engine. The latter anticipated a programmable, general-purpose machine, but it was not completed in his lifetime. An important design is not the same as a built, working computer." },
        { title: "Electronic machines during the war", text: "Colossus was a special-purpose electronic digital computer used at Bletchley Park during World War II to help break coded communications. ENIAC, built between 1943 and 1945, was a large-scale electronic computer able to perform calculations at electronic speed; it was publicly unveiled in 1946. Their histories meet different definitions of “first”." },
        { title: "The stored-program milestone", text: "In 1948, the Small-Scale Experimental Machine (SSEM), known as the Manchester Baby, ran a program on an electronic digital stored-program computer. For that specific achievement, it is often described as the first of its kind to run a program." },
        { title: "How to answer precisely", text: "State the criterion: mechanical proposal, electronic digital machine, special-purpose use, or stored-program computer. Charles Babbage, the ENIAC team—including John Mauchly and J. Presper Eckert—and the Manchester team—Frederic Williams, Tom Kilburn, and Geoff Toothill—contributed to different stages; there was no single inventor of all computers." }
      ],
      people: "Charles Babbage; John Mauchly and J. Presper Eckert; Frederic Williams, Tom Kilburn, and Geoff Toothill; many technical and research teams.",
      place: "Britain and the United States; Bletchley Park was a British wartime codebreaking center.",
      date: "Babbage's designs: nineteenth century; ENIAC: built 1943–1945; Manchester Baby ran its program in 1948.",
      fact: "The Manchester Baby's test program contained 17 instructions and ran on June 21, 1948.",
      related: ["lesson-space-bridge-arches", "lesson-space-solar-system"],
      imageAlt: "Original educational illustration comparing a mechanical engine, electronic computer, and stored program; not a photograph.",
      sources: [
        ["Computer History Museum · Charles Babbage", "https://www.computerhistory.org/babbage/"],
        ["Computer History Museum · ENIAC", "https://www.computerhistory.org/revolution/birth-of-the-computer/4/78"],
        ["Computer History Museum · 1946 computing timeline", "https://www.computerhistory.org/timeline/1946/"],
        ["Computer History Museum · 1948 Manchester Baby", "https://www.computerhistory.org/timeline/1948/"],
        ["The National Museum of Computing · Colossus", "https://www.tnmoc.org/colossus"]
      ],
      questions: [
        { prompt: "Why does “the first computer” need a defined criterion?", options: ["It may refer to mechanical designs, electronic machines, or computers with stored programs", "All computers were invented in the same year", "No calculating tools existed before 1948"], correct: 0, explanation: "Babbage designed mechanical engines; Colossus and ENIAC represent different electronic milestones; Manchester Baby is notable for running a stored program." },
        { prompt: "What did the Manchester Baby achieve in 1948?", options: ["It ran a program on an electronic digital stored-program computer", "It was Babbage's first mechanical design", "It was used to break wartime codes"], correct: 0, explanation: "The Computer History Museum records that Manchester Baby ran a 17-instruction program on June 21, 1948." }
      ]
    }]
  },
  illustrations: {
    "adult-wwi": `<svg viewBox="0 0 640 360" role="img" aria-label="Original schematic illustration of a 1914 to 1918 timeline and trenches"><rect width="640" height="360" rx="26" fill="#eee9dc"/><path d="M0 217q90-17 180 0t180 0 280 0v143H0Z" fill="#b79b78"/><path d="M0 247h640M0 286h640" stroke="#907a63" stroke-width="8" stroke-dasharray="17 12"/><path d="M68 215v-44h38v44m49 0v-44h39v44m49 0v-44h38v44m50 0v-44h39v44m48 0v-44h38v44m50 0v-44h39v44" fill="#d2c2a8" stroke="#725f4e" stroke-width="6"/><path d="M86 100h465" stroke="#577866" stroke-width="8" stroke-linecap="round"/><circle cx="92" cy="100" r="13" fill="#cc8b62"/><circle cx="545" cy="100" r="13" fill="#cc8b62"/><text x="66" y="75" fill="#394b42" font-size="24" font-family="Georgia">1914</text><text x="506" y="75" fill="#394b42" font-size="24" font-family="Georgia">1918</text><path d="M115 145h410" stroke="#b37c55" stroke-width="4"/><text x="200" y="177" fill="#51483c" font-size="18" font-family="Georgia">Western Front · schematic, not to scale</text></svg>`,
    "adult-wwii": `<svg viewBox="0 0 640 360" role="img" aria-label="Original schematic illustration of the 1939 to 1945 timeline and multiple theaters"><rect width="640" height="360" rx="26" fill="#e9edf0"/><path d="M68 180h504" stroke="#607f8e" stroke-width="9" stroke-linecap="round"/><circle cx="84" cy="180" r="16" fill="#cb795c"/><circle cx="556" cy="180" r="16" fill="#cb795c"/><text x="56" y="145" fill="#374b55" font-size="24" font-family="Georgia">1939</text><text x="520" y="145" fill="#374b55" font-size="24" font-family="Georgia">1945</text><path d="M175 110q31-28 70 0l11 54q-35 22-74 0Zm162-14q43-25 79 4l-9 58q-44 17-78-7Zm79 123q38-19 76 8l-13 48q-35 16-70-4Z" fill="#a9bfad" stroke="#617c6b" stroke-width="5"/><path d="M199 198q33 28 65 0m93-22q34 24 68 0m-16 66q31 20 64-2" fill="none" stroke="#c8795d" stroke-width="6" stroke-dasharray="8 8"/><text x="186" y="310" fill="#53646a" font-size="17" font-family="Georgia">Multiple regions and theaters · schematic</text></svg>`,
    "adult-industry": `<svg viewBox="0 0 640 360" role="img" aria-label="Original illustration of a textile mill, a steam engine, and gradual industrial change"><rect width="640" height="360" rx="26" fill="#f3e8dc"/><path d="M75 271V147l81-51 80 51v124Z" fill="#d0a47b" stroke="#78634e" stroke-width="7"/><path d="M93 170h40v42H93Zm77 0h40v42h-40Zm-77 64h40v37H93Zm77 0h40v37h-40Z" fill="#edf0e7" stroke="#8c7358" stroke-width="5"/><path d="M108 96V62h35v57m30-23V72h32v49" fill="#9a795d" stroke="#78634e" stroke-width="6"/><path d="M295 270h265" stroke="#68796c" stroke-width="8"/><circle cx="358" cy="252" r="42" fill="#c47d59" stroke="#75543e" stroke-width="6"/><circle cx="503" cy="252" r="42" fill="#c47d59" stroke="#75543e" stroke-width="6"/><path d="M358 210v-63h105l40 47v58H400m-42 0h105" fill="#d7b487" stroke="#75543e" stroke-width="7" stroke-linejoin="round"/><path d="M433 147v-52h36v61" fill="#99816b" stroke="#75543e" stroke-width="6"/><path d="M452 85q-18-21 0-40 20-20 1-37m35 77q-15-20 1-38" fill="none" stroke="#91aab0" stroke-width="8" stroke-linecap="round"/><path d="M112 310h425" stroke="#63866e" stroke-width="5" stroke-dasharray="12 10"/><text x="124" y="337" fill="#4a584f" font-size="18" font-family="Georgia">Machines · factories · social change</text></svg>`,
    "adult-first-computer": `<svg viewBox="0 0 640 360" role="img" aria-label="Original illustration of milestones in the history of computers"><rect width="640" height="360" rx="26" fill="#e9edf0"/><path d="M86 287h468" stroke="#708276" stroke-width="7" stroke-linecap="round"/><circle cx="134" cy="287" r="11" fill="#b78156"/><circle cx="322" cy="287" r="11" fill="#b78156"/><circle cx="506" cy="287" r="11" fill="#b78156"/><path d="M77 128h115v99H77Z" fill="#d5bc93" stroke="#77664f" stroke-width="6"/><path d="M97 146h75m-75 18h75m-75 18h75m-75 18h75" stroke="#8f7756" stroke-width="5"/><path d="M261 100h120v127H261Z" fill="#a9bcc0" stroke="#5d7781" stroke-width="6"/><circle cx="292" cy="135" r="8" fill="#c7785b"/><circle cx="323" cy="135" r="8" fill="#c7785b"/><circle cx="354" cy="135" r="8" fill="#c7785b"/><path d="M284 162h74m-74 17h74m-74 17h74" stroke="#607f87" stroke-width="6"/><path d="M451 108h111v119H451Z" fill="#d9e3dc" stroke="#5f806b" stroke-width="6"/><path d="M472 131h68v49h-68Zm13 65h42" fill="none" stroke="#65836d" stroke-width="6"/><text x="79" y="78" fill="#43554b" font-size="19" font-family="Georgia">Mechanical design</text><text x="265" y="78" fill="#43554b" font-size="19" font-family="Georgia">Electronic machine</text><text x="448" y="78" fill="#43554b" font-size="19" font-family="Georgia">Stored program</text><text x="91" y="327" fill="#53646a" font-size="17" font-family="Georgia">Different criteria · different “firsts”</text></svg>`
  },
  imageRights: {
    creator: "Original project illustration",
    license: "Created for Explore Together; no third-party image is embedded."
  }
};

window.EXPLORE_EXPLORERS = {
  countries: [
    {
      id: "brazil", flag: "🇧🇷", name: { es: "Brasil", en: "Brazil" },
      capital: { es: "Brasilia", en: "Brasília" }, continent: { es: "América del Sur", en: "South America" },
      landmark: { es: "Cristo Redentor, Río de Janeiro", en: "Christ the Redeemer, Rio de Janeiro" },
      languages: [{ id: "pt-BR", name: { es: "Portugués", en: "Portuguese" }, greeting: "Olá! Bem-vindo ao Brasil." }],
      sources: [["National Geographic Kids · Brasil", "https://kids.nationalgeographic.com/geography/countries/article/brazil"], ["UNESCO · Río de Janeiro", "https://whc.unesco.org/en/list/1100/"]]
    },
    {
      id: "japan", flag: "🇯🇵", name: { es: "Japón", en: "Japan" },
      capital: { es: "Tokio", en: "Tokyo" }, continent: { es: "Asia", en: "Asia" },
      landmark: { es: "Monte Fuji", en: "Mount Fuji" },
      languages: [{ id: "ja-JP", name: { es: "Japonés", en: "Japanese" }, greeting: "こんにちは！日本へようこそ。" }],
      sources: [["National Geographic Kids · Japón", "https://kids.nationalgeographic.com/geography/countries/article/japan"], ["UNESCO · Fujisan", "https://whc.unesco.org/en/list/1418/"]]
    },
    {
      id: "egypt", flag: "🇪🇬", name: { es: "Egipto", en: "Egypt" },
      capital: { es: "El Cairo", en: "Cairo" }, continent: { es: "África", en: "Africa" },
      landmark: { es: "Pirámides de Guiza", en: "Pyramids of Giza" },
      languages: [{ id: "ar-EG", name: { es: "Árabe", en: "Arabic" }, greeting: "مرحبًا! أهلاً بك في مصر." }],
      sources: [["National Geographic Kids · Egipto", "https://kids.nationalgeographic.com/geography/countries/article/egypt"], ["UNESCO · Menfis y su necrópolis", "https://whc.unesco.org/en/list/86/"]]
    },
    {
      id: "france", flag: "🇫🇷", name: { es: "Francia", en: "France" },
      capital: { es: "París", en: "Paris" }, continent: { es: "Europa", en: "Europe" },
      landmark: { es: "Torre Eiffel", en: "Eiffel Tower" },
      languages: [{ id: "fr-FR", name: { es: "Francés", en: "French" }, greeting: "Bonjour ! Bienvenue en France." }],
      sources: [["National Geographic Kids · Francia", "https://kids.nationalgeographic.com/geography/countries/article/france"], ["Torre Eiffel · sitio oficial", "https://www.toureiffel.paris/en"]]
    },
    {
      id: "kenya", flag: "🇰🇪", name: { es: "Kenia", en: "Kenya" },
      capital: { es: "Nairobi", en: "Nairobi" }, continent: { es: "África", en: "Africa" },
      landmark: { es: "Parque Nacional del Monte Kenia", en: "Mount Kenya National Park" },
      languages: [
        { id: "sw-KE", name: { es: "Suajili", en: "Swahili" }, greeting: "Jambo! Karibu Kenya." },
        { id: "en-KE", name: { es: "Inglés", en: "English" }, greeting: "Hello! Welcome to Kenya." }
      ],
      sources: [["National Geographic Kids · Kenia", "https://kids.nationalgeographic.com/geography/countries/article/kenya"], ["UNESCO · Monte Kenia", "https://whc.unesco.org/en/list/800/"]]
    },
    {
      id: "canada", flag: "🇨🇦", name: { es: "Canadá", en: "Canada" },
      capital: { es: "Ottawa", en: "Ottawa" }, continent: { es: "América del Norte", en: "North America" },
      landmark: { es: "Parque Nacional Banff", en: "Banff National Park" },
      languages: [
        { id: "en-CA", name: { es: "Inglés", en: "English" }, greeting: "Hello! Welcome to Canada." },
        { id: "fr-CA", name: { es: "Francés", en: "French" }, greeting: "Bonjour ! Bienvenue au Canada." }
      ],
      sources: [["National Geographic Kids · Canadá", "https://kids.nationalgeographic.com/geography/countries/article/canada"], ["UNESCO · Parques de las Montañas Rocosas", "https://whc.unesco.org/en/list/304/"]]
    }
  ],
  bodyParts: [
    {
      id: "brain", icon: "🧠", system: { es: "Sistema nervioso", en: "Nervous system" },
      name: { es: "Cerebro", en: "Brain" },
      function: { es: "Recibe información y ayuda a coordinar pensamientos, sentidos y movimientos.", en: "Receives information and helps coordinate thoughts, senses, and movement." },
      adult: { es: "El cerebro forma parte del sistema nervioso central y trabaja con la médula espinal y los nervios.", en: "The brain is part of the central nervous system and works with the spinal cord and nerves." }
    },
    {
      id: "heart", icon: "🫀", system: { es: "Sistema circulatorio", en: "Circulatory system" },
      name: { es: "Corazón", en: "Heart" },
      function: { es: "Se contrae para impulsar la sangre por los vasos sanguíneos.", en: "Contracts to move blood through blood vessels." },
      adult: { es: "El flujo sanguíneo transporta oxígeno y otras sustancias; los pulmones realizan el intercambio de gases.", en: "Blood flow transports oxygen and other substances; the lungs exchange gases." }
    },
    {
      id: "lungs", icon: "🫁", system: { es: "Sistema respiratorio", en: "Respiratory system" },
      name: { es: "Pulmones", en: "Lungs" },
      function: { es: "Ayudan a llevar oxígeno al cuerpo y a eliminar dióxido de carbono.", en: "Help bring oxygen into the body and remove carbon dioxide." },
      adult: { es: "El intercambio de oxígeno y dióxido de carbono ocurre en pequeños sacos de aire llamados alvéolos.", en: "Oxygen and carbon dioxide exchange takes place in tiny air sacs called alveoli." }
    },
    {
      id: "stomach", icon: "🥣", system: { es: "Sistema digestivo", en: "Digestive system" },
      name: { es: "Estómago", en: "Stomach" },
      function: { es: "Mezcla los alimentos con jugos digestivos y los prepara para seguir por el sistema digestivo.", en: "Mixes food with digestive juices and helps move it through the digestive system." },
      adult: { es: "La digestión comienza en la boca; el estómago mezcla el alimento y el intestino absorbe la mayoría de los nutrientes.", en: "Digestion begins in the mouth; the stomach mixes food, and the intestine absorbs most nutrients." }
    },
    {
      id: "bones", icon: "🦴", system: { es: "Sistema esquelético", en: "Skeletal system" },
      name: { es: "Huesos", en: "Bones" },
      function: { es: "Sostienen el cuerpo, protegen algunos órganos y trabajan con los músculos para permitir el movimiento.", en: "Support the body, protect some organs, and work with muscles to make movement possible." },
      adult: { es: "El esqueleto también contiene médula ósea, donde se producen muchas células sanguíneas.", en: "The skeleton also contains bone marrow, where many blood cells are made." }
    }
  ],
  sources: [
    ["MedlinePlus · órganos y sistemas", "https://medlineplus.gov/spanish/ency/article/002368.htm"],
    ["NHLBI · corazón", "https://www.nhlbi.nih.gov/health/heart"],
    ["NHLBI · pulmones", "https://www.nhlbi.nih.gov/health/lungs"]
  ]
};
