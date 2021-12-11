import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Playground from "@/views/playground/index.vue";
import Project from "@/views/project"

export default new Router({
    routes: [
        {path: "/", redirect: "/project"},
        {path: "/project", name: "project", component: Project},
        {path: "/playground", name: "playground", component: Playground}
    ]
})