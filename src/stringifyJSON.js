// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //Function , return undefined
  if (typeof obj === 'function') {
    return {}
  }

  //Boolean,Number, Null, String to string
  if(typeof obj === 'boolean' || typeof obj === 'number' || typeof obj === 'undefined') {
    return "" + obj;
  }
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if (obj === null ) {
    return "" + obj;
  }

  //Array for of loop
  if (Array.isArray(obj) ) {
    let arrayString = []

    if (obj.length < 1) {
      return '[]';
    } else {
      for (var i=0; i<obj.length; i++) {
        arrayString.push( stringifyJSON(obj[i]) );
        console.log(obj[i])
      }
      return "[" + arrayString.join(',') + "]"
    }
  }

  //Object for keys in
  if (typeof obj === 'object') {
    let objString = []
    if (obj === {}) {
      return '{}'
    } else {
      for (let key in obj) {
        if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined' ) {
          continue;
        }
        objString.push( '"' + key + '"' + ':' + stringifyJSON(obj[key])) ;
      }
      return '{' + objString.join(',') + '}'
    }
  }
};
