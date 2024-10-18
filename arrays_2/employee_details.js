const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Backend Development' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Talent Acquisition' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Financial Analysis' },
    { id: 4, name: 'Susan Williams', age: 32, department: 'Marketing', salary: 48000, specialization: 'Content Strategy' },
    { id: 5, name: 'Michael Brown', age: 40, department: 'Sales', salary: 55000, specialization: 'Sales Strategy' },
    { id: 6, name: 'Emily Davis', age: 26, department: 'IT', salary: 52000, specialization: 'Frontend Development' },
    { id: 7, name: 'James Wilson', age: 45, department: 'Finance', salary: 65000, specialization: 'Corporate Accounting' },
    { id: 8, name: 'Linda Martinez', age: 29, department: 'HR', salary: 46000, specialization: 'Employee Relations' },
    { id: 9, name: 'Robert Garcia', age: 38, department: 'Sales', salary: 57000, specialization: 'Client Management' },
    { id: 10, name: 'Patricia Taylor', age: 31, department: 'Marketing', salary: 49500, specialization: 'SEO and SEM' }
  ];
  

// recorre cada elemento del array employees, y genera una cadena HTML con los detalles del empleado.
function displayEmployees(){
    const totalEmployees= employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name}- ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
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
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}- ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}- ${foundEmployee.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findEmployeeBySpecialization(employeeSpecialization){
    const foundEmployeeSpecialization = employees.find(employee => employee.specialization === employeeSpecialization);
    if (foundEmployeeSpecialization){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployeeSpecialization.id}: ${foundEmployeeSpecialization.name}: ${foundEmployeeSpecialization.name} - ${foundEmployeeSpecialization.department} - $${foundEmployeeSpecialization.salary} - ${foundEmployeeSpecialization.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialization';
    }
}