<template>
  <div>
    <el-menu
      default-active="animal"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :collapse="isCollapse"
      mode="vertical">
      <menu-item v-for="menu in menus" :key="menu.path" :nodeData="menu"></menu-item>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from './MenuItem';
export default {
  name: '',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MenuItem
  },
  data() {
    return {
      menus: []// 用于存放需要渲染为菜单的路由信息，在mounted中获取
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      // 拼接路由
      let path = '';
      keyPath.forEach(item => {
        path += '/' + item;
      });
      this.$router.push(path);
    },

  },
  mounted() {
    // 获取菜单中需要的路由信息
    this.menus = this.$router.options.routes[0].children;
  },
};

</script>

<style scoped lang="less">
  /deep/.el-menu {
    text-align: left;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
</style>