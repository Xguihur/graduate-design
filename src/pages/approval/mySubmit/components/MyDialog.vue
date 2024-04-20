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
        <!-- <el-form-item label="编号" required class="form-item" prop="id">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.id"
          >
          </el-input>
        </el-form-item> -->

        <el-form-item label="名称" required class="form-item" prop="name">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.name"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="分布" required class="form-item" prop="address">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.address"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="门" required class="form-item" prop="men">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.men"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="纲" required class="form-item" prop="gang">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.gang"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="目" required class="form-item" prop="mu">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.mu"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="科" required class="form-item" prop="ke">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.ke"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="属" required class="form-item" prop="shu">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.shu"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="种" required class="form-item" prop="zhong">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.zhong"
          >
          </el-input>
        </el-form-item>

        <el-form-item prop="level" label="保护等级" class="form-item">
          <el-select v-model="ruleConfig.level" placeholder="请选择">
            <el-option
              v-for="item in protecLevelOptions"
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
import { getSumitDetail } from "@/api/mySubmit.js";
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
      protecLevelOptions: [
        {
          value: "1",
          label: "一级",
        },
        {
          value: "2",
          label: "二级",
        },
        {
          value: "3",
          label: "三级",
        },
        {
          value: "4",
          label: "四级",
        },
        {
          value: "5",
          label: "五级",
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
        address: [
          {
            required: true,
            message: "请输入分布",
            trigger: "blur",
          },
        ],
        men: [
          {
            required: true,
            message: "请输入门",
            trigger: "blur",
          },
        ],
        gang: [
          {
            required: true,
            message: "请输入纲",
            trigger: "blur",
          },
        ],
        mu: [
          {
            required: true,
            message: "请输入目",
            trigger: "blur",
          },
        ],
        ke: [
          {
            required: true,
            message: "请输入科",
            trigger: "blur",
          },
        ],
        shu: [
          {
            required: true,
            message: "请输入属",
            trigger: "blur",
          },
        ],
        zhong: [
          {
            required: true,
            message: "请输入种",
            trigger: "blur",
          },
        ],
        level: [
          {
            required: true,
            message: "请选择保护等级",
            trigger: "blur",
          },
        ],
      },
      ruleConfig: {
        // id: null,
        name: "",
        address: "",
        men: "",
        gang: "",
        mu: "",
        ke: "",
        shu: "",
        zhong: "",
        level: "1",
      },
      stageList: [
        {
          value: "0",
          label: "L0",
        },
        {
          value: "1",
          label: "L1",
        },
        {
          value: "2",
          label: "L2",
        },
        {
          value: "3",
          label: "L3",
        },
        {
          value: "4",
          label: "L4",
        },
        {
          value: "5",
          label: "L5",
        },
        {
          value: "6",
          label: "L6",
        },
      ],
    };
  },
  methods: {
    // 回显
    reshow() {
      if (Object.keys(this.itemMessage).length > 0) {
        getSumitDetail({ id: this.itemMessage.id }).then((res) => {
          if (res && res.data) {
            console.log(res.data);
            this.ruleConfig = res.data;
          }
        });
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
  mounted() {
    this.reshow();
  },
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
