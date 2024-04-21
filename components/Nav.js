'use client'
import React from 'react'
import { supabase } from '../src/client'
import { useSessionContext } from '../Context/store'
import { FaSignOutAlt } from 'react-icons/fa'

const Nav = () => {
    const { user } = useSessionContext()

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.log('Failed to Signout.', error)
        }
    }

    return (
        <div className="w-full bg-white p-6 flex justify-between">
            <div className="">
                <img
                    className="w-[200px]"
                    src="/logo.svg"
                    alt="Tippity Split"
                />
            </div>
            <div className="flex items-center">
                <span className="mr-4">Hi {user ? user.user_metadata.name : 'Friend'}!</span>
                <a href="#"
                    onClick={handleSignOut}
                    className="transition-all text-coinyellow hover:text-cashgreen ml-2 flex items-center"
                >
                    Sign Out
					<FaSignOutAlt className="ml-2"/>
                </a>
            </div>
        </div>
    )
}

export default Nav
