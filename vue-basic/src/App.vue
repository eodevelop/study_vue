<template>
  <div id="app">
    <nav>
      <router-link to="/">홈</router-link> |
      <router-link to="/about">소개</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyButton from './components/MyButton.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyButton
  }
}
</script>

<style>
  nav {
    background-color: #f5f5f5;
    padding: 15px;
  }

  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #42b983;
  }

  nav a.router-link-exact-active {
    font-weight: bold;
  }
</style>