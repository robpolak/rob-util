var random = function() {

};


/**
 * Random Ascii String
 * @param length
 * @param characters (optional)
 * @returns {string}
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