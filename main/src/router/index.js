import Router from 'vue-router'
export default new Router({
    mode: 'history',
    base: '',
    routes: [
        { path: '/', redirect: '/main'},
        { path: '/main', component: () => import('@/components/Main')}
    ]
})
