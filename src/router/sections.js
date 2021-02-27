import { createWebHashHistory, createRouter } from "vue-router";

import Message from "../components/contactmessage/Message.vue";
import Prescription from "../components/prescription/Prescription.vue";
import PrescriptionDetail from "../components/prescription/PrescriptionDetail.vue";
import Customer from "../components/customer/Customer.vue";
import Dashboard from "../components/dashboard/Dashboard.vue";
import Order from "../components/order/Order.vue";
import OrderDetail from "../components/order/OrderDetail.vue";

import TestBoard from "../components/dashboard/TestBoard.vue";


const routes = [
    {path: '/prescriptions', name: 'prescriptions', component: Prescription},
    {path: '/prescription/:id', name: 'prescription-detail', component: PrescriptionDetail},
    {path: '/messages', name:'messages', component: Message},
    {path: '/message/:id', name:'message-detail', component: Message},
    {path: '/', name:'dashboard', component: Dashboard},
    {path: '/customers', name:'customers', component: Customer},
    {path: '/customer/:id', name:'customer-detail', component: Customer},
    {path: '/orders', name: 'orders', component: Order},
    {path: '/order/:id', name: 'order-detail', component: OrderDetail},
    {path: '/test', name:'testboard', component: TestBoard},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
