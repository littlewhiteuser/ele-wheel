<template>
  <div id="app">
    <h1>Ele-Vue</h1>
    <Table
      :layout="layout"
      :list="list"
      :indexMethod="indexMethod"
    >
      <template #address="{scope}">{{scope.row.address}}</template>
      <template #operate="{scope}">
        <el-button @click="handleScope(scope)">编辑</el-button>
      </template>
    </Table>
    <Page
      :total="page.total"
      :pageSize="page.pageSize"
      :currentPage="page.currentPage"
      :sizeCb="handleSizeCb"
      :pageCb="handlePageCb"
    />

    <el-button
      type="success"
      @click="drawerVisible = true"
    >打开侧弹</el-button>
    <ChooseDrawer
      :size="830"
      title="分配"
      :drawerVisible.sync="drawerVisible"
      @searchForm="searchDrawerForm"
      @confirm="confirmDrawerData"
      @drawerCurrentChange="drawerCurrentChange"
      :formOptions="formOptions"
      :tableOptions="tableOptions"
      :tableData="tableData"
      :total="total"
    ></ChooseDrawer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      layout: {
        border: true,
        index: true,
        operate: {
          visible: true
        },
        props: [
          {
            attr: "date",
            name: "日期"
          },
          {
            attr: "name",
            name: "姓名"
          },
          {
            attr: "address",
            name: "地址",
            slot: "address"
          }
        ]
      },
      list: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      page: {
        total: 4,
        currentPage: 1,
        pageSize: 20
      },
      drawerVisible: false,
      tableData: [],
      // 分配组件表单字段
      formOptions: [
        { label: '员工名称', type: 'text', field: 'staffName' },
        { label: '员工工号', type: 'text', field: 'staffCode' },
        { label: '部门名称', type: 'text', field: 'deptName' }
      ],
      // 分配组件列表字段
      tableOptions: [
        { label: '员工工号', type: 'text', field: 'staffCode', width: '150', isOnly: true },
        { label: '员工名称', type: 'text', field: 'staffName', width: '170' },
        { label: '员工所属部门', type: 'text', field: 'deptName', width: '200' }
      ],
      total: 10
    }
  },
  methods: {
    handleSizeCb () { },
    handlePageCb () { },
    indexMethod (index) {
      return index * 2;
    },
    handleScope (scope) {
      console.log(scope);
    },
    searchDrawerForm () { },
    confirmDrawerData () { },
    drawerCurrentChange () { },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
