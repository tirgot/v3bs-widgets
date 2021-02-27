import Message from "../components/contactmessage/Message.vue";

const router = new VueRouter({
    routes: [
        {path: '/messages/:id', component: MessageDetail, }
    ]
})