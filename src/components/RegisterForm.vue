<script lang="ts" setup>
import type { FormProps } from 'element-plus';
import { reactive, ref } from 'vue';

const labelPosition = ref<FormProps['labelPosition']>('top')

const loginForm = reactive({
    username: '',
    email: '',
    password: '',
})
</script>

<template>
    <el-form :label-position="labelPosition">
        <h1>Nice to meet you</h1>
        <p>Please enter your details</p>
        <el-form-item label="用户名">
            <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="loginForm.email" />
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="loginForm.password" />
        </el-form-item>
        <el-button color="#456442">注册</el-button>
        <p>
            已经注册账号？点此
            <router-link to="/auth/login">登录</router-link>
        </p>
    </el-form>
</template>