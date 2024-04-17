/** 组件 说明: props： -- 父组件传递过来的对象，里面包含搜索组件中用到的所有数据
*/

<template>
  <div class="box">
    <el-form class="config-form item" :rules="rules" ref="form" :model="form">
      <el-form-item prop="account" label="账号：">
        <el-input
          class="valuePart"
          v-model="form.account"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码：">
        <el-input
          class="valuePart"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="again" label="再次确认：">
        <el-input
          class="valuePart"
          v-model="form.again"
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="footer">
      <el-button class="btn" type="primary" @click="comfirm">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySearch",
  props: {},
  data() {
    return {
      form: {
        account: "",
        password: "",
        again: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        again: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    // 搜索
    comfirm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 设置弹窗提示用户再次确认
          this.$confirm("确定修改密码？", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }).then(() => {
            console.log(this.form);
            this.$message({
              type: "success",
              message: "修改成功",
            });
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 50%;
  margin: 0 auto;
  border: 1px dashed #d3d0d0;
  padding: 20px;

  .valuePart {
    width: 60%;
  }
}
.footer {
  text-align: center;

  .btn {
    width: 200px;
  }
}
/deep/.el-form-item__label {
  width: 120px;
  text-align: right;
}
/deep/.el-form-item__error {
  margin-left: 120px;
}
</style>
