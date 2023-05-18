const mys = (name) => {
  console.log(`${name} feel ${mysStr()}`);
};
const mysStr = () =>
  `
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
    `;
globalThis.mys = mys;
module.exports = mys;
export default mys;
