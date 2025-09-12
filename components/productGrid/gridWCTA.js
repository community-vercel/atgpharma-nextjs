import Image from 'next/image';
import { useState } from 'react';

// COMPONENTS
import ProductGrid from './index';
import ButtonPairs from '../buttons/pairedButtons';
import HeaderWText from '../Panels/headerWtext';

function GirdWCTA({ data, headerData, showGridSection, gridStyles, sectionStyles, headerRootStyle, imageSectionStyles, ...rest }) {
  const { grid, buttons, imageRoot, descriptionText, imageWidth = 550, imageHeight = 550, showDescription } = data;
  const [currentRoot, setCurrentRoot] = useState(grid[0]?.baseUrl || imageRoot);

  return (
    <>
      <HeaderWText data={headerData} headerRootStyle={headerRootStyle} />
      <div style={sectionStyles} className="container my-6 px-8 xl:px-0 flex flex-col items-center max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div style={imageSectionStyles} className="sm:text-center lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <Image
              src={currentRoot}
              alt="Picture of the author"
              width={imageWidth}
              height={imageHeight}
              className="z-0 transform -translate-y-12"
            />
          </div>
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
            <ButtonPairs data={buttons} />
          </div>
        </div>
      </div>
    </>
  );
}
export default GirdWCTA;
