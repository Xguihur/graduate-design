<template>
  <div>
    <el-submenu :index="nodeData.path" v-if="hasChildren">
      <template slot="title">
        <i :class="nodeData.meta.icon"></i>
        <span>{{ nodeData.meta.title }}</span>
      </template>
      <!-- 递归组件 -->
      <menu-item v-for="menu in nodeData.children" :nodeData="menu" :key="menu.path"></menu-item>
    </el-submenu>

    <el-menu-item :index="nodeData.path" v-else>
      <i :class="nodeData.meta.icon"></i>
      <span>{{ nodeData.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    nodeData: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {};
  },
  computed: {
    hasChildren() {
      return this.nodeData.children && this.nodeData.children.length > 0;
    }
  },
  methods: {

  },
  mounted() {},
};

</script>

<style scoped lang="less">

</style>