const EmployeeListing = ({ employeeData, handleOnChange }) => {
  console.log("employeeListing renders");
  console.log("employeeData is", employeeData);

  if (employeeData) {
    return (
      <>
        {employeeData.map((employee) => (
          <div key={employee.id} className="employee my-2 flex justify-start">
            <h3 className="text-white py-2 w-[120px] font-bold">
              {employee.name}
            </h3>
            <input
              size="6"
              className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
              placeholder="Hours"
              onChange={(e) => {
                handleOnChange(parseInt(e.target.value), employee.id);
              }}
            />
            <div className="w-[100px] text-white text-right px-2 placeholder-white  border-emerald-300 border-b-2 pt-2">
              ${employee.tips}
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return "Loading...";
  }
};

export default EmployeeListing;
