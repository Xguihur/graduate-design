<template>
  <div>
    <h2>我发起的</h2>

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
        @exportDetail="exportDetail"
      ></my-table>
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
import { postAnimalDetail } from "@/api/animal.js";
import { getSubmitTable } from "@/api/mySubmit.js";
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
        tableData: [
          {
            id: 1,
            approvalId: 2567,
            status: "审批中",
            createTime: "2019-08-07 15:34:56",
            lastUpdateTime: "2019-08-07 16:34:56",
          },
          {
            id: 2,
            approvalId: 8329,
            status: "已通过",
            createTime: "2017-02-07 10:35:52",
            lastUpdateTime: "2017-09-27 12:24:35",
          },
          {
            id: 3,
            approvalId: 6296,
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
        approvalId: "",
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
      getSubmitTable(parmas).then((res) => {
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
      // 将参数传递给弹窗组件
      this.itemMessage = row;
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
      postAnimalDetail(data)
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
  mounted() {},
};
</script>

<style scoped lang="less"></style>
