const productSelection = [
  {
    bg: '/Capsules.jpg',
    bgAct: '/CapsulesAct.jpg',
    title: 'CAPSULES',
    icon: '/Capsules_White.svg',
    iconAct: '/Capsules_Blue.svg',
    context: 'Capsules',
    baseUrl: '/build/caps/Capsule_1G_H_1.jpg',
    recomVessel: '1G',
    recommHeating: true,
    recommNozzle: '1',
    output: "3,000",
    savings: "26,200",
  },
  {
    bg: '/Bottles.jpg',
    bgAct: '/BottlesAct.jpg',
    title: 'BOTTLES',
    icon: '/Bottles_White.svg',
    iconAct: '/Bottles_Blue.svg',
    context: 'Bottles',
    baseUrl: '/build/bottles/Bottles_2.jpg',
    recommNozzle: '2',
    output: "1,800",
    savings: "15,400",
  },
  {
    bg: '/Candies.jpg',
    bgAct: '/CandiesAct.jpg',
    title: 'GUMMIES',
    icon: '/Candies_White.svg',
    iconAct: '/Candies_Blue.svg',
    context: 'Candies',
    baseUrl: '/build/gummies/Gummy_1G_H_2.jpg',
    recomVessel: '1G',
    recommHeating: true,
    recommNozzle: '2',
    output: "4,000",
    savings: "36,000",
  },
  {
    bg: '/Creams.jpg',
    bgAct: '/LotionsAct.jpg',
    title: 'CREAMS',
    icon: '/Creams_White.svg',
    iconAct: '/Creams_Blue.svg',
    context: 'Creams',
    baseUrl: '/build/creams/Cream_1G_2.jpg',
    recomVessel: '1G',
    recommHeating: false,
    recommNozzle: '2',
    output: "830",
    savings: "5,800",
  },
  {
    bg: '/Balm.jpg',
    bgAct: '/BalmAct.jpg',
    title: 'BALMS',
    icon: '/Balms_White.svg',
    iconAct: '/Balms_Blue.svg',
    context: 'Balm',
    baseUrl: '/build/balms/Balm_1G_H_2.jpg',
    recomVessel: '1G',
    recommHeating: true,
    recommNozzle: '2',
    output: "1,500",
    savings: "11,200",
  },
  {
    bg: '/Cartridge.jpg',
    bgAct: '/CartridgesAct.jpg',
    title: 'CARTRIDGES',
    icon: '/Cartridges_White.svg',
    iconAct: '/Cartridges_Blue.svg',
    context: 'Cartridge',
    baseUrl: '/build/carts/Cartridge_1G_H_2.jpg',
    recomVessel: '1G',
    recommHeating: true,
    recommNozzle: '2',
    output: "2,000",
    savings: "17,200",
  },
];

const Capsules = {
  baseUrl: '/build/caps/Capsule',
  vessels: {
    header: '2. What is your Production Run Batch Size?',
    subTitle: '5 Vessels Available for this Product.',
    data: [
      {
        title: '1 Litre',
        context: '1L',
      },
      {
        title: '1 Gallon',
        context: '1G',
        recommended: true,
      },
      {
        title: '3 Gallon',
        context: '3G',
      },
      {
        title: '5 Gallon',
        context: '5G',
      },
      {
        title: '10 Gallon',
        context: '10G',
      },
    ],
  },
  heating: {
    header: '3. Does Your Production Require Heating?',
    subTitle: 'Some fill products with greater viscosity require heating to allow flow through dispense equipment such as tubing and needles.',
    data: [
      {
        title: 'No',
        context: false,
      },
      {
        title: 'Yes',
        context: true,
        recommended: true,
      },
    ],
  },
  nozzles: {
    header: '4. What is your Desired Daily Output?',
    subTitle: 'Daily output is determined by the amount of dispense product you would like to achieve with one machine operated for 8 hours.',
    data: [{
      title: '12,000 Per Day',
      context: '1',
      recommended: true,
      output: '3,000',
      savings: '26,200'
    },
    {
      title: '24,000 Per Day',
      context: '2',
      output: '4,600',
      savings: '40,600'
    },
    {
      title: '36,000 Per Day',
      context: '3',
      output: '6,200',
      savings: '55,000'
    },
    {
      title: '48,000 Per Day',
      context: '4',
      output: '8,000',
      savings: '67,000'
    },
    ],
  },
};

const Cartridge = {
  baseUrl: '/build/carts/Cartridge',
  vessels: {
    header: '2. What is your Production Run Batch Size?',
    subTitle: '5 Vessels Available for this Product.',
    data: [
      {
        title: '1 Litre',
        context: '1L',
      },
      {
        title: '1 Gallon',
        context: '1G',
        recommended: true,
      },
      {
        title: '3 Gallon',
        context: '3G',
      },
      {
        title: '5 Gallon',
        context: '5G',
      },
      {
        title: '10 Gallon',
        context: '10G',
      },
    ],
  },
  heating: {
    header: '3. Does Your Production Require Heating?',
    subTitle: 'Some fill products with greater viscosity require heating to allow flow through dispense equipment such as tubing and needles.',
    data: [
      {
        title: 'No',
        context: false,
      },
      {
        title: 'Yes',
        context: true,
        recommended: true,
      },
    ],
  },
  nozzles: {
    header: '4. What is your Desired Daily Output?',
    subTitle: 'Daily output is determined by the amount of dispense product you would like to achieve with one machine operated for 8 hours.',
    data: [{
      title: '7,200 Per Day',
      context: '1',
      output: '1,200',
      savings: '10,000'
    },
    {
      title: '10,800 Per Day',
      context: '2',
      recommended: true,
      output: '2,000',
      savings: '17,200'
    },
    ],
  },
};

