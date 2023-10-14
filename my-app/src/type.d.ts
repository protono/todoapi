interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    created_at: string
    updated_at: string
}
interface TodoProps {
    todo: ITodo
}
type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}
