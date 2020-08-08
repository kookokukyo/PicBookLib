/* eslint-disable spaced-comment */
<template>
<div class="app-container">
    <el-row :gutter="20">
        <el-col :span="24" :xs="24">
            <el-card>
                <activity :bookInfo="bookInfo" />
                <Printer />
            </el-card>
        </el-col>

    </el-row>
</div>
</template>

<script>
import Activity from './components/Activity'
import Printer from './components/Printer'
import {
    scanCodeReq
} from '@/api/scancode'
export default {
    name: 'ScanCode',
    components: {
        Activity,
        Printer
    },
    data() {
        return {
            keycode: null,
            start: null,
            bookInfo: {}
        }
    },
    mounted() {},
    created() {
        this.scan()
    },
    methods: {
        scan() {
            this.start = new Date().getTime()

            let code = ''
            let lastTime, nextTime
            let lastCode, nextCode
            let that = this
            window.document.onkeypress = function (e) {
                if (window.event) { // IE
                    nextCode = e.keyCode
                } else if (e.which) { // Netscape/Firefox/Opera
                    nextCode = e.which
                }
                if (e.which === 13) {
                    if (code.length < 3) return // 手动输入的时间不会让code的长度大于2，所以这里只会对扫码枪有
                    that.keycode = code
                    console.log('扫码结束')
                    scanCodeReq(code).then(res => {
                        that.bookInfo = res.data
                    })
                    code = ''
                    lastCode = ''
                    lastTime = ''
                    return
                }
                nextTime = new Date().getTime()
                if (!lastTime && !lastCode) {
                    // console.log('扫码开始。。。')
                    code += e.key
                }

                if (lastCode && lastTime && nextTime - lastTime > 500) { // 当扫码前有keypress事件时,防止首字缺失
                    // console.log('防止首字缺失。。。')
                    code = e.key
                } else if (lastCode && lastTime) {
                    // console.log('扫码中。。。')
                    code += e.key
                }
                lastCode = nextCode
                lastTime = nextTime
            }
        }
    }
}
</script>
