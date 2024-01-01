<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';

const ruleFormRef = ref<FormInstance>()

const loginForm = reactive({
    username: '',
    password: '',
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: "请输入用户名", trigger: 'blur' },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: 'blur' },
    ],
})

async function submit(ruleFormRef: FormInstance | undefined) {
    if (!ruleFormRef) return
    await ruleFormRef.validate((valid, fields) => {
        // 检测成功
        if (valid) {
            alert('登录成功')
        }
    })
}
</script>

<template>
    <el-form label-position=top ref="ruleFormRef" :rules="rules" :model="loginForm">
        <h1>Welcome back</h1>
        <p>Please enter your details</p>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" />
        </el-form-item>
        <el-button color="#456442" @click="submit(ruleFormRef)">登录</el-button>
        <p>
            还没有注册账号？点此
            <router-link to="/auth/register">注册</router-link>
        </p>
    </el-form>
</template>