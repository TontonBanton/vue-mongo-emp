<template>
 <div id="edit-employee">
    <h3>Edit Employee</h3>
    <div class="row">
      <form @submit.prevent="updateEmployee" class="col s12">

        <div class="row">
          <div class="input-field col s12">
            <input disabled ="text" v-model="employee_id" required>
            <label class="active">Employee ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label class="active">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required>
            <label class="active">Department</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required>
            <label class="active">Position</label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const data_id = ref('');
const employee_id = ref('');
const name = ref('');
const dept = ref('');
const position = ref('');

const fetchData = async () => {
  const employeeId = route.params.employee_id;
  try {
    const response = await axios.get(`http://localhost:3000/api/employees/${employeeId}`);
    const employee = response.data;
    data_id.value = employee._id
    employee_id.value = employee.employee_id;
    name.value = employee.name;
    dept.value = employee.dept;
    position.value = employee.position;
  } catch (error) {
    console.error('Error fetching employee data:', error);
  }
};

const updateEmployee = async () => {
  const employeeId = route.params.employee_id;
  try {
    await axios.put(`http://localhost:3000/api/employees/${employeeId}`, {
      employee_id: employee_id.value,
      name: name.value,
      dept: dept.value,
      position: position.value
    });
    router.push({ name: 'view-employee', params: { employee_id: data_id.value } });
  } catch (error) {
    console.error('Error updating employee:', error);
  }
};

onBeforeMount(fetchData);
</script>

<style scoped>
</style>
