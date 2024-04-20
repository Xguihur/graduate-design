<template>
  <div>
    <h2>我发起的</h2>

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
        @confirmModify="confirmModify"
      ></my-dialog>
    </div>
  </div>
</template>

<script>
import { getSubmitTable, postSubmitDetail } from "@/api/mySubmit.js";
import MySearch from "./components/MySearch.vue";
import MyTable from "./components/MyTable.vue";
import MyDialog from "./components/MyDialog.vue";
import GhPagination from "@/components/GhPagination.vue";

export default {
  name: "mySubmit",
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
            label: "审批人ID",
            value: "approvalId",
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
        tableData: [],
        operation: true,
      },
      searchForm: {
        id: "",
        status: "",
        approvalId: "",
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
    getTableData() {
      // 设置请求接口的参数
      const parmas = {
        userId: localStorage.getItem("userId"),
        ...this.searchForm,
        ...this.paginationInit,
      };
      // 调用接口请求数据
      getSubmitTable(parmas).then((res) => {
        if (res && res.data) {
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
      // 将参数传递给弹窗组件
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
    // 提交审核
    confirmModify(data) {
      // 拿到参数调用接口
      postSubmitDetail(data)
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
  },
  mounted() {
    this.getTableData();
  },
};
</script>

<style scoped lang="less"></style>
