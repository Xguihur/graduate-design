/* * @Author: guihua * @Date: 2024-02-7 15:43:24 * @Last Modified by: guihua *
@Last Modified time: 2024-02-18 15:43:24 */ /** Props 说明: tableColumn: 表格列
tableData: 表格数据 operation: 是否需要操作列 */

<template>
  <div class="page_table_main">
    <!-- 顶部描述信息 -->
    <slot></slot>

    <!-- 以下是表格  -->
    <el-table
      ref="multipleTable"
      border
      v-loading="loading"
      :data="tableData"
      style="margin-bottom: 20px"
    >
      <!-- 正常列 -->
      <el-table-column
        v-for="item in tableColumn"
        :key="item.value"
        :prop="item.value"
        :label="item.label"
        fit
        align="center"
      ></el-table-column>
      <!--操作列-->
      <el-table-column
        v-if="operation"
        prop="operation"
        label="操作"
        fixed="right"
        align="center"
      >
        <template slot-scope="scope">
          <template v-if="scope.row.status == '审批中'">
            <el-button type="text" @click="editor(scope.row)">审批</el-button>
          </template>
          <template v-if="scope.row.status == '已通过'">
            <span>/</span>
          </template>
          <template v-if="scope.row.status == '已驳回'">
            <span>/</span>
          </template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  data() {
    return {
      loading: false,
    };
  },
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableColumn: {
      type: Array,
      required: true,
    },
    operation: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  methods: {
    // 子组件触发事件，此时触发父组件的事件，并且将参数传给父组件。由父组件执行具体的逻辑操作
    editor(row) {
      this.$emit("editor", row);
    },
    remove(row) {
      this.$emit("remove", row);
    },
  },
};
</script>
<style lang="less" scoped>
.page_table_main {
  margin: 20px 0;
}
</style>
