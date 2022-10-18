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
        <div>

          <div className="employee-listing">
          {
              employees.map(employee => (
                <div key={employee.id} className="employee my-2 flex justify-start">
                  <h3 className="text-white py-2 w-[120px]">{employee.employee_name}</h3>
                  <input className="bg-inputbg rounded mr-4 text-darkgreen px-2 placeholder-darkgreen" placeholder="Hours" onChange={e => setEmployee({ ... employee, hours: e.target.value})}/>
                  <input className="bg-inputbg rounded  text-darkgreen px-2 placeholder-darkgreen" placeholder="Tips" onChange={e => setEmployee({ ... employee, tips: e.target.value})}/>
                </div>
              ))
            }
          </div>

          <div className="addEmployee">
                <input placeholder="Name" value={employee_name} onChange={e => setEmployee({ ...employee, employee_name: e.target.value })} />

                <button onClick={createEmployee}>Create Employee</button>
          </div>   
    </div>
    )

}

export default EmployeeListing;