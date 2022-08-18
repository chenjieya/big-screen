export default class BasicModel{
  constructor(opt={}){
  }
  init(defaults,options){
    Object.keys(defaults).forEach(item=>{
      if(options[item]||typeof options[item] === 'boolean')
      {
        defaults[item]=options[item];
      }
    })
  }
}//