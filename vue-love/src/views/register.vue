<template>
  <el-card class="box-card">
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名">
        <el-input type="text" v-model="name" ref="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
  export default {
    name: "register",
    data() {
      return {
        name: "",
        password: ""
      }
    },
    methods: {
      register() {
        //this身上的$router的隐式原型身上有一个push方法可以直接添加路由跳转路径
        this.$router.push(`/login/${this.$refs.username.value}`);
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