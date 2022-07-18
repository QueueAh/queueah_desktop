import { MouseEventHandler } from "react"

export interface closeButtonProps {
    click: MouseEventHandler<HTMLDivElement>
    type: "blank" | "modal"
}

export interface ModalComponent {
    component: JSX.Element
    content: JSX.Element
    type: "blank" | "modal"
}

export interface modalContentProps {
    click: MouseEventHandler<HTMLDivElement>
    content: JSX.Element
    type: "blank" | "modal"
}
