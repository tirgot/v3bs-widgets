<template>
  <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
    <ul class="app-menu list-unstyled accordion" id="menu-accordion">
      <li className="nav-item" v-for="menu in menus">
        <router-link active-class="active" class="nav-link" :to="menu[0]">
          <span class="nav-icon"><i :class="menu[2]"></i></span>
          <span class="nav-link-text">{{ menu[1] }}</span>
        </router-link>
      </li>
    </ul><!--//app-menu-->
  </nav><!--//app-nav-->
</template>

<script>
export default {
  name: 'NavSide',
  data() {
    return {
      menus: [
        ['/', 'DashBoard', 'fas fa-tachometer-alt fa-lg fa-fw'],
        ['/customers', 'Customers', 'fas fa-users fa-lg fa-fw'],
        ['/messages', 'Contact Messages', 'far fa-comments fa-lg fa-fw'],
        ['/prescriptions', 'Prescriptions', 'fas fa-prescription fa-lg fa-fw'],
        ['/orders', 'Orders', 'fas fa-store fa-lg fa-fw'],
      ]
    }
  }
}
</script>