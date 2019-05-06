<template>
  <el-card class="box-card">
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名">
        <el-input type="text" v-model="name" :value="$route.params.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
  export default {
    name: "login",
    data() {
      return {
        name: "",
        password: ""
      }
    },
    methods: {
      login() {
        this.$router.push("/shopSystem");
      },
      register() {
        this.$router.push("/register");
      }
    },

  }
</script>
<style scoped>
  .box-card {
    width: 480px;
    margin: auto;
  }
</style>