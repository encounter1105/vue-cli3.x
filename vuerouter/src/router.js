import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Hi from '@/views/Hi'
import Hi1 from '@/views/Hi1'
import Hi2 from '@/views/Hi2'
import Params from '@/views/params'
import Error from '@/views/Error'




Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component:HelloWorld
        },
        {
            path:'/params/:newsId(\\d+)/:newsTitle',
            component:Params,
            beforeEnter:(to,from,next)=>{
                console.log(to);
                console.log(from);
                next({path:'/'});
            }
            },
        // },
        {
            path:'/goHome',
            redirect:'/'
        },
        {
            path:'/goParams/:newsId(\\d+)/:newsTitle',
            redirect:'/params/:newsId(\\d+)/:newsTitle'
        },
        {
            path:'/hi1',
            component:Hi1,
            alias:'/lj'
        },
        {
            path: '/Hi',
            components: {
                // default:Hello,
                left:Hi2,
                right:Hi1
            }
        },
        {
            path:'*',
            component:Error
        },
        {
            path: '/hi',
            component: Hi,
            children:[
                // {
                //     path:'/',
                //     name:'Hello/Hi',
                //     component:Hi
                // },
                {
                    path:'hi1',
                    name:'hi1',
                    component:Hi1
                },
                {
                    path:'Hi2',
                    name:'hi2',
                    component:Hi2
                },

            ]
        }
    ]
})
