<script setup>
import FormEmp from './FormEmp.vue';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useEmpForm } from '@/composables/useEmpForm'
import { useEmpActions } from '@/composables/useEmpActions'

const route = useRoute();
const routeEmpId = route.params.empid

const { form, populateForm } = useEmpForm()
const { employee, fetchEmployeeById } = useEmpActions();

const fetchData = async () => {
  await fetchEmployeeById(routeEmpId);
  populateForm(employee.value);
};

const updateEmployee = async () => {
  try {
    await axios.put(`http://localhost:3000/api/employees/${routeEmpId}`, {
      employee_id: employee_id.value,
      name: name.value,
      dept: dept.value,
      position: position.value
    });
    router.push({ name: 'view-employee', params: { emp_id: data_id.value } });
  } catch (error) {
    console.error('Error updating employee:', error);
  }
};

onBeforeMount(fetchData);
</script>

<template>
 <div id="edit-employee">
    <h3>Edit Employee</h3>
    <FormEmp :form="form" :isEditing="true" :submitAction="(form) => updateEmployee(routeEmpId, form)" />
  </div>
</template>


