<template>
  <div>
    <h2>账户管理</h2>

    <!-- 顶部 tab  -->
    <el-radio-group v-model="tab" style="margin-bottom: 30px">
      <el-radio-button label="1">修改密码</el-radio-button>
      <el-radio-button label="2">用户账户管理</el-radio-button>
    </el-radio-group>

    <div class="tabBox" v-show="tab == 1">
      <!-- 修改密码 -->
      <modify-password-vue></modify-password-vue>
    </div>

    <div class="tabBox" v-show="tab == 2">
      <!-- 查询组件 -->
      <div class="section-search">
        <my-search :searchForm="searchForm" @search="search"></my-search>
      </div>
      <!-- 表格组件 -->
      <div class="section-table">
        <my-table
          v-bind="tableProps"
          @editor="tableEditor"
          @remove="tableRemove"
          @resetPassword="resetUserPassword"
        >
          <el-button type="primary" @click="addUser">添加</el-button>
        </my-table>
      </div>
      <!-- 分页组件 -->
      <div class="section-pagination">
        <gh-pagination
          :paginationInit="paginationInit"
          @changeSize="changeSize"
          @changePage="changePage"
        ></gh-pagination>
      </div>
      <!-- 弹窗组件 -->
      <div class="section-dialog">
        <my-dialog
          :dialogRuleVisible="dialogRuleVisible"
          :itemMessage="itemMessage"
          @cancleModify="cancleModify"
          @confirmModify="confirmModify"
        ></my-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import MySearch from "./components/MySearch.vue";
import MyTable from "./components/MyTable.vue";
import MyDialog from "./components/MyDialog.vue";
import GhPagination from "@/components/GhPagination.vue";
import modifyPasswordVue from "./components/modifyPassword.vue";
import {
  getAccountTable,
  modifyAccount,
  resetPassword,
} from "@/api/account.js";

export default {
  name: "account",
  components: {
    MySearch,
    MyTable,
    GhPagination,
    MyDialog,
    modifyPasswordVue,
  },
  data() {
    return {
      tab: "1",
      tableProps: {
        tableColumn: [
          {
            label: "ID",
            value: "id",
          },
          {
            label: "姓名",
            value: "name",
          },
          {
            label: "性别",
            value: "sex",
          },
          {
            label: "账号",
            value: "account",
          },
          {
            label: "权限等级",
            value: "level",
          },
          {
            label: "最后更新时间",
            value: "lastUpdateTime",
          },
        ],
        tableData: [
          {
            id: 1,
            name: "guihua",
            sex: "男",
            account: "13898989898",
            level: "超级管理员",
            lastUpdateTime: "2019-05-08 14:36",
          },
          {
            id: 2,
            name: "lihua",
            sex: "男",
            account: "15623455334",
            level: "管理员",
            lastUpdateTime: "2017-11-08 19:36",
          },
          {
            id: 3,
            name: "wangxiang",
            sex: "女",
            account: "13232664764",
            level: "操作员",
            lastUpdateTime: "2020-12-16 08:56",
          },
          {
            id: 4,
            name: "lifei",
            sex: "男",
            account: "17876542234",
            level: "操作员",
            lastUpdateTime: "2022-05-19 18:38",
          },
        ],
        operation: true,
      },
      searchForm: {
        category: "1",
        categoryValue: "",
        role: "",
      },
      paginationInit: {
        currentPage: 1,
        pageSize: 10,
      },
      dialogRuleVisible: false,
      itemMessage: {},
    };
  },
  methods: {
    // 获取表格数据
    getTableData() {
      // 设置请求接口的参数
      const parmas = {
        userId: localStorage.getItem("userId"),
        ...this.searchForm,
        ...this.paginationInit,
      };
      // 调用接口请求数据
      getAccountTable(parmas).then((res) => {
        if (res && res.data) {
          this.tableProps.tableData = res.data;
        }
      });
    },
    // 子组件触发的事件监听
    search(data) {
      console.log("search:", data);
    },
    tableEditor(row) {
      this.dialogRuleVisible = true;
      console.log(row);
    },
    tableRemove(row) {
      this.$confirm("确定删除该条数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!",
        });
      });
    },
    changeSize(data) {
      // 分页器数据已经在子组件中修改完毕，父组件调用 this.getTableData() 请求表格数据即可
      console.log("changeSize:", data);
    },
    changePage(data) {
      // 分页器数据已经在子组件中修改完毕，父组件调用 this.getTableData() 请求表格数据即可
      console.log("changePage:", data);
    },
    cancleModify() {
      this.dialogRuleVisible = false;
    },
    // 提交审核
    confirmModify(data) {
      // 拿到参数调用接口
      modifyAccount(data)
        .then((res) => {
          if (res && res.data) {
            this.$message({
              type: "success",
              message: "修改成功!",
            });
          }
          this.getTableData();
        })
        .finally(() => {
          this.dialogRuleVisible = false;
        });
    },
    // 重置密码
    resetUserPassword(data) {
      this.$confirm("确定重置该用户的密码吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const params = {
          id: data.id,
        };
        resetPassword(params).then((res) => {
          this.$message({
            type: "success",
            message: "重置成功!",
          });
          this.getTableData();
        });
      });
    },
    addUser() {
      this.$message("添加用户");
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less"></style>
