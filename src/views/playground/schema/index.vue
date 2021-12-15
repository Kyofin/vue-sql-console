<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

</template>

<script>
    export default {
        name: "schema",
        data() {
            return {
                data: [{
                    label: 'spark_catalog',
                    children: [{
                        label: 'default',
                        children: [{
                            label: 'tb1'
                        },{
                            label: 'tb2'
                        }]
                    }]
                }, {
                    label: 'iceberg_catalog',
                    children: [{
                        label: 'test_db2',
                        children: [{
                            label: 'test_tb1'
                        }, {
                            label: 'patient_tb'
                        }]
                    }, {
                        label: 'test_db',
                        children: [{
                            label: 'test_tb1'
                        }, {
                            label: 'hzk_tb2'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    }
</script>

<style scoped>

</style>
