import { useTransition, animated } from "@react-spring/web";
import { useLocation, Routes } from "react-router-dom";
import { createContext, useContext } from "react";

const NavigationContext = createContext(null);
export const useNavigation = () => useContext(NavigationContext);

export function AnimatedRoutes({ children }) {
    const location = useLocation();
    const transitions = useTransition(location, {
        from: { opacity: 0, transform: "translateX(100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
        config: { tension: 220, friction: 20 },
    });

    return (
        <NavigationContext.Provider value={location.pathname}>
            <div style={{ position: "relative" }}>
                {transitions((style, location) => (
                    <animated.div
                        style={{
                            ...style,
                            position: "absolute",
                            width: "100%"
                        }}
                    >
                        <Routes location={location}>{children}</Routes>
                    </animated.div>
                ))}
            </div>
        </NavigationContext.Provider>
    );
}
