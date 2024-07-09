<template>
    <div>
      <h2 class="text-xl font-bold mb-4">Select</h2>
      <form @submit.prevent="addExpense" class="bg-white shadow-md rounded-lg p-4">
        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
          <input
            v-model="description"
            type="text"
            id="description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label for="amount" class="block text-gray-700 font-bold mb-2">Amount</label>
          <input
            v-model="amount"
            type="number"
            id="amount"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Expense
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const description = ref('')
  const amount = ref('')
  
  const addExpense = () => {
    // Function to add expense (dummy implementation)
    console.log(`Added expense: ${description.value} - $${amount.value}`)
  }
  </script>
  
  <style scoped>
  form {
    max-width: 400px;
    margin: auto;
  }
  </style>
  