import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import ContentLayout from '../components/ContentLayout'
import SessionWrapper from '../components/SessionWrapper'
import { supabase, getUser } from '../src/client'
import Login from '../components/Login'

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [ user, setUser ] = useState({})

	async function getUser() {
		const { data: { user } } = await supabase.auth.getUser()

		return user;
	}
	useEffect(()=> {
		const { data } = supabase.auth.onAuthStateChange((event, session) => {
			console.log(event, session)
		  
			if (event === 'INITIAL_SESSION') {
			  // handle initial session
			  console.log("Initial session started");
			  if( session !== null) {
				  setIsLoggedIn(true);
				  const activeUser = getUser();			  			
				  console.log("user is", activeUser);
				  setUser(activeUser);
			  }
			} else if (event === 'SIGNED_IN') {
			  // handle sign in event
			  console.log("signed In");
			} else if (event === 'SIGNED_OUT') {
			  // handle sign out event
			  console.log("Signed Out Event");
			  setUser(null);
			  setIsLoggedIn(false);
			} else if (event === 'PASSWORD_RECOVERY') {
			  // handle password recovery event
			} else if (event === 'TOKEN_REFRESHED') {
			  // handle token refreshed event
			} else if (event === 'USER_UPDATED') {
			  // handle user updated event
			}
		    // call unsubscribe to remove the callback
  			data.subscription.unsubscribe()
		  })  

	},[])

    return (
        <div className="min-h-full">
            {isLoggedIn && <Nav user={user} />}

            <ContentLayout>
                {isLoggedIn ? <SessionWrapper /> : <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
            </ContentLayout>
        </div>
    )
}

export default App
