<template>
  <button @click="incrementCounter">
    클릭 횟수: {{ counter }}
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  }
}

</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #38a169;
}
</style>