<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Table Schema" name="tableSchema">表schema信息</el-tab-pane>
        <el-tab-pane label="Data Preview" name="dataPreview">数据预览</el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                activeName: 'tableSchema'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>

</style>
