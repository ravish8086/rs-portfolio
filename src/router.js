import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Services from "@/views/Services.vue";
import Interests from "@/views/Interests.vue";
import MyWork from "@/views/MyWork.vue";
import Resume from "@/views/Resume.vue";

const ROOT = '/rs-portfolio';
const routes = [
    {
        path: `${ROOT}/home`,
        alias: [`${ROOT}/`],
        name: "Home",
        component: Home,
    },
    {
        path: `${ROOT}/about`,
        name: "About",
        component: About,
    },
    {
        path: `${ROOT}/contact`,
        name: "Contact",
        component: Contact,
    },
    {
        path: `${ROOT}/services`,
        name: "Services",
        component: Services,
    },
    {
        path: `${ROOT}/mywork`,
        name: "Work",
        component: MyWork,
    },
    {
        path: `${ROOT}/interests`,
        name: "Interests",
        component: Interests,
    },
    {
        path: `${ROOT}/resume`,
        name: "Resume",
        component: Resume,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;