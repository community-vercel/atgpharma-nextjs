function testimonialHeader({ data }) {
  const {
    titleStart,
    text,
    coloredText,
    titleEnd,
    textColor,
    textStart,
    textEnd,
    logoRoot,
    width,
    height,
    author,
    title,
    titleItalic,
  } = data;
  return (
    <div className="container my-14 py-4 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-5">
        <span>{titleStart}</span>
        <span className={textColor}>{titleEnd}</span>
      </h2>
      {/* <img
        src={logoRoot}
        alt="CuraLeaf Logo"
        width={width}
        height={height}
        className="z-0 self-center  w-1/2 md:w-1/3 lg:w-1/5 mx-auto pb-4 lg:pb-0"
      />
      <p className="text-base lg:text-lg my-6 mt-7 w-full lg:w-2/3 leading-6 text-gray-500 text-center">
        <span className="lg:block">{textStart}</span>
        <span>{text}</span>
        <span className="text-atgBlue font-semibold">{coloredText}</span>
        <span>{textEnd}</span>
      </p>

      <p className="text-xl font-medium">{author}</p>
      <p className="mb-8 text-center lg:text-left">
        {title} <span className="italic">{titleItalic}</span>
      </p> */}
    </div>
  );
}
export default testimonialHeader;
