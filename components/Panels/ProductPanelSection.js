import React from 'react';
import Image from 'next/image';
import ButtonPairs from '../buttons/pairedButtons';
const ProductPanelSection = ({ sectionInfo }) => {
    const { imgFirst, 
        imageUrl, 
        imgHeight = 550, 
        imgWidth = 550, 
        title, 
        subTitle, 
        description, 
        actionButtonPair, 
        imageContainerClx, 
        containerStyles,
        containerClasses
    } = sectionInfo;
    return (
        <div style={containerStyles} className={`flex gap-8 flex-col lg:${imgFirst ? "flex-row-reverse" : "flex-row"} items-center lg:mt-12 ${containerClasses}`}>
            {/* Image section */}
            <div className={`flex h-full items-center justify-start ${imageContainerClx}`}>
                <Image 
                    src={imageUrl}
                    height={imgHeight}
                    width={imgWidth}
                    alt='Product image'
                    layout='fixed'
                />
            </div>
            {/* Content section */}
            <div className='flex flex-col justify-start text-left items-center lg:items-start' >
                <h1 className="mt-12 text-5xl tracking-normal font-extrabold text-atgBlue text-center lg:text-left">
                    <span className="block xl:inline">{title}</span>
                </h1>
                <p className="mt-2 pb-4 text-xl tracking-wider font-bold text-gray-900 text-center lg:text-left">
                    <span className="block xl:inline">{subTitle}</span>
                </p>
                <p className="text-sm lg:text-base pt-4 font-light tracking-wider py-5 text-gray-500 self-start">
                    <span className=" block">{description}</span>
                </p>
                <ButtonPairs data={actionButtonPair} />
            </div>
        </div>
    );
};

export default ProductPanelSection;