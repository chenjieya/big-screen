export const strUtil = {
  /**
   * 空对象转空字符串
   * @param {*} str 
   * @returns 
   */
  toEmpty(str) {
    if (typeof str === 'undefined' || str === null) {
      return "";
    }
    return str;
  },
  /**
   * 判断对象是否为空
   * @returns 
   */
  isBlank(str) {
    if (typeof str === 'undefined' || str === null || str === "") {
      return true;
    }
    return false;
  }
}

