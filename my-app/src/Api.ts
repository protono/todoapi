import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:4000'

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(baseUrl + '/todos')
        return todos
    } catch (error) {
        throw error
    }
}
export const addTodo = async (formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<ITodo, '_id' | 'created_at' | 'updated_at'> = {
            name: formData.name,
            description: formData.description,
            status: false,
        }
        const savedTodo: AxiosResponse<ApiDataType> = await axios.post(baseUrl + '/add-todo', todo)
        return savedTodo
    } catch (error) {
        throw error
    }
}
export const updateTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const update: Pick<ITodo, 'status'> = { status: true }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(`${baseUrl}/edit-todo/${todo._id}`, update)
        return updatedTodo
    } catch (error) {
        throw error
    }
}
export const deleteTodo = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/delete-todo/${_id}`)
        return deletedTodo
    } catch (error) {
        throw error
    }
}