//TODO: need to optimize this component to handle multiple buttons
function ButtonPairs({ data, classes }) {
  if(!Array.isArray(data) || data.length === 0) {
    throw new Error("data must be an array with at least one element");
  }
  return (
    <div className={`${data[0].mobileVisibility} lg:${data[0].desktopVisibility} py-10 flex justify-center lg:justify-around flex-col lg:flex-row ${classes}`}>
      <div>
        <a href={data[0].linkTo} className={`mx-2 flex items-center justify-center px-10 py-3 border-2 border-${data[0].border} hover:border-${data[0].borderHover} rounded-full text-base bg-gradient-to-r ${data[0].startingTextShade} from-${data[0].startingShadeR} to-${data[0].startingShadeL} hover:${data[0].hoverTextShade} hover:from-${data[0].hoverShadeR} hover:to-${data[0].hoverShadeL} md:py-4 `}>
          {data[0].text}
        </a>
      </div>
      {(data[1]) && (<div className="mt-4 lg:mt-0">
        <a href={data[1].linkTo} className={`mx-2 flex items-center justify-center px-10 py-3 border-2 border-${data[1].border} hover:border-${data[1].borderHover} rounded-full text-base bg-gradient-to-r ${data[1].startingTextShade} from-${data[1].startingShadeR} to-${data[1].startingShadeL} hover:${data[1].hoverTextShade} hover:from-${data[1].hoverShadeR} hover:to-${data[1].hoverShadeL} md:py-4 `}>
          {data[1].text}
        </a>
      </div>)}
    </div>
  );
}
export default ButtonPairs;
