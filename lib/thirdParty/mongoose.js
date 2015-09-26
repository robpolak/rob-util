"use strict";

let mongooseHelper = class {
  constructor() {
    this.queryThreshold = 5000;
  }
  
  
  $__getQueryObj(query) {
    let obj = {};
    if(query && query.model) {
      obj.modelName = query.model.modelName;
    }
    if(query && query._conditions) {
      obj._conditions =query._conditions;
    }
    obj.op = query.op;

    return obj;
  };

  $__handleStats(stats, query) {
    let totalTime = stats.queryEnd.diff(stats.queryStart, 'milliseconds');
    let threshold = global._config.logging.queryTimeViolation || 10000;
    let queryObj = this.$__getQueryObj(query);
    queryObj.totalTimeMs = totalTime;
    /*
    if(totalTime > threshold)
      global._logger.logError("Query Exceeded Threshold", queryObj);
    if(global._config.logging.showAllQueryTimes)
      global._logger.logTrace("Query log:", queryObj);*/
  };



  mongoExecNonResultQuery(query, options, cb) {
    let self = this;
    options || (options = {});

    let stats = {
      queryStart: Date(),
      queryEnd:null
    };
    query.exec(function (err, num) {
      if(typeof cb === 'function')
        cb(err, num);
      stats.queryEnd = Date();
      self.$__handleStats(stats, query);
    });
  };

  mongoExecSave(model, options, cb) {
    let self = this;
    options || (options = {});
    if(typeof cb !== 'function')
      throw "Callback not passed!!";
    let stats = {
      queryStart: moment(),
      queryEnd:null
    };
    model.save(function (err, num) {
      cb(err, num);
      stats.queryEnd = moment();
      self.$__handleStats(stats, null);
    });
  };

  mongoExecQuery(query, options, cb) {
    let self = this;
    options || (options = {});
    if (typeof options.convertToObject === 'undefined')
      options.convertToObject = true;
    if (typeof options.convertToSingle === 'undefined')
      options.convertToSingle = true;



    let stats = {
      queryStart: moment(),
      queryEnd:null
    };
    query.exec(function (err, data) {
      if (!err) {
        if (options.convertToObject) {
          data = self.convertToObject(data);
        }
      }
      if(query.options.limit && query.options.limit === 1) {
        if(options.convertToSingle && data && data.length === 1) {
          data = data[0];
        }
        else if(options.convertToSingle && data && data.length === 0) {
          data = null;
        }
      }

      if(typeof cb !== 'function')
        cb(err, data);

      stats.queryEnd = moment();
      self.$__handleStats(stats, query);
    });
  };

  convertToObject(arr) {
    let toRtn;

    if (arr instanceof Array) {
      let toRtn = [];
      for (let i = 0, len = arr.length; i < len; i++) {
        let obj = arr[i];
        if (obj.toObject) {
          obj = obj.toObject();
        }
        toRtn.push(obj);
      }
    }
    else if(arr.toObject) {
      toRtn = arr.toObject();
    }

    return toRtn;
  };
};

module.exports = mongooseHelper;