import { useState, useEffect } from 'react';
//import { fetchEmployees, createEmployee } from '../functions/EmployeeFunctions.js'
import { supabase } from '../src/client';

const EmployeeListing = ({inputHandler, totalTips}) => {

    // Array of Employees from Supabase
    const [employees, setEmployees] = useState([])
    // Single Employee to add to / remove from Supabase
    const [employee, setEmployee] = useState({employee_name: ""})
    const { employee_name } = employee

    // Session Info
    const [totalHours, setTotalHours] = useState(0)
    const [employeeSessionData, setEmployeeSessionData] = useState([''])

    const updateTotalHours = (employeeHours, employeeId) => {
      let index = employeeSessionData.findIndex((i => i.id == employeeId))
      employeeSessionData[index].hours = employeeHours
      const reducedEmployeeHours = employeeSessionData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.hours, 0)
      console.log("total hours", reducedEmployeeHours)
      setTotalHours(reducedEmployeeHours)
    }

    const calculateTips = (employeeId) => {
		console.log(typeof totalTips)
		console.log("total Tips is", totalTips)
		let index = employeeSessionData.findIndex((i => i.id == employeeId))
		employeeSessionData[index].tips = ((totalTips * employeeSessionData[index].hours) / totalHours).toFixed(2)
      	setEmployeeSessionData(employeeSessionData)
    }

    async function logEmployeeData() {
      console.log(employeeSessionData)
    }

    // Fetch's Employees & sets employeeSessionData & employees
    useEffect(() => {
      fetchEmployees()
    },[])

    // Calculate Tips as Employee Hours are updated 
    // useEffect(() => {
    //   calculateTips()
    // },[totalHours])

    async function fetchEmployees() {
      console.log('fetchemployees runs')
      const { data } = await supabase
        .from('employees')
        .select()
        .eq('is_active', true) 
        setEmployees(data)
        const newData = streamLinedData(data)
        setEmployeeSessionData(newData)
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

          <div className="text-white py-2 text-xl">{totalHours}</div>
          <div className="text-white py-2 text-xl">{totalTips}</div>

          <h2 className="text-white py-2 text-xl font-bold border-b-2 border-[#24506c] mb-8">Staff</h2>

          <div className="employee-listing">
            <div className="employee my-2 flex justify-start">
              <h3 className="text-[#588bac] border-[#24506c] border-b-2 py-2 w-[120px] font-bold">Name</h3>
              <h3 className="text-[#588bac] border-[#24506c] border-b-2 py-2 w-[120px] font-bold">Hours</h3>
              <h3 className="text-[#588bac] border-[#24506c] border-b-2 py-2 w-[120px] font-bold">Tips</h3>
            </div>
            {employees.map((employee, index) => (
              <div key={employee.id} className="employee my-2 flex justify-start">
                <h3 className="text-white py-2 w-[120px] font-bold">{employee.employee_name}</h3>
                <input size="6" className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" 
                  placeholder="Hours" onChange={e => {
                    updateTotalHours(parseFloat(e.target.value), employee.id)
					calculateTips(employee.id)
                  }}/>
                <div className="w-[100px] text-white text-right px-2 placeholder-white  border-emerald-300 border-b-2 pt-2">${employeeSessionData[index].tips}</div>
              </div>
            ))
            }
          </div>

          <div className="addEmployee mt-12">
                <input className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" placeholder="New Employee" value={employee_name} onChange={e => setEmployee({ ...employee, employee_name: e.target.value })} />

                <button className="bg-[#118593] py-2 px-4 text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]" onClick={createEmployee}>Add Employee</button>
          </div>

          <button className="bg-[#118593] py-2 px-4 text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]" onClick={logEmployeeData}>Show Log</button>
   
    </div>
    )

}

export default EmployeeListing;