<template>
  <!-- 仪表盘 -->
  <div class="page-dashboard">仪表盘</div>
</template>

<script>
  import permission from '@/mixin/permission';

  export default {
    mixins: [permission],
    name: "dashboard",
    data() {
      return {}
    },
    methods: {
      load() {}
    },
    mounted() {
      this.load();
    }
  }
</script>

<style>
  .page-dashboard {
    width: 100%;
  }
</style>
