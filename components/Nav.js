import React from 'react';
import { supabase } from '../src/client'

const Nav = ({user}) => {

	const handleSignOut = async () => {
		console.log("clicked")
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.log("Failed to Signout.", error)
		}
    }

    return (
        <div className="w-full bg-white p-8 flex justify-between">
            <div className="">
                <img
                    className="w-[200px]"
                    src="/logo.svg"
                    alt="Tippity Split"
                />
            </div>
			<div>
				<span>
					Hi {user.user_metadata?.name}!
				</span>
				<a 
					href="#"
					onClick={handleSignOut}
					className="transition-all text-coinyellow hover:text-cashgreen ml-4">
						Sign Out
				</a>
			</div>
        </div>
    )
}

export default Nav
