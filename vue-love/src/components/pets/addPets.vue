<template>
  <div class="big">
    <el-form
      :model="ruleForm"
      :rules="rules"
      :inline="true"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="宠物名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="品类" prop="name1">
        <el-input v-model="ruleForm.name1"></el-input>
      </el-form-item>
      <el-form-item label="种类" prop="name2">
        <el-input v-model="ruleForm.name2"></el-input>
      </el-form-item>
      <el-form-item label="颜色" prop="name3">
        <el-input v-model="ruleForm.name3"></el-input>
      </el-form-item>
      <el-form-item label="性格" prop="name4">
        <el-input v-model="ruleForm.name4"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" required>
        <el-col :span="50">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 205px;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item size="medium">
        <el-button
          style="margin-top: 50px;margin-left: 100px;"
          type="primary"
          @click="submitForm('ruleForm')"
        >立即创建</el-button>
        <el-button style="margin-left: 35px;" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("pets");
export default {
  computed: {
    ...mapState(["ruleForm"]),
    ...mapState(["rules"])
  },

  methods: {
    ...mapActions(["addpetsAsync"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let msg = {};
          msg.petName = this.ruleForm.name;
          msg.petType = this.ruleForm.name1;
          msg.petKind = this.ruleForm.name2;
          msg.petColor = this.ruleForm.name3;
          msg.petNature = this.ruleForm.name4;
          msg.petBirth = this.moment(this.ruleForm.date1).format("YYYY年MM月DD日");
          // console.log(msg);
          // alert("submit!");
          this.addpetsAsync(msg);
        } else {
          
          return false;
        }
      });
    },
   resetForm(formName) {
      this.$refs[formName].resetFields();
    } 
  }
};
</script>

<style scoped>
.big {
  margin-top: 50px;
  /* margin-left: 150px; */
}

.el-form-item {
  width: 30%;
}
</style>