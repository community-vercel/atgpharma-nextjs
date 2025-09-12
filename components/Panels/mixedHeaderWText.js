function MixedHeaderWText({ data }) {
  const {
    titleStart, titleEnd, textColor, textStart, textEnd,
  } = data;
  return (
    <div className="container my-14 py-4 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-6">
        <span>{titleStart}</span>
        <span className={textColor}>{titleEnd}</span>
      </h2>
      <p className="text-base lg:text-lg my-4 leading-6 text-gray-500 text-center">
        <span className="lg:block">{textStart}</span>
        <span>{textEnd}</span>
      </p>
    </div>
  );
}
export default MixedHeaderWText;
