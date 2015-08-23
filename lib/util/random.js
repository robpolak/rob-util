var random = function() {

};


/**
 * Creates a Random ASCII String based on the allowable characters..
 * @param length
 * @param characters (optional)  defaults to a-z A-Z 0-9(optional)
 * @returns {string} The random ASCII string
 */
random.prototype.randomAsciiString = function(length, characters) {
  if(!length || length <= 0) {
    throw "Length not valid";
  }
  if(characters && typeof characters != 'string')
    throw "Characters must be a string!!";

  var result = "";
  characters || (characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');

  while (length--) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }


  return result;
};

module.exports = new random();