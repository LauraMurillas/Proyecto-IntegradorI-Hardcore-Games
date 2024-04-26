import { createContext, useContext, useState } from "react";

export const FoxContext = createContext(); // Aquí usamos FoxContext con F mayúscula

export const useFox = () => {
    const context = useContext(FoxContext);
    if (!context) {
        console.error("Error creating Fox context");
        return;
    }
    return context;
}

export function FoxProvider({ children }) {
    const [fox, setFox] = useState({
        ref: null,
        body: null,
        animation: "Idle",
    })

    return (
        <FoxContext.Provider value={{ fox, setFox }}> {/* Aquí usamos FoxContext con F mayúscula */}
            {children}
        </FoxContext.Provider>
    )
}
