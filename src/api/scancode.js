import request from '@/utils/request'

export function scanCodeReq(code) {
    return request({
        url: '/scancode/',
        method: 'get',
        params: { code }
    })
}