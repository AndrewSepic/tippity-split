import { useState, useEffect } from 'react'
import { supabase } from '../src/client'
import EmployeeWrapper from './EmployeeWrapper'
import SessionInfo from './SessionInfo'
import { streamLinedData } from './utils/utils.js'
import PastSessions from './PastSessions.js'
import SessionView from './SessionView.js'
import { useSessionContext } from '../Context/store.js'
import toast from 'react-hot-toast';


const SessionWrapper = ({}) => {
    const [session, setSession] = useState({
        session_name: '',
        session_total_tips: '',
        session_notes: '',
    })

	const [ newSessions, setNewSessions ] = useState(0);

    const { user } = useSessionContext()
    const userId = user.id
    const [isSessionView, setIsSessionView] = useState(false)
    const [clickedSession, setClickedSession] = useState(null)
    const [employeeSessionData, setEmployeeSessionData] = useState({
        totalHours: 0,
        employeeData: null,
    })

    function toggleSessionView(session) {
        setClickedSession(session)
        setIsSessionView((prevState) => !prevState)
    }

    const updateSession = (sessionInfo) => {
        setSession(sessionInfo)
    }

    async function saveSession() {
        const { data, error } = await supabase
            .from('sessions')
            .insert({
                session_name: session.session_name,
                session_total_tips: session.session_total_tips,
                session_notes: session.session_notes,
                user_id: userId,
            })
            .select()

        if (error) {
			toast.error('Error: There was a problem saving your session.')
            console.log(error)
        }
        if (data) {
            console.log('session data written to supa', data)
            writeEmployeeData(data[0].id, employeeSessionData)
            
			// Reset state after Save
            setSession({ session_name: '', session_total_tips: '', session_notes: ''})
            const resetEmployees = streamLinedData(
                employeeSessionData.employeeData
            )
			// THis is returning undefined on all Names (removing names from employee listing) 
			// & hours are 0 but aren't being rendered/updated in Employee listing.
			console.log('reset is', resetEmployees)
            setEmployeeSessionData({
                totalHours: 0,
                employeeData: resetEmployees,
            })
			setNewSessions(newSessions + 1)
        }
    }

    async function writeEmployeeData(sessionId, employeeSessionData) {
        const { data, error } = await supabase
            .from('session_employee_data')
            .insert(
                employeeSessionData.employeeData.map((employee) => {
                    return {
                        session_id: sessionId,
                        employee_name: employee.employee_name,
                        employee_id: employee.id,
                        employee_hours: employee.hours,
                        employee_tips: employee.tips,
                        user_id: userId,
                    }
                })
            )
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
			toast.success('Session saved!')
            // console.log('employee data written to supa', data)
        }
    }

    return (
		<>
			<div className="w-full">
				{isSessionView && (
					<>
						<SessionView
							session={clickedSession}
							closeSession={toggleSessionView}
						/>
					</>
				)}

				{!isSessionView && (
					<>
						<div className="flex justify-between">
							<SessionInfo
								inputHandler={updateSession}
								sessionInfo={session}
							/>

							<EmployeeWrapper
								employeeSessionData={employeeSessionData}
								setEmployeeSessionData={setEmployeeSessionData}
								totalTips={session.session_total_tips}
							/>
						</div>

						<div className="block w-full my-12pt-6">
							<button
								className="bg-[#118593] py-2 px-8 rounded text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]"
								onClick={saveSession}
							>
								Save Session
							</button>
						</div>
					</>
				)}
			</div>
			<PastSessions sessionViewHandler={toggleSessionView} newSessionCreated={newSessions} />
		</>
    )
}

export default SessionWrapper
