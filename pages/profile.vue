<template>
    <div class="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold mb-6">Profile</h1>
      <p class="mb-4">Manage your profile settings.</p>
      <div class="flex flex-col md:flex-row">
        <!-- Profile Picture Section -->
        <div class="md:w-1/3 mb-6 md:mb-0 md:mr-6">
          <div class="flex justify-center">
            <img class="w-48 h-48 px-0 rounded-full object-cover" src="../assets/mangae.PNG" alt="Profile Picture">
          </div>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Change Picture</button>
        </div>
        <!-- Profile Details Form -->
        <div class="md:w-2/3">
          <form class="space-y-6">
            <!-- Personal Information -->
            <div>
              <h2 class="text-xl font-semibold mb-4">Personal Information</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Your Name">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="your.email@example.com">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Your Phone Number">
                </div>
              </div>
            </div>
            <!-- Account Settings -->
            <div>
              <h2 class="text-xl font-semibold mb-4">Account Settings</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="New Password">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Confirm New Password">
                </div>
                <div class="flex items-center">
                  <input type="checkbox" class="form-checkbox text-blue-500">
                  <label class="ml-2 block text-sm text-gray-700">Receive Email Notifications</label>
                </div>
              </div>
            </div>
            <!-- Save Changes Button -->
            <div>
              <button type="submit" class="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional scripts needed here for now.
  </script>
  
  <style scoped>
  p {
    font-size: 1.25rem;
  }
  </style>
  