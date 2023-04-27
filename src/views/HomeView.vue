<template>
  <div class="container">
    <div class="d-flex flex-wrap justify-content-between">
      <div class="w-100 m-2 p-3 d-flex justify-content-start todo-item" v-for="(data, index) in getDatas" :key="index">
         {{ data.title }}
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
      ...mapGetters(['getDatas'])
    },
    methods: {
      ...mapActions(['getToDoData'])
    },
    mounted() {
      this.getToDoData();
    }
  }
</script>

<style scoped>
  .todo-item{
    background-color: rgb(214, 211, 243);
    border-radius: 8px;
    color: rgb(39, 38, 46);
  }
</style>
