<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="brand">CByteBoulevard</router-link>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/#about">About</router-link>
        <router-link to="/admissions">Admissions</router-link>
        <router-link to="/#academics">Academics</router-link>
        <router-link to="/#campus-life">Campus Life</router-link>
        <router-link to="/#news">News</router-link>
        <router-link to="/sample-data">Sample Data</router-link>
        <router-link to="/sample-methods">Sample Methods</router-link>
        <router-link to="/sample-vmodel">Sample V-Model</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-weight: 700;
  font-size: 18px;
  color: #0f172a;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li{
  display: flex;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #475569;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #0f172a;
}

.nav-links a.router-link-exact-active {
  color: #0f172a;
  border-bottom: 2px solid #0f172a;
  font-weight: 700;
}
</style>