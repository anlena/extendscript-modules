var argv = require('minimist')(process.argv.slice(2)); // Remove nodePath, scriptpath
var tapes = require("tap-es"), targets = argv._, d = require('path').resolve(__dirname);

tapes.setDuration(false);
tapes.add('json.parse-state', d+'/test.jsx', targets, true);
tapes.run(d+'/results.md');