<template>
    <div style="height: 100%;  display: flex; flex-direction:row">
        <div class="leftLayout">
            <Schema/>
        </div>
        <div class="rightLayout" >
            <div class="editorLayout" >sql编辑器</div>
            <div class="previewLayout" >
                <Preview/>
            </div>
        </div>
    </div>


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
    .leftLayout {
        flex-shrink: 0;
        width: 250px;
        background-color: #ffffff;
    }

    .rightLayout {
        display: flex; flex-grow:1; flex-direction:column
    }
    .editorLayout{
        height: 40%;
    }
    .previewLayout{
        height: 60%;
        padding: 10px;
    }
</style>
