<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';

interface RegisterForm {
    username: string,
    email: string,
    password: string,
}

const ruleFormRef = ref<FormInstance>()

const registerForm = reactive<RegisterForm>({
    username: '',
    email: '',
    password: '',
})

const rules = reactive<FormRules<RegisterForm>>({
    username: [
        { required: true, message: "请输入用户名", trigger: 'blur' },
        { min: 6, max: 14, message: "长度必须在6~14之间", trigger: 'blur' },
    ],
    email: [
        { required: true, message: "请输入邮箱", trigger: 'blur' },
        { pattern: /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, message: "邮箱格式不正确", trigger: 'blur' },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: 'blur' },
        { min: 8, max: 20, message: "长度必须在8~20之间，且同时包含大小写", trigger: 'blur' },
    ],
})

async function submit(ruleFormRef: FormInstance | undefined) {
    if (!ruleFormRef) return
    await ruleFormRef.validate((valid, fields) => {
        // 检测成功
        if (valid) {
            alert('注册成功')
        }
    })
}
</script>

<template>
    <el-form label-position=top :rules="rules" ref="ruleFormRef" :model="registerForm">
        <h1>Nice to meet you</h1>
        <p>Please enter your details</p>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="registerForm.username" placeholder="用户名长度不小于6位" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerForm.email" placeholder="邮箱格式需正确" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="registerForm.password" placeholder="密码长度不小于8位，同时包含大小写" />
        </el-form-item>
        <el-button color="#456442" @click="submit(ruleFormRef)">注册</el-button>
        <p>
            已经注册账号？点此
            <router-link to="/auth/login">登录</router-link>
        </p>
    </el-form>
</template>