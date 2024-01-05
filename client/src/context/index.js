import React, { createContext, useState } from 'react'
import { useEvents} from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){
    // const [selectedTodo, setSelectedTodo] = useState(undefined)
    // const [selectedProjectToEdit, setSelectedProjectToEdit] = useState(undefined)
    // const [editProjectModal, setEditProjectModal] = useState(false)

    const eventData = useEvents()

    return (
        <TodoContext.Provider
            value={
                {
                  eventData
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }