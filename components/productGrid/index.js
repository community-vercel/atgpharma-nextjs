import Image from 'next/image';
import { useState } from 'react';

function productGrid({ data, setCurrentRoot, currentRoot }) {
  const [activeHover, setActiveHover] = useState(false);
  const products = data.map((product, index) => {
    const {
      bg, bgAct, iconAct, icon, title, baseUrl,
    } = product;
    return (
      <li
        onMouseOver={() => setActiveHover(index)}
        onMouseOut={() => setActiveHover(null)}
        onClick={() => setCurrentRoot(baseUrl)}
        key={index}
        className="min-w-xs max-w-xs flex flex-col justify-end"
      >
        <div className={`relative rounded-2xl border-2 border-${(activeHover === index || currentRoot === baseUrl) ? 'atgBlue' : 'transparent'}`}>
          <Image
            src={(activeHover === index || currentRoot === baseUrl) ? bgAct : bg}
            alt="Picture of the author"
            layout="fill"
            className="object-center object-cover pointer-events-none rounded-2xl"
          />
          <div className="relative z-10 flex flex-col items-center">
            <Image
              src={(activeHover === index || currentRoot === baseUrl) ? iconAct : icon}
              alt="Picture of the author"
              width={85}
              height={85}
              className="h-8 w-auto sm:h-10"
            />
            <p className={`text-${(activeHover === index || currentRoot === baseUrl) ? 'atgBlue' : 'white'} text-xs font-semibold tracking-tight pb-3 lg:pb-6`}>{title}</p>
          </div>
        </div>
      </li>
    );
  });
  return (
    <ul className="w-full space-y-6 grid grid-cols-2 gap-x-6 gay-y-1 sm:gap-y-6 sm:space-y-0 lg:grid-cols-3 ">
      {products}
    </ul>
  );
}
export default productGrid;
