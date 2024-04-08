'use client'
import React, {useEffect, useState } from 'react';
import { supabase } from '../src/client'
import { useSessionContext } from '../pages/Context/store';

const Nav = () => {

	const { user } = useSessionContext();
	
	const handleSignOut = async () => {
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
					Hi { user ? 
						user.user_metadata.name :
						'Friend' }!
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

export default Nav;
