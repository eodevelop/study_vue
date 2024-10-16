<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/vue.svg">
    <HelloWorld msg="Vue.js 앱에 오신 것을 환영합니다!" />
    <MyButton />
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
/* 글로벌 스타일을 여기에 추가할 수 있습니다. */
</style>