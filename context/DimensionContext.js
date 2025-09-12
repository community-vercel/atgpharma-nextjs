import { createContext, useEffect, useState } from "react";

const DimensionContext = createContext({ width: null, height: null });

function DimensionContextProvider({ children }) {
    let [width, setWidth] = useState(null);
    let [height, setHeight] = useState(null);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <DimensionContext.Provider value={{ width, height }}>
        {children}
    </DimensionContext.Provider>
}

export { DimensionContext };

export default DimensionContextProvider;