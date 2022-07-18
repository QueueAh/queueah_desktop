export interface AntdTabsProps {
    data: SingleTabProps[]
    position?: "bottom" | "left" | "right" | "top"
}

export interface SingleTabProps {
    content: string | JSX.Element
    title: string
}