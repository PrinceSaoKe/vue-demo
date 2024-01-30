<script setup>
import { login } from "@/api/api.js";
import { useProfileStore } from '@/store/profileStore.js';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const ruleFormRef = ref()
const profileStore = useProfileStore()
const router = useRouter()

const loginForm = reactive({
    username: '',
    password: '',
})

const rules = reactive({
    username: [
        { required: true, message: "请输入用户名", trigger: 'blur' },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: 'blur' },
    ],
})

async function submit(ruleFormRef) {
    if (!ruleFormRef) return
    await ruleFormRef.validate((valid, fields) => {
        // 检测成功
        if (valid) {
            login(loginForm.username, loginForm.password).then((res) => {
                alert(res.data.msg)
                profileStore.userId = res.data.data.userId
                profileStore.username = res.data.data.name
                profileStore.email = res.data.data.email
                router.push('/')
            })
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