<template>
  <div class="base-tab-wrap">
    <div class="tab-item" v-for="(item, index) in props.tabList" :key="index" @click="handleClickTabs(item)">
      <div class="tab-item-title" :class="{ active: item.value == props.modelValue }">
        {{ item?.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emits = defineEmits('update:modelValue');
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  tabList: {
    type: Array,
    default: () => {
      return [];
    }
  }
});

const handleClickTabs = (item) => {
  emits('update:modelValue', item.value);
};
</script>
<style scoped lang="less">
.base-tab-wrap {
  display: flex;
  align-items: center;
}

.tab-item {
  margin-right: 24px;
}

.tab-item-title {
  cursor: pointer;
  color: rgba(205, 242, 255, 0.5);
  font-family: 'syht';
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  &.active {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: rgb(205, 242, 255);

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      // background:rgb(219, 106, 106);
      background: rgb(25, 167, 248);
      bottom: -7px;
      left: 0;
    }
  }
}
</style>
