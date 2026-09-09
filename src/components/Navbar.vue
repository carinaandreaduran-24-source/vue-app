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
  max-width: 960px;
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
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #475569;
  font-size: 14px;
  font-weight: 600;
}

.nav-links a.router-link-exact-active {
  color: #0f172a;
  border-bottom: 2px solid #0f172a;
}
</style>