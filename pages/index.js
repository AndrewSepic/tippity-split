'use client'
import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import ContentLayout from '../components/ContentLayout'
import SessionWrapper from '../components/SessionWrapper'
import { supabase, getUser } from '../src/client'
import Login from '../components/Login'
import { useSessionContext } from '../Context/store'

function App() {
    const { setUser, setSession } = useSessionContext()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange(
            (event, activeSession) => {
                if (event === 'INITIAL_SESSION') {
                    // handle initial session
                    console.log('Initial session started')
                    if (activeSession !== null) {
                        setSession(activeSession)
                        setUser(activeSession.user)
                        setIsLoggedIn(true)
                        // console.log("session is", activeSession)
                    }
                } else if (event === 'SIGNED_OUT') {
                    console.log('Signing Out')
                    setSession(null)
                    setUser(null)
                    setIsLoggedIn(false)
                } else if (event === 'SIGNED_IN') {
                    console.log('Signing In')
                    // console.log("session is", activeSession)
                    setUser(activeSession.user)
                    setSession(activeSession)
                    setIsLoggedIn(true)
                } else if (activeSession) {
                    console.log('else runs')
                    setSession(activeSession)
                }
            }
        )

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    return (
        <div className="min-h-full">
            {isLoggedIn && <Nav />}

            <ContentLayout>
                {isLoggedIn ? (
                    <SessionWrapper />
                ) : (
                    <Login setIsLoggedIn={setIsLoggedIn} />
                )}
            </ContentLayout>
        </div>
    )
}

export default App
