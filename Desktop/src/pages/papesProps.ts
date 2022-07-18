import { ReactElement } from "react";

export interface PagesProps {
    key: string;
    path: string;
    element: JSX.Element;
    icon?: ReactElement<any, any>;
}