<script setup>
  import { useEmpActions } from '@/composables/useEmpActions';
  import { onBeforeMount } from 'vue';

  const  { employees, fetchAllEmployees } = useEmpActions()
  onBeforeMount(fetchAllEmployees);
</script>

<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Employees</h4></li>

      <li v-for="employee in employees" v-bind:key="employee.employee_id" class="collection-item">
        <div class="chip">{{ employee.employee_id}}</div> {{ employee.name }} : {{employee.dept }}-{{ employee.position }}
        <router-link :to="{ name: 'view-employee', params: { employee_id: employee._id }}" class="secondary-content" >      <!--Pass the monggoDB _id object  -->
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

