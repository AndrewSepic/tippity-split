import { useState, useEffect } from 'react';
import { supabase } from './../client';

const EmployeeListing = ({ }) => {

    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({employee_name: "", Hours: "", Tips: ""});
    const { employee_name, hours, tips } = employee;


    async function fetchEmployees() {
        const { data } = await supabase
          .from('employees')
          .select()
          setEmployees(data)
          console.log("data: ", data);
      }

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

    fetchEmployees();

    return (
        <div className="w-1/2">

          <h2 className="text-white py-2 text-xl font-bold border-b-2 border-[#24506c] mb-8">Staff</h2>

          <div className="employee-listing">
          {
              employees.map(employee => (
                <div key={employee.id} className="employee my-2 flex justify-start">
                  <h3 className="text-white py-2 w-[120px] font-bold">{employee.employee_name}</h3>
                  <input size="6" className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" placeholder="Hours" onChange={e => setEmployee({ ... employee, hours: e.target.value})}/>
                  <div className="w-[100px] text-darkgreen px-2 placeholder-darkgreen  border-emerald-300 border-b-2 pt-2" onChange={e => setEmployee({ ... employee, tips: e.target.value})}>Tips</div>
                </div>
              ))
            }
          </div>

          <div className="addEmployee mt-12">
                <input className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" placeholder="New Employee" value={employee_name} onChange={e => setEmployee({ ...employee, employee_name: e.target.value })} />

                <button className="bg-[#118593] py-2 px-4 text-white font-bold uppercase" onClick={createEmployee}>Add Employee</button>
          </div>   
    </div>
    )

}

export default EmployeeListing;