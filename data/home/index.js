const cardList = [
  {
    title: "Product Versatility",
    text: "With industry-leading bench-top filling machines, our RoboCAP can do it all. Our equipment is the solution to fill your pharmaceutical, cosmetic and nutraceutical products. From vape cartridges, bottles, lotions, balms, capsules, confectionary. You name it, we can fill it.",
    iconRoot: "/Home/Product_Versatility.svg",
  },
  {
    title: "After-Market-Support",
    text: "Upon purchasing our equipment, you will have access to a full range of live training demos with our experienced technicians. Whether you have questions right away or years down the line, our staff is always ready and willing to connect for support calls.",
    iconRoot: "/Home/After_Market.svg",
  },
  {
    title: "Guaranteed Precision",
    text: "With 20 years of engineering experience in the pharmaceutical industry, ATG understands the importance of accuracy and precision. Our equipment can fill with +/-2.5% accuracy, precision that is unmatched in the industry.",
    iconRoot: "/Home/Guaranteed_Precision.svg",
  },
];

const productionSection = {
  titleStart: "Invest In ",
  titleEnd: "300% Faster Production",
  textColor: "text-atgBlue",
  width: 900,
  height: 300,
  logoRoot: "ClientLogos/client_curaleaf.png",
  textStart:
    "Before our demand and actual production output were a little less than 5,000 a day.",
  text: "(Using ATG equipment) By the end of the summer, we're going to be regularly hitting",
  coloredText: " 15,000 - 20,000 ",
  textEnd: "depending on SKU",
  author: "Ryan Still",
  title: "Director of Operations - Oregon, ",
  titleItalic: "Curaleaf Holdings Inc",
};

const manualSection = {
  title: "The Semi-Automatic A1 Cart Filler",
  text: "Are you a non-industrial or small startup company? Get your production started right away with the A1 Cart Filler unit! Using the same parts and components as our semi-auto RoboCAP system, the A1 Cart Filler is an excellent starting point for businesses looking to automate their smaller batch products without compromising accuracy. When your production volumes increase, place your current A1 Cart Filler nozzle onto the RoboCAP to upgrade your production instantly.",
};

const automaticSection = {
  title: "The Automated RoboCAP System",
  text: "Whether you are a start-up or a well-established organization, the RoboCAP provides an automatic filling system that has the ability to meet all your current and future product filling needs with one robot. Providing the opportunity to scale as your production demands grow, the RoboCAP will give you a consistent and accurate dispense each time.",
};

const miniCandyDepositorAC10 = {
  title: "The AC10 Mini Candy Depositor",
  text: "Tired of messy, imprecise gummy production? Say hello to unparalleled precision and efficiency with our groundbreaking AC10. Bid farewell to inaccuracies as this innovative depositor crafts up to 100 pieces per minute, hitting an impressive 5000 to 6000 pieces per hour. Operable with just one operator, it's the ultimate solution for hassle-free candy, gelatin or pectin gummy, and chocolate production.",
  hideDescription: true
};

const preLoadedTrayHeader = {
  title: "Say Goodbye to Hand-Loading Trays",
  text: "Experience the convenience of pre-assembled, plug-and-play trays, eliminating labour-intensive setup procedures. Unpack and start producing without delay. We have forged strategic partnerships with industry-leading vape hardware manufacturers to deliver cost-effective and time-efficient solutions for your needs.",
  hideDescription: false
}

