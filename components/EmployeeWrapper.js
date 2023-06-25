import { useState, useEffect } from 'react';
//import { fetchEmployees, createEmployee } from '../functions/EmployeeFunctions.js'
import { supabase } from '../src/client';
import EmployeeListing from './EmployeeListing';

const EmployeeWrapper = ({inputHandler, totalTips}) => {
	console.log("employeeWrapper renders")

    // Single Employee to add to / remove from Supabase
    const [employee, setEmployee] = useState({employee_name: ""})
    const { employee_name } = employee

    // Session Info
    const [employeeSessionData, setEmployeeSessionData] = useState({totalHours: 0, employeeData: null})
    const handleOnChange = (employeeHours, employeeId) => {
		let tempEmployeeData = {...employeeSessionData}
      	let index = tempEmployeeData.employeeData.findIndex((i => i.id == employeeId))
      	tempEmployeeData.employeeData[index].hours = employeeHours
      	const totalHours = tempEmployeeData.employeeData.reduce(
        	(accumulator, currentValue) => accumulator + currentValue.hours, 0)

		if(totalTips) {
			tempEmployeeData.employeeData.forEach( employee => {
				employee.tips = ((totalTips * employee.hours)/ totalHours).toFixed(2)
			})
		}
      	
		setEmployeeSessionData({
			totalHours: totalHours,
			employeeData: tempEmployeeData.employeeData
		})
    }

    async function logEmployeeData() {
      console.log(employeeSessionData)
    }

    // Fetch's Employees & sets employeeSessionData & employees
    useEffect(() => {
      fetchEmployees()
    },[])

    async function fetchEmployees() {
      console.log('fetchemployees runs')
      const { data } = await supabase
        .from('employees')
        .select()
        .eq('is_active', true) 
        const newData = streamLinedData(data)
        setEmployeeSessionData({...employeeSessionData, employeeData: newData})
    }

    // Implicit return using parentheses
    const streamLinedData = (employeeData) => (
      employeeData.map((employee) => {
        return { 
          "name": employee.employee_name, 
          "id": employee.id,
          "hours": 0,
          "tips": 0
        }
      })
    )

    async function createEmployee() {
        await supabase
          .from('employees')
          .insert([
            {employee_name}
          ])
          .single()
          setEmployee({employee_name: ""})
          fetchEmployees()
      }


    return (
        <div className="w-1/2">

          <h2 className="text-white py-2 text-xl font-bold border-b-2 border-[#24506c] mb-8">Staff</h2>

          <div className="employee-listing">
            <div className="employee my-2 flex justify-start">
              <h3 className="text-[#588bac] border-[#24506c] border-b-2 py-2 w-[120px] font-bold">Name</h3>
              <h3 className="text-[#588bac] border-[#24506c] border-b-2 py-2 w-[120px] font-bold">Hours</h3>
              <h3 className="text-[#588bac] border-[#24506c] border-b-2 py-2 w-[120px] font-bold">Tips</h3>
            </div>
            
			<EmployeeListing employeeData={employeeSessionData.employeeData} handleOnChange={handleOnChange}/>
           
          </div>

          <div className="addEmployee mt-12">
                <input className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" placeholder="New Employee" value={employee_name} onChange={e => setEmployee({ ...employee, employee_name: e.target.value })} />

                <button className="bg-[#118593] py-2 px-4 text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]" onClick={createEmployee}>Add Employee</button>
          </div>

          <button className="bg-[#118593] py-2 px-4 text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]" onClick={logEmployeeData}>Show Log</button>
   
    </div>
    )

}

export default EmployeeWrapper;