const Candies = {
  baseUrl: '/build/gummies/Gummy',
  vessels: {
    header: '2. What is your Production Run Batch Size?',
    subTitle: '5 Vessels Available for this Product.',
    data: [
      {
        title: '1 Litre',
        context: '1L',
      },
      {
        title: '1 Gallon',
        context: '1G',
        recommended: true,
      },
      {
        title: '3 Gallon',
        context: '3G',
      },
      {
        title: '5 Gallon',
        context: '5G',
      },
      {
        title: '10 Gallon',
        context: '10G',
      },
    ],
  },
  nozzles: {
    header: '3. What is your Desired Daily Output?',
    subTitle: 'Daily output is determined by the amount of dispense product you would like to achieve with one machine operated for 8 hours.',
    data: [{
      title: '10,500 Per Day',
      context: '1',
      output: '1,000',
      savings: '8,400'
    },
    {
      title: '15,000 Per Day',
      context: '2',
      recommended: true,
      output: '2,000',
      savings: '17,500',
    },
    {
      title: '20,000 Per Day',
      context: '3',
      output: '3,000',
      savings: '26,800',
    },
    {
      title: '25,000 Per Day',
      context: '4',
      output: '4,000',
      savings: '36,000',
    },
    ],
  },
};

const Creams = {
  baseUrl: '/build/creams/Cream',
  vessels: {
    header: '2. What is your Production Run Batch Size?',
    subTitle: '5 Vessels Available for this Product.',
    data: [
      {
        title: '1 Litre',
        context: '1L',
      },
      {
        title: '1 Gallon',
        context: '1G',
        recommended: true,
      },
      {
        title: '3 Gallon',
        context: '3G',
      },
      {
        title: '5 Gallon',
        context: '5G',
      },
      {
        title: '10 Gallon',
        context: '10G',
      },
    ],
  },
  nozzles: {
    header: '3. What is your Desired Daily Output?',
    subTitle: 'Daily output is determined by the amount of dispense product you would like to achieve with one machine operated for 8 hours.',
    data: [{
      title: '8,400 Per Day',
      context: '1',
      output: '500',
      savings: '3,200'
    },
    {
      title: '12,600 Per Day',
      context: '2',
      recommended: true,
      output: '830',
      savings: '5,800'
    },
    {
      title: '17,500 Per Day',
      context: '3',
      output: '1,166',
      savings: '8,400'
    },
    {
      title: '21,000 Per Day',
      context: '4',
      output: '1,500',
      savings: '11,200'
    },
    ],
  },
};

const Balm = {
  baseUrl: '/build/balms/Balm',
  vessels: {
    header: '2. What is your Production Run Batch Size?',
    subTitle: '5 Vessels Available for this Product.',
    data: [
      {
        title: '1 Litre',
        context: '1L',
      },
      {
        title: '1 Gallon',
        context: '1G',
        recommended: true,
      },
      {
        title: '3 Gallon',
        context: '3G',
      },
      {
        title: '5 Gallon',
        context: '5G',
      },
      {
        title: '10 Gallon',
        context: '10G',
      },
    ],
  },
  nozzles: {
    header: '3. What is your Desired Daily Output?',
    subTitle: 'Daily output is determined by the amount of dispense product you would like to achieve with one machine operated for 8 hours.',
    data: [{
      title: '7,200 Per Day',
      context: '1',
      output: '600',
      savings: '4,000'
    },
    {
      title: '10,800 Per Day',
      context: '2',
      recommended: true,
      output: '1,500',
      savings: '11,200'
    },
    ],
  },
};

const Bottles = {
  baseUrl: '/build/bottles/Bottles',
  nozzles: {
    header: '2. What is your Desired Daily Output?',
    subTitle: 'Daily output is determined by the amount of dispense product you would like to achieve with one machine operated for 8 hours.',
    data: [{
      title: '8,400 Per Day',
      context: '1',
      output: '1,200',
      savings: '10,000'
    },
    {
      title: '12,600 Per Day',
      context: '2',
      recommended: true,
      output: '1,800',
      savings: '15,400'
    },
    {
      title: '17,500 Per Day',
      context: '3',
      output: '2,400',
      savings: '20,800'
    },
    {
      title: '21,000 Per Day',
      context: '4',
      output: '3,000',
      savings: '26,200'
    },
    ],
  },
};

export default {
  productSelection, Cartridge, Bottles, Capsules, Candies, Creams, Balm,
};
