[![Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

# rob-util
rob-util is a NodeJs module I authored for basic common functions that would get shared between various node modules.

# Status : ALPHA (unstable)

[travis-image]: https://travis-ci.org/robpolak/rob-util.svg?branch=master
[travis-url]: https://travis-ci.org/robpolak/rob-util
[coveralls-image]: https://coveralls.io/repos/robpolak/rob-util/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/robpolak/rob-util?branch=master

### Random

### Callback helper
var ru = require('rob-util');

#### callbackThrow
This method abstracts the task of throwing an error on a async method.

*This is what an standard async throw method will look like typically:*
function getContact(id, cb) {
    db.getContact(id, function(err, data) {
        if(err)
           throw err;
        cb(null, data);
    });
}

*This can get reduced to:*
function getContact(id, cb) {
    db.getContact(id, ru.cb.callbackThrow(cb));
}

#### callbackReturn
This method abstracts the task of throwing an error on a async method.

*This is what an standard async throw method will look like typically:*
function getContact(id, cb) {
    db.getContact(id, function(err, data) {
        cb(err, data);
    });
}

*This can get reduced to:*
function getContact(id, cb) {
    db.getContact(id, ru.cb.callbackReturn(cb));
}
