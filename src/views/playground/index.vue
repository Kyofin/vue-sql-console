<template>

   <el-container>
     <el-aside width="300px">
         <Schema/>
     </el-aside>
       <el-container>
           <el-header height="300px">sql编辑</el-header>
           <el-main >
               <Preview/>
           </el-main>
       </el-container>
  </el-container>

</template>

<script>
    import Schema from '@/views/playground/schema'
    import Preview from '@/views/playground/preview'
    export default {
        name: "playground",
        components:{Schema,Preview},
        data(){
            return {}
        },
        mounted(){
            console.log('playground')
        }
    }
</script>

<style scoped>
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 660px;
    }
</style>
