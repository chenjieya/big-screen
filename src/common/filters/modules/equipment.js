export function IsConsumerFilter(val) {
    let str = ""
    switch (val) {
      case 0:
        str = "固定资产"
        break;
      case 1:
        str = "低值易耗"
        break;
      default:
        break;
    }
    return str
  }