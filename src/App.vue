<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Upload</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html {
  background-color: rgba(0, 0, 0, 0.931);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  padding: 5%;
}

#nav a.router-link-exact-active {
  color: #ffd000;
}
</style>
