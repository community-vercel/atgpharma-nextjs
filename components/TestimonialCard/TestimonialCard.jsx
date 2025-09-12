import React from 'react';
import Image from 'next/image';


const TestimonialCard = ({ testimonial, imageRoot, authorInfo, designation, companyName, style }) => {
    if(imageRoot) return <TestimonialCardWithImg testimonial={testimonial}  />
    return (
        <div className="w-5/6 min-h-52 my-auto mx-auto pl-3 flex bg-atgBlue border-atgBlue border-2 border-l-8 rounded-xl">
            <div style={{ ...style, minHeight: "255px", maxHeight: "355px" }} className="w-full p-5 ml-auto flex flex-col justify-evenly bg-white rounded-l-md rounded-r-xl">
                <h4 className="md:text-sm lg:text-base leading-6 font-light text-gray-500">{testimonial}</h4>
                <div className="flex gap-2 ml-auto mr-6 items-center">
                    {imageRoot &&
                        <Image src={imageRoot} alt="client testimonial" width={100} height={60} />
                    }
                    <div className='flex flex-col justify-center gap-1'>
                        <h5 className="md:text-lg lg:text-xl text-atgBlue font-normal leading-4">{authorInfo}</h5>
                        <p className="max-w-sm md:text-sm lg:text-base text-atgBlue font-bold">{`${designation}, ${companyName}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
const TestimonialCardWithImg = ({ testimonial, imageRoot, authorInfo, designation, companyName, logoWidth = 192, logoHeight = 70, style }) => {
    return <div style={{ ...style, minHeight: "255px", maxHeight: "355px" }} className='flex w-5/6 mx-auto'>
        <div className='w-1/2 flex items-center justify-center'>
            <Image priority src={imageRoot} alt="client testimonial" width={logoWidth} height={logoHeight} />
        </div>
        <div className='w-1/2 p-4 flex flex-col justify-around gap-3'>
            <h4 className="md:text-sm lg:text-base leading-6 font-light text-gray-700">{testimonial}</h4>
            <div className='flex flex-col justify-between'>
                <h5 className="md:text-lg lg:text-xl text-atgBlue font-normal leading-4">{authorInfo}</h5>
                <p className="max-w-sm md:text-sm lg:text-base text-atgBlue font-bold">{`${designation}, ${companyName}`}</p>
            </div>
        </div>
    </div>  
}

export { TestimonialCard, TestimonialCardWithImg };