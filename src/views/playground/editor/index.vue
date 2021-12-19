<template>
    <codemirror class="code" ref="myCm" v-model="content" :options="cmOptions" @changes="changes"></codemirror>
</template>

<script>
    import {codemirror} from 'vue-codemirror'
    import 'codemirror/lib/codemirror.css'
    import 'codemirror/mode/sql/sql.js' // 对于sql模式的支持
    import 'codemirror/keymap/sublime.js'
    import 'codemirror/addon/hint/show-hint.css'
    import 'codemirror/addon/hint/show-hint.js'
    import 'codemirror/addon/hint/sql-hint.js'
    // import sqlFormatter from "sql-formatter";
    export default {
        name: "index",
        components: {
            codemirror
        },
        methods: {
            changes() {
            }
        },
        data() {
            return {
                content: "ddd",
                cmOptions: {
                    mode: "sql",
                    lineNumbers: true,
                    theme: "default",
                    keyMap: "sublime",
                    extraKeys: {"Ctrl": "autocomplete"},
                    lineWrapping: true, //是否换行
                    foldGutter: true, //是否折叠
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"], //添加行号栏，折叠栏
                },
            }
        }
    }
</script>

<style>
    .code {
        text-align: left;
        font-size: 14px;
        height: 100%;

    }
     .CodeMirror {
        height: 100% !important;
    }


</style>
