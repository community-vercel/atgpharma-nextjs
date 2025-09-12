import Image from 'next/image';

function CTAWButton({ data }) {
  const {
    imageRoot, title, textStart, textEnd, buttonText, linkTo,
  } = data;
  return (
    <div className="relative shadow-md">
      <Image
        src={imageRoot}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="relative py-16 px-8 xl:px-0 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-white text-center mb-6">
          <span className="block xl:inline">{title}</span>
        </h2>
        <p className="text-base lg:text-lg my-4 leading-6 text-white text-center">
          <span className="block">{textStart}</span>
          <span>{textEnd}</span>
        </p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div>
            <a href={linkTo} className="rounded-full mx-2 flex items-center justify-center px-12 py-3 shadow-2xl text-base  border-2 border-atgBlue hover:border-transparent text-atgBlue bg-gradient-to-r from-white to-white hover:from-buttonStart hover:to-atgBlue hover:text-white md:py-4">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CTAWButton;
