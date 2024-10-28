<template>
  <div>
    <h1>Hello</h1>
    <div>Counter: {{ count }}</div>
    <button @click="handleClick">Click me</button>
  </div>
</template>
<script setup>
onMounted(() => {
  const t1 = performance.now();
  console.log(`log: Call to onMounted took ${t1 - window.t0} milliseconds.`);
});

const count = ref(0);
const handleClick = () => {
  count.value++;
};
</script>

<style>
body {
  font-family: Arial;
}
</style>
