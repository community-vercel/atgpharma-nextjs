// below information will be used many places of the app
const atgPartners = {
  subtitle: "We Work Hand-in-Hand with The World’s Top Brands",
  description: "We have forged strategic partnerships with industry-leading vape hardware manufacturers to deliver cost-effective and time-efficient solutions for your needs.",
  partnerLogos: [
    {
      imageRoot: "/products/automatic/PreLoadedTraysPartnerLogos/1.png"
    },
    {
      imageRoot: "/products/automatic/PreLoadedTraysPartnerLogos/2.png"
    },
    {
      imageRoot: "/products/automatic/PreLoadedTraysPartnerLogos/3.png"
    },
    {
      imageRoot: "/products/automatic/PreLoadedTraysPartnerLogos/4.png"
    },
    {
      imageRoot: "/products/automatic/PreLoadedTraysPartnerLogos/5.png"
    },
    {
      imageRoot: "/products/automatic/PreLoadedTraysPartnerLogos/6.png"
    },
    {
      imageRoot: "/products/automatic/PreLoadedTraysPartnerLogos/7.png"
    },
    {
      imageRoot: "/products/automatic/PreLoadedTraysPartnerLogos/8.png"
    },
  ]
}


const automaticProducts = [
  {
    width: "6/6",
    columns: "6",
    buttonTitle: "Cartridges",
    title: "RoboCAP-RL Cartridge Filling Machine",
    link: "cartridge-filling-machine",
    iconRoot: "/products/Cartridge_While.svg",
    activeRoot: "/products/Cartridge.svg",
    imageRoot: "/products/automatic/landing/Auto_Cartridges_Landing.jpg",
    subTitle: "Output Per Hour 1,200 - 2,000",
    descriptionP1:
      "Designed to optimize low-volume product filling (up to 5ml) for maximum efficiency, our RoboCAP RL-200 and RL-300 Volumetric (VF) utilizes  backpressure, heat and volumetric displacement to guarantee a +/- 2% filling accuracy with the same speed and consistency as our other RoboCAP systems",
    descriptionP2:
      "Clients can upgrade to 2 nozzles with our heating and mixing system and 4 nozzles without heating to meet every company’s production demands! ",
    productIndex: 0,
    basis: "*Based on 0.5g cartridge",
    packaging: true,
    carousel: [
      {
        imageRoot: "/products/automatic/landing/Auto_Cartridges_Landing.jpg",
      },
      {
        imageRoot: "/products/automatic/landing/RoboCAPRL-200.png",
      },
      {
        imageRoot: "/products/automatic/Cartridges/8000D_Gallery-Images.jpg",
      },
      {
        imageRoot:
          "/products/automatic/Cartridges/Cartridge_Tray_Gallery-Images.jpg",
      },
      {
        imageRoot:
          "/products/automatic/Cartridges/Cartridges_Image_Gallery-Images.jpg",
      },
      {
        imageRoot:
          "/products/automatic/Cartridges/Pressure-VesselArtboard-1.jpg",
      },
      {
        imageRoot: "/products/automatic/Cartridges/VF-NozzleArtboard-1.jpg",
      },
      {
        imageRoot:
          "/Home/PreLoadedTrays.png",
      },

    ],
    panels: [
      {
        title: "Dual Actuated VF+ Dispensing Nozzle",
        text: "The VF+ dispensing nozzle takes control and consistency to the next level. Offering the ultimate solution for handling a variety of thicker oils with ease and less heat required (live resin/rosin, liquid diamond, RSO, etc.).",
        textSpan:
          "Draw and dispense 50% faster per shot while achieving an incredible 2.5% precision rating. With an ability to fill up to 2ml of product, fill exactly what you need, with minimal waste.",
        imageRoot: "/products/automatic/Capsules/ATG_Nozzle_Image-Website.webp",
        featuredVideoUrl: 'https://www.youtube.com/watch?v=5HydOkuWjLM',
        featuredVideoTitle: "RoboCAP VF+ Nozzle in action",
        imageFirst: true,
        productImageStyles: {imageRendering: 'pixelated'}
      },
      {
        title: "Pressure Vessel",
        text: "The bottom-out pressure vessels are designed with back pressure to guarantee all product flows evenly and consistently through the tubing. This ensures every bit of product is not wasted and reduces the chance of air bubbles in your product.",
        textSpan:
          "The stainless-steel tanks range from 1L, 1g, 3g, 5g, and 10-gallon in size. All our pressure vessels are compatible with our mixers and heating systems for even heat distribution throughout the tank and cleaner filling process.",
        imageRoot: "/products/automatic/Balms/Pressure-VesselArtboard-1.jpg",
      },
      {
        title: "Pre-Loaded Trays",
        text: "Experience the convenience of pre-assembled, plug-and-play trays, eliminating labour-intensive setup procedures.",
        textSpan:
          "With preloaded foam trays, you can get up to a 4X increase filling and capping output with a potential savings of between $0.20 to $0.60 cents per unit in reduced labor and overhead costs. Preloaded trays come in default 50 blocks and can be fully customized for blocks of 100, 25, or any size your automation system requires. Fuly compatible with ATG filling machines.",
        imageRoot: "/Home/PreLoadedTrays.png",
        imageFirst: true,
        partnerInfo: atgPartners,
        showPartnerLogos: true
      },
      {
        title: "Cartridge Filling in Action",
        text: "Designed to optimize low-volume product filling, the VF nozzle dispenses product with a +/- 2% filling accuracy. Set the exact product volume you want and start filling!",
        url: "https://www.youtube.com/watch?v=_0TZqodEPPs",
      },
    ],
    actionButtonPair: [
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
        linkTo: "/booking/demo",
        startingShadeR: "white",
        startingShadeL: "white",
        startingTextShade: "text-atgBlue",
        hoverShadeR: "buttonStart",
        hoverShadeL: "atgBlue",
        hoverTextShade: "text-white",
        text: "BOOK A DISCOVERY CALL",
        border: "atgBlue",
        borderHover: "transparent",
      },
    ],
    showDownloadBrochureBtn: true,
    downloadBrochureBtn: {
      url: "/products/automatic/ATGRoboCAPRL-200Brochure.pdf",
      downloadBrochureLabel: "RL-200 Brochure"
    },
    hasSpecComparison: true,
    productsForComparison: ["RL-300", "RL-200"],
    specification: [
      {
        title: "Fill Rate (Per Hour)*",
        values: {
          "RL-300": "1,200 - 2,000",
          "RL-200": "1,200 - 2,000"
        },
      },
      {
        title: "Weight (kg)",
        values: {
          "RL-300": "30",
          "RL-200": "23"
        },
      },
      {
        title: "Height (mm)",
        values: {
          "RL-300": "590",
          "RL-200": "472"
        },
      },
      {
        title: "Depth (mm)",
        values: {
          "RL-300": "500",
          "RL-200": "584"
        },
      },
      {
        title: "Power Supply",
        values: {
          "RL-300": "AC 110 - 220V 300W",
          "RL-200": "AC 100 - 230V 200W"
        },
      },
      {
        title: "Dispense Accuracy",
        values: {
          "RL-300": "+/- 2.5%",
          "RL-200": "+/- 2.5%"
        },
      },
      {
        title: "Dispensable Volume Range",
        values: {
          "RL-300": "0.1ml- 5ml",
          "RL-200": "0.1ml- 5ml"
        },
      },
      {
        title: "Temperature Range",
        values: {
          "RL-300": "0C - 100C",
          "RL-200": "0C - 100C"
        },
      },
      {
        title: "Filling Capabilities",
        values: {
          "RL-300": "Cartridges, Capsules, Bottles, Tinctures, Balms, Creams",
          "RL-200": "Cartridges, Capsules"
        },
      },
    ],
  },
  {
    buttonTitle: "Gummies",
    title: "Gummy Filling Machine",
    link: "gummy-filling-machine",
    iconRoot: "/products/Candy_White.svg",
    activeRoot: "/products/Candy.svg",
    imageRoot: "/products/automatic/landing/Auto_Gummies_Landing.jpg",
    subTitle: "Output Per Hour 1,000 - 4,000",
    descriptionP1:
      "High viscosity, time-sensitive products like gummies need an accurate and efficient filling system to optimize production.",
    descriptionP2:
      "The RoboCAP RL 300 and Volumetric Filling Deluxe nozzle (VFD) can support your exact production needs.",
    productIndex: 1,
    basis: "*Based on 3g deposit",
    carousel: [
      {
        imageRoot: "/products/automatic/landing/Auto_Gummies_Landing.jpg",
      },
      {
        imageRoot:
          "/products/automatic/Gummies/Gummies_Product_Gallery-Images.jpg",
      },
      {
        imageRoot: "/products/automatic/Gummies/VFD-NozzleArtboard-1.jpg",
      },
      {
        imageRoot: "/products/automatic/Gummies/Heating-System-Artboard-1.jpg",
      },
      {
        imageRoot: "/products/automatic/Gummies/Gummy-TraysArtboard-1.jpg",
      },
    ],
    panels: [
      {
        title: "VFD Gummy Nozzle",
        text: "ATG’s new Volumetric Filler Deluxe (VFD) nozzle is our latest candy depositing solution. The VFD nozzle is capable of accurately dispensing 2 to 9 gram products with +/- 2.5% filling accuracy, at a rate of up to 4800 deposits an hour.",
        textSpan:
          "Fully compatible with your current or new RoboCAP model, the VFD Gummy filling nozzle can be upgraded to 4 nozzles, with or without heating.",
        imageRoot: "/products/automatic/Gummies/VFD-NozzleArtboard-1.jpg",
        imageFirst: true,
      },
      {
        title: "Custom Product Molds",
        text: "For gummy molds that are as unique as your company, we have partnered with some of the best mold makers in the industry, Dark City Molds, and Bold Maker, for custom mold options.",
        textSpan:
          "Regardless of what mold shape your company chooses to use, we custom cut the RoboCAP trays to ensure they fit seamlessly for a perfect fit and fill every time",
        imageRoot: "/products/automatic/Gummies/Gummy-TraysArtboard-1.jpg",
        isGummy: true,
      },
      {
        title: "Heated Pressure Vessel",
        text: "The bottom-out pressure vessels are designed with back pressure to guarantee all product flows evenly and consistently through the tubing. This ensures every bit of product is not wasted and reduces the chance of air bubbles in your product.",
        textSpan:
          "The stainless-steel tanks range from 1L, 1g, 3g, 5g, and 10-gallon in size. All our pressure vessels are compatible with our mixers and heating systems for even heat distribution throughout the tank and cleaner filling process.",
        imageRoot: "/products/automatic/Gummies/Heating-System-Artboard-1.jpg",
        imageFirst: true,
      },
    ],
    actionButtonPair: [
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
        linkTo: "/booking/demo",
        startingShadeR: "white",
        startingShadeL: "white",
        startingTextShade: "text-atgBlue",
        hoverShadeR: "buttonStart",
        hoverShadeL: "atgBlue",
        hoverTextShade: "text-white",
        text: "BOOK A DISCOVERY CALL",
        border: "atgBlue",
        borderHover: "transparent",
      },
    ],
    specification: [
      {
        title: "Fill Rate (Per Hour)*",
        value: "1,000 - 4,000",
      },
      {
        title: "Weight (kg)",
        value: "30",
      },
      {
        title: "Width (mm)",
        value: "485",
      },
      {
        title: "Height (mm)",
        value: "590",
      },
      {
        title: "Depth (mm)",
        value: "500",
      },
      {
        title: "Power Supply",
        value: "AC 110 - 220V 300W",
      },
      {
        title: "Dispense Accuracy",
        value: "+/- 2.5%",
      },
      {
        title: "Dispensable Volume Range",
        value: "2ml - 9ml",
      },
      {
        title: "Temperature Range",
        value: "0C - 100C",
      },
    ],
  },
  {
    buttonTitle: "Bottles",
    title: "Bottle Filling Machine",
    link: "bottle-filling-machine",
    imageRoot: "/products/automatic/landing/Auto_Bottles_Landing.jpg",
    iconRoot: "/products/Bottle_White.svg",
    activeRoot: "/products/Bottle.svg",
    subTitle: "Output Per Hour 1,200 - 3,000",
    descriptionP1:
      "Bottle filling has never been easier with the RoboCAP RL-300 Peristaltic System. This pressure-less filling system fills your product with minimal product contact, making product change over rapid and cleaning easy.",
    descriptionP2:
      "Upgrade to 4 nozzles and pump system for higher production outputs with the broadest range of fill volume potential (15ml - 9,999ml)",
    productIndex: 2,
    basis: "*Based on 30 ml Bottle",
    carousel: [
      {
        imageRoot: "/products/automatic/landing/Auto_Bottles_Landing.jpg",
      },
      {
        imageRoot: "/products/automatic/Bottles/Pump_Gallery-Images.jpg",
      },
      {
        imageRoot:
          "/products/automatic/Bottles/Bottles_Gallery_Gallery-Images.jpg",
      },
      {
        imageRoot: "/products/automatic/Bottles/Nozzle-OptionArtboard-1.jpg",
      },
      {
        imageRoot: "/products/automatic/Bottles/Bottles-TrayArtboard-1.jpg",
      },
    ],
    panels: [
      {
        title: "Peristaltic Pump",
        text: "This peristaltic system uses a positive displacement pump to squeeze the silicon product tubing and drawing product through the dispensing nozzles. ",
        textSpan:
          "The contactless pumping action allows for quick and easy cleaning – simply change the tubing and you’re done.",
        // imageRoot: '/products/automatic/Capsules/VF-NozzleArtboard-1.png',
        url: "https://youtu.be/_bvdHGzJeW8",
        imageFirst: true,
      },
      {
        title: "Nozzle Tip Options",
        text: "A choice of nozzle tips between 1mm and 2mm allows your production to have a completely customized solution that is ideal for your product.",
        textSpan:
          "Both nozzle tips are used with the dispensing needle valves, with the 1mm nozzle tip best used for capsule filling and the 2mm tip best suits gummy filling or larger volume fills such as cream containers, small bottles, etc.",
        imageRoot: "/products/automatic/Bottles/Nozzle-OptionArtboard-1.jpg",
      },
      {
        title: "Custom Trays",
        text: "Custom molded trays specific to your own product are created in-house for a perfect fit on the RoboCAP. ",
        textSpan:
          "Clients will receive three trays for each size or type of product container, eliminating operators downtime and ensuring production is the most efficient. ",
        imageRoot: "/products/automatic/Bottles/Bottles-TrayArtboard-1.jpg",
        imageFirst: true,
      },
    ],
    actionButtonPair: [
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
        linkTo: "/booking/demo",
        startingShadeR: "white",
        startingShadeL: "white",
        startingTextShade: "text-atgBlue",
        hoverShadeR: "buttonStart",
        hoverShadeL: "atgBlue",
        hoverTextShade: "text-white",
        text: "BOOK A DISCOVERY CALL",
        border: "atgBlue",
        borderHover: "transparent",
      },
    ],
    specification: [
      {
        title: "Fill Rate (Per Hour)*",
        value: "1,200 - 3,000",
      },
      {
        title: "Weight (kg)",
        value: "30",
      },
      {
        title: "Width (mm)",
        value: "485",
      },
      {
        title: "Height (mm)",
        value: "590",
      },
      {
        title: "Depth (mm)",
        value: "500",
      },
      {
        title: "Power Supply",
        value: "AC 110 - 220V 300W",
      },
      {
        title: "Dispense Accuracy",
        value: "+/- 2.5%",
      },
      {
        title: "Dispensable Volume Range",
        value: "10ml - 1L",
      },
      {
        title: "Temperature Range",
        value: "0C - 100C",
      },
    ],
    packagingCTA: "Labeling",
  },
  {
    buttonTitle: "Capsules",
    iconRoot: "/products/Capsule_White.svg",
    activeRoot: "/products/Capsules.svg",
    title: "Capsule Filling Machine",
    link: "capsule-filling-machine",
    imageRoot: "/products/automatic/landing/Auto_Capsules_Landing.jpg",
    subTitle: "Output Per Hour 3,000 - 8,000",
    descriptionP1:
      "Filling capsules has never been easier or more efficient thanks to the RoboCAP RL-300 Volumetric (VF) Nozzle. Designed to optimize low-volume product filling, the VF Nozzle dispenses product with a +/- 2% filling accuracy and the same speed and consistency as our other RoboCAP systems. ",
    descriptionP2:
      "Upgradeable to 2 nozzles with our heating and mixing system and 4 nozzles without heating, get started on optimizing your capsule production today! ",
    productIndex: 3,
    basis: "*Based size 00 Capsules",
    carousel: [
      {
        imageRoot: "/products/automatic/landing/Auto_Capsules_Landing.jpg",
      },
      {
        imageRoot: "/products/automatic/Capsules/Capsules_Gallery-Images.jpg",
      },
      {
        imageRoot: "/products/automatic/Capsules/VF-NozzleArtboard-1.jpg",
      },
      {
        imageRoot: "/products/automatic/Capsules/Pressure-VesselArtboard-1.jpg",
      },
      {
        imageRoot:
          "/products/automatic/Capsules/Pro-Filler-TraysArtboard-1.jpg",
      },
    ],
    panels: [
      {
        title: "Volumetric Filling Nozzle",
        text: "Designed to optimize low-volume product filling, the VF nozzle dispenses product with a +/- 2% filling accuracy. Set the exact product volume you want and start filling!",
        textSpan:
          "The product is pushed through the line from the pressure vessel and into the syringe through the VF dual valve where is it then dispensed out of the nozzle tip and into the cartridge or capsule.",
        imageRoot: "/products/automatic/Capsules/VF-NozzleArtboard-1.jpg",
        imageFirst: true,
      },
      {
        title: "Pressure Vessel",
        text: "The bottom-out pressure vessels are designed with back pressure to guarantee all product flows evenly and consistently through the tubing. This ensures every bit of product is not wasted and reduces the chance of air bubbles in your product.",
        textSpan:
          "The stainless-steel tanks range from 1L, 1g, 3g, 5g, and 10-gallon in size. All our pressure vessels are compatible with our mixers and heating systems for even heat distribution throughout the tank and cleaner filling process.",
        imageRoot: "/products/automatic/Capsules/Pressure-VesselArtboard-1.jpg",
      },
      {
        title: "Pro Filler Trays",
        text: "The Pro Filler Trays separates and holds individual capsules in place while filling.",
        textSpan:
          "With a three-step orientation process, the Pro-Filler can hold 300 capsules at a time with a 2.5% fill volume variance and easy to separate the capsule bodies from the tops for a smooth production process.",
        imageRoot:
          "/products/automatic/Capsules/Pro-Filler-TraysArtboard-1.jpg",
        imageFirst: true,
      },
    ],
    actionButtonPair: [
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
        linkTo: "/booking/demo",
        startingShadeR: "white",
        startingShadeL: "white",
        startingTextShade: "text-atgBlue",
        hoverShadeR: "buttonStart",
        hoverShadeL: "atgBlue",
        hoverTextShade: "text-white",
        text: "BOOK A DISCOVERY CALL",
        border: "atgBlue",
        borderHover: "transparent",
      },
    ],
    specification: [
      {
        title: "Fill Rate (Per Hour)*",
        value: "3,000 - 8,000",
      },
      {
        title: "Weight (kg)",
        value: "30",
      },
      {
        title: "Width (mm)",
        value: "485",
      },
      {
        title: "Height (mm)",
        value: "590",
      },
      {
        title: "Depth (mm)",
        value: "500",
      },
      {
        title: "Power Supply",
        value: "AC 110 - 220V 300W",
      },
      {
        title: "Dispense Accuracy",
        value: "+/- 2.5%",
      },
      {
        title: "Dispensable Volume Range",
        value: "0.1ml - 1.3ml",
      },
      {
        title: "Temperature Range",
        value: "0C - 100C",
      },
    ],
    packagingCTA: "Capsule Counting",
  },
  {
    buttonTitle: "Creams",
    iconRoot: "/products/Cream_White.svg",
    activeRoot: "/products/Cream.svg",
    title: "Creams & Topicals",
    link: "creams",
    imageRoot: "/products/automatic/landing/Auto_Creams_Landing.jpg",
    subTitle: "Output Per Hour 500 - 1,500",
    descriptionP1:
      "This filling solution combines our pneumatic and peristaltic components to create the best lotions filling system. Our lotion filling system uses both a pressurized product vessel and the peristaltic pumps to dispense even the thickest lotions and balms. Plus, an option to upgrade to a dual nozzle system for double the output time and increase any team's production.",
    productIndex: 4,
    basis: "*Based on 0.5ml deposit",
    carousel: [
      {
        imageRoot: "/products/automatic/landing/Auto_Creams_Landing.jpg",
      },
      {
        imageRoot: "/products/automatic/Creams/Pump-VesselArtboard-1.jpg",
      },
      {
        imageRoot: "/products/automatic/Creams/Controller_Gallery-Images.jpg",
      },
      {
        imageRoot: "/products/automatic/Creams/Cream_Nozzle_Gallery-Images.jpg",
      },
      {
        imageRoot:
          "/products/automatic/Creams/Cream_Product_Gallery-Images.jpg",
      },
      {
        imageRoot: "/products/automatic/Creams/Pump_Gallery-Images.jpg",
      },
      {
        imageRoot: "/products/automatic/Creams/Cream_Tray_Gallery-Images.jpg",
      },
    ],
    panels: [
      {
        title: "Peristaltic Pump & Pressure Vessel",
        text: "This peristaltic system uses a positive displacement pump to squeeze the silicon product tubing and draw product through the dispensing nozzles, providing a consistent flow as the pressure vessel provides back pressure to ensure every bit of product is not wasted.",
        textSpan:
          "Tank sizes available are 1,3,5 & 10-gallon. All our pressure vessels are compatible with our mixers and heating systems to maintain heat and product consistency throughout the filling process. ",
        imageRoot: "/products/automatic/Creams/Pump-VesselArtboard-1.jpg",
        imageFirst: true,
      },
      {
        title: "Cosmetic Programming",
        text: "Programming can be set for the dispensing pattern. Perfect for cosmetic creams and topicals for an even despot and finishing ‘swirl’ for a clean and polished finish.",
        // imageRoot: '/products/automatic/Gummies/Gummy-TraysArtboard-1.png',
        url: "https://www.youtube.com/watch?v=o7PctKnDQvM",
      },
      {
        title: "Custom Trays",
        text: "Custom molded trays specific to your own product are created in-house for a perfect fit on the RoboCAP. ",
        textSpan:
          "Clients will receive three trays for each size or type of product container, eliminating operators downtime and ensuring production is the most efficient. ",
        imageRoot: "/products/automatic/Creams/Cream_Tray_Gallery-Images.jpg",
        imageFirst: true,
      },
    ],
    actionButtonPair: [
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
        linkTo: "/booking/demo",
        startingShadeR: "white",
        startingShadeL: "white",
        startingTextShade: "text-atgBlue",
        hoverShadeR: "buttonStart",
        hoverShadeL: "atgBlue",
        hoverTextShade: "text-white",
        text: "BOOK A DISCOVERY CALL",
        border: "atgBlue",
        borderHover: "transparent",
      },
    ],
    specification: [
      {
        title: "Fill Rate (Per Hour)*",
        value: "500 - 1,500",
      },
      {
        title: "Weight (kg)",
        value: "30",
      },
      {
        title: "Width (mm)",
        value: "485",
      },
      {
        title: "Height (mm)",
        value: "590",
      },
      {
        title: "Depth (mm)",
        value: "500",
      },
      {
        title: "Power Supply",
        value: "AC 110 - 220V 300W",
      },
      {
        title: "Dispense Accuracy",
        value: "+/- 5%",
      },
      {
        title: "Dispensable Volume Range",
        value: "10ml - 1L",
      },
      {
        title: "Temperature Range",
        value: "0C - 100C",
      },
    ],
    packagingCTA: "Labelling",
  },
  {
    buttonTitle: "Balms",
    title: "Balm Filling Machine",
    link: "balm-filling-machine",
    iconRoot: "/products/Balm_White.svg",
    activeRoot: "/products/Balm.svg",
    imageRoot: "/products/automatic/landing/Auto_Balms_Landing.jpg",
    subTitle: "Output Per Hour 600 - 1,500",
    descriptionP1:
      "Your balm filling has never been easier with the RoboCAPRL-300 Pneumatic Nozzle. This system utilizes air pressure and a larger dispense needle to accurately and consistently fill your balms every time. ",
    descriptionP2:
      "Our machine is designed to provide a solution for highly viscous, time-sensitive products. With the option to upgrade to a 2-nozzle system compatible with our heating and mixing system should your production demands increase! ",
    productIndex: 5,
    basis: "*Based on 30g salve containers",
    carousel: [
      {
        imageRoot: "/products/automatic/landing/Auto_Balms_Landing.jpg",
      },
      {
        imageRoot: "/products/automatic/Balms/8000D_Gallery-Images.jpg",
      },
      {
        imageRoot: "/products/automatic/Balms/Balm_Product_Gallery-Images.jpg",
      },
      {
        imageRoot: "/products/automatic/Balms/Pneumatic-NozzleArtboard-1.jpg",
      },
      {
        imageRoot: "/products/automatic/Balms/Pressure-VesselArtboard-1.jpg",
      },
      {
        imageRoot: "/products/automatic/Balms/Heating-System-Artboard-1.jpg",
      },
    ],
    panels: [
      {
        title: "Pneumatic Nozzle",
        text: "Designed for highly viscous, time-sensitive products, the Pneumatic Nozzle dispensing derives off air pressure and is time calibrated to fill any size salves. ",
        textSpan:
          "Upgradeable to a 2-nozzle system compatible, plus our heating and mixing system to ensure an accurate and consistent deposit every time. ",
        imageRoot: "/products/automatic/Balms/Pneumatic-NozzleArtboard-1.jpg",
        imageFirst: true,
      },
      {
        title: "Pressure Vessel",
        text: "The bottom-out pressure vessels are designed with back pressure to guarantee all product flows evenly and consistently through the tubing. This ensures every bit of product is not wasted and reduces the chance of air bubbles in your product.",
        textSpan:
          "The stainless-steel tanks range from 1L, 1g, 3g, 5g, and 10-gallon in size. All our pressure vessels are compatible with our mixers and heating systems for even heat distribution throughout the tank and cleaner filling process.",
        imageRoot: "/products/automatic/Balms/Pressure-VesselArtboard-1.jpg",
      },
      {
        title: "Heating System",
        text: "Intended for thicker oils and distillates our heating system includes heated jackets, coil and controllers for both tank and line settings.",
        textSpan:
          "The system can heat up to 150ºc to thin the product and ensure an easy flow through the lines.",
        imageRoot: "/products/automatic/Balms/Heating-System-Artboard-1.jpg",
        imageFirst: true,
      },
    ],
    actionButtonPair: [
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
        linkTo: "/booking/demo",
        startingShadeR: "white",
        startingShadeL: "white",
        startingTextShade: "text-atgBlue",
        hoverShadeR: "buttonStart",
        hoverShadeL: "atgBlue",
        hoverTextShade: "text-white",
        text: "BOOK A DISCOVERY CALL",
        border: "atgBlue",
        borderHover: "transparent",
      },
    ],
    specification: [
      {
        title: "Fill Rate (Per Hour)*",
        value: "600 - 1,500",
      },
      {
        title: "Weight (kg)",
        value: "30",
      },
      {
        title: "Width (mm)",
        value: "485",
      },
      {
        title: "Height (mm)",
        value: "590",
      },
      {
        title: "Depth (mm)",
        value: "500",
      },
      {
        title: "Power Supply",
        value: "AC 110 - 220V 300W",
      },
      {
        title: "Dispense Accuracy",
        value: "+/- 5%",
      },
      {
        title: "Dispensable Volume Range",
        value: "10ml - 120ml",
      },
      {
        title: "Temperature Range",
        value: "0C - 100C",
      },
    ],
    packagingCTA: "Labelling",
  },
];