const automaticGrid = [
  {
    bg: "/Capsules.jpg",
    bgAct: "/CapsulesAct.jpg",
    title: "CAPSULES",
    icon: "/Capsules_White.svg",
    iconAct: "/Capsules_Blue.svg",
    context: "Capsules",
    baseUrl: "/Home/Top_Banner_Capsules.png",
  },
  {
    bg: "/Bottles.jpg",
    bgAct: "/BottlesAct.jpg",
    title: "BOTTLES",
    icon: "/Bottles_White.svg",
    iconAct: "/Bottles_Blue.svg",
    context: "Bottles",
    baseUrl: "/Home/Top_Banner_Bottles.png",
  },
  {
    bg: "/Candies.jpg",
    bgAct: "/CandiesAct.jpg",
    title: "GUMMIES",
    icon: "/Candies_White.svg",
    iconAct: "/Candies_Blue.svg",
    context: "Candies",
    baseUrl: "/Home/Top_Banner_Gummies.png",
  },
  {
    bg: "/Creams.jpg",
    bgAct: "/LotionsAct.jpg",
    title: "CREAMS",
    icon: "/Creams_White.svg",
    iconAct: "/Creams_Blue.svg",
    context: "Creams",
    baseUrl: "/Home/Top_Banner_Creams.png",
  },
  {
    bg: "/Balm.jpg",
    bgAct: "/BalmAct.jpg",
    title: "BALMS",
    icon: "/Balms_White.svg",
    iconAct: "/Balms_Blue.svg",
    context: "Balm",
    baseUrl: "/Home/Top_Banner_Balms.png",
  },
  {
    bg: "/Cartridge.jpg",
    bgAct: "/CartridgesAct.jpg",
    title: "CARTRIDGES",
    icon: "/Cartridges_White.svg",
    iconAct: "/Cartridges_Blue.svg",
    context: "Cartridge",
    baseUrl: "/Home/Top_Banner_Cartridges.png",
  },
];

const manualGrid = [
  {
    bg: "/Capsules.jpg",
    bgAct: "/CapsulesAct.jpg",
    title: "CAPSULES",
    icon: "/Capsules_White.svg",
    iconAct: "/Capsules_Blue.svg",
    context: "Capsules",
    baseUrl: "/Home/A1 Cart.png",
  },
  {
    bg: "/Bottles.jpg",
    bgAct: "/BottlesAct.jpg",
    title: "BOTTLES",
    icon: "/Bottles_White.svg",
    iconAct: "/Bottles_Blue.svg",
    context: "Bottles",
    baseUrl: "/Home/ML-1_Bottles.jpg",
  },
  {
    bg: "/Cartridge.jpg",
    bgAct: "/CartridgesAct.jpg",
    title: "CARTRIDGES",
    icon: "/Cartridges_White.svg",
    iconAct: "/Cartridges_Blue.svg",
    context: "Cartridge",
    baseUrl: "/Home/ML-1_Cart.jpg",
  },
];

// const bannerCarousel = [
//   {
//     iconRoot: '/Home/Top_Banner_Capsules.png',
//     width: 700,
//     height: 700,
//   },
//   {
//     iconRoot: '/Home/Top_Banner_Cartridges.png',
//     width: 700,
//     height: 700,
//   },
//   {
//     iconRoot: '/Home/Top_Banner_Creams.png',
//     width: 700,
//     height: 700,
//   },
//   {
//     iconRoot: '/Home/Top_Banner_Balms.png',
//     width: 700,
//     height: 700,
//   },
//   {
//     iconRoot: '/Home/Top_Banner_Gummies.png',
//     width: 700,
//     height: 700,
//   },
//   {
//     iconRoot: '/Home/Top_Banner_Bottles.png',
//     width: 700,
//     height: 700,
//   },
// ];

const bannerCarousel = [
  {
    iconRoot: "/Balms_White.svg",
    imageRoot: "/Home/Top_Banner_Balms.png",
    width: 100,
    height: 100,
  },
  {
    iconRoot: "/Bottles_White.svg",
    imageRoot: "/Home/Top_Banner_Bottles.png",
    width: 100,
    height: 100,
  },
  {
    iconRoot: "/Candies_White.svg",
    imageRoot: "/Home/Top_Banner_Gummies.png",
    width: 100,
    height: 100,
  },
  {
    iconRoot: "/Cartridges_White.svg",
    imageRoot: "/Home/Top_Banner_Cartridges.png",
    width: 100,
    height: 100,
  },
  {
    iconRoot: "/Creams_White.svg",
    imageRoot: "/Home/Top_Banner_Creams.png",
    width: 100,
    height: 100,
  },
  {
    iconRoot: "/Capsules_White.svg",
    imageRoot: "/Home/Top_Banner_Capsules.png",
    width: 100,
    height: 100,
  },
];

