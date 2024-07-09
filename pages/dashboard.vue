<template>
    <div>
      <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  </template>
  
  <script setup>
  import ExpenseForm from '@/components/ExpenseForm.vue'
  import ExpenseList from '@/components/ExpenseList.vue'
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 2rem;
  }
  </style>
  