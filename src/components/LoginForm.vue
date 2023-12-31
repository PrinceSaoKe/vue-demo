<script lang="ts" setup>
import type { FormProps } from 'element-plus';
import { reactive, ref } from 'vue';

const labelPosition = ref<FormProps['labelPosition']>('top')

const loginForm = reactive({
    username: '',
    password: '',
})
</script>

<template>
    <el-form :label-position="labelPosition">
        <h1>Welcome back</h1>
        <p>Please enter your details</p>
        <el-form-item label="用户名">
            <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="loginForm.password" />
        </el-form-item>
        <el-button color="#456442">登录</el-button>
        <p>
            还没有注册账号？点此
            <router-link to="/auth/register">注册</router-link>
        </p>
    </el-form>
</template>