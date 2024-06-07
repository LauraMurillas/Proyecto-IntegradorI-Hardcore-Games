import { AuthProvider } from "./context/AutenticacionContext";
import { AvatarProvider } from "./context/AvatarContext";
import { FoxProvider } from "./context/FoxContext";
import RoutesGabrielGame from "./routes/RoutesGabrielGame"

const Experience = () => {
    return (
        <AuthProvider>
            <FoxProvider>
                <RoutesGabrielGame />
        
            </FoxProvider>
        </AuthProvider>    
    )
}

export default Experience;