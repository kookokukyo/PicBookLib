import defaultSettings from '@/settings'

const title = defaultSettings.title || '麦吉坞英语阅读中心'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}