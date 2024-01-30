import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://47.113.231.146:8080',
    baseURL: 'http://127.0.0.1:4523/m1/3956059-0-default',
    timeout: 5000,  // 设置超时时间
})

const registerUrl = '/user/register'
const loginUrl = '/user/login'
const createTodoUrl = '/task'
const readTodoUrl = '/task'
const updateTodoUrl = '/task'
const deleteTodoUrl = '/task'

/// 注册
export const register = async (username, email, password) => {
    return api.post(registerUrl, { 'name': username, 'email': email, 'pwd': password })
}

/// 登录
export const login = async (username, password) => {
    return api.post(loginUrl, { 'name': username, 'pwd': password })
}

/// 创建待办
export const createTodo = async (userId, content, deadline, finished = false) => {
    return api.post(createTodoUrl, { 'userId': userId, 'title': content, 'content': content, 'endTime': deadline, 'status': finished ? 1 : 0 })
}

/// 查询待办
export const readTodo = async (userId, readFinished = false) => {
    return api.get(readTodoUrl, { 'userId': userId, 'status': readFinished ? 1 : 0 })
}

/// 修改待办
export const updateTodo = async (todoId, userId, finished = true) => {
    return api.put(updateTodoUrl + '/' + todoId, { 'userId': userId, 'status': finished ? 1 : 0 })
}

/// 删除待办
export const deleteTodo = async (todoId, userId) => {
    return api.put(deleteTodoUrl + '/' + todoId, { 'userId': userId })
}