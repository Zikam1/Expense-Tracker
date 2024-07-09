<template>
    <nav class="bg-blue-500 p-4 text-white">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Expense Tracker</h1>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
          <li><NuxtLink to="/profile">Profile</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  // No additional scripts needed here for now.
  </script>
  
  <style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
  </style>
  