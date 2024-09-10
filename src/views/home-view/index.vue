<template>
  <div class="base-name">
    {{ name }}
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const name = ref('HomeView');

</script>

<style lang='less' scoped>
.base-name {
  font-size: 16px;
  color: red;
  background-color: antiquewhite;
}
</style>