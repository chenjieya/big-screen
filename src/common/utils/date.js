/*时间格式化*/
import moment from 'moment';
moment.locale('zh-cn');  // 设置中文语言
export const dateFormat = (str, format = 'YYYY-MM-DD') => {
    if (moment(str).isValid()) {
        return moment(str).format(format)
    } else {
        return str
    }
}