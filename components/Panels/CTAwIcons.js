import Image from 'next/image';

function CTAWIcons({ data }) {
  const { imageRoot, icons } = data;
  const iconsGrid = icons.map((entry, index) => {
    const { iconRoot, title, subTitle } = entry;
    return (
      <div key={index} className="flex flex-col  justify-center items-center py-12">
        <Image
          src={iconRoot}
          alt="Picture of the author"
          width={100}
          height={100}
          className="self-center"
        />
        <p className="text-2xl  font-base text-white py-2">{title}</p>
        <h3 className="text-5xl  font-bold text-white">{subTitle}</h3>
      </div>
    );
  });
  return (
    <div className="relative">
      <Image
        src={imageRoot}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="relative px-8 xl:px-0 max-w-7xl mx-auto ">
        <div className="grid grid-col-1 lg:grid-cols-3 gap-8 w-full">
          {iconsGrid}
        </div>
      </div>
    </div>
  );
}
export default CTAWIcons;
