import React from 'react'
import { FaMinusCircle } from 'react-icons/fa'
import { supabase } from '../src/client'

const EmployeeListing = ({ employeeData, handleOnChange, fetchEmployees }) => {
    async function deactivateEmployee(name) {
        const { data, error } = await supabase
            .from('employees')
            .update({ is_active: false })
            .eq('employee_name', name)
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log('employee that was updated', data)
            fetchEmployees()
        }
    }

    if (employeeData) {
        return (
            <>
                {employeeData.map((employee) => (
                    <div
                        key={employee.id}
                        className="employee my-2 flex justify-start group items-center"
                    >
                        <h3 className="text-white py-2 w-[120px] font-bold">
                            {employee.name}
                        </h3>
                        <input
                            size="6"
                            className="bg-inputbg rounded mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                            placeholder="Hours"
                            onChange={(e) => {
                                handleOnChange(
                                    parseInt(e.target.value),
                                    employee.id
                                )
                            }}
                        />
                        <div className="w-[100px] text-white text-right px-2 placeholder-white  border-emerald-300 border-b-2 pt-2">
                            ${employee.tips}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-all p-2">
                            <FaMinusCircle
                                onClick={() =>
                                    deactivateEmployee(employee.name)
                                }
                                className="deleteEmployee pointer"
                            />
                        </div>
                    </div>
                ))}
            </>
        )
    } else {
        return 'Loading...'
    }
}

export default EmployeeListing
