<template>
    <div class="bg-gray-100 min-h-screen">
      <div class="container mx-auto px-6 py-12">
        
        <!-- Dashboard Header -->
        <header class="mb-12 text-center">
          <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
          <p class="text-xl">Manage your expenses efficiently</p>
        </header>

        
        <!-- Summary Cards -->
        <div class="flex flex-wrap -mx-3 mb-12">
          <div class="w-full md:w-1/3 px-3 mb-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold mb-2">Total Expenses</h2>
              <p class="text-xl">$1200</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold mb-2">Monthly Budget</h2>
              <p class="text-xl">$1500</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold mb-2">Remaining Budget</h2>
              <p class="text-xl">$300</p>
            </div>
          </div>
        </div>
  
        <!-- Form and List -->
        <div class="flex flex-wrap -mx-3">
          <div class="w-full lg:w-2/3 px-3 mb-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold mb-4">Add New Expense</h2>
              <ExpenseForm />
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-3 mb-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-2xl font-bold mb-4">Recent Expenses</h2>
              <ExpenseList />
            </div>
          </div>
        </div>
      </div>
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
  