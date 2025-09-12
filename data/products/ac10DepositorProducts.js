const CandyDepositorProducts = [
    {
        buttonTitle: "Capsules",
        iconRoot: "/products/Capsule_White.svg",
        activeRoot: "/products/Capsules.svg",
        title: "AC10 Mini Candy Depositor",
        link: "capsule-filling-machine",
        imageRoot: "/Home/acMiniDepositor.png",
        subTitle: "Output Per Hour 9,000",
        descriptionP1:
            "A superior alternative to manually gummy production. Discover unmatched precision and efficiency with our product, bidding farewell to inaccuracies and messy depositing.",
        descriptionP2:
            "The AC10 isn’t just a machine; it’s a powerhouse of customization. With its user-friendly touchscreen interface, program up to 60 different recipes effortlessly. Fine-tune your output with dual temperature control settings, offering unmatched flexibility. Plus, its volume dispense setting ensures seamless compatibility with various tray types, making recipe setup a breeze to meet all your depositing needs.",
        productIndex: 0,
        basis: "",
        /* headerProducts: [
            {
                imageUrl: "/Home/PreLoadedTrays.png",
                imgHeight: '400px',
                imgWidth: '450px',
                imageContainerClx: "ml-[-1rem]!",
                title: "Pre-Loaded Trays",
                subTitle: "Say goodbye to hand-loading trays.",
                description: "Experience the convenience of pre assembled, plug-and-play trays, eliminating labour-intensive setup procedures. Unpack and start producing without delay!",
                actionButtonPair: [
                    {
                        linkTo: "/products/automatic/preloaded-tray",
                        startingShadeR: "buttonStart",
                        startingShadeL: "atgBlue",
                        startingTextShade: "text-white",
                        hoverShadeR: "white",
                        hoverShadeL: "white",
                        hoverTextShade: "text-atgBlue",
                        text: "LEARN MORE",
                        border: "transparent",
                        borderHover: "atgBlue",
                    },
                    {
                        linkTo: "/contact",
                        startingShadeR: "white",
                        startingShadeL: "white",
                        startingTextShade: "text-atgBlue",
                        hoverShadeR: "buttonStart",
                        hoverShadeL: "atgBlue",
                        hoverTextShade: "text-white",
                        text: "REQUEST QUOTE",
                        border: "atgBlue",
                        borderHover: "transparent",
                    },
                ],
            }
        ], */
        carousel: [
            {
                imageRoot: "/Home/acMiniDepositor.png",
            },
            {
                imageRoot: "/Home/TouchScreen.png",
            },
            {
                imageRoot: "/Home/Nozzles.png",
            }
        ],
        panels: [
            {
                title: "Intuitive Touch Screen",
                text: "",
                textSpan:
                    "The AC10 gummy depositor allows you to control using Intuitive Touch Screen. Temperature, deposit volume mold spacing can be easily updated based on your demand.",
                imageRoot: "/Home/TouchScreen.png",
                imageFirst: true,
                ImageTextStyles: {
                    marginTop: "0",
                    marginBottom: "0"
                },
            },
            {
                title: "Multi-Nozzle Depositor",
                text: "",
                textSpan:
                    "Multi-Nozzle depositor allows you to deposit product into the 10 mold in single shot. With right parameters you can deposit product direct into mold which will prevent messy and imprecise gummy production.",
                imageRoot: "/Home/Nozzles.png",
                ImageTextStyles: {
                    marginTop: "0",
                    marginBottom: "0"
                },
            },
            {
                title: "See the AC10 in Action",
                text: "Introducing The NEW AC10 Mini Candy Depositor",
                // imageRoot: '/products/automatic/Gummies/Gummy-TraysArtboard-1.png',
                url: "https://www.youtube.com/watch?v=pBPZTe-NWJM",
                imageFirst: true,
            },
        ],
        actionButtonPair: [
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
        specificationTitle: "Gummy Depositor Specifications",
        specification: [
            {
                title: "Maximum Temperature is",
                value: "130 degrees",
            },
            {
                title: "Servo Motor",
                value: "400W",
            },
            {
                title: "Power Supply",
                value: "110V-24VAC 50-60Hz",
            },
            {
                title: "Number Of Nozzles",
                value: "10",
            },
            {
                title: "Hopper Size",
                value: "12L",
            },
            {
                title: "Shot Size",
                value: "1-4.76 grams/shot",
            },
            {
                title: "HMI",
                value: "Touch Screen",
            },
            {
                title: "Floor Size",
                value: '25" X 14" X 29"',
            },
        ],
        showDownloadBrochureBtn: true,
        downloadBrochureBtn: {
        url: "/products/automatic/ac10/AC10BrochureNEW.pdf",
        downloadBrochureLabel: "AC-10 MINI Brochure"
        },
        // packagingCTA: "Capsule Counting",
        hideBottomRedirection: true,
        productTitleStyles: {
            marginTop: 0
        },

    },
];

const seo = {
    title:
        "Automatic Pharmaceutical Filling and Packaging Equipment | ATG Pharma",
    description:
        "The AC10 isn’t just a machine; it’s a powerhouse of customization. With its user-friendly touchscreen interface, program up to 65 different recipes effortlessly. Fine-tune your output with dual temperature control settings, offering unmatched flexibility. Plus, its volume dispense setting ensures seamless compatibility with various tray types, making recipe setup a breeze to meet all your depositing needs.",
};

export default { seo, CandyDepositorProducts }