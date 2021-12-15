<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Table Schema" name="tableSchema">
            <el-table
                    :data="schemaData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="columnName"
                        label="column_name"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="columnType"
                        label="column_type"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="columnComment"
                        label="column_comment">
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="Data Preview" name="dataPreview">
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="date_time"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="patient_name"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="patient_address">
                </el-table-column>
            </el-table>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                activeName: 'tableSchema',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                schemaData: [
                    {
                        columnName: 'date_time',
                        columnType: 'timestamp',
                        columnComment: '日期'
                    },
                    {
                        columnName: 'patient_name',
                        columnType: 'string',
                        columnComment: '患者名字'
                    },{
                        columnName: 'patient_address',
                        columnType: 'string',
                        columnComment: '患者地址'
                    }
                ]
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
