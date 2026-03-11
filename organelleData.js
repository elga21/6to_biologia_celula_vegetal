const organelleData = {
    "Cloroplastos": {
        description: "Organelos exclusivos de las células vegetales donde ocurre la fotosíntesis. Son como los 'paneles solares' de la planta, capturando la luz del sol para fabricar alimento (glucosa).",
        subcomponents: [
            { name: "Tilacoides", info: "Sacos en forma de moneda donde se captura la luz solar." },
            { name: "Estroma", info: "Fluido donde se producen los carbohidratos." },
            { name: "Clorofila", info: "Pigmento verde esencial para absorber la energía lumínica." }
        ],
        funFact: "¡Los cloroplastos pueden moverse dentro de la célula para encontrar la mejor posición y captar más luz!",
        coords: { x: 45.3, y: 19.5 }
    },
    "Reticulo Endoplasmático Rugoso": {
        description: "Una red de sacos aplanados tachonada de ribosomas. Es la 'fábrica de montaje' donde se sintetizan y procesan las proteínas.",
        subcomponents: [
            { name: "Ribosomas", info: "Pequeños motores encargados de leer el código genético y armar proteínas." },
            { name: "Cisternas", info: "Pliegues que aumentan la superficie de trabajo celular." }
        ],
        funFact: "Se llama 'rugoso' porque bajo el microscopio los ribosomas parecen pequeños granitos en su superficie.",
        coords: { x: 60.3, y: 28.4 }
    },
    "Reticulo Endoplasmático Liso": {
        description: "A diferencia del rugoso, no tiene ribosomas. Se encarga de producir lípidos (grasas) y desintoxicar la célula.",
        subcomponents: [
            { name: "Lípidos", info: "Moléculas de grasa esenciales para las membranas celulares." },
            { name: "Enzimas", info: "Aceleran procesos químicos internos." }
        ],
        funFact: "En las células que necesitan mucha desintoxicación, el retículo liso es mucho más grande.",
        coords: { x: 80.5, y: 42.2 }
    },
    "Núcleo": {
        description: "El 'cerebro' de la célula. Contiene casi todo el material genético (ADN) y controla todas las actividades celulares.",
        subcomponents: [
            { name: "Envoltura Nuclear", info: "Doble membrana con poros que protege el material genético." },
            { name: "Cromatina", info: "ADN organizado que se convertirá en cromosomas." },
            { name: "Poros Nucleares", info: "Puertas que regulan qué información entra y sale." }
        ],
        funFact: "Si estiráramos todo el ADN de una sola célula, ¡mediría casi 2 metros de largo!",
        coords: { x: 68, y: 48.2 }
    },
    "Nucléolo": {
        description: "Una región densa dentro del núcleo. Su misión principal es fabricar las piezas que formarán los ribosomas.",
        subcomponents: [
            { name: "ARN Ribosomal", info: "El componente principal de las fábricas de proteínas." }
        ],
        funFact: "Una sola célula puede tener más de un nucléolo dependiendo de cuánta proteína necesite fabricar.",
        coords: { x: 64, y: 42.9 }
    },
    "Aparato de Golgi": {
        description: "El 'centro de correos y empaquetado'. Modifica, etiqueta y envía proteínas y lípidos a donde sean necesarios.",
        subcomponents: [
            { name: "Dictiosomas", info: "Pilas de sacos que procesan las moléculas." },
            { name: "Vesículas Secretoras", info: "Pequeños paquetes listos para salir de la célula." }
        ],
        funFact: "En las plantas, el Aparato de Golgi ayuda a fabricar las piezas para construir la pared celular.",
        coords: { x: 64.5, y: 64.5 }
    },
    "Vesículas": {
        description: "Pequeños sacos de membrana que funcionan como 'camiones de reparto' transportando materiales por toda la célula.",
        subcomponents: [
            { name: "Endosomas", info: "Clasifican el material que entra a la célula." }
        ],
        funFact: "Las vesículas pueden fusionarse con otras membranas para soltar su carga de forma segura.",
        coords: { x: 20.3, y: 36.5 }
    },
    "Mitocondrias": {
        description: "Las 'centrales eléctricas' de la célula. Convierten los nutrientes en energía química (ATP) mediante la respiración celular.",
        subcomponents: [
            { name: "Crestas", info: "Pliegues internos donde ocurre la producción de energía." },
            { name: "Matriz", info: "Espacio interno con enzimas propias." }
        ],
        funFact: "¡Al igual que los cloroplastos, las mitocondrias tienen su propio ADN heredado directamente de la madre!",
        coords: { x: 52.8, y: 80.5 }
    },
    "Peroxisomas": {
        description: "Pequeños centros de reciclaje y limpieza. Descomponen ácidos grasos y neutralizan sustancias tóxicas.",
        subcomponents: [
            { name: "Catalasa", info: "Enzima que convierte el peróxido de hidrógeno tóxico en agua y oxígeno." }
        ],
        funFact: "Son vitales en las semillas para convertir la grasa guardada en azúcar para que la planta crezca.",
        coords: { x: 31.4, y: 71.5 }
    },
    "Amiloplasto": {
        description: "Organelo especializado en fabricar y almacenar almidón, la reserva de energía de las plantas.",
        subcomponents: [
            { name: "Granos de Almidón", info: "Paquetes densos de energía pura almacenada." }
        ],
        funFact: "Se encuentran en abundancia en alimentos como las papas y el arroz.",
        coords: { x: 62, y: 82.1 }
    },
    "Pared Celular (Base)": {
        description: "Una capa rígida exterior que da soporte y forma a la planta. Permite que las plantas crezcan altas sin esqueleto.",
        subcomponents: [
            { name: "Celulosa", info: "Fibras fuertes que forman la estructura principal." },
            { name: "Lignina", info: "Sustancia que hace que la madera sea dura." }
        ],
        funFact: "¡La celulosa de las paredes celulares es el compuesto orgánico más abundante en la Tierra!",
        coords: { x: 20.1, y: 24.1 }
    },
    "Cristales de Rafidio": {
        description: "Agujas microscópicas de oxalato de calcio que sirven como un sistema de defensa contra animales que quieran comerse la planta.",
        subcomponents: [
            { name: "Idioblastos", info: "Células especializadas que guardan estos cristales." }
        ],
        funFact: "Si un animal muerde una hoja con estos cristales, sentirá una picazón y pinchazos muy fuertes en la boca.",
        coords: { x: 35.1, y: 60.3 }
    },
    "Vacuola Central": {
        description: "El 'gran tanque de agua'. Puede ocupar hasta el 90% del espacio celular, manteniendo la planta firme y erguida.",
        subcomponents: [
            { name: "Tonoplasto", info: "Membrana que rodea la vacuola y regula lo que entra." },
            { name: "Savia Celular", info: "Mezcla de agua, nutrientes y a veces pigmentos de colores." }
        ],
        funFact: "Cuando una planta se marchita, es porque sus vacuolas se están quedando sin agua.",
        coords: { x: 36, y: 46.4 }
    },
    "Citoplasma": {
        description: "El medio gelatinoso interno donde flotan todos los organelos. Es el escenario donde ocurre la magia de la vida.",
        subcomponents: [
            { name: "Citosol", info: "La parte líquida clara del citoplasma." },
            { name: "Citoesqueleto", info: "Red de fibras que da soporte interno y movimiento." }
        ],
        funFact: "El citoplasma nunca está quieto; siempre hay corrientes moviendo materiales de un lado a otro.",
        coords: { x: 42.6, y: 78 }
    },
    "Membrana Celular": {
        description: "La 'frontera inteligente'. Una capa fina que controla exactamente qué entra y qué sale de la célula.",
        subcomponents: [
            { name: "Fosfolípidos", info: "Moléculas que forman la barrera principal." },
            { name: "Proteínas de Canal", info: "Puertas específicas para moléculas como el agua." }
        ],
        funFact: "¡Es tan delgada que necesitarías apilar 10,000 membranas para igualar el grosor de una hoja de papel!",
        coords: { x: 19.4, y: 28.1 }
    },
    "Pared Celular (Cima)": {
        description: "La parte superior de la estructura protectora rígida que mantiene la cohesión entre las células vecinas.",
        subcomponents: [
            { name: "Laminilla Media", info: "Capa que pega una célula vegetal con otra." }
        ],
        funFact: "Actúa como un pegamento natural súper resistente que mantiene unida a toda la planta.",
        coords: { x: 22, y: 18.5 }
    },
    "Ribosomas": {
        description: "Los ribosomas en la célula vegetal son complejos supramoleculares encargados de la síntesis de proteínas",
        subcomponents: [
            { name: "Ubicación", info: "Se encuentran libres en el citoplasma, adheridos al Retículo Endoplasmático Rugoso (RER), y también dentro de los cloroplastos y las mitocondrias (estos últimos tienen su propio ADN y ribosomas similares a los de las bacterias)." }
        ],
        funFact: "Traducen la información genética (ARNm) en cadenas de aminoácidos para crear las proteínas que la planta necesita para crecer y defenderse",
        coords: { x: 53, y: 28.5 }
    },
    "Lisosomas": {
        description: "Los lisosomas son menos comunes que en la vegetal, ya que su función de degradación es asumida mayoritariamente por la vacuola central",
        subcomponents: [
            { name: "Origen", info: "Se forman a partir de vesículas que se desprenden del Aparato de Golgi." }
        ],
        funFact: "Actúan como el (estómago) celular, utilizando enzimas hidrolíticas para descomponer orgánulos viejos, proteínas y otras macromoléculas.",
        coords: { x: 59, y: 67.5 }
    }
};
