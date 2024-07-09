<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-3xl font-bold mb-6 text-center text-indigo-600">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :class="{ 'border-red-500': emailError }"
            />
            <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 font-semibold">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :class="{ 'border-red-500': passwordError }"
            />
            <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
          </div>
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <p class="mt-6 text-center">
          Don't have an account? <nuxt-link to="/register" class="text-indigo-600">Register</nuxt-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const emailError = ref(null);
      const passwordError = ref(null);
  
      const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };
  
      const handleLogin = () => {
        emailError.value = !validateEmail(email.value) ? 'Invalid email address' : null;
        passwordError.value = password.value.length < 6 ? 'Password must be at least 6 characters' : null;
  
        if (!emailError.value && !passwordError.value) {
          // Handle login logic here (e.g., call API, set auth state)
          console.log('Login with:', { email: email.value, password: password.value });
        }
      };
  
      return {
        email,
        password,
        emailError,
        passwordError,
        handleLogin,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Additional custom styles */
  </style>
  