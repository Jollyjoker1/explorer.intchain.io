<template>
  <div class="node">
    <!--面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{$t('nav.home')}}</el-breadcrumb-item>
      <el-breadcrumb-item to="">{{$t('node.nodes')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="node-content">
      <div>
        <span class="tabs" v-for="item in tabs" :class="{'tab-active': curTab === item.id}" @click="switchTab(item)">{{item.name}}</span>
        <div class="common-inline-block row-input" @keyup.enter="search">
          <input type="text" :placeholder="$t('node.search')" v-model="search">
        </div>
      </div>
      <div>
        <component v-bind:is="currentComponent" v-bind:search="search"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import tabPlan from './tabPlan'
  import tabCandidate from './tabCandidate'
  import tabCurrent from './tabCurrent'
  export default {
    components: {
      tabPlan,
      // tabCandidate,
      tabCurrent
    },
    data () {
      return {
        curTab: 'tabCurrent',
        tabs: [
          {
            id: 'tabCurrent',
            name: this.$t('node.list')
          },
          {
            id: 'tabPlan',
            name: this.$t('node.plan')
          }
          // {
          //   id: 'tabCandidate',
          //   name: '候选节点'
          // },
        ],
        search: ''
      }
    },
    computed: {
      currentComponent () {
        return this.curTab
      }
    },
    methods: {
      switchTab (item) {
        this.curTab = item.id
      }
    }
  }
</script>

<style lang="scss">
  .node {
    width: 1200px;
    box-shadow: 0px 6px 10px 0px #ccc;
    background-color: #fff;
    .el-breadcrumb {
      padding: 21px 33px;
      border-bottom: 1px solid #ccc;
      & .el-breadcrumb__item:first-of-type {
        & span {
          margin-left: 30px;
        }
      }

      .el-breadcrumb__item:first-of-type {
        position: relative;
      }
      .el-breadcrumb__item:first-of-type:before {
        display: inline-block;
        content: url('../../../assets/home.png');
        position: absolute;
        top: -3px
      }
    }
    .node-content {
      padding: 40px 44px;
      text-align: left;
      & > div:first-child {
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        padding-right: 20px;
        .row-input {
          height: 51px;
          line-height: 51px;
          float: right;
          position: relative;
          & > input {
            width: 330px;
            box-sizing: border-box;
            height: 37px;
            padding-left: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
            outline: none;
          }
        }
        .tabs {
          display: inline-block;
          padding: 14px 48px;
          cursor: pointer;
          border-right: 1px solid #ccc;
          font-weight: 500;
          border-top: none !important;
          border-left: none !important;
        }
        .tabs:nth-of-type(1) {
          border-top-left-radius: 4px;
        }
        .tabs:nth-of-type(2) {
          border-right: 1px solid #ccc;
        }
        .tabs:hover {
          background-color: #f9f9ff;
        }
        .tab-active {
          background-color: #f9f9ff;
        }
      }
    }
  }
</style>