const CTAwButton = {
  imageRoot: "/Home/Banner_Explore.jpg",
  title: "Explore a Full Line of Our Products",
  textStart:
    "Our list of products includes options for any kind of company, big or small, startup or well-established corporations.",
  textEnd:
    "Control your production the way you want it and get a return on your investment.",
  buttonText: "EXPLORE PRODUCTS",
  linkTo: "/products",
};

const miniCandyDepositorAC10Btns = [
  {
    linkTo: "/products/candy-depositor/ac10",
    startingShadeR: "white",
    startingShadeL: "white",
    startingTextShade: "text-atgBlue",
    hoverShadeR: "buttonStart",
    hoverShadeL: "atgBlue",
    hoverTextShade: "text-white",
    text: "LEARN MORE",
    border: "atgBlue",
    borderHover: "transparent",
  },
  {
    linkTo: "/contact",
    startingShadeR: "buttonStart",
    startingShadeL: "atgBlue",
    startingTextShade: "text-white",
    hoverShadeR: "white",
    hoverShadeL: "white",
    hoverTextShade: "text-atgBlue",
    text: "REQUEST QUOTE",
    border: "transparent",
    borderHover: "atgBlue",
  },
]

const automaticButtonPairs = [
  {
    linkTo: "/build",
    startingShadeR: "buttonStart",
    startingShadeL: "atgBlue",
    startingTextShade: "text-white",
    hoverShadeR: "white",
    hoverShadeL: "white",
    hoverTextShade: "text-atgBlue",
    text: "BUILD & PRICE",
    border: "transparent",
    borderHover: "atgBlue",
  },
  {
    linkTo: "/products/automatic/cartridge-filling-machine",
    startingShadeR: "white",
    startingShadeL: "white",
    startingTextShade: "text-atgBlue",
    hoverShadeR: "buttonStart",
    hoverShadeL: "atgBlue",
    hoverTextShade: "text-white",
    text: "LEARN MORE",
    border: "atgBlue",
    borderHover: "transparent",
  },
];

const manualButtonPairs = [
  {
    linkTo: "/contact",
    startingShadeR: "buttonStart",
    startingShadeL: "atgBlue",
    startingTextShade: "text-white",
    hoverShadeR: "white",
    hoverShadeL: "white",
    hoverTextShade: "text-atgBlue",
    text: "REQUEST QUOTE",
    border: "transparent",
    borderHover: "atgBlue",
  },
  {
    linkTo: "/products/semi-automatic/cartridges",
    startingShadeR: "white",
    startingShadeL: "white",
    startingTextShade: "text-atgBlue",
    hoverShadeR: "buttonStart",
    hoverShadeL: "atgBlue",
    hoverTextShade: "text-white",
    text: "LEARN MORE",
    border: "atgBlue",
    borderHover: "transparent",
  },
];

const DesktopHeaderButtonPairs = [
  {
    mobileVisibility: "hidden",
    desktopVisibility: "flex",
    linkTo: "/build",
    startingShadeR: "white",
    startingShadeL: "white",
    startingTextShade: "text-atgBlue",
    hoverShadeR: "buttonStart",
    hoverShadeL: "atgBlue",
    hoverTextShade: "text-white",
    text: "BUILD & PRICE",
    border: "atgBlue",
    borderHover: "transparent",
  },
  {
    linkTo: "/booking/demo",
    startingShade: "transparent",
    startingTextShade: "text-white",
    hoverShadeR: "buttonStart",
    hoverShadeL: "atgBlue",
    hoverTextShade: "text-white",
    text: "BOOK A DISCOVERY CALL",
    border: "white",
    borderHover: "transparent",
  },
];

const MobileHeaderButtonPairs = [
  {
    mobileVisibility: "flex",
    desktopVisibility: "hidden",
    linkTo: "/build",
    startingShadeR: "white",
    startingShadeL: "white",
    startingTextShade: "text-atgBlue",
    hoverShadeR: "buttonStart",
    hoverShadeL: "atgBlue",
    hoverTextShade: "text-white",
    text: "BUILD & PRICE",
    border: "transparent",
    borderHover: "atgBlue",
  },
  {
    linkTo: "/booking/demo",
    startingShade: "transparent",
    startingTextShade: "text-white",
    hoverShadeR: "buttonStart",
    hoverShadeL: "atgBlue",
    hoverTextShade: "text-white",
    text: "BOOK A DISCOVERY CALL",
    border: "white",
    borderHover: "transparent",
  },
];

