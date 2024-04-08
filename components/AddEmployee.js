import React, { useState } from 'react'
import { supabase } from '../src/client'
import { useSessionContext } from '../Context/store'

const AddEmployee = ({ fetchEmployees }) => {
    // Single Employee to add to / remove from Supabase
    const { user } = useSessionContext()
    const userId = user.id
    const [employee, setEmployee] = useState({ employee_name: '' })
    const { employee_name } = employee

    async function createEmployee() {
        await supabase
            .from('employees')
            .insert([{ employee_name, is_active: 'true', user_id: userId }])
            .single()
        setEmployee({ employee_name: '' })
        fetchEmployees()
    }

    return (
        <div className="addEmployee mt-12">
            <input
                className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                placeholder="New Employee"
                value={employee_name}
                onChange={(e) =>
                    setEmployee({ ...employee, employee_name: e.target.value })
                }
            />

            <button
                className="bg-[#118593] py-2 px-4 text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]"
                onClick={createEmployee}
            >
                Add Employee
            </button>
        </div>
    )
}

export default AddEmployee
