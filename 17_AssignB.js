class Employee {
    constructor(Emp_id, Emp_name, Emp_dept, Emp_salary,Emp_company){
       this.Emp_id = Emp_id;
       this.Emp_name = Emp_name;
       this.Emp_dept = Emp_dept;
       this.Emp_salary = Emp_salary;
       this.Emp_company = Emp_company;

    }
}
  const Emp_anil = new Employee(22,"Anil", "IT", 50000, "TCS");
  const Emp_radha = new Employee(33,"Radha", "HR", 74000, "Wipro");
  const Emp_rishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");
  const Emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
  const Emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
  const Emp_vinayak = new Employee(88,"Vinayak", "IT", 75000, "TCS");
  const Emp_Mahesh = new Employee(33,"Mahesh", "HR", 85000, "Infy");

  const array = [Emp_anil, Emp_radha, Emp_rishi, Emp_sonali, Emp_monika, Emp_vinayak, Emp_Mahesh];
  console.log(`1. Find all employee working in 'TCs' and log only employee names and company name on console`);
  for (const employee of array){
   if (employee.Emp_company == "TCS"){
       console.log(employee.Emp_name);
   }
  }
console.log("----------------------------------------------------------------------------------------------------------");
const array1 = [Emp_anil, Emp_radha, Emp_rishi, Emp_sonali, Emp_monika, Emp_vinayak, Emp_Mahesh];
console.log(`2. Find the finance department employee `);
  for (const employee of array1){
   if (employee.Emp_company == "TCS"){
       console.log(employee.Emp_name);
   }
  }

  console.log("-----------------------------------------------------------------------------------------------------");
  const array2 = [Emp_anil, Emp_radha, Emp_rishi, Emp_sonali, Emp_monika, Emp_vinayak, Emp_Mahesh];
  console.log(`3. Find employees whose name starts with "R" and employee details `);
  for (const employee of array){
   if (employee.Emp_company == "TCS" ){
       console.log(employee.Emp_name);
   }
  }
  console.log("--------------------------------------------------------------------------------------");
  const array2 = [Emp_anil, Emp_radha, Emp_rishi, Emp_sonali, Emp_monika, Emp_vinayak, Emp_Mahesh];
  console.log(`3. Find employees whose name starts with "R" and employee details `);
  for (const employee of array){
   if (employee.Emp_company == "TCS" ){
       console.log(employee.Emp_name);
   }
  }