const automaticGridCTA = {
  grid: automaticGrid,
  buttons: automaticButtonPairs,
  imageRoot: "/Home/Top_Banner_Balms.png",
  imageHeight: 450,
  imageWidth: 550,
};

const manualGridCTA = {
  grid: manualGrid,
  buttons: manualButtonPairs,
  imageRoot: "/Home/A1 Cart.png",
  customDiv: "flex",
  customDivOrientation: "reverse",
  imageWidth: 450,
  imageHeight: 450,
};

const miniCandyDepositorSpecs = {
  grid: [],
  buttons: miniCandyDepositorAC10Btns,
  imageRoot: "/Home/AC10-homepage.png",
  imageWidth: 450,
  imageHeight: 450,
  showDescription: true,
  descriptionText: "Tired of messy, imprecise gummy production? Say hello to unparalleled precision and efficiency with our groundbreaking AC10. Bid farewell to inaccuracies as this innovative depositor crafts up to 100 pieces per minute, hitting an impressive 5000 to 6000 pieces per hour. Operable with just one operator, it's the ultimate solution for hassle-free candy, gelatin or pectin gummy, and chocolate production.",
}

const preLoadedTraySpecGrid = [
  {
    spec: "2000",
    description: "Cartridge filled and capped per hour with 1 operator",
  },
  {
    spec: "1",
    description: "Only 1 operator"
  },
  {
    spec: "4x",
    description: "Increase filling output up to 4x more than traditional filling"
  },
]

const preLoadedTraySpecs = {
  grid: [],
  buttons: [],
  imageRoot: "/Home/PreLoadedTrays.png",
  // descriptionText: "Experience the convenience of pre-assembled, plug-and-play trays, eliminating labour-intensive setup procedures. Unpack and start producing without delay. We have forged strategic partnerships with industry-leading vape hardware manufacturers to deliver cost-effective and time-efficient solutions for your needs.",
  specGrid: preLoadedTraySpecGrid,
  imageWidth: 450,
  imageHeight: 450,
}

const seo = {
  title: "ATG Pharma | Pharmaceutical Filling & Packaging Equiptment",
  description:
    "ATG Pharma produces high-quality pharmaceutical filling & packaging automation equipment for cartridges, capsules, bottles, and balms.",
};

const clientTestimonials = [
  {
    imageRoot: "/Home/atg-testimonials/1.jpg"
  },
  {
    imageRoot: "/Home/atg-testimonials/2.jpg"
  },
  {
    imageRoot: "/Home/atg-testimonials/3.jpg"
  },
  {
    imageRoot: "/Home/atg-testimonials/5.jpg"
  },
  {
    imageRoot: "/Home/atg-testimonials/6.jpg"
  },
  {
    imageRoot: "/Home/atg-testimonials/7.jpg"
  }
];

