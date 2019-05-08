<template >
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 1050px"
      :stripe="true"
      :highlight-current-row="true"
    >
      <el-table-column prop="petName" label="宠物名" width="120"></el-table-column>
      <el-table-column prop="petType" label="宠物品类" width="150"></el-table-column>
      <el-table-column prop="petKind" label="宠物种类" width="120"></el-table-column>
      <el-table-column prop="petColor" label="颜色" width="120"></el-table-column>
      <el-table-column prop="petNature" label="性格" width="300"></el-table-column>
      <el-table-column prop="petBirth" label="出生日期" width="120"></el-table-column>
      <el-table-column label="操作" width="120">
        <template style="width:100px">
          <el-button type="text" size="medium">修改</el-button>
          <el-button type="text" size="medium">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 5,7]"
        :page-size="3"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
   methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },

  data() {
    return {
      total: 201,
      currentPage: 1,
      pageSize:3,
      tableData: [
        {
          petName: "64645",
          petType: "546456",
          petKind: "45645",
          petColor: "45645",
          petNature: "456456466456455555555555555",
          petBirth: "2019-05-16",
          __v: 0
        },
        {
          petName: "64645",
          petType: "546456",
          petKind: "45645",
          petColor: "45645",
          petNature: "4564564",
          petBirth: "2019-05-16",
          __v: 0
        },
        {
          petName: "64645",
          petType: "546456",
          petKind: "45645",
          petColor: "45645",
          petNature: "4564564",
          petBirth: "2019-05-16",
          __v: 0
        },
        {
          petName: "64645",
          petType: "546456",
          petKind: "45645",
          petColor: "45645",
          petNature: "4564564",
          petBirth: "2019-05-16",
          __v: 0
        },
        {
          petName: "64645",
          petType: "546456",
          petKind: "45645",
          petColor: "45645",
          petNature: "4564564",
          petBirth: "2019-05-16",
          __v: 0
        }
      ]
    };
  },
 
};
</script>
<style scoped>
.el-card {
  height: 550px;
}
.big {
  margin-left: 50px;
}
</style>
