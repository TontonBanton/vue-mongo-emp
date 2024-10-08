import { ref } from 'vue'
import axios from 'axios'

export function useEmpActions() {
  const employees = ref({});

const fetchAllEmployees = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/employees');
    employees.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

  return { employees, fetchAllEmployees }
}