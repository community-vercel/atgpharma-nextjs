const cardList = [
  {
    title: "Machine Shop",
    text: "Ensures all equipment undergoes extensive quality assurance testing and can be customized to fit your products.",
    iconRoot: "/About/Machine_shop.svg",
  },
  {
    title: "Research & Development",
    text: "Continuous innovations and adaptability to bring you the latest and best quality equipment.",
    iconRoot: "/About/Research.svg",
  },
  {
    title: "Tech Support",
    text: "Wide range of training videos, live demos & equipment setup to provide our clients with a lifetime of technical support.",
    iconRoot: "/About/Support.svg",
  },
];

const driveFactor = {
  title: "What Drives Us",
  text: "We are a North American manufacturer of bench-top equipment designed for dynamic and fast-growing production. With a background in the pharmaceutical industry, we pride ourselves in providing companies with the leading quality standard equipment and service.",
};

const Teams = {
  title: "Our In-House Teams",
  text: "With all of our operations being in-house, each department understands the company's missions, values, and goals. We can easily relay messages to each other about your orders, and effortlessly jump on a call to discuss your custom projects. This allows for a streamlined and efficient process that benefits both your company and ours.",
};

const profilesHeader = {
  title: "Meet Our Team",
  text: "A highly-motivated group of ambitious and multi-talented individuals looking to shake up what was becoming a stagnant equipment manufacturing industry while keeping production in North America.",
};

const Profiles = [
  // {
  //   imgRoot: "/About/ChrisF.webp",
  //   title: "Christopher Fabricius",
  //   subTitle: "President and CEO",
  //   position: "Executive",
  // },
  {
    imgRoot: "/About/Mike.jpg",
    title: "Mike Lio",
    subTitle: "VP Engineering and Founder",
    position: "Executive",
  },
  {
    imgRoot: "/About/Devon.webp",
    title: "Devon Lio",
    subTitle: "Director of Operations",
    position: "Executive",
    imageProps: { objectFit: 'cover', width: 260  }
  },
  // {
  //   imgRoot: "/About/Danielle.jpg",
  //   title: "Danielle Wonfor",
  //   subTitle: "Human Resources",
  //   position: "HR",
  // },
  {
    imgRoot: "/About/Chris_OS.webp",
    title: "Chris Shar",
    subTitle: "VP of Business Development",
    position: "Executive",
  },
  // {
  //   imgRoot: "/About/Mike-P_OS.webp",
  //   title: "Mike Pye",
  //   subTitle: "General Sales Manager",
  //   position: "Sales",
  // },
  {
    imgRoot: "/About/Laura_OS.webp",
    title: "Laura Szachlewicz",
    subTitle: "Account Executive",
    position: "Sales",
  },
  // {
  //   imgRoot: "/About/Mark_OS.webp",
  //   title: "Mark Hales",
  //   subTitle: "Business Development Manager",
  //   position: "Sales",
  // },
  {
    imgRoot: "/About/Andre.webp",
    title: "Andre Mascarenhas",
    subTitle: "Mechanical Engineer",
    position: "Engineering",
    imageProps: { objectFit: 'cover', width: 260 }
  },
  {
    imgRoot: "/About/Sadiq.webp",
    title: "Sadiq Qamar",
    subTitle: "Lead Applications Engineer",
    position: "Engineering",
    imageProps: { objectFit: 'cover', width: 264 }
  },
];

const CtaWIconsData = {
  imageRoot: "/About/Stats_Desktop.jpg",
  icons: [
    {
      iconRoot: "/About/Robots.svg",
      title: "Robots Delivered",
      subTitle: "579+",
    },
    {
      iconRoot: "/About/Growth.svg",
      title: "Avg. Production Growth",
      subTitle: "700%",
    },
    {
      iconRoot: "/About/Clients.svg",
      title: "Lifetime Clients",
      subTitle: "251",
    },
  ],
};

const Testimonial = {
  imageRoot: "/About/Stats_Desktop.jpg",
  companyLogo: "/About/happy_valey_white.svg",
  copy: "We were struggling with vape filling accuracy, consistency and fill-to-cap time. ATG is at the top of their game in volume metric filling equipment. We switched our vape filling robot and purchased the capper. Now we accurately fill and cap 2000 vape cartridges/hour with a single operator, and full confidence in accuracy.",
  author: "Torrin Panico",
  position: "Associate Director of Product Development",
};

const seo = {
  title: "About Our Pharmaceutical Filling Equiptment | ATG Pharma",
  description:
    "20 Years of Experience has lead to ATG Pharma being able to design bench-top equiptment for dynamic and fast-growing production",
};

export default {
  cardList,
  driveFactor,
  Teams,
  Profiles,
  profilesHeader,
  CtaWIconsData,
  Testimonial,
  seo,
};