const seo = [
  {
    title: "Cartridge filling machine | ATG Pharma",
    description:
      "Our Cartridge filling machines are designed to optimize low-volume product filling (up to 5ml) for maximum efficiency. We guarantee a +/- 2% filling accuracy with the same speed and consistency as our other RoboCAP systems",
  },
  {
    title: " Gummy filling machine | ATG Pharma",
    description:
      "Our gummy filling machines are designed to handle high viscosity, time-sensitive products like gummies  that need an accurate and efficient filling system to optimize production",
  },
  {
    title: "Bottle Filling Machine | ATG Pharma",
    description:
      "Our Bottle filling machine has made filling bottles easier with the RoboCAP RL-300 Peristaltic System. This pressure-less filling system fills your product with minimal product contact, making product change over rapid and cleaning easy.",
  },
  {
    title: "Capsule Filling Machine | ATG Pharma",
    description:
      "Our capsule filling machine has made filling capsules easier or more efficient thanks to the RoboCAP RL-300 Volumetric (VF) Nozzle. Designed to optimize low-volume product filling, the VF Nozzle dispenses product with a +/- 2% filling accuracy and the same speed and consistency as our other RoboCAP systems.",
  },
  {
    title: "Lip balm filling machine | ATG Pharma",
    description:
      "Our balm filling machine is designed to provide a solution for highly viscous, time-sensitive products. With the option to upgrade to a 2-nozzle system compatible with our heating and mixing system should your production demands increase",
  },
  {
    title: "Automatic Balm Filling Machine | ATG Pharma",
    description:
      "Balm Filling has never been easier. With out balm filling machine you can fill over 600 balm containers per hour with high accuracy and consistency.",
  },
];

export default { automaticProducts, seo, atgPartners };
