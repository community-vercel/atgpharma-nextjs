import ButtonPairs from '../buttons/pairedButtons';

function AutomaticCTA() {
  const ButtonData = [
    {
      linkTo: '/contact',
      startingShadeR: 'buttonStart',
      startingShadeL: 'atgBlue',
      startingTextShade: 'text-white',
      hoverShadeR: 'white',
      hoverShadeL: 'white',
      hoverTextShade: 'text-atgBlue',
      text: 'REQUEST QUOTE',
      border: 'transparent',
      borderHover: 'atgBlue',
    },
    {
      linkTo: '/products/automatic',
      startingShadeR: 'white',
      startingShadeL: 'white',
      startingTextShade: 'text-atgBlue',
      hoverShadeR: 'buttonStart',
      hoverShadeL: 'atgBlue',
      hoverTextShade: 'text-white',
      text: 'EXPLORE UPGRADES',
      border: 'atgBlue',
      borderHover: 'transparent',
    },
  ];
  return (
    <div className="container my-14 py-4 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
      <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 text-center mb-6">
        <span className="block xl:inline">Start Your Production Now or Explore Upgrades</span>
      </h2>
      <ButtonPairs data={ButtonData} />
    </div>
  );
}

export default AutomaticCTA;
