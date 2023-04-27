<template>
    <div>
       <div class="input-group my-3">
            <input type="text" class="form-control" placeholder="Enter new data ..." v-model="newToDo.title">
            <button class="btn btn-dark" id="button-addon2" @click="onAddDataBtn(newToDo)">Add Data</button>
        </div> 
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data () {
            return {
                newToDo: {
                    title: ''
                }
            }
        },
        methods: {
            ...mapActions(['addToDoData']),

            onAddDataBtn(newToDo) {
                this.addToDoData(newToDo),
                this.newToDo.title = ''
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
