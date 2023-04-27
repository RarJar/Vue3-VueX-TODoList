<template>
    <div class="my-4">
        <select class="form-select" v-model="limitData" @change="limitToDoData(limitData)">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data () {
            return {
                limitData: ''
            }
    },
        methods: {
            ...mapActions(['limitToDoData'])
        }
    }
</script>