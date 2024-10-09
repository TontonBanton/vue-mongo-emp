import { ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

export function useEmpActions() {
  const router = useRouter()
  const employees = ref([]);
  const employee = ref([])

const fetchAllEmployees = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/employees');
    employees.value = response.data;
    console.log(employees.value)
  } catch (error) {
    console.error(error);
  }
};

const fetchEmployeeById = async (mongoId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/employees/${mongoId}`);
    employee.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const saveEmployee = async (formEmpData) => {
  try {
    await axios.post('http://localhost:3000/api/employees', formEmpData);
    router.push('/');
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

const deleteEmployee= async (mongoId) => {
  try {
    await axios.delete(`http://localhost:3000/api/employees/${mongoId}`);
  } catch (error) {
    console.error(error);
  }
};

  return {
    employees,
    employee,
    fetchAllEmployees,
    fetchEmployeeById,
    saveEmployee,
    deleteEmployee
  }
}