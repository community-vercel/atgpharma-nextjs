import ReactPlayer from 'react-player';

function videoCTA({ data }) {
  const { features, imageRoot, url } = data;
  const featuresList = features.map((entry, index) => (
    <li key={index}>{entry}</li>
  ));
  return (
    <div className="flex flex-col-reverse items-center lg:grid gap-8  md:grid-cols-2 my-8">
      <div className="col-span-1 text-left flex flex-col items-center lg:items-start ">
        {/* <img
          src={imageRoot}
          alt="Picture of the author"
          className="z-0 w-1/2 mx-auto"
        /> */}

        <ReactPlayer
          url={url}
              // light="/About/VidPlaceHolder.jpg"
              // playIcon={(<></>)}
              // playing={video}
          controls
          muted
          loop
          playing
          width="100%"
        />

      </div>
      <div className="sm:text-center col-span-1 text-left flex flex-col items-start justify-start mx-auto mb-2 lg:mb-0">
        <h2 className="my-6 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center">
          <span className="block xl:inline">Product Features:</span>
        </h2>
        <ul className="ml-5 list-disc text-left text-atgBlue text-xl ">
          {featuresList}
        </ul>
      </div>
    </div>
  );
}

export default videoCTA;
