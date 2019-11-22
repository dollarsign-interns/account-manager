<template>
  <div class="home">
    <group-employee/>
  </div>
</template>

<script>
// @ is an alias to /src
import GroupEmployee from '@/components/GroupEmployee.vue';

export default {
  name: 'home',
  components: {
    GroupEmployee,
  },
  data() {
    return {
    };
  },
};
</script>
