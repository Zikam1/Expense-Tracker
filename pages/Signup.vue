<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
      <form @submit.prevent="handleSignup">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </button>
        <p class="mt-4 text-gray-600">
          Already have an account?
          <NuxtLink to="/login" class="text-blue-500 hover:underline">Login</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { auth } from '~/plugins/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');

const handleSignup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    // Redirect to the dashboard or another page
  } catch (error) {
    console.error('Signup error:', error);
  }
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
