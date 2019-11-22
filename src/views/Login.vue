<template>
<div id="body">
  <center>
    <form class="card" v-on:keyup.enter="login" >
      <h1 class="sansserif" style="margin-top:15px;" >Account Login</h1>
      <div style="width:80%; margin-top:20px;">
        <h6>Username</h6>
        <b-field >
            <b-input placeholder="Username"
                     icon="account"
                     v-model="input.username">
            </b-input>
        </b-field>
        <h6>Password</h6>
        <b-field>
            <b-input type="password"
                     placeholder="Password"
                     icon="key"
                     v-model="input.password"
                     password-reveal >
            </b-input>
        </b-field>
        <b-button class="b1"
                  style="width:100%; font-weight: 600;"
                  type="is-primary"
                  @click="login"
                  >Login
        </b-button>
      </div>
    </form>
  </center>
</div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username
          && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true);
          this.$router.replace({ name: 'home' });
        } else {
          this.$buefy.toast.open({
            message: 'user & pass is wrong!!',
            type: 'is-danger',
          });
        }
      } else {
        this.$buefy.toast.open({
          message: 'value is null!!',
          type: 'is-danger',
        });
      }
    },
  },
};
</script>

<style scoped>
#body{
    background: url('../assets/t3.jpg');
    min-height: 100vh;
}
.card {
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgb(9, 54, 112);
}
form {
  position: relative;
  background-color:rgba(255, 255, 255, 0.336);
  border: 1px solid #a1a1a1;
  border-radius: 6px;
  height: 280px;
  width: 350px;
  top: 110px;
}
h1.sansserif {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 900;
  color: rgb(61, 61, 61);
}
h6{
  font-size: 10px;
  margin-right: 240px;
  font-weight: 600;
  color: rgb(63, 63, 63);
}
.b1{
  box-shadow: 0 12px 16px 0 rgba(39, 36, 39, 0.24),0 17px 50px 0 rgba(29, 27, 27, 0.19);
}
.b1:hover{
  background-color: rgb(65, 75, 212); /* Green */
  color: white;
}
hr{
  background-color: rgb(231, 231, 231);
}
</style>
