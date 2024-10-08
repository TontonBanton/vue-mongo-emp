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
    form.employee_id = emp?.empid || '';  // Fallback in case emp is undefined
    form.name = emp?.name || '';
    form.dept = emp?.dept || '';
    form.position = emp?.position || '';
  };

  return { form, populateForm };
}
