<template>
  <div>
    <el-menu
      default-active="animal"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :collapse="isCollapse"
      mode="vertical">
      <el-submenu index="base">
        <template slot="title">
          <i class="el-icon-receiving"></i>
          <span>基础管理</span>
        </template>
        <el-menu-item index="animal">动物信息管理</el-menu-item>
      </el-submenu>

      <el-submenu index="approval">
        <template slot="title">
          <i class="el-icon-document-checked"></i>
        <span slot="title">我的审批</span>
        </template>
        <el-menu-item index="mySubmit">我发起的</el-menu-item>
        <el-menu-item index="myApprove">我审核的</el-menu-item>
      </el-submenu>

      <el-menu-item index="user">
        <i class="el-icon-lock"></i>
        <span slot="title">用户权限管理</span>
      </el-menu-item>

      <el-menu-item index="account">
        <i class="el-icon-setting"></i>
        <span slot="title">账户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
  mounted() {},
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