export default function createReportObject(employeesList) {
  const allEmployees = employeesList;

  const reportObject = {
    allEmployees,
    getNumberOfDepartments: function (allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };

  return reportObject;
}
