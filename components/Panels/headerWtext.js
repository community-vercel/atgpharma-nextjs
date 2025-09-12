function HeaderWText({ data, headerRootStyle }) {
  const { title, text, hideDescription } = data;
  return (
    <div className={`container mt-8 my-14 py-2 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto`} style={headerRootStyle}>
      <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-6">
        <span className="block xl:inline">{title}</span>
      </h2>
      {!hideDescription && (<p className="text-base lg:text-lg my-4 leading-6 text-gray-500 text-center">
        <span className="block">{text}</span>
      </p>)}
    </div>
  );
}
export default HeaderWText;
