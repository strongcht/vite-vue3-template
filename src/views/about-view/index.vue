<template>
  <div class="base-name">
    {{ name }}
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const name = ref('AboutView');

</script>

<style lang='less' scoped>
.base-name {
  font-size: 16px;
  color: blue;
  background-color: antiquewhite;
}
</style>