<template>
  <div>
    <el-menu
      :default-active="active || 'animal'"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :collapse="isCollapse"
      mode="vertical"
    >
      <menu-item
        v-for="menu in menus"
        :key="menu.path"
        :nodeData="menu"
      ></menu-item>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  name: "",
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MenuItem,
  },
  data() {
    return {
      menus: [], // 用于存放需要渲染为菜单的路由信息，在mounted中获取
      active: "animal", // 用于保存当前激活的路由
    };
  },
  watch: {
    // 监听路由的变化,并且是立即执行的
    $route: {
      handler(to, from) {
        // 通过to.path获取当前路由的路径，然后通过split方法将路径分割为数组，然后取最后一个元素作为当前激活的路由
        let paths = to.path.split("/");
        this.active = paths[paths.length - 1];
      },
      immediate: true,
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      // 拼接路由
      let path = "";
      keyPath.forEach((item) => {
        path += "/" + item;
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
.el-menu-vertical-demo {
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  // width: 200px;
  min-height: 400px;
}
</style>
