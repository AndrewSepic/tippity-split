import React, { useState, useEffect } from 'react'
import { supabase } from '../src/client'
import { FaAngleLeft } from 'react-icons/fa'

const SessionView = ({ session, closeSession }) => {
    const [sessionEmpData, setSessionEmpData] = useState([])

    useEffect(() => {
        getEmployeeData(session.id)
    }, [])

    async function getEmployeeData(id) {
        const { data, error } = await supabase
            .from('session_employee_data')
            .select()
            .eq('session_id', id)

        if (data) {
            console.log('session emp info is', data)
            setSessionEmpData(data)
        }
        if (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="block w-full my-12pt-6">
                <button
                    className="flex items-center bg-[#118593] py-2 px-8 mb-8 text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]"
                    onClick={closeSession}
                >
                    <FaAngleLeft /> Back
                </button>
            </div>
            <div className="bg-[#edead1] p-8 rounded flex justify-between">
                <div className="w-1/2 pb-8 pr-8">
                    <h2 className="text-darkgreen py-2 text-xl font-bold">
                        {session.session_name}
                    </h2>
                    <h3 className="text-darkgreen font-bold text-lg mt-4">
                        Total Tips:
                    </h3>
					<div className="text-3xl text-sessionText font-bold">
						${session.session_total_tips}
					</div>

					<h3 className="text-darkgreen font-bold text-lg mt-4">
                        Notes:
                    </h3>
					<div className="text-sessionText">
                       {session.session_notes}
					</div>
                        
                </div>

                <div className="w-1/2">
                    <h2 className="text-sessionText py-2 text-xl font-bold border-lightgreen border-b-2 border-dashed mb-8">
                        Staff
                    </h2>

                    <div className="employee-listing">
                        <div className="employee my-2 flex justify-start">
                            <h3 className="text-darkgreen border-lightgreen border-b-2 border-dashed  py-2 w-[120px] font-bold">
                                Name
                            </h3>
                            <h3 className="text-darkgreen border-lightgreen border-b-2 border-dashed text-center py-2 w-[120px] font-bold">
                                Hours
                            </h3>
                            <h3 className="text-darkgreen border-lightgreen border-b-2 border-dashed text-center py-2 w-[120px] font-bold">
                                Tips
                            </h3>
                        </div>

                        {sessionEmpData &&
                            sessionEmpData.map((employee) => (
                                <div
                                    key={employee.id}
                                    className="employee my-2 flex justify-start group items-center "
                                >
                                    <h3 className="text-sessionText py-2 w-[120px] font-bold border-lightgreen border-b-2 border-dashed">
                                        {employee.employee_name}
                                    </h3>
                                    <div className="w-[120px] text-sessionText text-center px-2 placeholder-white py-2 border-lightgreen border-b-2 border-dashed font-bold">
                                        {employee.employee_hours}
                                    </div>
                                    <div className="w-[120px] text-sessionText text-right px-2 placeholder-white py-2 border-lightgreen border-b-2 border-dashed font-bold">
                                        ${employee.employee_tips}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SessionView
