<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label for="name" class="block text-gray-700">Name</label>
            <input v-model="name" type="text" id="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input v-model="email" type="email" id="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700">Password</label>
            <input v-model="password" type="password" id="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Register</button>
        </form>
        <p class="mt-6 text-center">
          Already have an account? <nuxt-link to="/login" class="text-indigo-600">Login</nuxt-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
  
      const handleRegister = () => {
        // Handle registration logic here (e.g., call API, set auth state)
        console.log('Register with:', { name: name.value, email: email.value, password: password.value });
      };
  
      return {
        name,
        email,
        password,
        handleRegister,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  