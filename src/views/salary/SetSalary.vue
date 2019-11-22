<template>
<div>
  <section class="hero is-info" >
    <div class="hero-body">
      <h1 class="subtitle" style="margin-right:1008px" >
       ตั้งค่าเงินเดือน
      </h1>
  </div>
</section>
<br>
<form action="">
    <h2 class="subtitle" style="margin-right:900px">ข้อมูลการจ่ายเงินเดือน/ค่าจ้าง</h2>
    <h2 style="margin-right:1000px">
         <strong>บัญชีเงินเดือน
             </strong>
             </h2>
            <b-field  style="width:300px;">
            <b-select  style="bottom:30px;right:220px"
            placeholder="Select a character" expanded>
                <option value="Flint">ธ.กรุงเทพ ออมทรัพย์ 123-4-56789-0</option>
            </b-select>
        </b-field>
            <br>
    <h2 class="subtitle" style="margin-right:960px">ข้อมูลด้านประกันสังคม</h2>
    <h2 style="margin-right:1000px">
         <strong>สิทธิ์ประกันสังคม
             </strong>
             </h2>
             <br>
              <h2 style="margin-right:1000px">
         <strong>เลขบัญชีนายจ้าง
             </strong>
             </h2>
             <br>
              <h2 style="margin-right:970px">
         <strong>ลำดับที่สาขาในระบบ
             </strong>
             </h2>
             <br>
             <br>
            <b-button style="margin-right:800px;width:300px"
            class="is-success"  @click="success">บันทึกข้อมูล</b-button>
</form>
            <b-radio  style="bottom:200px;right:190px" v-model="radio"
                name="name"
                native-value="Flint">
                ขึ้นสิทธิ์ประกันสังคม
            </b-radio>
            <b-radio style="bottom:200px;right:190px"  v-model="radio"
                name="name"
                native-value="Silver">
                ไม่ขึ้นสิทธิ์ประกันสังคม
            </b-radio>
            <b-field style="width:300px;">
            <b-input style="bottom:190px;right:220px"  maxlength="10" v-model="name"></b-input>
        </b-field>
            <b-field style="width:300px;">
            <b-input style="bottom:210px;right:220px" maxlength="6" v-model="name"></b-input>
        </b-field>
    </div>
</template>

<script>
export default {
  methods: {
    success() {
      this.$buefy.toast.open({
        message: 'บันทึกข้อมูลเรียบร้อย',
        type: 'is-success',
      });
    },
  },
};
</script>
