<template>
  <div class="hello">
    <div class="container">
      <div class="columns is-variable is-multiline">
          <div class="column is-2" v-bind:key="EmployeeGroupList"
          v-for="EmployeeGroupList in EmployeeGroupList">
            <employee/>
           {{EmployeeGroupList}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Employee from '@/components/Employee.vue';

export default {
  name: 'GroupEmployee',
  props: {
    msg: String,
  },
  data() {
    return {
      EmployeeGroupList: ['id', 'รายชื่อ', 'อายุ', 'เพศ'],
    };
  },
  components: {
    Employee,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(33, 118, 129);
  color: white;
}
</style>
