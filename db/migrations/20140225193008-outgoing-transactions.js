var dbm   = require('db-migrate');
var type  = dbm.dataType;
var async = require('async');

exports.up = function(db, callback) {

  var steps = [
    function(async_callback) {
      db.renameColumn('outgoing_transactions', 'src_address', 'source_address', async_callback);
    },
    function(async_callback) {
      db.renameColumn('outgoing_transactions', 'tx_type', 'type', async_callback);
    },
    function(async_callback) {
      db.renameColumn('outgoing_transactions', 'tx_state', 'state', async_callback);
    },
    function(async_callback) {
      db.renameColumn('outgoing_transactions', 'tx_result', 'result', async_callback);
    },
    function(async_callback) {
      db.renameColumn('outgoing_transactions', 'tx_hash', 'hash', async_callback);
    }
  ];

  async.series(steps, callback);
};

exports.down = function(db, callback) {
  db.dropTable('outgoing_transactions', {ifExists: true}, callback)
};
