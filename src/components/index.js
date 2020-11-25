import Header from './layout/header/index.vue'
import Avatars from './layout/header/avatars/index.vue'
import Aside from './layout/aside/index.vue'
import Main from './layout/main/index.vue'
import Layout from './layout/index.vue'
import Box from './box/index.vue'
import BreadCrumbs from './breadcrumbs/index.vue'
export default {
    install(Vue){
        const components={
            Header,
            Avatars,
            Aside,
            Main,
            Layout,
            Box,
            BreadCrumbs
        }
        Object.keys(components).forEach((item)=>{
            Vue.component(`U${item}`,components[item])
        })
    }
}
