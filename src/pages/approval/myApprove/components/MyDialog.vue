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
        <el-form-item label="编号" required class="form-item" prop="id">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.id"
            :disabled="disabled"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="名称" required class="form-item" prop="name">
          <el-input
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.name"
            :disabled="disabled"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="分布" required class="form-item" prop="address">
          <el-input
            :disabled="disabled"
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.address"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="纲" required class="form-item" prop="gang">
          <el-input
            :disabled="disabled"
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.gang"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="目" required class="form-item" prop="mu">
          <el-input
            :disabled="disabled"
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.mu"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="科" required class="form-item" prop="ke">
          <el-input
            :disabled="disabled"
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.ke"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="属" required class="form-item" prop="shu">
          <el-input
            :disabled="disabled"
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.shu"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="种" required class="form-item" prop="zhong">
          <el-input
            :disabled="disabled"
            class="rule-input"
            placeholder="请输入"
            maxlength="4"
            v-model="ruleConfig.zhong"
          >
          </el-input>
        </el-form-item>

        <el-form-item prop="level" label="保护等级" class="form-item">
          <el-select
            v-model="ruleConfig.level"
            placeholder="请选择"
            :disabled="disabled"
          >
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
          @click="approvalSuccess('ruleForm')"
          style="margin-right: 10px"
          >通 过</el-button
        >
        <el-button
          type="primary"
          @click="approvalRefuse('ruleForm')"
          style="margin-right: 10px"
          >驳 回</el-button
        >
        <el-button @click="cancleModify">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAnimalDetail } from "@/api/animal";
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
    // 校验期次范围:
    const checkRange = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入期次范围"));
      }
      // 判断是否为数字类型
      const regex = /^(?:[1-9]\d{0,3}|9999)$/;
      if (value.match(regex) == null) {
        return callback(new Error("请选择在 1-9999 之间的整数"));
      }
      callback();
    };
    return {
      disabled: true,
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
        id: null,
        name: "",
        address: "",
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
        getAnimalDetail(this.itemMessage.id).then((res) => {
          if (res && res.data) {
            this.ruleConfig = res.data;
          }
        });
      }
    },
    // 通过
    async approvalSuccess(formName) {
      this.$confirm("确认通过审批？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      }).then(() => {
        const params = {
          id: this.itemMessage.id,
          approval: 1,
        };
        this.$emit("approvalSuccess", params);
      });
    },
    // 驳回
    async approvalRefuse(formName) {
      this.$confirm("确认驳回审批？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      }).then(() => {
        const params = {
          id: this.itemMessage.id,
          approval: 2,
        };
        this.$emit("approvalRefuse", params);
      });
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
