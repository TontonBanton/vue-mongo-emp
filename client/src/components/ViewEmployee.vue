<script setup>
import { useEmpActions } from '@/composables/useEmpActions';
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const  { employee, fetchEmployeeById, deleteEmployee } = useEmpActions()
const route = useRoute();
const routeEmpId = route.params.employee_id;
const router = useRouter();

const fetchData = async () => {
  await fetchEmployeeById(routeEmpId)
}

const handleDelete = async () => {
  await deleteEmployee(routeEmpId)
  router.push('/');
};

onBeforeMount(fetchData);
</script>

<template>
  <div id="view-employee">
    <ul v-if="employee" class="collection with-header">
      <li class="collection-header"><h4>{{ employee.name }}</h4></li>
      <li class="collection-item">Employee Id: {{ employee.employee_id }}</li>
      <li class="collection-item">Department: {{ employee.dept }}</li>
      <li class="collection-item">Position: {{ employee.position }}</li>

      <div class="fixed-action-btn">
        <router-link :to="{ name: 'edit-employee', params: { emp_id: employee._id }}" class="btn-floating btn-large red">
          <i class="fa fa-pencil"></i>
        </router-link>
      </div>
    </ul>

    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="handleDelete" class="btn red">Delete</button>
  </div>
</template>
