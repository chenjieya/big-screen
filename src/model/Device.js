import BasicModel from "./basic/BasicModel";


export default class Device extends BasicModel {
  constructor(opt={}) {
    super(opt)
    let def={
      deviceCode: 0,
      deviceName: '',
      isOnline: ''
    }
    super.init(def,opt)
    return def;
  }

}