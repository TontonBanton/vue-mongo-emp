<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Employees</h4></li>

      <!-- Loop every employee in employees array dynamic bind employee.id as key -->
      <li v-for="employee in employees" v-bind:key="employee.employee_id" class="collection-item">
        <div class="chip">{{ employee.employee_id}}</div> {{ employee.name }} : {{employee.dept }}-{{ employee.position }}
        <!-- Route router/index.js name:view-employee, path: '/:employee_id (expecting the employee.empid value) -->
        <router-link :to="{ name: 'view-employee', params: { employee_id: employee.employee_id }}" class="secondary-content" >
          <i class="fa fa-eye"></i>
        </router-link>
      </li>

    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';

const employees = ref([]);

const fetchEmployees = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/employees');
    employees.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(fetchEmployees);
</script>

<style scoped>
</style>
