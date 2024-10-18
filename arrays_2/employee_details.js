const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Susan Williams', age: 32, department: 'Marketing', salary: 48000 },
    { id: 5, name: 'Michael Brown', age: 40, department: 'Sales', salary: 55000 },
    { id: 6, name: 'Emily Davis', age: 26, department: 'IT', salary: 52000 },
    { id: 7, name: 'James Wilson', age: 45, department: 'Finance', salary: 65000 },
    { id: 8, name: 'Linda Martinez', age: 29, department: 'HR', salary: 46000 },
    { id: 9, name: 'Robert Garcia', age: 38, department: 'Sales', salary: 57000 },
    { id: 10, name: 'Patricia Taylor', age: 31, department: 'Marketing', salary: 49500 }
  ];

// recorre cada elemento del array employees, y genera una cadena HTML con los detalles del empleado.
function displayEmployees(){
    const totalEmployees= employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name}- ${employee.department} - $${employee.salary}</p>`).join('');
                        document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// recorre el array employees y acumula el valor de los salarios en acc, comenzando en 0.
function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total salaries: $${totalSalaries}`)
}

// filter(): crea un nuevo array hrEmployees que contiene solo los empleados cuyo departamento es 'HR'.
// map(): genera la estructura HTML solo para los empleados del array filtrado.
function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}