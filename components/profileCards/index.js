import Image from "next/image";

function ProfileCards({ data }) {
  const profiles = data.map((profile, index) => {
    const { imgRoot, title, subTitle, position, width, height, imageProps } = profile;
    return (
      <li key={index} className="w-full lg:w-1/3">
        <div className="space-y-4">
          <Image
            src={imgRoot}
            alt="Picture of the author"
            width={width || 220}
            height={height || 240}
            className="mx-auto h-20 w-20  lg:w-56 lg:h-56"
            {...imageProps}
          />
          <div className="space-y-2">
            <div>
              <p className="text-lg font-medium lg:text-xl text-atgBlue">
                {title}
              </p>
              <p className="text-sm tracking-tight leading-3 lg:text-md text-gray-600">
                {subTitle}
              </p>
              <p className="text-xs font-medium text-gray-400">{position}</p>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <ul className="flex flex-row flex-wrap justify-center gap-y-16">
      {profiles}
    </ul>
  );
}
export default ProfileCards;
