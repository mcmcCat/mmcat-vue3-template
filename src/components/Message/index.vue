<template>
  <!-- 设置动画名字，在style中设置对应类选择器，并设置动画 -->
  <transition name="message-fade">
    <!-- isShow控制显示隐藏（有了它才可触发动画） -->
    <!-- marginTop动态的计算，让message不间断地堆叠 -->
    <!-- styleClass给不同类型的message设置类名 -->
    <!-- {{message}} 展示传递过来的message-->
    <div v-show="isShow" :style="{ marginTop: marginTop + 'px', 'z-index': zIndex }" :class="styleClass">
      <i :class="iconClass"></i>
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'icon/iconfont.css';

// isShow控制显示隐藏
const isShow = ref(false);

// 定时器标识
let timer: any = null;

// margin-top响应式变量
const marginTop = ref(20);
// z-index响应式变量
const zIndex = ref(999);
// defineProps接收index.ts传过来的参数，withDefaults设置默认值
type Types = 'success' | 'warning' | 'error';
interface Props {
  type?: Types;
  message: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'success',
  message: 'success~',
});

// 类名变量，默认有message类，还有个动态的样式根据type来添加类名
const styleClass = ['message', props.type];
const iconClass = ['iconfont'];
if (props.type === 'success') {
  iconClass[1] = 'icon-ok-block';
} else if (props.type === 'warning') {
  iconClass[1] = 'icon-exclamation-point-block';
} else {
  iconClass[1] = 'icon-close-block';
}

// 显示message元素（有切换显示才会触发动画）
function setIsShow(flag) {
  // 返回promise是因为需要把同步变异步，不能show完就hide
  return new Promise(resolve => {
    isShow.value = flag;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      resolve('fade动画执行完成');
    }, 300);
  });
}

// 设置margin-top的方法
function setTop(newTop: number, newZIndex: number) {
  marginTop.value = newTop;
  zIndex.value = newZIndex;
}

// 暴露方法和属性到实例上（让index.ts中可以使用）
defineExpose({
  setIsShow,
  setTop,
  height: 30, // 信息框的高度
  consTop: 20, // 信息框的固定间距
  consZIndex: 999, // 最低层级
});
</script>

<style lang="scss" scoped>
.message {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 99999;
  padding: 0 20px;
  // width: 250px;
  height: 35px;
  font-size: 12px;
  border-radius: 3px;
  text-align: center;
  // 此处的过渡动画主要用在上边的message消失后上顶的动作
  transition: all 0.3s ease-out;
  transform: translateX(-50%);
  line-height: 35px;

  .iconfont {
    margin-right: 6px;
    font-size: 12px; //字体图标最低到12px
    vertical-align: middle; // 元素的中点与父元素的基线加一半 x-height 的位置对齐;
  }

  &.success {
    border: 1px solid #d1edc4;
    color: #529b2e;
    background-color: #e1f3d8;
  }

  &.warning {
    border: 1px solid #f8e3c5;
    color: #b88230;
    background-color: #faecd8;
  }

  &.error {
    border: 1px solid #fcd3d3;
    color: #c45656;
    background-color: #fde2e2;
  }
}

.message-fade-enter-active {
  transition: all 0.3s ease-in;
}

.message-fade-leave-active {
  transition: all 0.3s ease-out;
}

.message-fade-enter-from,
.message-fade-leave-to {
  top: -30px;
  opacity: 0;
}
</style>
