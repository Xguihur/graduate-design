<template>
  <div>
    <h2>我审核的</h2>

    <!-- 查询组件 -->
    <div class="section-search">
      <my-search :searchForm="searchForm" @search="search"></my-search>
    </div>
    <!-- 表格组件 -->
    <div class="section-table">
      <my-table v-bind="tableProps" @editor="tableEditor"></my-table>
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
        @approvalSuccess="approvalMethod"
        @approvalRefuse="approvalMethod"
      ></my-dialog>
    </div>
  </div>
</template>

<script>
import MySearch from "./components/MySearch.vue";
import MyTable from "./components/MyTable.vue";
import MyDialog from "./components/MyDialog.vue";
import GhPagination from "../../../components/GhPagination.vue";
import { getApprovalTable, postApproval } from "@/api/myApproval.js";

export default {
  name: "myApprove",
  components: {
    MySearch,
    MyTable,
    GhPagination,
    MyDialog,
  },
  data() {
    return {
      tableProps: {
        tableColumn: [
          {
            label: "ID",
            value: "id",
          },
          {
            label: "发起人ID",
            value: "createrId",
          },
          {
            label: "状态",
            value: "status",
          },
          {
            label: "创建时间",
            value: "createTime",
          },
          {
            label: "最后修改时间",
            value: "lastUpdateTime",
          },
        ],
        tableData: [
          {
            id: 1,
            createrId: 2567,
            status: "审批中",
            createTime: "2019-08-07 15:34:56",
            lastUpdateTime: "2019-08-07 16:34:56",
          },
          {
            id: 2,
            createrId: 8329,
            status: "已通过",
            createTime: "2017-02-07 10:35:52",
            lastUpdateTime: "2017-09-27 12:24:35",
          },
          {
            id: 3,
            createrId: 6296,
            status: "已驳回",
            createTime: "2022-06-07 22:31:42",
            lastUpdateTime: "2022-08-07 15:34:56",
          },
        ],
        operation: true,
      },
      searchForm: {
        id: "",
        status: "",
        createrId: "",
      },
      paginationInit: {
        currentPage: 1,
        pageSize: 10,
        total: 3,
      },
      dialogRuleVisible: false,
      itemMessage: {},
    };
  },
  methods: {
    // 获取表格数据
    // 获取表格数据
    getTableData() {
      // 设置请求接口的参数
      const parmas = {
        userId: localStorage.getItem("userId"),
        ...this.searchForm,
        ...this.paginationInit,
      };
      // 调用接口请求数据
      getApprovalTable(parmas).then((res) => {
        if (res && res.data) {
          console.log(res.data);
          this.tableProps.tableData = res.data;
        }
      });
    },
    // 子组件触发的事件监听
    search(data) {
      console.log("search:", data);
      this.paginationInit.currentPage = 1;
      this.getTableData();
    },
    tableEditor(row) {
      this.dialogRuleVisible = true;
      // 将 row 作为参数传递给弹窗组件查询回显数据
      this.itemMessage = row;
    },
    changeSize(data) {
      this.getTableData();
    },
    changePage(data) {
      this.getTableData();
    },
    cancleModify() {
      this.dialogRuleVisible = false;
    },
    // 进行审批
    approvalMethod(data) {
      // 拿到参数调用接口
      postApproval(data)
        .then((res) => {
          if (res && res.data) {
            this.$message({
              type: "success",
              message: "审批完成!",
            });
          }
          this.getTableData();
        })
        .finally(() => {
          this.dialogRuleVisible = false;
        });
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less"></style>
