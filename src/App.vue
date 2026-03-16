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
const pickedFoodIndex = ref(0)
const newFoodIndex = ref(1)
function pickFood(index) {
  pickedFoodIndex.value = index
  newFoodIndex.value++
}
</script>

<template>
  <main>
    <h1 class="title">今日何食べる？</h1>
    <FoodCard
      :name="foods[pickedFoodIndex].name"
      :emoji="foods[pickedFoodIndex].emoji"
      @click="pickFood(pickedFoodIndex)"
    />
    <template v-if="newFoodIndex < foods.length">
      <p>VS</p>
      <FoodCard
        :name="foods[newFoodIndex].name"
        :emoji="foods[newFoodIndex].emoji"
        @click="pickFood(newFoodIndex)"
      />
    </template>
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
