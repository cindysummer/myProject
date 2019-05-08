<template>
  <el-container>
    <el-header height="120px" class="el-header">爱宠帮</el-header>   
      <el-main class="el-main">
          <img src="../assets/login.jpg" alt width="400px" height="322px">
          <el-card class="box-card" >
            <el-form label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名">
                <el-input type="text" v-model="name" :value="$route.params.username" ref="userAccount"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="password" ref="userPwd"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="primary" @click="register">注册</el-button>
              </el-form-item>
            </el-form>
          </el-card>
      </el-main>
  </el-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "student"
);
export default {
  name: "login",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  // watch: {
  //   eachPage() {
  //     this.getStudentsByPageAsync();
  //   },
  //   currentPage() {
  //     this.getStudentsByPageAsync();
  //   }
  // },
   computed: {
    ...mapState(["userAccount", "userPwd", "userType", "userStatus"])
  },
  methods: {
    login() {
      // console.log(this.$refs.username.value)
      // this.loginAsync({userAccount:this.$refs.userAccount.value,userPwd:this.$refs.userPwd.value});
      this.loginAsync();
      // this.$router.push("/shopSystem");
    },
    register() {
      this.$router.push("/register");
    },
    ...mapActions(["loginAsync"]),
    // ...mapMutations(["setCurrentPage", "setEachPage"])
  }
};
</script>

<style scoped>
.el-main{
    margin: auto;
    width: 800px;
    padding: 0;
}
.el-card {
  width: 400px;
  height: 322px;
  box-sizing: border-box;
  float: right;
  padding-top: 65px;
}
.el-header {
  background-color: #fff;
  color: #86e3ce;
  margin: auto;
  font-size: 60px;
  line-height: 120px;
  margin-bottom: 20px;
  font-family: "FZWeiBei-S03S", Arial, serif;
}
</style>