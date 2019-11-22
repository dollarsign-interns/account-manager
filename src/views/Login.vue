<template>
<div id="body">
  <center>
    <div class="loginForm card">
      <p class="sansserif" style="margin-top:15px;" >Account Login</p>
      <div style="width:80%; margin-top:20px;">
        <b-field >
            <b-input placeholder="Username"
                     icon="account" rounded>
            </b-input>
        </b-field>
        <b-field>
            <b-input type="password"
                     placeholder="Password"
                     icon="key"
                     password-reveal rounded>
            </b-input>
        </b-field>
        <b-button class="b1"
                  style="width:98%; font-weight: 600;"
                  type="is-primary"
                  rounded>Login
        </b-button>
      </div>
    </div>
  </center>
</div>
</template>

<style scoped>
#body {
    width: auto;
    height: 500px;
    background-color: rgb(96, 41, 112);
    background-size: 400% 400%;
}
.card {
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgb(131, 99, 155);
}
.loginForm {
  position: relative;
  background: hsl(0, 0%, 100%);
  border: 2px solid #bdbdbd;
  border-radius: 6px;
  height: 260px;
  width: 370px;
  top: 100px
}
p.sansserif {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 950;
}
.b1{
  box-shadow: 0 12px 16px 0 rgba(39, 36, 39, 0.24),0 17px 50px 0 rgba(29, 27, 27, 0.19);
}
.b1:hover{
  background-color: rgb(175, 76, 97); /* Green */
  color: white;
}
</style>
