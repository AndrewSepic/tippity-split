
export const streamLinedData = (employeeData) => {
	const freshData = employeeData.map((employee) => {
	  return {
		name: employee.employee_name,
		id: employee.id,
		hours: 0,
		tips: 0,
	  };
	});

	return freshData;
}