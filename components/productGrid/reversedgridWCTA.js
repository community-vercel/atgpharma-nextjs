import Image from 'next/image';
import { useState } from 'react';

// COMPONENTS
import ProductGrid from './index';
import ButtonPairs from '../buttons/pairedButtons';
import HeaderWText from '../Panels/headerWtext';
import SpecCard from '../SpecCard';

function RevGirdWCTA({ data, headerData, showButtons, showGridSection, showDescription, showSpecGrid, headerRootStyle, sectionStyles, gridStyles, imageSectionStyles, ...rest }) {
  const {
    grid, buttons, imageRoot, width, length, descriptionText, specGrid, imageWidth = 500, imageHeight = 500
  } = data;

  const [currentRoot, setCurrentRoot] = useState(grid[0]?.baseUrl || imageRoot);

  return (
    <>
      <HeaderWText data={headerData} headerRootStyle={headerRootStyle} />
      <div style={sectionStyles} className="container my-14 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8">
          <div style={gridStyles} className="sm:text-center lg:col-span-6 lg:text-left flex items-center flex-col justify-center">
            {showGridSection && (<>
              <ProductGrid data={grid} setCurrentRoot={setCurrentRoot} currentRoot={currentRoot} />
            </>)}
            {
              showDescription &&
              (<p className="text-base lg:text-lg my-4 leading-6 text-gray-500 text-center">
                <span className="block">{descriptionText}</span>
              </p>)
            }
            {showButtons && (<ButtonPairs data={buttons} />)}
            {showSpecGrid && ( <div className='flex justify-around flex-wrap w-full mt-4 gap-4'>{specGrid.map((spec, i) => <SpecCard key={i} {...spec} />)}</div>)}
          </div>
          <div style={imageSectionStyles} className="sm:text-center lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <Image
              src={currentRoot}
              alt="Picture of the author"
              width={imageWidth}
              height={imageHeight}
              className="z-0 transform -translate-y-4 translate-x-6 aspect-w-1 aspect-h-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default RevGirdWCTA;
