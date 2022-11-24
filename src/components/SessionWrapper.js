import { useState, useEffect } from 'react';
import { supabase } from '.././client';
import EmployeeListing from './EmployeeListing';
import SessionInfo  from './SessionInfo';


const SessionWrapper = ({}) => {

  const [session, setSession] = useState({session_name: "", session_total_tips: ""});
  const {session_name, session_total_tips} = session;

  const [employeeInfo, setEmployeeInfo] = useState([]);
  const {employee_name, employee_hours, employee_tips} = employeeInfo;

  const updateSession = (sessionInfo) => {
    setSession(sessionInfo)
    // console.log(session);
  }

  const updateEmployeeSessionInfo = (employeeSessionInfo) => {
    setEmployeeInfo(employeeSessionInfo)
    console.log(employeeInfo)
  }

  async function saveSession() {
    console.log('clicked save')
    await supabase
      .from('sessions')
      .insert({ session_name, session_total_tips })
      setSession({session_name: "", session_total_tips: ""})
      //processEmployeeData()
  }


    return (
      <div className="w-full">

        <div className="flex justify-between">
        
          <SessionInfo inputHandler={updateSession} sessionInfo={session} />

          <EmployeeListing inputHandler={updateEmployeeSessionInfo} tips={session_total_tips}/>

        </div>

        <div className="block w-full my-12 border-inputbg border-t-2 pt-6">
            <button className="bg-[#118593] py-2 px-8 text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]
" onClick={saveSession}>Save Session</button>
        </div>

      </div>

    )
}

export default SessionWrapper;