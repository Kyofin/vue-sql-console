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
        background-color: red;
    }

    .rightLayout {
        display: flex; flex-grow:1; flex-direction:column
    }
    .editorLayout{
        height: 40%; background-color: blue
    }
    .previewLayout{
        height: 60%; background-color: green
    }
</style>
