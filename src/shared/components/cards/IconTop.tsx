import {IconType} from "react-icons";
import TIcon from "../t-icon/TIcon.tsx";

interface IconTopProps {
    title: string,
    Icon: IconType
}

export default function IconTop(props: IconTopProps) {
    return (
        <div className="bg-primary-shade px-2 py-2 rounded justify-center">
            <TIcon Icon={props.Icon}></TIcon>
            <div className="text-primary font-medium text-xs mt-1">{props.title}</div>
        </div>
    )
}
