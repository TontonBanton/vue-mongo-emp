import { reactive } from 'vue';

export function useEmpForm() {
  const form = reactive({
    employee_id: '',
    name: '',
    dept: '',
    position: '',
  });

  // Populates form with the employee data.
  const populateForm = (emp) => {
    if (!emp) {
      console.error('No employee data to populate the form');
      return;
    }
    console.log('Populating form with:', emp);  // Add a log to see what's passed
    form.employee_id = emp.employee_id || '';
    form.name = emp.name || '';
    form.dept = emp.dept || '';
    form.position = emp.position || '';
  };

  return { form, populateForm };
}
