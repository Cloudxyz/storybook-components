import './MyLabel.css';

interface Props {
    /**
     * Text to diplay
     */
    label: string;
    /**
     * Size of the text
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize all the text
     */
    allCaps?: boolean;
    /**
     * Color of the text
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Font color of the text
     */
    fontColor?: string;
}

export const MyLabel = ({
    label,
    size = 'h1',
    allCaps = false,
    color = 'text-primary',
    fontColor = 'black',
}:Props) => {
    return (
        <span
            className={`${size} ${color} ${fontColor} ${allCaps && 'capitalize'}`}
            style={{ color: fontColor }}
        >{ label }</span>
    )
}
