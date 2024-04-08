'use client'
import React, { createContext, useContext, useState } from 'react'

const SessionContext = createContext({
    session: {},
    setSession: () => '',
    user: '',
    setUser: () => '',
})

export const SessionContextProvider = ({ children }) => {
    const [session, setSession] = useState('')
    const [user, setUser] = useState('')

    return (
        <SessionContext.Provider value={{ session, setSession, user, setUser }}>
            {children}
        </SessionContext.Provider>
    )
}

export const useSessionContext = () => useContext(SessionContext)
