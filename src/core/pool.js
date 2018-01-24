/*
* Title: Hamsters.js
* Description: Javascript library to add multi-threading support to javascript by exploiting concurrent web workers
* Author: Austin K. Smith
* Contact: austin@asmithdev.com
* Copyright: 2015 Austin K. Smith - austin@asmithdev.com
* License: Artistic License 2.0
*/

/* jshint esversion: 6 */

'use strict';

class pool {
  constructor() {
    this.tasks = [];
	  this.threads = [];
    this.running = [];
    this.pending = [];
    this.queueWork = this.addWorkToPending;
  }

  addWorkToPending(task, id, resolve, reject) {
  	this.pending.push({
  		item: task,
  		threadId: id,
  		promiseResolve: resolve,
  		promiseReject: reject
  	});
  }
}

var hamsterPool = new pool();

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = hamsterPool;
}