import { useState, useEffect } from 'react';
import { supabase } from '.././client';

const SessionWrapper = ({}) => {

    const [session, setSession] = useState({session_name: "", session_total_tips: ""});
    const {session_name, session_total_tips} = session;
  
    async function saveSession() {
      console.log('clicked save')
      await supabase
        .from('sessions')
        .insert({ session_name, session_total_tips })
        setSession({session_name: "", session_total_tips: ""})
    }

    return(
        <div className="w-1/2 flex flex-col justify-between">

            <div className="block">
                <h2 className="text-white py-2 text-xl font-bold">Session Name</h2>
                <input size="50" className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" placeholder="Put a name or Pay period here" value={session_name} onChange={e => setSession({ ... session, session_name: e.target.value})}></input>
            </div>

            <div className="block">
                <h2 className="text-white py-2 text-xl font-bold">Total Tips</h2>
                <span className="text-white py-2 text-xl font-bold">
                    $ <input size="6" className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" placeholder="0.00" value={session_total_tips} onChange={e => setSession({ ... session, session_total_tips: e.target.value})}></input>
                </span>
            </div>

            <div className="block">
                <button className="bg-[#118593] py-2 px-4 text-white font-bold uppercase" onClick={saveSession}>Save Session</button>
                {
                //console.log(session)
                }
            </div>
            
        </div>
       
    )
}

export default SessionWrapper;