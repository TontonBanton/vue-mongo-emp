<template>
  <div id="view-employee">
    <ul v-if="employee" class="collection with-header">
      <li class="collection-header"><h4>{{ employee.name }}</h4></li>
      <li class="collection-item">Employee Id: {{ employee.employee_id }}</li>
      <li class="collection-item">Department: {{ employee.dept }}</li>
      <li class="collection-item">Position: {{ employee.position }}</li>

      <div class="fixed-action-btn">
        <router-link :to="{ name: 'edit-employee', params: { employee_id: employee._id }}" class="btn-floating btn-large red">
          <i class="fa fa-pencil"></i>
        </router-link>
      </div>
    </ul>

    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteEmployee" class="btn red">Delete</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const employee = ref(null);

const fetchData = async () => {
  try {
    const employeeId = route.params.employee_id;
    console.log(employeeId)
    const response = await axios.get(`http://localhost:3000/api/employees/${employeeId}`);
    employee.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteEmployee = async () => {
  try {
    const employeeId = route.params.employee_id;
    await axios.delete(`http://localhost:3000/api/employees/${employeeId}`);
    router.push('/');
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(fetchData);
</script>
