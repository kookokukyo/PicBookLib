<template>
<div class="Printer">
    <el-button @click="printCode">打印</el-button>
    <div id='codeBox'>
        <img src="static/images/logo.png" alt="">
    </div>
</div>
</template>

<script>
import {
    getLodop
} from '@/utils/LodopFuncs'

export default {
    name: "Printer",
    data() {
        return {}
    },
    methods: {
        printCode() {
            let LODOP = getLodop();
            LODOP.PRINT_INIT("");
            LODOP.SET_PRINT_PAGESIZE(1, '40mm', '30mm', ""); //设置纸张为80mm*60mm
            // LODOP.SET_PRINT_MODE("POS_BASEON_PAPER",true);//设置以纸张边缘为基点
            // LODOP.ADD_PRINT_RECT("0%","0%","100%","100%",0,0);
            LODOP.ADD_PRINT_TEXT('4mm', '7mm', '40mm', '20mm', "麦吉坞英语阅读中心");
            LODOP.ADD_PRINT_BARCODE('10mm', '6mm', '40mm', '15mm', "Code39", "*123ABC4567890*");
            // LODOP.PREVIEW();
            LODOP.PRINT();
        }
    }
}
</script>

<style lang="scss" scoped>
#codeBox {
    margin-top: 20px;
    width: 400px;
    height: 300px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 20px;
    font-size: 60px;

    img {
        width: 100%;
    }
}
</style>
