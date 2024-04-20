/** 组件 说明: props： dialogRuleVisible -- 规则配置弹窗是否显示 */

<template>
  <div>
    <!-- 规则配置弹窗 -->
    <el-dialog
      title="规则配置"
      :visible.sync="dialogRuleVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      @open="reshow"
      width="60%"
      center
      class="box"
    >
      <el-form
        class="config-form item"
        :rules="rules"
        ref="ruleForm"
        :model="ruleConfig"
      >
        <el-form-item label="ID" class="form-item" prop="id">
          <el-input
            class="rule-input"
            placeholder="请输入"
            v-model="ruleConfig.id"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="姓名" class="form-item" prop="name">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.name"
          >
          </el-input>
        </el-form-item>

        <el-form-item prop="sex" label="性别" class="form-item">
          <el-select v-model="ruleConfig.sex" placeholder="请选择">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号" class="form-item" prop="account">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.account"
          >
          </el-input>
        </el-form-item>

        <el-form-item prop="level" label="权限等级" class="form-item">
          <el-select v-model="ruleConfig.level" placeholder="请选择">
            <el-option
              v-for="item in rolse"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="confirmModify('ruleForm')"
          style="margin-right: 10px"
          >提 交</el-button
        >
        <el-button @click="cancleModify">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAccountDetail } from "@/api/account.js";
export default {
  name: "",
  props: {
    dialogRuleVisible: {
      type: Boolean,
      default: false,
    },
    itemMessage: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      sexList: [
        {
          value: "1",
          label: "男",
        },
        {
          value: "2",
          label: "女",
        },
      ],
      rolse: [
        {
          value: "1",
          label: "操作员",
        },
        {
          value: "2",
          label: "管理员",
        },
        {
          value: "3",
          label: "超级管理员",
        },
      ],
      rules: {
        id: [
          {
            required: true,
            message: "请输入编号",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入名称",
            trigger: "blur",
          },
        ],
        sex: [
          {
            required: true,
            message: "请输入性别",
            trigger: "blur",
          },
        ],
        account: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
        ],
        level: [
          {
            required: true,
            message: "请选择权限等级",
            trigger: "blur",
          },
        ],
      },
      ruleConfig: {},
    };
  },
  methods: {
    // 回显
    reshow() {
      if (Object.keys(this.itemMessage).length > 0) {
        getAccountDetail({ id: this.itemMessage.id }).then((res) => {
          if (res && res.data) {
            console.log("回显数据：", res.data);
            this.ruleConfig = res.data;
          }
        });
      } else {
        this.ruleConfig = {};
      }
    },
    async confirmModify(formName) {
      // 校验表单
      let valid = false;
      try {
        valid = await this.$refs[formName].validate(); // 这个函数会在内部进行校验，返回布尔值
        if (valid) {
          // 设置接口需要的参数
          const data = { ...this.ruleConfig };
          // 将整理好的参数传递给父组件，由父组件进行接口调用
          this.$emit("confirmModify", data);
        }
      } catch (e) {
        // 在校验失败时会走到当前通道，捕获异常即可
      }
    },
    cancleModify() {
      this.$emit("cancleModify");
    },
  },
  mounted() {},
};
</script>

<style scoped lang="less">
.config-form {
  display: flex;
  flex-wrap: wrap;

  .form-item {
    display: flex;
    margin-right: 20px;
  }
}
</style>
