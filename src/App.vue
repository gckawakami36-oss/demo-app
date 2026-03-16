<script setup>
import { ref } from 'vue'
import FoodCard from './components/FoodCard.vue'
const foods = ref([
  { name: '寿司', emoji: '🍣' },
  { name: 'ハンバーガー', emoji: '🍔' },
  { name: 'ピザ', emoji: '🍕' },
  { name: 'ラーメン', emoji: '🍜' },
  { name: 'アイスクリーム', emoji: '🍨' },
  { name: 'カレー', emoji: '🍛' },
  { name: 'サラダ', emoji: '🥗' },
  { name: 'ステーキ', emoji: '🥩' },
  { name: 'フライドチキン', emoji: '🍗' },
  { name: 'パンケーキ', emoji: '🥞' },
  { name: 'タコス', emoji: '🌮' },
  { name: 'ホットドッグ', emoji: '🌭' },
])
</script>

<template>
  <main>
    <h1 class="title">今日何食べる？</h1>
    <FoodCard :name="foods[0].name" :emoji="foods[0].emoji" />
    <p>VS</p>
    <FoodCard :name="foods[1].name" :emoji="foods[1].emoji" />
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
