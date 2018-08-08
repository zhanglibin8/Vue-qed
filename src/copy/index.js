/**
 * Created by zlb on 18-7-24.
 */
function copy(obj){
  let newobj = {};
  for ( var attr in obj) {
    newobj[attr] = obj[attr];
  }
  return newobj;
}
export  function deepCopy(obj){
  if(typeof obj != 'object'){
    return obj;
  }
  let newobj = {};
  for ( var attr in obj) {
    newobj[attr] = deepCopy(obj[attr]);
  }
  return newobj;
}
