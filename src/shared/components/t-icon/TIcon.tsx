import {IconBaseProps, IconType} from "react-icons";
import {IconSize} from "../../../models/IconSizes.ts";
import {IconColorEnum} from "../../../models/IconColors.ts";

interface CustomIconProps extends IconBaseProps {
    Icon: IconType;
}

const sizeClassMap: { [key in IconSize]: string } = {
    '1x': 'text-xs',
    '2x': 'text-sm',
    '3x': 'text-base',
    '4x': 'text-lg',
    '5x': 'text-xl',
    '6x': 'text-2xl',
    '7x': 'text-3xl',
};

export default function TIcon(props: CustomIconProps) {
    const {Icon, size = '6x', color = IconColorEnum.PRIMARY} = props;
    const sizeClass = sizeClassMap[size];
    return <Icon className={`${sizeClass} ${color}`}/>;
}
