/* eslint-disable spaced-comment */
<template>
<div class="app-container">
    <el-row :gutter="20">
        <el-col :span="24" :xs="24">
            <el-card>
                <el-input v-model="activeName"></el-input>
            </el-card>
        </el-col>

    </el-row>
</div>
</template>

<script>
export default {
    name: 'member',
    components: {

    },
    data() {
        return {
            activeName: ''
        }
    },
    mounted() {},
    created() {

    },
    methods: {

    }
}
</script>
