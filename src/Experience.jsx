import { AvatarProvider } from "./context/AvatarContext";
import { FoxProvider } from "./context/FoxContext";
import RoutesSquidGames from "./routes/RoutesSquidGames"

const Experience = () => {
    return (
        <FoxProvider>
            <RoutesSquidGames />
        </FoxProvider>
    )
}

export default Experience;