const automaticGrid = [
  {
    bg: "/Capsules.jpg",
    bgAct: "/CapsulesAct.jpg",
    title: "CAPSULES",
    icon: "/Capsules_White.svg",
    iconAct: "/Capsules_Blue.svg",
    context: "Capsules",
  },
  {
    bg: "/Bottles.jpg",
    bgAct: "/BottlesAct.jpg",
    title: "BOTTLES",
    icon: "/Bottles_White.svg",
    iconAct: "/Bottles_Blue.svg",
    context: "Bottles",
  },
  {
    bg: "/Candies.jpg",
    bgAct: "/CandiesAct.jpg",
    title: "GUMMIES",
    icon: "/Candies_White.svg",
    iconAct: "/Candies_Blue.svg",
    context: "Candies",
  },
  {
    bg: "/Creams.jpg",
    bgAct: "/LotionsAct.jpg",
    title: "CREAMS",
    icon: "/Creams_White.svg",
    iconAct: "/Creams_Blue.svg",
    context: "Creams",
  },
  {
    bg: "/Balm.jpg",
    bgAct: "/BalmAct.jpg",
    title: "BALMS",
    icon: "/Balms_White.svg",
    iconAct: "/Balms_Blue.svg",
    context: "Balm",
  },
  {
    bg: "/Cartridge.jpg",
    bgAct: "/CartridgesAct.jpg",
    title: "CARTRIDGES",
    icon: "/Cartridges_White.svg",
    iconAct: "/Cartridges_Blue.svg",
    context: "Cartridge",
  },
];
const TypeOutput = {
  Capsules: 3000,
  Bottles: 1200,
  Candies: 1500,
  Creams: 600,
  Balm: 600,
  Cartridge: 1200,
};

const ContainerOutputs = {
  Capsules: [40, 80, 160, 300],
  Bottles: [20, 40, 80, 120],
  Candies: [40, 80, 160, 300],
  Creams: [10, 20, 40, 80],
  Balm: [10, 20, 40, 80],
  Cartridge: [20, 40, 80, 120],
};

const ContainerPricing = {
  Capsules: 35000,
  Bottles: 20000,
  Candies: 45000,
  Creams: 30000,
  Balm: 35000,
  Cartridge: 32000,
};

const manualRate = {
  Capsules: 450,
  Bottles: 100,
  Cartridge: 165,
};
const autoRate = {
  Capsules: 2500,
  Bottles: 600,
  Cartridge: 900,
};
const conferenceGrid = [
  {
    bg: "/Capsules.jpg",
    bgAct: "/CapsulesAct.jpg",
    title: "CAPSULES",
    icon: "/Capsules_White.svg",
    iconAct: "/Capsules_Blue.svg",
    context: "Capsules",
  },
  {
    bg: "/Bottles.jpg",
    bgAct: "/BottlesAct.jpg",
    title: "BOTTLES",
    icon: "/Bottles_White.svg",
    iconAct: "/Bottles_Blue.svg",
    context: "Bottles",
  },
  {
    bg: "/Cartridge.jpg",
    bgAct: "/CartridgesAct.jpg",
    title: "CARTRIDGES",
    icon: "/Cartridges_White.svg",
    iconAct: "/Cartridges_Blue.svg",
    context: "Cartridge",
  },
];

export default {
  automaticGrid,
  TypeOutput,
  ContainerOutputs,
  ContainerPricing,
  conferenceGrid,
  manualRate,
  autoRate,
};
