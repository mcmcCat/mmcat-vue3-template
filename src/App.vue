<template>
  <img alt="mcmcCat logo" src="@/assets/images/mcmcCat.jpg" style="width: 100px" />
  <div class="title">mcmcCat的工程化集成</div>

  <router-view></router-view>
  <p>
    pinia存储在localStorage的数据：{{ Test.current }}
    <button @click="Test.add()">+</button>
  </p>

  <div class="message-btns">
    <p>尝试一下自定义组件吧~~</p>
    <button @click="show1">success</button>
    <button @click="show2">warning</button>
    <button @click="show3">error</button>
  </div>
</template>

<script setup lang="ts">
import tyMessage from './components/Message/index';
import { useTestStore } from './store/index';

const Test = useTestStore();

tyMessage({
  type: 'success',
  message: '欢迎光临麦麦猫的脚手架~',
  duration: 3000,
});

const show1 = () => {
  tyMessage({
    type: 'success',
    message: '欢迎光临麦麦猫的脚手架~',
    duration: 3000,
  });
};
const show2 = () => {
  tyMessage({
    type: 'warning',
    message: '欢迎光临麦麦猫的脚手架!',
    duration: 3000,
  });
};
const show3 = () => {
  tyMessage({
    type: 'error',
    message: '欢迎光临麦麦猫的脚手架!!!',
    duration: 3000,
  });
};
</script>

<style lang="scss">
#app {
  margin-top: 100px;
  text-align: center;
  color: #2c3e50;
}

.title {
  font-size: 24px;
  color: orange;
}

p {
  margin-top: 30px;
}

.message-btns {
  margin-top: 30px;

  p {
    margin-bottom: 10px;
    font-size: 15px;
  }

  button {
    margin: 0 10px;
    padding: 5px 15px;
    border: transparent;
    border-radius: 5px;
    background-color: #ddd;
    cursor: pointer;

    &:nth-of-type(1) {
      color: #529b2e;
      background-color: #e1f3d8;
    }

    &:nth-of-type(2) {
      color: #b88230;
      background-color: #faecd8;
    }

    &:nth-of-type(3) {
      color: #c45656;
      background-color: #fde2e2;
    }
  }
}
</style>
