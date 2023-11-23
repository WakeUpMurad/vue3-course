import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import About from "@/pages/About.vue";
import Post from "@/pages/Post.vue";
import PostsPage from "@/pages/PostsPage.vue";
import Posts from "@/pages/Posts.vue";
import PostsCompositionApi from "@/pages/PostsCompositionApi.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: Post
    },
    {
        path: '/store',
        component: Posts
    },
    {
        path: '/composition',
        component: PostsCompositionApi
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;