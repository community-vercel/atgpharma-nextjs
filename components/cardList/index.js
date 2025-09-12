function CardList({ data }) {
  const cars = data.map((entry, index) => {
    const { title, text, iconRoot } = entry;
    return (
      <li key={index} className="mt-12 lg:mt-0  col-span-1 flex flex-col text-center bg-card rounded-3xl shadow divide-gray-200">
        <img
          src={iconRoot}
          alt="Icons"
          width={120}
          height={120}
          className="transform -translate-y-2/4	self-center"
        />
        <div className="-mt-9 flex-1 flex flex-col pb-4 px-8">
          <h3 className="text-xl lg:text-2xl text-white font-medium">{title}</h3>
          <p className="text-sm my-4 leading-6 text-white flex flex-col items-center">
            <span className="block">{text}</span>
          </p>
        </div>
      </li>
    );
  });
  return (
    <ul className="grid grid-cols-1 gap-6  lg:grid-cols-3 pt-12">
      {cars}
    </ul>
  );
}

export default CardList;
