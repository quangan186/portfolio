export interface Utilities{
    children: any,
    className?: string
}

export interface ImageModel extends Utilities{
    imgClassName?: string
}

export interface ButtonModel extends Utilities{
    type?: any,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}