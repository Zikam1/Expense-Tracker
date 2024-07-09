
   <template>
    <div class="bg-gray-100 min-h-screen">
      <!-- Hero Section -->
      <section class="bg-blue-500 text-white py-20">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-5xl font-bold mb-6">Welcome to Zikam's Tracker</h1>
          <p class="text-xl mb-6">Track your expenses easily and efficiently.</p>
          <NuxtLink to="/dashboard" class="bg-white text-blue-500 py-2 px-4 rounded-full font-bold hover:bg-gray-200">Get Started</NuxtLink>
        </div>
      </section>
    
      <!-- Features Section -->
      <section class="container mx-auto px-6 py-20">
        <h2 class="text-4xl font-bold text-center mb-12">Features</h2>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/3 px-3 mb-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-2xl font-bold mb-4">Easy to Use</h3>
              <p>Our intuitive interface makes tracking your expenses a breeze.</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-2xl font-bold mb-4">Secure</h3>
              <p>Your data is safe with us, protected by industry-leading security measures.</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-2xl font-bold mb-4">Detailed Reports</h3>
              <p>Generate detailed reports to analyze your spending habits and manage your finances better.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="bg-blue-500 text-white py-20">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-6">Ready to start tracking your expenses?</h2>
          <NuxtLink to="/dashboard" class="bg-white text-blue-500 py-2 px-4 rounded-full font-bold hover:bg-gray-200">Get Started Now</NuxtLink>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // No additional scripts needed here for now.
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  