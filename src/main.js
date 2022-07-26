const mys = (name) => {
  console.log(`${name}mys`);
}
if(typeof winodw === 'object'){
  window.mys = mys
  function makeMulti (string) {
    let l = new String(string)
    l = l.substring(l.indexOf("/*")+3,l.lastIndexOf("*/"))
    return l
  }
  let string = function name() {
    /*    
      mmmmmmm    mmmmmmm yyyyyyy           yyyyyyy  ssssssssss   
      mm:::::::m  m:::::::mmy:::::y         y:::::y ss::::::::::s  
      m::::::::::mm::::::::::my:::::y       y:::::yss:::::::::::::s 
      m::::::::::::::::::::::m y:::::y     y:::::y s::::::ssss:::::s
      m:::::mmm::::::mmm:::::m  y:::::y   y:::::y   s:::::s  ssssss 
      m::::m   m::::m   m::::m   y:::::y y:::::y      s::::::s      
      m::::m   m::::m   m::::m    y:::::y:::::y          s::::::s   
      m::::m   m::::m   m::::m     y:::::::::y     ssssss   s:::::s 
      m::::m   m::::m   m::::m      y:::::::y      s:::::ssss::::::s
      m::::m   m::::m   m::::m       y:::::y       s::::::::::::::s 
      m::::m   m::::m   m::::m      y:::::y         s:::::::::::ss  
      mmmmmm   mmmmmm   mmmmmm     y:::::y           sssssssssss    
                                  y:::::y                           
                                y:::::y                            
                                y:::::y                             
                              y:::::y                              
                              yyyyyyy 
     */
  }
  Object.defineProperty(window,'mys',{
    get(){
      console.log(makeMulti(string));
    }
  })
}

export default mys