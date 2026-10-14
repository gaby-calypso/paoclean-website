import type { ServiceContent } from "@/content/types";

/**
 * Contenido de las páginas de servicio en español.
 * PENDIENTE: confirmar con PaoClean lo que incluye cada servicio, los tiempos
 * y las respuestas de preguntas frecuentes antes de publicar.
 */
export const servicesEs: ServiceContent[] = [
  {
    id: "residencial",
    slug: "limpieza-residencial",
    name: "Limpieza residencial",
    card: {
      tag: "Hogar",
      body: "Su casa o departamento impecable, semanal, quincenal o cuando lo necesite.",
      image: "residencial-despues",
    },
    meta: {
      title: "Limpieza residencial en Miami | PaoClean",
      description:
        "Limpieza de casas y departamentos en Miami y Miami-Dade: cocina, baños, recámaras y pisos. Servicio regular o por única vez. Cotización gratis.",
    },
    hero: {
      titleBefore: "Limpieza de",
      highlight: "Casas y Departamentos",
      titleAfter: "en Miami",
      intro:
        "Llegue a un hogar limpio y ordenado. Limpiamos cuarto por cuarto con una misma lista de tareas para que cada visita quede igual de bien.",
      chips: ["Cotización gratis", "Lista por cuarto", "Español e inglés"],
      image: "pao-marmol",
      imageAlt: "Integrante de PaoClean limpiando columnas de mármol en una casa",
    },
    trustHighlight: "Servicio semanal, quincenal o mensual",
    gallery: {
      title: "Hogares que dejamos impecables",
      intro: "Cocinas, baños y recámaras limpiados por nuestro equipo en Miami.",
      photos: [
        { image: "residencial-despues", alt: "Baño con regadera de vidrio y lavabo limpios" },
        { image: "general-despues", alt: "Cocina con cubierta y estufa limpias" },
        { image: "pao-marmol", alt: "Columnas de mármol de una casa durante la limpieza" },
        { image: "mudanza-despues", alt: "Recámara con piso de madera limpio" },
        { image: "terrazas-despues", alt: "Patio exterior con piso limpio y plantas" },
        { image: "postconstruccion-despues", alt: "Sala con piso de mármol brillante" },
      ],
    },
    blocks: [
      {
        id: "antes-despues",
        type: "compare",
        eyebrow: "La diferencia se ve",
        title: "Antes y después",
        intro: "Arrastre el control para ver el cambio en baños y cocinas.",
        hint: "Deslice para comparar",
        items: [
          {
            pair: "residencial",
            label: "Baño",
            altBefore: "Baño sucio antes de la limpieza",
            altAfter: "El mismo baño limpio y brillante",
          },
          {
            pair: "general",
            label: "Cocina",
            altBefore: "Cocina con grasa y manchas antes de la limpieza",
            altAfter: "La misma cocina limpia",
          },
        ],
        cta: "Limpiar mi casa",
      },
      {
        id: "tambien",
        type: "compareAndPhoto",
        eyebrow: "También limpiamos",
        title: "Patios y terrazas",
        intro: "Dejamos sus áreas exteriores listas para disfrutar: pisos, muebles de jardín y barandales.",
        compare: {
          pair: "terrazas",
          label: "Terraza",
          altBefore: "Terraza con hojas y polvo antes de la limpieza",
          altAfter: "La misma terraza limpia",
        },
        photo: { image: "terrazas-despues", alt: "Patio exterior limpio con plantas" },
        photoBadge: "Resultado",
        hint: "Deslice para ver el antes y después",
        cta: "Limpiar mi terraza",
      },
    ],
    why: {
      title: "Un hogar limpio, sin complicaciones",
      intro: "Usted coordina todo con el dueño y sabe exactamente qué incluye cada visita.",
      items: [
        {
          icon: "list",
          title: "Lista por cuarto",
          body: "Seguimos la misma lista en cada visita para no olvidar ningún detalle.",
        },
        {
          icon: "calendar",
          title: "Usted elige la frecuencia",
          body: "Una sola vez, cada semana, cada dos semanas o cada mes.",
        },
        {
          icon: "tag",
          title: "Precio claro",
          body: "Le confirmamos precio, fecha y hora antes de que acepte el servicio.",
        },
        {
          icon: "chat",
          title: "Español e inglés",
          body: "Le atendemos por WhatsApp o por teléfono en el idioma que prefiera.",
        },
      ],
    },
    detail: {
      title: "Todo lo que limpiamos en su casa",
      intro: "Una limpieza completa de cada área, con atención a los detalles que más se notan.",
      items: [
        {
          title: "Cocina",
          body: "cubiertas, estufa por fuera, fregadero, frentes de gabinetes y electrodomésticos por fuera.",
        },
        { title: "Baños", body: "regadera, tina, inodoro, lavabo, espejos y llaves." },
        { title: "Recámaras y salas", body: "polvo en muebles y superficies, tendido de camas y orden." },
        { title: "Pisos", body: "aspirado y trapeado en todas las áreas." },
      ],
      image: "residencial-despues",
      imageAlt: "Baño de una casa después de la limpieza",
    },
    process: [
      {
        title: "Nos escribe o llama",
        body: "Cuéntenos el tamaño de su casa y cada cuánto quiere la limpieza.",
      },
      {
        title: "Agendamos su visita",
        body: "Elegimos día y hora que le convengan y le confirmamos el precio.",
      },
      { title: "Casa impecable", body: "Llegamos puntuales y dejamos cada cuarto como lo acordamos." },
    ],
    faq: [
      {
        q: "¿Cuánto tarda una limpieza de casa?",
        a: "Depende del tamaño y del estado de la casa. Se lo confirmamos al cotizar.",
      },
      {
        q: "¿Llevan los productos y el equipo?",
        a: "Sí, llegamos con lo necesario. Si prefiere productos específicos, díganos al agendar.",
      },
      { q: "¿Tengo que estar en casa?", a: "No es necesario. Coordinamos el acceso con usted al agendar." },
      { q: "¿Tienen problema con las mascotas?", a: "No. Solo avísenos al agendar para tomarlo en cuenta." },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del tamaño de la casa y de la frecuencia. Le damos un precio claro y gratuito antes de agendar.",
      },
    ],
    finalCta: {
      title: "Llegue hoy a una casa limpia",
      body: "Escríbanos y le respondemos el mismo día con precio y disponibilidad.",
    },
    whatsappMessage: "Hola, me gustaría cotizar una limpieza de casa.",
  },
  {
    id: "profunda",
    slug: "limpieza-profunda",
    name: "Limpieza profunda",
    card: {
      tag: "A fondo",
      body: "Una limpieza de arriba abajo para empezar de cero o antes de una visita importante.",
      image: "general-despues",
    },
    meta: {
      title: "Limpieza profunda en Miami | PaoClean",
      description:
        "Limpieza profunda de casas y departamentos en Miami: grasa de cocina, sarro en baños, zoclos, puertas y rincones. Cotización gratis.",
    },
    hero: {
      titleBefore: "Limpieza",
      highlight: "Profunda",
      titleAfter: "en Miami",
      intro:
        "Para cuando la limpieza de siempre no alcanza: quitamos grasa, sarro y polvo acumulado en los lugares que casi nadie limpia.",
      chips: ["Cotización gratis", "De arriba abajo", "Español e inglés"],
      image: "general-despues",
      imageAlt: "Cocina con cubierta, estufa y azulejo limpios",
    },
    trustHighlight: "Grasa, sarro y polvo acumulado",
    gallery: {
      title: "Limpiezas a fondo en Miami",
      intro: "Cocinas, baños y espacios que recuperaron su brillo.",
      photos: [
        { image: "general-despues", alt: "Cocina limpia con estufa sin grasa" },
        { image: "residencial-despues", alt: "Baño limpio con regadera de vidrio" },
        { image: "postconstruccion-despues", alt: "Sala con piso brillante" },
        { image: "mudanza-despues", alt: "Recámara limpia con piso de madera" },
        { image: "terrazas-despues", alt: "Patio limpio con plantas" },
        { image: "pao-marmol", alt: "Limpieza de columnas de mármol" },
      ],
    },
    blocks: [
      {
        id: "antes-despues",
        type: "compare",
        eyebrow: "La diferencia se ve",
        title: "Antes y después",
        intro: "Arrastre el control para ver la transformación.",
        hint: "Deslice para comparar",
        items: [
          {
            pair: "general",
            label: "Cocina",
            altBefore: "Cocina con grasa acumulada",
            altAfter: "La misma cocina después de la limpieza profunda",
          },
        ],
      },
      {
        id: "banos",
        type: "compareAndPhoto",
        eyebrow: "También limpiamos",
        title: "Baños con sarro y manchas",
        intro: "Quitamos el sarro de regaderas, llaves y azulejos para que el baño se vea como nuevo.",
        compare: {
          pair: "residencial",
          label: "Baño",
          altBefore: "Baño con sarro y manchas",
          altAfter: "El mismo baño limpio",
        },
        photo: { image: "residencial-despues", alt: "Baño limpio después de la limpieza profunda" },
        photoBadge: "Resultado",
        hint: "Deslice para ver el antes y después",
        cta: "Limpiar mi baño",
      },
    ],
    why: {
      title: "Cada rincón, como nuevo",
      intro: "Una limpieza profunda va más allá de lo que se ve a simple vista.",
      items: [
        { icon: "sparkle", title: "Grasa y sarro", body: "Atacamos la suciedad pegada en cocina y baños." },
        {
          icon: "list",
          title: "Zonas olvidadas",
          body: "Zoclos, puertas, apagadores, marcos de ventanas y detrás de muebles.",
        },
        { icon: "tag", title: "Precio claro", body: "Le confirmamos precio, fecha y hora antes de empezar." },
        {
          icon: "handshake",
          title: "Trato directo",
          body: "Coordina todo con el dueño, sin intermediarios.",
        },
      ],
    },
    detail: {
      title: "Lo que incluye una limpieza profunda",
      intro: "Todo lo de una limpieza regular, más los detalles que se acumulan con el tiempo.",
      items: [
        {
          title: "Cocina a fondo",
          body: "grasa en estufa y campana, azulejo, gabinetes por fuera y fregadero.",
        },
        { title: "Baños sin sarro", body: "regadera, cancel, llaves, azulejo y juntas." },
        { title: "Detalles", body: "zoclos, puertas, apagadores, marcos y ventanas por dentro." },
        { title: "Pisos", body: "aspirado, trapeado y esquinas." },
      ],
      image: "general-despues",
      imageAlt: "Cocina después de una limpieza profunda",
    },
    process: [
      { title: "Nos escribe o llama", body: "Cuéntenos qué áreas necesitan más atención." },
      { title: "Agendamos su visita", body: "Le confirmamos precio, fecha y hora antes de empezar." },
      { title: "Todo como nuevo", body: "Limpiamos de arriba abajo y revisamos el resultado con usted." },
    ],
    faq: [
      {
        q: "¿Qué diferencia hay con una limpieza regular?",
        a: "La profunda incluye grasa, sarro y zonas que no se limpian cada semana, como zoclos, puertas y marcos.",
      },
      {
        q: "¿Cada cuánto conviene hacerla?",
        a: "Muchas personas la hacen al empezar un servicio regular o un par de veces al año.",
      },
      {
        q: "¿Cuánto tarda?",
        a: "Depende del tamaño y del estado del espacio. Se lo confirmamos al cotizar.",
      },
      {
        q: "¿Llevan los productos?",
        a: "Sí, llegamos con lo necesario. Si prefiere productos específicos, díganos al agendar.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del tamaño del espacio. Le damos un precio claro y gratuito antes de agendar.",
      },
    ],
    finalCta: {
      title: "Su casa puede verse como nueva hoy mismo",
      body: "Escríbanos y le respondemos el mismo día con precio y disponibilidad.",
    },
    whatsappMessage: "Hola, me gustaría cotizar una limpieza profunda.",
  },
  {
    id: "oficinas",
    slug: "limpieza-de-oficinas",
    name: "Oficinas y locales",
    card: {
      tag: "Negocios",
      body: "Espacios de trabajo limpios en horarios que no interrumpen su operación.",
      image: "oficinas-despues",
    },
    meta: {
      title: "Limpieza de oficinas y locales en Miami | PaoClean",
      description:
        "Limpieza de oficinas, locales comerciales y áreas comunes en Miami y Miami-Dade, en el horario que menos afecte a su negocio. Cotización gratis.",
    },
    hero: {
      titleBefore: "Limpieza de",
      highlight: "Oficinas y Locales",
      titleAfter: "en Miami",
      intro:
        "Un espacio limpio da buena impresión a sus clientes y a su equipo. Trabajamos en el horario que menos afecte su operación.",
      chips: ["Cotización gratis", "Horario flexible", "Servicio recurrente"],
      image: "equipo-lobby",
      imageAlt: "Dos integrantes de PaoClean limpiando el lobby de un edificio",
    },
    trustHighlight: "Horarios que no frenan su negocio",
    gallery: {
      title: "Espacios de trabajo que cuidamos",
      intro: "Oficinas, locales y áreas comunes limpiados por nuestro equipo.",
      photos: [
        { image: "oficinas-despues", alt: "Oficina abierta con escritorios limpios" },
        { image: "equipo-lobby", alt: "Equipo de PaoClean limpiando un lobby" },
        { image: "locales-despues", alt: "Local comercial con piso brillante" },
        { image: "postconstruccion-despues", alt: "Espacio amplio con piso de mármol limpio" },
        { image: "general-despues", alt: "Cocineta limpia" },
        { image: "residencial-despues", alt: "Baño limpio" },
      ],
    },
    blocks: [
      {
        id: "oficinas",
        type: "compare",
        eyebrow: "En oficinas y comercios",
        title: "Oficinas que dan buena impresión",
        intro:
          "Escritorios, áreas comunes, baños y cocinetas listos para su equipo. Arrastre el control para ver el cambio.",
        hint: "Deslice cada imagen para ver la transformación",
        items: [
          {
            pair: "oficinas",
            label: "Oficina",
            altBefore: "Oficina desordenada antes de la limpieza",
            altAfter: "La misma oficina limpia y ordenada",
          },
          {
            pair: "locales",
            label: "Local comercial",
            altBefore: "Local con polvo y escombro",
            altAfter: "El mismo local con el piso limpio",
          },
        ],
        cta: "Limpiar mi oficina",
      },
    ],
    why: {
      title: "Su negocio siempre presentable",
      intro: "Una limpieza constante que su equipo y sus clientes notan.",
      items: [
        {
          icon: "clock",
          title: "Horario flexible",
          body: "Antes de abrir, después de cerrar o en fin de semana.",
        },
        {
          icon: "calendar",
          title: "Servicio recurrente",
          body: "Diario, semanal o mensual, según su operación.",
        },
        { icon: "tag", title: "Precio claro", body: "Una cotización por escrito antes de empezar." },
        { icon: "handshake", title: "Un solo contacto", body: "Coordina todo directamente con el dueño." },
      ],
    },
    detail: {
      title: "Todo lo que limpiamos en su negocio",
      intro: "Nos adaptamos al tipo de espacio y a sus horarios.",
      items: [
        { title: "Oficinas", body: "escritorios, salas de juntas, recepción y pisos." },
        { title: "Áreas comunes", body: "baños, cocinetas, pasillos y elevadores." },
        { title: "Locales comerciales", body: "aparadores, piso de venta y bodega." },
        { title: "Vidrios", body: "puertas y ventanas de vidrio por dentro." },
      ],
      image: "oficinas-despues",
      imageAlt: "Oficina con escritorios limpios",
    },
    process: [
      { title: "Nos escribe o llama", body: "Cuéntenos el tipo de espacio y el horario que le conviene." },
      { title: "Visita y cotización", body: "Revisamos el espacio y le damos un precio claro." },
      { title: "Espacio impecable", body: "Limpiamos en el horario acordado, sin interrumpir su negocio." },
    ],
    faq: [
      {
        q: "¿Pueden limpiar fuera del horario de oficina?",
        a: "Sí. Coordinamos el horario con usted para no interrumpir a su equipo ni a sus clientes.",
      },
      {
        q: "¿Ofrecen servicio recurrente?",
        a: "Sí, diario, semanal o mensual, según lo que necesite su negocio.",
      },
      { q: "¿Llevan los productos y el equipo?", a: "Sí, llegamos con lo necesario." },
      {
        q: "¿Limpian locales comerciales?",
        a: "Sí, locales, consultorios, oficinas y áreas comunes de edificios.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende del tamaño del espacio y la frecuencia. Le damos un precio claro y gratuito.",
      },
    ],
    finalCta: {
      title: "Su negocio puede brillar desde mañana",
      body: "Escríbanos y le enviamos una cotización el mismo día.",
    },
    whatsappMessage: "Hola, me gustaría cotizar la limpieza de mi oficina o local.",
  },
  {
    id: "postconstruccion",
    slug: "limpieza-post-construccion",
    name: "Post-construcción",
    card: {
      tag: "Obra",
      body: "Retiramos polvo y restos de obra para que el espacio quede listo para usarse.",
      image: "postconstruccion-despues",
    },
    meta: {
      title: "Limpieza post-construcción en Miami | PaoClean",
      description:
        "Limpieza después de obra o remodelación en Miami: polvo fino, restos de material, vidrios y pisos. Para casas, departamentos y locales. Cotización gratis.",
    },
    hero: {
      titleBefore: "Limpieza",
      highlight: "Post-construcción",
      titleAfter: "en Miami",
      intro:
        "Terminó la obra, falta la limpieza. Quitamos el polvo fino y los restos de material para que pueda estrenar su espacio.",
      chips: ["Cotización gratis", "Casas y locales", "Listo para estrenar"],
      image: "postconstruccion-despues",
      imageAlt: "Sala amplia con piso de mármol brillante después de una obra",
    },
    trustHighlight: "Polvo fino y restos de obra",
    gallery: {
      title: "Espacios listos para estrenar",
      intro: "Casas, departamentos y locales después de una remodelación.",
      photos: [
        { image: "postconstruccion-despues", alt: "Sala con piso de mármol limpio después de la obra" },
        { image: "locales-despues", alt: "Local comercial listo para abrir" },
        { image: "mudanza-despues", alt: "Recámara nueva con piso de madera limpio" },
        { image: "oficinas-despues", alt: "Oficina remodelada y limpia" },
        { image: "residencial-despues", alt: "Baño nuevo limpio" },
        { image: "general-despues", alt: "Cocina nueva limpia" },
      ],
    },
    blocks: [
      {
        id: "antes-despues",
        type: "compare",
        eyebrow: "La diferencia se ve",
        title: "Antes y después",
        intro: "Arrastre el control para ver cómo queda un espacio después de la obra.",
        hint: "Deslice cada imagen para ver la transformación",
        items: [
          {
            pair: "postconstruccion",
            label: "Casa remodelada",
            altBefore: "Sala con polvo y material de obra",
            altAfter: "La misma sala limpia y lista",
          },
          {
            pair: "locales",
            label: "Local comercial",
            altBefore: "Local con escombro después de la obra",
            altAfter: "El mismo local con el piso brillante",
          },
        ],
        cta: "Limpiar después de mi obra",
      },
    ],
    why: {
      title: "Del polvo de obra a listo para estrenar",
      intro: "Una limpieza pensada para lo que deja una remodelación.",
      items: [
        { icon: "sparkle", title: "Polvo fino", body: "Lo retiramos de pisos, muros, marcos y repisas." },
        {
          icon: "list",
          title: "Restos de material",
          body: "Pintura, pegamento y etiquetas en vidrios y superficies.",
        },
        {
          icon: "clock",
          title: "A tiempo para su entrega",
          body: "Coordinamos la fecha con el fin de la obra.",
        },
        {
          icon: "handshake",
          title: "Para dueños y contratistas",
          body: "Trabajamos con particulares y constructores.",
        },
      ],
    },
    detail: {
      title: "Limpieza completa después de la obra",
      intro: "Dejamos el espacio listo para mudarse, abrir o entregar.",
      items: [
        { title: "Pisos", body: "retiro de polvo, restos de material y trapeado." },
        { title: "Vidrios y marcos", body: "etiquetas, pintura y pegamento." },
        { title: "Cocina y baños", body: "muebles, llaves y accesorios nuevos sin polvo." },
        { title: "Detalles", body: "zoclos, contactos, apagadores y puertas." },
      ],
      image: "postconstruccion-despues",
      imageAlt: "Espacio limpio después de una remodelación",
    },
    process: [
      { title: "Nos escribe o llama", body: "Cuéntenos el tamaño del espacio y cuándo termina la obra." },
      { title: "Agendamos la limpieza", body: "Coordinamos la fecha con el final de los trabajos." },
      { title: "Listo para estrenar", body: "Entregamos el espacio limpio para mudarse o abrir." },
    ],
    faq: [
      {
        q: "¿Cuándo conviene agendar la limpieza?",
        a: "Cuando terminen los trabajos de obra. Podemos coordinar la fecha con su contratista.",
      },
      {
        q: "¿Retiran el escombro grande?",
        a: "Limpiamos polvo y restos de material. El retiro de escombro grande lo coordina normalmente el contratista.",
      },
      { q: "¿Trabajan con constructoras?", a: "Sí, con dueños, administradores y contratistas." },
      { q: "¿Cuánto tarda?", a: "Depende del tamaño y de cómo quedó la obra. Se lo confirmamos al cotizar." },
      { q: "¿Cuánto cuesta?", a: "Depende del tamaño del espacio. Le damos un precio claro y gratuito." },
    ],
    finalCta: {
      title: "Estrene su espacio sin polvo de obra",
      body: "Escríbanos y coordinamos la limpieza con el final de su obra.",
    },
    whatsappMessage: "Hola, me gustaría cotizar una limpieza post-construcción.",
  },
  {
    id: "mudanza",
    slug: "limpieza-de-mudanza",
    name: "Mudanzas",
    card: {
      tag: "Mudanza",
      body: "Entregue o reciba una propiedad completamente limpia, sin pendientes.",
      image: "mudanza-despues",
    },
    meta: {
      title: "Limpieza de mudanza en Miami | PaoClean",
      description:
        "Limpieza para entrega o llegada a casas y departamentos en Miami: gabinetes por dentro, baños, cocina y pisos. Cotización gratis.",
    },
    hero: {
      titleBefore: "Limpieza de",
      highlight: "Mudanza",
      titleAfter: "en Miami",
      intro:
        "Entregue su departamento sin pendientes o llegue a su nueva casa limpia. Limpiamos gabinetes por dentro, baños, cocina y pisos.",
      chips: ["Cotización gratis", "Entrada o salida", "Gabinetes por dentro"],
      image: "mudanza-despues",
      imageAlt: "Recámara vacía con piso de madera, lista para entregarse",
    },
    trustHighlight: "Lista para entregar o estrenar",
    gallery: {
      title: "Propiedades listas para entregar",
      intro: "Casas y departamentos vacíos que dejamos impecables.",
      photos: [
        { image: "mudanza-despues", alt: "Recámara vacía limpia" },
        { image: "general-despues", alt: "Cocina vacía limpia" },
        { image: "residencial-despues", alt: "Baño limpio para entrega" },
        { image: "postconstruccion-despues", alt: "Sala vacía con piso brillante" },
        { image: "terrazas-despues", alt: "Patio limpio" },
        { image: "pao-marmol", alt: "Limpieza de columnas en una casa" },
      ],
    },
    blocks: [
      {
        id: "antes-despues",
        type: "compare",
        eyebrow: "La diferencia se ve",
        title: "Antes y después",
        intro: "Arrastre el control para ver cómo queda una propiedad lista para entregar.",
        hint: "Deslice para comparar",
        items: [
          {
            pair: "mudanza",
            label: "Recámara",
            altBefore: "Recámara con cajas y basura de mudanza",
            altAfter: "La misma recámara vacía y limpia",
          },
        ],
      },
      {
        id: "cocina",
        type: "compareAndPhoto",
        eyebrow: "También limpiamos",
        title: "Cocinas para entregar",
        intro:
          "Gabinetes por dentro, estufa, campana y fregadero, para que reciba su depósito sin problemas.",
        compare: {
          pair: "general",
          label: "Cocina",
          altBefore: "Cocina sucia al desocupar",
          altAfter: "La misma cocina limpia para entregar",
        },
        photo: { image: "general-despues", alt: "Cocina limpia lista para entregar" },
        photoBadge: "Resultado",
        hint: "Deslice para ver el antes y después",
        cta: "Limpiar para mi mudanza",
      },
    ],
    why: {
      title: "Entregue o estrene sin pendientes",
      intro: "Una limpieza completa de la propiedad vacía, de adentro hacia afuera.",
      items: [
        {
          icon: "list",
          title: "Gabinetes por dentro",
          body: "Cajones, closets y alacenas vacíos y limpios.",
        },
        { icon: "sparkle", title: "Cocina y baños", body: "Grasa, sarro y manchas fuera antes de entregar." },
        { icon: "calendar", title: "En su fecha", body: "Coordinamos con el día de su mudanza o entrega." },
        { icon: "tag", title: "Precio claro", body: "Le confirmamos el precio antes de empezar." },
      ],
    },
    detail: {
      title: "Todo lo que limpiamos al mudarse",
      intro: "Ideal para entregar un departamento rentado o llegar a una casa nueva.",
      items: [
        { title: "Gabinetes y closets", body: "por dentro y por fuera." },
        { title: "Cocina", body: "estufa, campana, fregadero y electrodomésticos por fuera." },
        { title: "Baños", body: "regadera, tina, inodoro, lavabo y espejos." },
        { title: "Pisos y zoclos", body: "aspirado, trapeado y detalles." },
      ],
      image: "mudanza-despues",
      imageAlt: "Recámara vacía y limpia",
    },
    process: [
      { title: "Nos escribe o llama", body: "Cuéntenos el tamaño de la propiedad y la fecha de mudanza." },
      { title: "Agendamos la limpieza", body: "Le confirmamos precio y hora antes de su entrega." },
      { title: "Lista para entregar", body: "Dejamos la propiedad vacía impecable." },
    ],
    faq: [
      {
        q: "¿La propiedad tiene que estar vacía?",
        a: "Es lo ideal para limpiar gabinetes, closets y pisos completos.",
      },
      { q: "¿Limpian el interior de los gabinetes?", a: "Sí, gabinetes, cajones y closets por dentro." },
      {
        q: "¿Pueden limpiar el mismo día de la mudanza?",
        a: "Si hay disponibilidad, sí. Le recomendamos agendar con anticipación.",
      },
      { q: "¿Llevan los productos?", a: "Sí, llegamos con lo necesario." },
      { q: "¿Cuánto cuesta?", a: "Depende del tamaño de la propiedad. Le damos un precio claro y gratuito." },
    ],
    finalCta: {
      title: "Múdese sin preocuparse por la limpieza",
      body: "Escríbanos y apartamos la fecha de su mudanza.",
    },
    whatsappMessage: "Hola, me gustaría cotizar una limpieza de mudanza.",
  },
];
