import ButtonPairs from "../buttons/pairedButtons";
import Image from "next/image";

function ClientAssetsCTA() {
  const ButtonData = [
    {
      linkTo: "https://clients.atgpharma.com/client-assets",
      startingShadeR: "buttonStart",
      startingShadeL: "atgBlue",
      startingTextShade: "text-white",
      hoverShadeR: "white",
      hoverShadeL: "white",
      hoverTextShade: "text-atgBlue",
      text: "CLIENT PORTAL",
      border: "transparent",
      borderHover: "atgBlue",
    },
    {
      linkTo: "/booking/support",
      startingShadeR: "white",
      startingShadeL: "white",
      startingTextShade: "text-atgBlue",
      hoverShadeR: "buttonStart",
      hoverShadeL: "atgBlue",
      hoverTextShade: "text-white",
      text: "BOOK SUPPORT",
      border: "atgBlue",
      borderHover: "transparent",
    },
  ];
  return (
    <div className="relative">
      <Image
        src="/support/ClientAssets.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="relative container my-14 py-16 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
        <h3 className="text-atgBlue text-4xl font-bold ">
          Exclusive Assets Available in our Client Portal:
        </h3>
        <ButtonPairs data={ButtonData} />
      </div>
    </div>
  );
}

export default ClientAssetsCTA;
