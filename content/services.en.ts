import type { ServiceContent } from "@/content/types";

/**
 * English content for the service pages.
 * PENDIENTE: confirmar con PaoClean lo que incluye cada servicio antes de publicar.
 */
export const servicesEn: ServiceContent[] = [
  {
    id: "residencial",
    slug: "house-cleaning",
    name: "House cleaning",
    card: {
      tag: "Home",
      body: "A spotless house or apartment, weekly, biweekly or whenever you need it.",
      image: "residencial-despues",
    },
    meta: {
      title: "House Cleaning in Miami | PaoClean",
      description:
        "House and apartment cleaning in Miami and Miami-Dade: kitchen, bathrooms, bedrooms and floors. Recurring or one-time service. Free quote.",
    },
    hero: {
      titleBefore: "",
      highlight: "House and Apartment",
      titleAfter: "Cleaning in Miami",
      intro:
        "Come home to a clean, tidy space. We clean room by room using the same checklist, so every visit is just as good.",
      chips: ["Free quote", "Room-by-room checklist", "English and Spanish"],
      image: "pao-marmol",
      imageAlt: "PaoClean team member cleaning marble columns in a home",
    },
    trustHighlight: "Weekly, biweekly or monthly service",
    gallery: {
      title: "Homes we leave spotless",
      intro: "Kitchens, bathrooms and bedrooms cleaned by our team in Miami.",
      photos: [
        { image: "residencial-despues", alt: "Clean bathroom with a glass shower and sink" },
        { image: "general-despues", alt: "Kitchen with a clean countertop and stove" },
        { image: "pao-marmol", alt: "Marble columns in a home during cleaning" },
        { image: "mudanza-despues", alt: "Bedroom with a clean wood floor" },
        { image: "terrazas-despues", alt: "Outdoor patio with a clean floor and plants" },
        { image: "postconstruccion-despues", alt: "Living room with shiny marble floors" },
      ],
    },
    blocks: [
      {
        id: "before-after",
        type: "compare",
        eyebrow: "See the difference",
        title: "Before and after",
        intro: "Drag the handle to see the change in bathrooms and kitchens.",
        hint: "Slide to compare",
        items: [
          {
            pair: "residencial",
            label: "Bathroom",
            altBefore: "Dirty bathroom before cleaning",
            altAfter: "The same bathroom, clean and shiny",
          },
          {
            pair: "general",
            label: "Kitchen",
            altBefore: "Kitchen with grease and stains before cleaning",
            altAfter: "The same kitchen, clean",
          },
        ],
        cta: "Clean my home",
      },
      {
        id: "also",
        type: "compareAndPhoto",
        eyebrow: "We also clean",
        title: "Patios and terraces",
        intro: "We get your outdoor areas ready to enjoy: floors, patio furniture and railings.",
        compare: {
          pair: "terrazas",
          label: "Terrace",
          altBefore: "Terrace with leaves and dust before cleaning",
          altAfter: "The same terrace, clean",
        },
        photo: { image: "terrazas-despues", alt: "Clean outdoor patio with plants" },
        photoBadge: "Result",
        hint: "Slide to see the before and after",
        cta: "Clean my patio",
      },
    ],
    why: {
      title: "A clean home, made simple",
      intro: "You coordinate everything with the owner and know exactly what each visit includes.",
      items: [
        {
          icon: "list",
          title: "Room-by-room checklist",
          body: "We follow the same list on every visit so nothing gets missed.",
        },
        {
          icon: "calendar",
          title: "You choose how often",
          body: "One time, weekly, every two weeks or monthly.",
        },
        { icon: "tag", title: "Clear pricing", body: "We confirm price, date and time before you agree." },
        {
          icon: "chat",
          title: "English and Spanish",
          body: "We help you on WhatsApp or by phone in your language.",
        },
      ],
    },
    detail: {
      title: "Everything we clean in your home",
      intro: "A complete clean of every area, with care for the details people notice most.",
      items: [
        {
          title: "Kitchen",
          body: "countertops, stove exterior, sink, cabinet fronts and appliance exteriors.",
        },
        { title: "Bathrooms", body: "shower, tub, toilet, sink, mirrors and fixtures." },
        {
          title: "Bedrooms and living areas",
          body: "dusting furniture and surfaces, making beds and tidying.",
        },
        { title: "Floors", body: "vacuumed and mopped throughout." },
      ],
      image: "residencial-despues",
      imageAlt: "Home bathroom after cleaning",
    },
    process: [
      {
        title: "Call or message us",
        body: "Tell us the size of your home and how often you'd like a clean.",
      },
      {
        title: "We schedule your visit",
        body: "We pick a day and time that works for you and confirm the price.",
      },
      { title: "A spotless home", body: "We arrive on time and leave every room as agreed." },
    ],
    faq: [
      {
        q: "How long does a house cleaning take?",
        a: "It depends on the size and condition of the home. We'll confirm it with your quote.",
      },
      {
        q: "Do you bring supplies and equipment?",
        a: "Yes, we bring what's needed. If you'd like specific products, let us know when booking.",
      },
      { q: "Do I need to be home?", a: "No. We'll arrange access with you when booking." },
      { q: "Is it okay if I have pets?", a: "Of course. Just let us know when booking." },
      {
        q: "How much does it cost?",
        a: "It depends on the size of the home and how often. We give you a clear, free quote before booking.",
      },
    ],
    finalCta: {
      title: "Come home to a clean house today",
      body: "Message us and we'll reply the same day with price and availability.",
    },
    whatsappMessage: "Hi, I'd like a quote for house cleaning.",
  },
  {
    id: "profunda",
    slug: "deep-cleaning",
    name: "Deep cleaning",
    card: {
      tag: "Deep clean",
      body: "A top-to-bottom clean for a fresh start or before an important visit.",
      image: "general-despues",
    },
    meta: {
      title: "Deep Cleaning in Miami | PaoClean",
      description:
        "Deep cleaning for homes and apartments in Miami: kitchen grease, bathroom buildup, baseboards, doors and corners. Free quote.",
    },
    hero: {
      titleBefore: "",
      highlight: "Deep Cleaning",
      titleAfter: "in Miami",
      intro:
        "For when a regular clean isn't enough: we remove grease, buildup and dust from the places almost nobody cleans.",
      chips: ["Free quote", "Top to bottom", "English and Spanish"],
      image: "general-despues",
      imageAlt: "Kitchen with a clean countertop, stove and backsplash",
    },
    trustHighlight: "Grease, buildup and dust removed",
    gallery: {
      title: "Deep cleans in Miami",
      intro: "Kitchens, bathrooms and spaces that got their shine back.",
      photos: [
        { image: "general-despues", alt: "Clean kitchen with a grease-free stove" },
        { image: "residencial-despues", alt: "Clean bathroom with a glass shower" },
        { image: "postconstruccion-despues", alt: "Living room with shiny floors" },
        { image: "mudanza-despues", alt: "Clean bedroom with wood floors" },
        { image: "terrazas-despues", alt: "Clean patio with plants" },
        { image: "pao-marmol", alt: "Cleaning marble columns" },
      ],
    },
    blocks: [
      {
        id: "before-after",
        type: "compare",
        eyebrow: "See the difference",
        title: "Before and after",
        intro: "Drag the handle to see the transformation.",
        hint: "Slide to compare",
        items: [
          {
            pair: "general",
            label: "Kitchen",
            altBefore: "Kitchen with built-up grease",
            altAfter: "The same kitchen after a deep clean",
          },
        ],
      },
      {
        id: "bathrooms",
        type: "compareAndPhoto",
        eyebrow: "We also clean",
        title: "Bathrooms with buildup and stains",
        intro: "We remove buildup from showers, fixtures and tile so your bathroom looks new again.",
        compare: {
          pair: "residencial",
          label: "Bathroom",
          altBefore: "Bathroom with buildup and stains",
          altAfter: "The same bathroom, clean",
        },
        photo: { image: "residencial-despues", alt: "Clean bathroom after a deep clean" },
        photoBadge: "Result",
        hint: "Slide to see the before and after",
        cta: "Clean my bathroom",
      },
    ],
    why: {
      title: "Every corner, like new",
      intro: "A deep clean goes beyond what you see at first glance.",
      items: [
        {
          icon: "sparkle",
          title: "Grease and buildup",
          body: "We tackle stuck-on grime in kitchens and bathrooms.",
        },
        {
          icon: "list",
          title: "Forgotten spots",
          body: "Baseboards, doors, switches, window frames and behind furniture.",
        },
        { icon: "tag", title: "Clear pricing", body: "We confirm price, date and time before we start." },
        {
          icon: "handshake",
          title: "Direct contact",
          body: "You coordinate everything with the owner, no middlemen.",
        },
      ],
    },
    detail: {
      title: "What a deep clean includes",
      intro: "Everything in a regular clean, plus the details that build up over time.",
      items: [
        {
          title: "Kitchen, thoroughly",
          body: "grease on the stove and hood, backsplash, cabinet fronts and sink.",
        },
        { title: "Bathrooms without buildup", body: "shower, glass, fixtures, tile and grout." },
        { title: "Details", body: "baseboards, doors, switches, frames and interior windows." },
        { title: "Floors", body: "vacuumed, mopped and corners cleaned." },
      ],
      image: "general-despues",
      imageAlt: "Kitchen after a deep clean",
    },
    process: [
      { title: "Call or message us", body: "Tell us which areas need the most attention." },
      { title: "We schedule your visit", body: "We confirm price, date and time before we start." },
      { title: "Like new again", body: "We clean top to bottom and walk through the result with you." },
    ],
    faq: [
      {
        q: "How is it different from a regular clean?",
        a: "A deep clean covers grease, buildup and areas that aren't cleaned every week, like baseboards, doors and frames.",
      },
      {
        q: "How often should I get one?",
        a: "Many people book one when starting a recurring service or a couple of times a year.",
      },
      {
        q: "How long does it take?",
        a: "It depends on the size and condition of the space. We'll confirm it with your quote.",
      },
      {
        q: "Do you bring supplies?",
        a: "Yes, we bring what's needed. If you'd like specific products, let us know when booking.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on the size of the space. We give you a clear, free quote before booking.",
      },
    ],
    finalCta: {
      title: "Your home can look like new today",
      body: "Message us and we'll reply the same day with price and availability.",
    },
    whatsappMessage: "Hi, I'd like a quote for a deep clean.",
  },
  {
    id: "oficinas",
    slug: "office-cleaning",
    name: "Offices and stores",
    card: {
      tag: "Business",
      body: "Clean workspaces on a schedule that doesn't interrupt your business.",
      image: "oficinas-despues",
    },
    meta: {
      title: "Office and Retail Cleaning in Miami | PaoClean",
      description:
        "Cleaning for offices, retail stores and common areas in Miami and Miami-Dade, scheduled around your business. Free quote.",
    },
    hero: {
      titleBefore: "",
      highlight: "Office and Retail",
      titleAfter: "Cleaning in Miami",
      intro:
        "A clean space makes a good impression on your customers and your team. We work when it least affects your business.",
      chips: ["Free quote", "Flexible hours", "Recurring service"],
      image: "equipo-lobby",
      imageAlt: "Two PaoClean team members cleaning a building lobby",
    },
    trustHighlight: "Hours that don't slow your business",
    gallery: {
      title: "Workspaces we take care of",
      intro: "Offices, stores and common areas cleaned by our team.",
      photos: [
        { image: "oficinas-despues", alt: "Open-plan office with clean desks" },
        { image: "equipo-lobby", alt: "PaoClean team cleaning a lobby" },
        { image: "locales-despues", alt: "Retail space with a shiny floor" },
        { image: "postconstruccion-despues", alt: "Large space with a clean marble floor" },
        { image: "general-despues", alt: "Clean kitchenette" },
        { image: "residencial-despues", alt: "Clean restroom" },
      ],
    },
    blocks: [
      {
        id: "offices",
        type: "compare",
        eyebrow: "In offices and stores",
        title: "Offices that make a good impression",
        intro:
          "Desks, common areas, restrooms and kitchenettes ready for your team. Drag the handle to see the change.",
        hint: "Slide each image to see the transformation",
        items: [
          {
            pair: "oficinas",
            label: "Office",
            altBefore: "Messy office before cleaning",
            altAfter: "The same office, clean and tidy",
          },
          {
            pair: "locales",
            label: "Retail space",
            altBefore: "Retail space with dust and debris",
            altAfter: "The same space with a clean floor",
          },
        ],
        cta: "Clean my office",
      },
    ],
    why: {
      title: "Your business, always presentable",
      intro: "Consistent cleaning that your team and customers notice.",
      items: [
        { icon: "clock", title: "Flexible hours", body: "Before opening, after closing or on weekends." },
        {
          icon: "calendar",
          title: "Recurring service",
          body: "Daily, weekly or monthly, based on your operation.",
        },
        { icon: "tag", title: "Clear pricing", body: "A written quote before we start." },
        {
          icon: "handshake",
          title: "One point of contact",
          body: "You coordinate everything directly with the owner.",
        },
      ],
    },
    detail: {
      title: "Everything we clean in your business",
      intro: "We adapt to your type of space and your schedule.",
      items: [
        { title: "Offices", body: "desks, meeting rooms, reception and floors." },
        { title: "Common areas", body: "restrooms, kitchenettes, hallways and elevators." },
        { title: "Retail stores", body: "display windows, sales floor and stockroom." },
        { title: "Glass", body: "interior glass doors and windows." },
      ],
      image: "oficinas-despues",
      imageAlt: "Office with clean desks",
    },
    process: [
      { title: "Call or message us", body: "Tell us the type of space and the schedule that works for you." },
      { title: "Walkthrough and quote", body: "We review the space and give you a clear price." },
      { title: "A spotless space", body: "We clean at the agreed time without interrupting your business." },
    ],
    faq: [
      {
        q: "Can you clean outside business hours?",
        a: "Yes. We schedule around your team and your customers.",
      },
      {
        q: "Do you offer recurring service?",
        a: "Yes, daily, weekly or monthly, depending on what your business needs.",
      },
      { q: "Do you bring supplies and equipment?", a: "Yes, we bring what's needed." },
      {
        q: "Do you clean retail stores?",
        a: "Yes: stores, medical offices, offices and building common areas.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on the size of the space and frequency. We give you a clear, free quote.",
      },
    ],
    finalCta: {
      title: "Your business can shine starting tomorrow",
      body: "Message us and we'll send you a quote the same day.",
    },
    whatsappMessage: "Hi, I'd like a quote for cleaning my office or store.",
  },
  {
    id: "postconstruccion",
    slug: "post-construction-cleaning",
    name: "Post-construction",
    card: {
      tag: "Construction",
      body: "We clear dust and leftover materials so the space is ready to use.",
      image: "postconstruccion-despues",
    },
    meta: {
      title: "Post-Construction Cleaning in Miami | PaoClean",
      description:
        "Cleaning after construction or remodeling in Miami: fine dust, leftover materials, glass and floors. For homes, apartments and stores. Free quote.",
    },
    hero: {
      titleBefore: "",
      highlight: "Post-Construction",
      titleAfter: "Cleaning in Miami",
      intro:
        "The build is done, the cleanup isn't. We remove fine dust and leftover materials so you can enjoy your new space.",
      chips: ["Free quote", "Homes and stores", "Move-in ready"],
      image: "postconstruccion-despues",
      imageAlt: "Large living room with shiny marble floors after construction",
    },
    trustHighlight: "Fine dust and construction debris",
    gallery: {
      title: "Spaces ready to move in",
      intro: "Homes, apartments and stores after a remodel.",
      photos: [
        { image: "postconstruccion-despues", alt: "Living room with clean marble floors after construction" },
        { image: "locales-despues", alt: "Retail space ready to open" },
        { image: "mudanza-despues", alt: "New bedroom with a clean wood floor" },
        { image: "oficinas-despues", alt: "Remodeled, clean office" },
        { image: "residencial-despues", alt: "New, clean bathroom" },
        { image: "general-despues", alt: "New, clean kitchen" },
      ],
    },
    blocks: [
      {
        id: "before-after",
        type: "compare",
        eyebrow: "See the difference",
        title: "Before and after",
        intro: "Drag the handle to see how a space looks after construction.",
        hint: "Slide each image to see the transformation",
        items: [
          {
            pair: "postconstruccion",
            label: "Remodeled home",
            altBefore: "Living room with dust and construction materials",
            altAfter: "The same living room, clean and ready",
          },
          {
            pair: "locales",
            label: "Retail space",
            altBefore: "Retail space with debris after construction",
            altAfter: "The same space with a shiny floor",
          },
        ],
        cta: "Clean up after my build",
      },
    ],
    why: {
      title: "From construction dust to move-in ready",
      intro: "A clean designed for what a remodel leaves behind.",
      items: [
        { icon: "sparkle", title: "Fine dust", body: "We remove it from floors, walls, frames and shelves." },
        {
          icon: "list",
          title: "Leftover materials",
          body: "Paint, adhesive and stickers on glass and surfaces.",
        },
        { icon: "clock", title: "On time for handover", body: "We schedule around the end of the project." },
        {
          icon: "handshake",
          title: "For owners and contractors",
          body: "We work with homeowners and builders.",
        },
      ],
    },
    detail: {
      title: "A complete clean after construction",
      intro: "We leave the space ready to move in, open or hand over.",
      items: [
        { title: "Floors", body: "dust and material residue removed, then mopped." },
        { title: "Glass and frames", body: "stickers, paint and adhesive." },
        { title: "Kitchen and bathrooms", body: "new cabinets, fixtures and accessories dust-free." },
        { title: "Details", body: "baseboards, outlets, switches and doors." },
      ],
      image: "postconstruccion-despues",
      imageAlt: "Clean space after a remodel",
    },
    process: [
      { title: "Call or message us", body: "Tell us the size of the space and when construction ends." },
      { title: "We schedule the clean", body: "We coordinate the date with the end of the work." },
      { title: "Move-in ready", body: "We hand over the space clean, ready to move in or open." },
    ],
    faq: [
      {
        q: "When should I schedule the cleaning?",
        a: "Once construction work is finished. We can coordinate the date with your contractor.",
      },
      {
        q: "Do you haul away large debris?",
        a: "We clean dust and material residue. Large debris removal is usually handled by the contractor.",
      },
      { q: "Do you work with builders?", a: "Yes, with owners, property managers and contractors." },
      {
        q: "How long does it take?",
        a: "It depends on the size and how the space was left. We'll confirm it with your quote.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on the size of the space. We give you a clear, free quote.",
      },
    ],
    finalCta: {
      title: "Enjoy your new space without construction dust",
      body: "Message us and we'll schedule the clean around the end of your project.",
    },
    whatsappMessage: "Hi, I'd like a quote for post-construction cleaning.",
  },
  {
    id: "mudanza",
    slug: "move-out-cleaning",
    name: "Move-in / move-out",
    card: {
      tag: "Moving",
      body: "Hand over or move into a completely clean property, nothing left undone.",
      image: "mudanza-despues",
    },
    meta: {
      title: "Move-In and Move-Out Cleaning in Miami | PaoClean",
      description:
        "Move-in and move-out cleaning for homes and apartments in Miami: inside cabinets, bathrooms, kitchen and floors. Free quote.",
    },
    hero: {
      titleBefore: "",
      highlight: "Move-In and Move-Out",
      titleAfter: "Cleaning in Miami",
      intro:
        "Hand over your apartment with nothing left to do, or arrive at a clean new home. We clean inside cabinets, bathrooms, the kitchen and floors.",
      chips: ["Free quote", "Moving in or out", "Inside cabinets"],
      image: "mudanza-despues",
      imageAlt: "Empty bedroom with wood floors, ready to hand over",
    },
    trustHighlight: "Ready to hand over or move in",
    gallery: {
      title: "Properties ready to hand over",
      intro: "Empty homes and apartments we left spotless.",
      photos: [
        { image: "mudanza-despues", alt: "Clean, empty bedroom" },
        { image: "general-despues", alt: "Clean, empty kitchen" },
        { image: "residencial-despues", alt: "Clean bathroom ready for handover" },
        { image: "postconstruccion-despues", alt: "Empty living room with a shiny floor" },
        { image: "terrazas-despues", alt: "Clean patio" },
        { image: "pao-marmol", alt: "Cleaning columns in a home" },
      ],
    },
    blocks: [
      {
        id: "before-after",
        type: "compare",
        eyebrow: "See the difference",
        title: "Before and after",
        intro: "Drag the handle to see a property ready to hand over.",
        hint: "Slide to compare",
        items: [
          {
            pair: "mudanza",
            label: "Bedroom",
            altBefore: "Bedroom with moving boxes and trash",
            altAfter: "The same bedroom, empty and clean",
          },
        ],
      },
      {
        id: "kitchen",
        type: "compareAndPhoto",
        eyebrow: "We also clean",
        title: "Kitchens ready for handover",
        intro: "Inside cabinets, stove, hood and sink, so you get your deposit back without issues.",
        compare: {
          pair: "general",
          label: "Kitchen",
          altBefore: "Dirty kitchen when moving out",
          altAfter: "The same kitchen, clean for handover",
        },
        photo: { image: "general-despues", alt: "Clean kitchen ready for handover" },
        photoBadge: "Result",
        hint: "Slide to see the before and after",
        cta: "Clean for my move",
      },
    ],
    why: {
      title: "Hand over or move in, nothing left undone",
      intro: "A complete clean of the empty property, inside and out.",
      items: [
        {
          icon: "list",
          title: "Inside cabinets",
          body: "Drawers, closets and pantries emptied and cleaned.",
        },
        {
          icon: "sparkle",
          title: "Kitchen and bathrooms",
          body: "Grease, buildup and stains gone before handover.",
        },
        { icon: "calendar", title: "On your date", body: "We schedule around your move or handover day." },
        { icon: "tag", title: "Clear pricing", body: "We confirm the price before we start." },
      ],
    },
    detail: {
      title: "Everything we clean when you move",
      intro: "Ideal for handing over a rental or arriving at a new home.",
      items: [
        { title: "Cabinets and closets", body: "inside and out." },
        { title: "Kitchen", body: "stove, hood, sink and appliance exteriors." },
        { title: "Bathrooms", body: "shower, tub, toilet, sink and mirrors." },
        { title: "Floors and baseboards", body: "vacuumed, mopped and detailed." },
      ],
      image: "mudanza-despues",
      imageAlt: "Empty, clean bedroom",
    },
    process: [
      { title: "Call or message us", body: "Tell us the size of the property and your moving date." },
      { title: "We schedule the clean", body: "We confirm price and time before your handover." },
      { title: "Ready to hand over", body: "We leave the empty property spotless." },
    ],
    faq: [
      {
        q: "Does the property need to be empty?",
        a: "It's best, so we can fully clean cabinets, closets and floors.",
      },
      { q: "Do you clean inside cabinets?", a: "Yes: cabinets, drawers and closets inside." },
      { q: "Can you clean on moving day?", a: "If we have availability, yes. We recommend booking ahead." },
      { q: "Do you bring supplies?", a: "Yes, we bring what's needed." },
      {
        q: "How much does it cost?",
        a: "It depends on the size of the property. We give you a clear, free quote.",
      },
    ],
    finalCta: {
      title: "Move without worrying about the cleaning",
      body: "Message us and we'll hold your moving date.",
    },
    whatsappMessage: "Hi, I'd like a quote for move-in/move-out cleaning.",
  },
];
