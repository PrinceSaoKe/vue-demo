<script setup>

</script>

<template>
    <div class="background">
        <div class="container">
            <div class="left">
                <h1>Welcome back</h1>
                <p>Please enter your details</p>
                <input type="text" placeholder="用户名">
                <input type="password" placeholder="密码">
                <div>30天内免登录</div>
                <button>登录</button>
                <p>还没有注册</p>
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
    align-items: center;
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
</style>