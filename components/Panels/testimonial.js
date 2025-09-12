import Image from "next/image";

function Testimonial({ data }) {
  const { imageRoot, companyLogo, copy, author, position } = data;
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
        <div className="flex flex-col items-center  w-full text-white max-w-5xl mx-auto text-center">
          <Image
            src={companyLogo}
            alt="Picture of the author"
            width={250}
            height={150}
            className="self-center"
          />
          <p>{copy}</p>
          <p className="mt-8 font-semibold text-2xl">{author}</p>
          <p className="mb-8">{position}</p>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
