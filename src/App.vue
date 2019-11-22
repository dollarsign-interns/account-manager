<template>
  <div id="container">
    <center>
    <br>
       <nav class="level">
  <p class="level-item has-text-centered">
    <b-navbar-dropdown label="เอกสารขาย">
      <b-navbar-item tag="router-link" :to="{ path: '/quotation' }">
                    ใบเสนอราคา
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/billing' }">
                    ใบวางบิล/ใบแจ้งหนี้
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/invoice' }">
                    ใบกำกับภาษี
                </b-navbar-item>
    </b-navbar-dropdown>
  </p>
  <p class="level-item has-text-centered">
       <b-navbar-dropdown label="บริหารเงินเดือน">
      <b-navbar-item tag="router-link" :to="{ path: '/paysalary' }">
                    จ่ายเงินเดือน
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/employeelistpay' }">
                    รายชื่อพนักงาน
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/setsalary' }">
                    ตั้งค่าเงินเดือน
                </b-navbar-item>
    </b-navbar-dropdown>
  </p>
  <p class="level-item has-text-centered">
    <img src="https://banner2.cleanpng.com/20180420/ttw/kisspng-dollar-sign-united-states-dollar-symbol-us-dollars-5ada64c03b9a53.3882614615242620802441.jpg" alt="" style="height: 30px;">
  </p>
  <p class="level-item has-text-centered">
    <b-button type="is-info" tag="router-link" :to="{ path: '/employlist' }">สมุดรายชื่อ</b-button>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Contact</a>
  </p>
</nav>
    <router-view/>
    </center>
  </div>
</template>
<script>
export default {
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