const clientTestimonialData = [
  {
    companyName: "Boojum",
    testimonial: '“The modular and compact nature of the RL-300 RoboCAP has allowed us to scale the output of our production line for a variety of different end-use product types, while also maintaining a minimal footprint in our lab. Pound for pound it is the most capable, flexible and scalable application for filling we’ve come across in the cannabis industry. That, coupled with the dedicated and responsive support team that ATG has assembled means limited downtime in the lab and a long-term OEM partner we can rely on as our needs evolve.”',
    authorInfo: "Dashiel Kulander",
    designation: "CEO",
    imageRoot: "/Home/testimonial-logos/Boojum-Logo.png",
    logoWidth: 256,
    logoHeight: 102,
  },
  {
    companyName: "Active Humans",
    testimonial: '“We are significantly more efficient on the production line. The RoboCAP system feels like we’ve added an extra body in the lab - it’s virtually hands free and makes filling our bottles a breeze. We’re able to transition from one bottle size to another in a matter of seconds.”',
    authorInfo: "David Turk",
    designation: "CEO",
    imageRoot: "/Home/testimonial-logos/Active Humans Logo.png",
    logoWidth: 140,
    logoHeight: 140,
  },
  {
    companyName: "Carolina Botanicals",
    testimonial: '“Our labor costs are virtually gone with the RoboCAP machine. We have reduced from a couple operators to only now one operator. We also can acquire new contracts now with our companies, and so far, we have taken on 3-5 new contracts due to being able to do more volume with consistency. This has given me a whole new revenue stream for my business and was able to pay off the machine even faster. “',
    authorInfo: "Kurt Bawer",
    designation: "Director of Operations",
    imageRoot: "/Home/testimonial-logos/Carolina Botanical Logo.png",
    logoWidth: 256,
    logoHeight: 102,
  },
  {
    companyName: "Harbor House Collective",
    testimonial: '“Working with ATG has been a breeze from the start. Their team is not only responsive but also goes above and beyond in providing excellent support and onboarding. After introducing the automated cartridge filler, we were able to add four additional cart products to our lineup. This level of flexibility and scalability has had a profound impact on our business, opening new avenues for growth and innovation.”',
    authorInfo: "Gabriel Londono",
    designation: "CEO",
    logoWidth: 256,
    logoHeight: 230,
    imageRoot: "/Home/testimonial-logos/Harbor House Logo.png",
  },
  {
    companyName: "Naturae",
    testimonial: '“I would recommend ATG for any cannabis supply or manufacturing equipment needs due to the reliability in customer service, quality of the products they sell, and speed with which they can execute. Overall, it has made it substantially easier for us to consistently produce high quality products for our brands.”',
    authorInfo: "Nicolas Guarino",
    designation: "CEO",//Active Humans Logo
    imageRoot: "/Home/testimonial-logos/Naturae Logo.png",
    logoWidth: 256,
    logoHeight: 102,
  },
  {
    companyName: "Strawberry Fields",
    testimonial: '“The ATG RoboCAP is perfect for anyone looking to really take their production to the next level. Pair that with their great customer service team, who are able to assist via FaceTime at almost any time of day, and we couldn’t be happier with our purchase. We have already placed an order for a second machine.”',
    authorInfo: "Zach Bosier",
    designation: "Extraction Director",
    imageRoot: "/Home/testimonial-logos/Strawberry Fields Logo.png",
    logoWidth: 256,
    logoHeight: 102,
  },
  {
    companyName: "Happy Valley",
    testimonial: '“We were struggling with vape filling accuracy, consistency and fill-to-cap time. ATG is at the top of their game in volume metric filling equipment. We switched our vape filling robot and purchased that capper. Now we accurately fill and cap 2000 vape cartridges/hour with a single operator, and full confidence in accuracy.”',
    authorInfo: "Torrin Panico",
    designation: "Associate Director of Product Development",
    imageRoot: "/Home/testimonial-logos/Happy Valley Logo.png",
    logoWidth: 256,
    logoHeight: 102,
  },
  {
    companyName: "Adastra",
    testimonial: '“RoboCAP RL-300 machine, and MonoBlox Cartridge Press are very user-friendly equipment. ATG Pharma provided clear SOPs and manuals for the operation of the equipment. I am very happy with the ATG Pharma support team’s solution-oriented customer service and quick turnaround on troubleshooting requests. The support team is always available for video calls with Adastra Labs at short notice.”',
    authorInfo: "Priyanka Nalawade",
    designation: "Head of Lab, Chemia & Alternate QAP",
    imageRoot: "/Home/testimonial-logos/Adastra Logo.png",
    logoWidth: 200,
    logoHeight: 70,
  }
];

export default {
  cardList,
  automaticSection,
  manualSection,
  bannerCarousel,
  productionSection,
  manualGridCTA,
  miniCandyDepositorAC10,
  miniCandyDepositorSpecs,
  miniCandyDepositorAC10Btns,
  preLoadedTrayHeader,
  preLoadedTraySpecs,
  CTAwButton,
  automaticGridCTA,
  DesktopHeaderButtonPairs,
  MobileHeaderButtonPairs,
  seo,
  clientTestimonials,
  clientTestimonialData,
  preLoadedTraySpecGrid // to show this on {{domain}}/products/automatic/preloaded-tray
};
