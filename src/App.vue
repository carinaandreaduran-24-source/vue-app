<template>
  <div class="app-container">
    <Navbar />
    
    <!-- RouterView swaps between HomeView and AdmissionsView -->
    <RouterView /> 

    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'; // Ensure this matches your exact filename
import Footer from './components/Footer.vue';
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: #F5F6FA; font-family: Arial, sans-serif; }
</style>