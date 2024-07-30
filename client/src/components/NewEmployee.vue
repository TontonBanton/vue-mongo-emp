<template>
<div id="new-employee">
  <h3>New Employee</h3>
  <div class="row">
    <form @submit.prevent="saveEmployee" class="col s12">

      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="employee_id" required>
          <label>Employee ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
          <label>Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="dept" required>
          <label>Department</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="position" required>
          <label>Position</label>
        </div>
      </div>

      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
</div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const employee_id = ref('');
const name = ref('');
const dept = ref('');
const position = ref('');

const saveEmployee = async () => {
  try {
    await axios.post('http://localhost:3000/api/employees', {
      employee_id: employee_id.value,
      name: name.value,
      dept: dept.value,
      position: position.value
    });
    router.push('/');
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
</script>

<style scoped>
</style>