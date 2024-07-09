<template>
    <div>
      <h2 class="text-xl font-bold mb-4">Expense List</h2>
      <ul class="bg-white shadow-md rounded-lg p-4">
        <li v-for="(expense, index) in expenses" :key="index" class="border-b last:border-b-0 py-2 flex justify-between">
          <span>{{ expense.description }}</span>
          <span>{{ expense.amount | currency }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const expenses = ref([
    { description: 'Foodstuffs', amount: 50000 },
    { description: 'Transport', amount: 20000 },
    { description: 'Utilities', amount: 10000 },
    // Add more expenses as needed
  ])
  
  // Custom currency filter
  import { defineNuxtPlugin } from '#app'
  defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.config.globalProperties.$filters = {
      currency(value) {
        return `$${parseFloat(value).toFixed(2)}`
      }
    }
  })
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  </style>
  