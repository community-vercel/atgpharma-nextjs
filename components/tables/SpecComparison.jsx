import React, { useContext } from 'react';
import { DimensionContext } from '../../context/DimensionContext';

const SpecComparison = ({ data, basis, title, productsForComparison, specificationTitle }) => {
    const {width} = useContext(DimensionContext);
    const isScreenWidthMd = width && (width < 1024);
    
    const tableData = data.map((entry, index) => {
        const { title, values } = entry;
        return (
            <li
                key={index}
                className={`px-6 py-4 ${index % 2 !== 0 ? "bg-gray-200" : "bg-white"
                    } rounded-full`}
            >
                <div className={`grid gap-1 grid-cols-1 lg:grid-cols-${productsForComparison.length + 1} text-center lg:text-left`}>
                    <p className="col-span-1 px-2  lg:px-6 text-atgBlue font-bold">
                        {title}
                    </p>
                    {
                        productsForComparison.map((val, i) => (
                            <div className={`grid gap-1 grid-cols-1 lg:grid-cols-2 text-center lg:text-left`}>
                                <p className="col-span-1 px-2  lg:px-6 text-gray-600">{isScreenWidthMd ? <><span className='text-atgBlue font-extrabold'>{`${val}: `} </span>  <span className='font-bold'>{values[val]}</span> </> : <span className='font-bold'>{values[val]}</span> }</p>
                            </div>
                        ))
                    }
                </div>
            </li>
        );
    });

    return (
        <div className="px-8 xl:px-0 max-w-7xl mx-auto  my-20">
            <h2 className="my-12 text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl lg:text-3xl xl:text-5xl md:w-auto flex flex-col items-center text-center">
                <span className="block xl:inline">{specificationTitle || `${title} Specifications`}</span>
            </h2>
            <div className="bg-white">
                <ul>
                    <li
                        className={"hidden lg:block px-6 py-4 bg-atgBlue rounded-full"}
                    >
                    <div className={`grid gap-1 grid-cols-1 lg:grid-cols-${productsForComparison.length + 1} text-center lg:text-left`}>
                        <p className="col-span-1 px-2  lg:px-6 text-white font-extrabold text-lg">
                            Specification
                        </p>
                        {
                            productsForComparison.map((val, i) => (
                                <div className={`grid gap-1 grid-cols-1 lg:grid-cols-2 text-center lg:text-left`}>
                                    <p className="col-span-1 px-2  lg:px-6 text-white font-extrabold text-lg">{val}</p>
                                </div>
                            ))
                        }
                    </div>
                    </li>
                    {tableData}
                </ul>
                <p className="text-center pt-4 py-2 text-gray-500">{basis}</p>
            </div>
        </div>
    );
};

export default SpecComparison;