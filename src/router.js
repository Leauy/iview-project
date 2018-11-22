const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/home',
        meta: {
            title: '主页'
        },
        component: (resolve) => require(['./views/home.vue'], resolve)
    }
];
export default routers;