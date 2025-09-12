import React from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';

import SEOHead from "../../../components/seo";
import AutomaticPage from '../../../components/pageContainer/automatic';

import preloadedTrayData from "../../../data/products/preloadedTrayProducts";

import PartnerList from '../../../components/PartnerInfo';
import SpecCard from '../../../components/SpecCard';

const renderCustomPreloadedTraySections = (renderComponentData) => {
    const { partnerInfo, videoInfo, specGrid, stepsToInstall, preloadedImgUrl } = renderComponentData;
    return <>
        {/* component for rendering stepsToInstall */}
        <div className='w-full mt-14 mx-auto flex flex-col gap-12'>
            <img
                src={preloadedImgUrl}
                alt='preloaded-tray-image-steps'
                // height={400}
                // width={425}
                
            />
            {/* <div>
              <h3 className='text-atgBlue text-2xl lg:text-4xl text-center font-bold mb-4'>{stepsToInstall.title}</h3>
                {
                    stepsToInstall.steps.map((sti, i) => <div className="flex gap-3 w-full border-l-2 border-gray-300 h-18 mt-4 items-center justify-between">
                        <div className='flex flex-col justify-center p-2 w-5/12 lg:'>
                            <h4 className='text-lg lg:text-xl font-bold tracking-tighter'>{sti.title}</h4>
                            <p className='text-base'>{sti.description}</p>
                        </div>
                        <div className='hidden lg:block'>
                            <sti.Icon className='w-8 h-8 text-atgBlue' />
                        </div>
                        <Image
                            src="/products/automatic/landing/Auto_Cartridges_Landing.jpg"
                            height={100}
                            width={425}
                        />
                    </div>)
                } 
            
            </div> */}
            <div className='flex flex-col lg:flex-row items-center justify-around flex-wrap gap-4'>{specGrid.map((spec, i) => <SpecCard key={i} {...spec} />)}</div>
        </div>
        <PartnerList partnerInfo={partnerInfo} containerTWClasses='mt-14' />
        <div className='mt-8 text-center'>
            <h3 className="mt-12 text-5xl tracking-normal font-bold text-atgBlue text-center">
                {videoInfo.title}
            </h3>
            <div className='flex justify-center mt-3'>
                <ReactPlayer
                    url={videoInfo.url}
                    controls
                    width="70%"
                    loop
                    muted
                />
            </div>
        </div>
    </>
};

const PreloadedTrayPage = () => {
    const { PreloadedTrayProducts, seo } = preloadedTrayData;
    return (
        <div>
            <SEOHead 
                data={seo}
            />
            <AutomaticPage 
                product={PreloadedTrayProducts[0]}
                hideProductSelectionArea
                renderComponent={renderCustomPreloadedTraySections}
            />
        </div>
    );
};

export default PreloadedTrayPage;