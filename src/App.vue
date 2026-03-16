<script setup>
import FoodCard from './components/FoodCard.vue'
</script>

<template>
  <main>
    <h1 class="title">今日何食べる？</h1>
    <FoodCard />
    <p>VS</p>
    <FoodCard />
  </main>
</template>

<style scoped>
main {
  width: 350px;
  margin: 100px auto;
  text-align: center;
}
.title {
  margin-bottom: 60px;
}
</style>
