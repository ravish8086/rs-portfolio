import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Services from "@/views/Services.vue";
import Interests from "@/views/Interests.vue";
import MyWork from "@/views/MyWork.vue";
import Resume from "@/views/Resume.vue";

const routes = [
    {
        path: "/",
        alias: ["/rs-portfolio"],
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/services",
        name: "Services",
        component: Services,
    },
    {
        path: "/mywork",
        name: "My Work",
        component: MyWork,
    },
    {
        path: "/interests",
        name: "Interests",
        component: Interests,
    },
    {
        path: "/resume",
        name: "Resume",
        component: Resume,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;