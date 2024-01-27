<script setup>
</script>

<template>
  <div class="background">
    <div class="container">
      <div class="left">
        <router-view></router-view>
      </div>
      <div class="right">
        <img src="@/image/logo.png" alt="logo">
      </div>
    </div>
  </div>
</template>

<style>
.background {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #DDEBDB;
}

.container {
  width: 90%;
  height: 90%;
  display: flex;
  background-color: #D1E2CF;
  border-radius: 10px;
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #FAFCF9;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5rem 5rem 5rem 5rem;
}

.right {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
  padding: 5rem 5rem 5rem 5rem;
}

input {
  display: block;
}

.el-form .el-button {
  width: 100%;
}

.el-form p {
  text-align: center;
}

.el-form a {
  text-decoration: none;
  color: #3D565A;
  font-weight: 700;
}
</style>