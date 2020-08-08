/* eslint-disable spaced-comment */
<template>
<div class="app-container">
    <el-row :gutter="20">
        <el-col :span="24" :xs="24">
            <el-card>
                <el-tabs v-model="activeName">
                    <el-tab-pane label="新书录入" name="first"></el-tab-pane>
                    <el-tab-pane label="缺书登记" name="second"></el-tab-pane>
                    <el-tab-pane label="书架管理" name="third"></el-tab-pane>
                    <el-tab-pane label="书籍日志" name="fourth"></el-tab-pane>
                </el-tabs>
            </el-card>
        </el-col>

    </el-row>
</div>
</template>

<script>
export default {
    name: 'stack',
    components: {

    },
    data() {
        return {
            activeName: 'first'
        }
    },
    mounted() {},
    created() {

    },
    methods: {

    }
}
</script>
