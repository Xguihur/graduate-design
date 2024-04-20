<template>
  <div>
    <h2>保护动物信息管理</h2>

    <!-- 查询组件 -->
    <div class="section-search">
      <my-search :searchForm="searchForm" @search="search"></my-search>
    </div>
    <!-- 表格组件 -->
    <div class="section-table">
      <my-table v-bind="tableProps" @editor="tableEditor" @remove="tableRemove">
        <el-button type="primary" @click="tableEditor(null)">添加</el-button>
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
</template>

<script>
import MySearch from "./components/MySearch.vue";
import MyTable from "./components/MyTable.vue";
import MyDialog from "./components/MyDialog.vue";
import GhPagination from "../../../components/GhPagination.vue";
import {
  getAnimalTable,
  postAnimalDetail,
  deleteAnimalDetail,
} from "@/api/animal.js";

export default {
  name: "animal",
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
            label: "编号",
            value: "id",
          },
          {
            label: "名称",
            value: "name",
          },
          {
            label: "种",
            value: "kind",
          },
          {
            label: "分布",
            value: "distribution",
          },
          {
            label: "保护等级",
            value: "level",
          },
        ],
        tableData: [],
        operation: true,
      },
      searchForm: {
        name: "",
        category: "1",
        categoryValue: "",
        id: "",
        address: "",
        protectLevel: "",
      },
      paginationInit: {
        currentPage: 1,
        pageSize: 10,
        total: 5,
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
      getAnimalTable(parmas).then((res) => {
        if (res && res.data) {
          this.tableProps.tableData = res.data;
          // 分页器的总数也需要赋值一下
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
      if (!row) {
        // 新增
        this.itemMessage = {};
      } else {
        // 编辑
        this.itemMessage = row;
      }
    },
    tableRemove(row) {
      this.$confirm("确定删除该条数据吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        // 调用接口删除数据
        deleteAnimalDetail(row.id).then((res) => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        });
      });
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
  mounted() {
    this.getTableData();
  },
};
</script>

<style scoped lang="less"></style>
