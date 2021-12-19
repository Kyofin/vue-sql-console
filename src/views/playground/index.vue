<template>
    <div style="height: 100%;  display: flex; flex-direction:row">
        <div class="leftLayout">
            <Schema/>
        </div>
        <div class="rightLayout" >
            <div>工具栏： <el-button>运行</el-button></div>
            <div class="editorLayout" ><Editor/></div>
            <div class="previewLayout" >
                <Preview/>
            </div>
        </div>
    </div>


</template>

<script>
    import Schema from '@/views/playground/schema'
    import Editor from '@/views/playground/editor'
    import Preview from '@/views/playground/preview'
    export default {
        name: "playground",
        components:{Schema,Preview,Editor},
        data(){
            return {}
        },
        mounted(){
            console.log('playground')
        }
    }
</script>

<style scoped>
    .leftLayout {
        flex-shrink: 0;
        width: 250px;
        background-color: #ffffff;
    }

    .rightLayout {
        display: flex; flex-grow:1; flex-direction:column;
        overflow: hidden;
    }
    .editorLayout{
        height: 55%;
    }
    .previewLayout{
        height: 40%;
        padding: 10px;
    }
</style>
