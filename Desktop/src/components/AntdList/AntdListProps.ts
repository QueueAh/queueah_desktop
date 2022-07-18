export interface SingleListProps {
    avatar?: String;
    title: String;
    description: String;
    content: String | JSX.Element
}

export interface AntdListProps {
    data: SingleListProps[]
}