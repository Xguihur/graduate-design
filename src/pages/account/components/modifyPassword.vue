/** 组件 说明: props： -- 父组件传递过来的对象，里面包含搜索组件中用到的所有数据
*/

<template>
  <div class="box">
    <el-form class="config-form item" :rules="rules" ref="form" :model="form">
      <el-form-item prop="oldPassword" label="原密码：">
        <el-input
          class="valuePart"
          v-model="form.oldPassword"
          placeholder="请输入账号"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" label="新密码：">
        <el-input
          class="valuePart"
          v-model="form.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item prop="again" label="再次确认：">
        <el-input
          class="valuePart"
          v-model="form.again"
          placeholder="请再次输入密码"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="footer">
      <el-button class="btn" type="primary" @click="comfirm">确定</el-button>
    </div>
  </div>
</template>

<script>
import { checkOldPassword, modifyPassword } from "@/api/account.js";
export default {
  name: "MySearch",
  props: {},
  data() {
    return {
      form: {
        password: "",
        oldPassword: "",
        again: "",
      },
      rules: {
        oldPassword: [
          { required: true, message: "请输入原密码", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入新密码", trigger: "blur" },
        ],
        again: [{ required: true, message: "请再次确认密码", trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    // 确认修改密码
    comfirm() {
      // this.$refs.form.validate((valid) => {
      //   if (valid) {
      //     // 设置弹窗提示用户再次确认
      //     this.$confirm("确定修改密码？", "提示", {
      //       confirmButtonText: "确定",
      //       cancelButtonText: "取消",
      //       type: "warning",
      //     }).then(async () => {
      //       const params = {
      //         oldPassword: this.form.oldPassword,
      //       };
      //       // 校验原密码是否正确
      //       const res = await checkOldPassword(params);
      //       if (res && res.data && res.data.message == "ok") {
      //         const data = this.form;
      //         try {
      //           // 修改密码
      //           await modifyPassword(data);
      //           this.$message({
      //             type: "success",
      //             message: "修改成功",
      //           });
      //           // 退出登陆
      //           localStorage.removeItem("token");
      //           this.$router.push("login");
      //         } catch (e) {
      //           this.$message.error(e.data.message);
      //         }
      //       }
      //     });
      //   }
      // });
      // this.$message.error("密码错误，请重新输入");
      this.$message.error("两次输入的密码不一致，请重新输入");
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
