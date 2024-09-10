<template>
  <div class="layout-wrap">
    <div class="header-wrap">
      <BaseTab v-model="currentTab" :tab-list="tabList"></BaseTab>
    </div>
    <router-view />
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import BaseTab from '@/components/base-tab/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentTab = ref('/home');
const tabList = [
  {
    label: 'Home',
    value: '/home',
  },
  {
    label: 'About',
    value: '/about',
  }
];
watch(currentTab, (val) => {
  router.push(val)
});
</script>

<style lang='less' scoped>
.layout-wrap {
  width: 100%;
  height: 100%;

  .header-wrap {
    text-align: center;
    height: 36px;
    width: 100%;
    background-color: #000;
  }
}
</style>