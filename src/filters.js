'use strict';
// 方法来自：https://fh4g.com/static/js/src/index.js
exports.getSize =  (strbytes) => {
	  var bytes = parseInt(strbytes);
	  var thresh = 1000;
	  if (Math.abs(bytes) < thresh) {
	      return bytes + ' B';
	  }
	  var units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	  var u = -1;
	  do {
	    bytes /= thresh;
	    ++u;
	  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
	  return bytes.toFixed(1) + '' + units[u];
	}
