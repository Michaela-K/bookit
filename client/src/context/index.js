import React, { createContext, useState } from 'react'
import { useEvents} from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){
  const [clickedEvent, setClickedEvent] = useState([]);
  const [currentEvents, setCurrentEvents] = useState([]);

    const eventData = useEvents()

    return (
        <TodoContext.Provider
            value={
                {
                  eventData,
                  clickedEvent,
                  setClickedEvent,
                  currentEvents,
                  setCurrentEvents
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }