/**
  组件 说明:
    props： dialogRuleVisible  -- 规则配置弹窗是否显示
*/

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
      center>
      <el-form class="config-form item" :rules="rules" ref="ruleForm" :model="ruleConfig">
        <el-form-item prop="adaptStage" label="选择适用阶段">
          <el-select v-model="ruleConfig.adaptStage" multiple placeholder="请选择" clearable >
          <el-option
            v-for="item in stageList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="适用期次范围" required class="range">
          <el-col :span="8">
            <el-form-item prop="dateRangeStart">
              <el-input
                class="rule-input"
                placeholder="请输入"
                maxlength="4"
                v-model="ruleConfig.dateRangeStart"
                >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1">
              <div class="sign" style="text-align: center;">-</div>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="dateRangeEnd">
              <el-input
                class="rule-input"
                placeholder="请输入"
                maxlength="4"
                v-model="ruleConfig.dateRangeEnd"
                >
              </el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmModify('ruleForm')" style="margin-right:10px">确 定</el-button>
        <el-button @click="cancleModify">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    dialogRuleVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    // 校验期次范围:
    const checkRange = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入期次范围'));
      }
      // 判断是否为数字类型
      const regex = /^(?:[1-9]\d{0,3}|9999)$/;
      if (value.match(regex) == null) {
        return callback(new Error('请选择在 1-9999 之间的整数'));
      }
      callback();
    };
    return {
      rules: {
        adaptStage: [
          { required: true, message: '请选择适用阶段', trigger: 'change' },
        ],
        dateRangeStart: [
          { validator: checkRange, trigger: 'blur' }
        ],
        dateRangeEnd: [
          { validator: checkRange, trigger: 'blur' }
        ],
      },
      ruleConfig: {
        adaptStage: [],
        dateRangeStart: null,
        dateRangeEnd: null,
      },
      stageList: [
        {
          value: '0',
          label: 'L0'
        }, {
          value: '1',
          label: 'L1'
        }, {
          value: '2',
          label: 'L2'
        }, {
          value: '3',
          label: 'L3'
        }, {
          value: '4',
          label: 'L4'
        },
        {
          value: '5',
          label: 'L5'
        }, {
          value: '6',
          label: 'L6'
        }
      ],
    };
  },
  methods: {
    async confirmModify(formName) {
      // 校验表单
      let valid = false;
      try {
        valid = await this.$refs[formName].validate();// 这个函数会在内部进行校验，返回布尔值
        // console.log(valid);
      } catch (e) {
        // 在校验失败时会走到当前通道，捕获异常即可
      }
      // 设置接口需要的参数
      const data = {
        gradeList: this.ruleConfig.adaptStage,
        periodFrom: this.ruleConfig.dateRangeStart,
        periodTo: this.ruleConfig.dateRangeEnd,
      };
      // 将整理好的参数传递给父组件，由父组件进行接口调用
      this.$emit('confirmModify', data);
    },
    cancleModify() {
      this.$emit('cancleModify');
    },
  },
  mounted() {},
};

</script>

<style scoped lang="less">

</style>