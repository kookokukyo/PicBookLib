<template>
<div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row :gutter="8">
        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
            <box-card />
        </el-col>
        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 18}" :xl="{span: 18}" style="padding-right:8px;margin-bottom:30px;">
            <el-card>
                <el-tabs v-model="activeTab">
                    <el-tab-pane label="Activity" name="activity">
                        <activity />
                    </el-tab-pane>
                    <el-tab-pane label="Timeline" name="timeline">
                        <timeline />
                    </el-tab-pane>
                    <el-tab-pane label="Account" name="account">
                        <account :user="user" />
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import BoxCard from './components/BoxCard'
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'

const lineChartData = {
    newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
        expectedData: [200, 192, 120, 144, 160, 130, 140],
        actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
        expectedData: [80, 100, 121, 104, 105, 90, 100],
        actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130]
    }
}

export default {
    name: 'DashboardAdmin',
    components: {
        PanelGroup,
        BoxCard,
        Activity,
        Timeline,
        Account
    },
    data() {
        return {
            lineChartData: lineChartData.newVisitis,
            activeTab:'activity'
        }
    },
    methods: {
        handleSetLineChartData(type) {
            this.lineChartData = lineChartData[type]
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
    padding: 32px;
    position: relative;

    .github-corner {
        position: absolute;
        top: 0px;
        border: 0;
        right: 0;
    }

    .chart-wrapper {
        background: #fff;
        padding: 16px 16px 0;
        margin-bottom: 32px;
    }
}

@media (max-width:1024px) {
    .chart-wrapper {
        padding: 8px;
    }
}
</style>
