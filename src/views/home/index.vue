<template>
<div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row :gutter="8">
        <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}" style="padding-right:8px;margin-bottom:30px;">
            <el-card>
                <el-tabs v-model="activeTab">
                    <el-tab-pane label="馆内公告" name="activity">
                        <activity />
                    </el-tab-pane>
                    <el-tab-pane label="时间线" name="timeline">
                        <timeline />
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Activity from './components/Activity'
import Timeline from './components/Timeline'

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
        Activity,
        Timeline
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
