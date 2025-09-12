import React from 'react';

const PartnerList = ({ partnerInfo, containerTWClasses }) => {
    const { subtitle, description, partnerLogos } = partnerInfo;
    return (
        <div className={`flex flex-col justify-center gap-1 pb-4 ${containerTWClasses}`}>
            <h3 className="text-atgBlue font-bold text-center text-2xl lg:text-4xl" >{subtitle}</h3>
            <p className='text-gray-600 font-normal text-center text-base lg:text-lg'>{description }</p>
            <div className="flex justify-around flex-wrap gap-2 lg:gap-4">
                {partnerLogos.map((ptr, i) =>
                    <div style={{ backgroundImage: `url(${ptr.imageRoot})` }} className="bg-contain bg-center bg-no-repeat overflow-hidden w-20 h-20 lg:w-28 lg:h-28">
                    </div>)
                }
            </div>
        </div>
    );
};

export default PartnerList;