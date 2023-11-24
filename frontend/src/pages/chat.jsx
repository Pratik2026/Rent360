import { Leftside } from "../components/chat/LeftChat"
import { Rightside } from "../components/chat/RightChat"

export const Chat = () => {
    return (
        <div className="flex relative w-90 h-90 bg-white shadow-sm">
            <Leftside />
            <Rightside />
        </div>

    )
}