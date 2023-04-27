<template>
  <div class="container">

    <AddToDo></AddToDo>

    <div class="d-flex flex-wrap justify-content-between">
      <div class="w-100 m-2 p-3 d-flex flex-wrap justify-content-between todo-item" v-for="(data, index) in getDatas" :key="index">
        {{ data.title }}

        <a @click="deleteToDoData(data.id)" class="text-danger ms-3 delete-btn">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import AddToDo from "../components/AddToDo.vue";

export default {
  components: {
    AddToDo
  },
  computed: {
    ...mapGetters(['getDatas'])
  },
  methods: {
    ...mapActions(['getToDoData', 'deleteToDoData'])
  },
  mounted() {
    this.getToDoData();
  }
}
</script>

<style scoped>
  .todo-item {
    background-color: rgb(214, 211, 243);
    border-radius: 8px;
    color: rgb(39, 38, 46);
  }

  .delete-btn{
    cursor: pointer;
  }
</style>
