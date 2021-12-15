import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Playground from "@/views/playground/index.vue";
import Session from "@/views/session"

export default new Router({
    routes: [
        {path: "/", redirect: "/project"},
        {path: "/session", name: "session", component: Session},
        {path: "/playground", name: "playground", component: Playground}
    ]
})
