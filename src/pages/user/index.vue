<template>
  <div>
    <h2>用户权限管理</h2>
    <h3>感觉这个菜单有点多余，看看怎么样处理掉吧</h3>

    <!-- 查询组件 -->
    <!-- <div class="section-search">
      <my-search :searchForm="searchForm" @search="search"></my-search>
    </div> -->
    <!-- 表格组件 -->
    <!-- <div class="section-table">
      <my-table
        v-bind="tableProps"
        @editor="tableEditor"
        @remove="tableRemove"
      ></my-table>
    </div> -->
    <!-- 分页组件 -->
    <!-- <div class="section-pagination">
      <gh-pagination
        :paginationInit="paginationInit"
        @changeSize="changeSize"
        @changePage="changePage"
      ></gh-pagination>
    </div> -->
    <!-- 弹窗组件 -->
    <!-- <div class="section-dialog">
      <my-dialog
        :dialogRuleVisible="dialogRuleVisible"
        @cancleModify="cancleModify"
        @confirmModify="confirmModify"
      ></my-dialog>
    </div> -->
  </div>
</template>

<script>
import MySearch from "./components/MySearch.vue";
import MyTable from "./components/MyTable.vue";
import MyDialog from "./components/MyDialog.vue";
import GhPagination from "@/components/GhPagination.vue";

export default {
  name: "user",
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
    };
  },
  methods: {
    // 获取表格数据
    getTableData() {
      const parmas = {}; // 设置请求接口的参数
      // 调用接口请求数据
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
    confirmModify(data) {
      this.dialogRuleVisible = false;
      console.log(data);
      // 拿到参数调用接口
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less"></style>
