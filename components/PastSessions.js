import React, { useEffect, useState } from 'react'
import { supabase } from '../src/client'

const PastSessions = ({ sessionViewHandler, newSessionCreated }) => {
    const [sessions, setSessions] = useState()

    useEffect(() => {
        getSessions()
    }, [])

	// Use effect to reload session when a new session has been saved
	useEffect(() => {
        getSessions()
    }, [newSessionCreated])

    async function getSessions() {
        const { data, error } = await supabase.from('sessions').select('*')

        if (data) {
            setSessions(data)
        }
        if (error) {
            console.error(error)
        }
    }

    return (
        <div className="block w-full border-inputbg border-t-2 mt-16 pt-4">
            <h2 className="text-white py-2 text-xl font-bold pb-4">
                Past Sessions
            </h2>
            {sessions && (
                <div className="flex items-end h-32">
                    {sessions.map((session) => {
                        return (
                            <div
                                key={session.id}
                                className="w120 h-24 bg-[#edead1] transition-all p-4 mr-4 rounded-t cursor-pointer hover:bg-[#d3cfaf] hover:h-32"
                                onClick={() => sessionViewHandler(session)}
                            >
                                <h3>{session.session_name}</h3>
                                <span className="font-bold">
                                    Total tips: ${session.session_total_tips}
                                </span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default PastSessions
