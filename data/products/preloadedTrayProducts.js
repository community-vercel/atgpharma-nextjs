import HomeData from "../home"
import automaticProducts from "./automaticProducts";
import { CubeTransparentIcon, CubeIcon, BadgeCheckIcon } from '@heroicons/react/outline'
const PreloadedTrayProducts = [
    {
        title: "Pre-Loaded Trays",
        link: "capsule-filling-machine",
        imageRoot: "/Home/PreLoadedTrays.png",
        subTitle: "",
        descriptionP1:
            "By utilizing preloaded foam trays, you can achieve up to a fourfold increase in filling and capping output, potentially saving between $0.20 to $0.60 per unit in reduced labour and overhead costs. These trays are available in default packs of 50 blocks and can be fully customized for block sizes of 100, 25, or any size required by your automation system. They are fully compatible with ATG filling equipment.",
        descriptionP2:
            "",
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
            carousel: [
                {
                    imageRoot: "/Home/PreLoadedTrays1.png",
                },
                {
                    imageRoot: "/Home/PreLoadedTrays.png",
                },
                {
                    imageRoot: "/Home/PreLoadedTrays2.png",
                },
                // {
                //     imageRoot: "/Home/TouchScreen.png",
                // },
                // {
                //     imageRoot: "/Home/Nozzles.png",
                // }
            ],
            hideComponentTitles: true,
            renderComponentData: {
                preloadedImgUrl: "/products/automatic/PreLoadedTraysPartnerLogos/PreloadedTraySteps.svg",
                // stepsToInstall: {
                //     title: "How Do Pre-Loaded Trays Work?",
                //     steps: [
                //         {
                //             title: "Step 1",
                //             description: "Remove pre-loaded directly from the box to the RoboCAP",
                //             Icon: CubeTransparentIcon,
                //             imageUrl: ""
                //         },
                //         {
                //             title: "Step 2",
                //             description: "Begin to fill he carts",
                //             Icon: CubeIcon,
                //             imageUrl: ""
                //         },
                //         {
                //             title: "Step 3",
                //             description: "Place pre-loaded caps on the carts and press with MonoBlox",
                //             Icon: BadgeCheckIcon,
                //             imageUrl: ""
                //         },
                //     ]
                // },
                specGrid: HomeData.preLoadedTraySpecGrid,
                partnerInfo: automaticProducts.atgPartners,
                videoInfo: {
                    url: "https://www.youtube.com/watch?v=ACgFvo1rtYI",
                    title: " Pre-Loaded Trays in Action"
                }
            },
            hideBottomRedirection: true
    }
];

const seo = {
    title: "Pre-Loaded Trays | Say goodbye to hand-loading trays | ATG Pharma",
    description: "Experience the convenience of pre assembled, plug-and-play trays, eliminating labour-intensive setup procedures. Unpack and start producing without delay!"
};

export default { PreloadedTrayProducts, seo };