const CONFIG = {
	appid: "1",
	secret: "1",
	apiurl: "http://192.168.99.131",
	fileuploadurl: ""
};

function getPostData(data) {
	//@todo 暂时没有做签名数据整合
	var tmpdata = data || {};
	tmpdata.appid = CONFIG.appid;
	tmpdata.secret = CONFIG.secret;
	// tmpdata.version = '1.0';
	tmpdata.timestamp = time();
	ksort(tmpdata);
	var tmpdataStringArr = [];
	for (var key in tmpdata) {
		if (typeof tmpdata[key] != 'undefined') {
			tmpdataStringArr.push(key + '=' + tmpdata[key]);
		}
	}
	delete tmpdata.secret;
	tmpdata.sign = md5(tmpdataStringArr.join('&'));
	return tmpdata;
}

function uploadfile(dataobj) {
	var postdata = getPostData({
		method: "file.upload.upload",
	});
	var uploadTask = uni.uploadFile({
		url: CONFIG.fileuploadurl, //仅为示例，非真实的接口地址
		filePath: dataobj.filePath,
		name: 'file',
		formData: postdata,
		success(res) {
			var data = res.data;
			if (dataobj.success) {
				dataobj.success(JSON.parse(res.data));
			}
		},
		fail(res) {
			if (dataobj.fail) dataobj.fail(res)
		}
	})
	uploadTask.onProgressUpdate((res) => {
		if (dataobj.task) dataobj.task(res);
	})
	return uploadTask;
}

function post(data, callback) {
	data = getPostData(data);
	//获取远程接口数据
	console.log(CONFIG.apiurl+JSON.stringify(data))
	var requestTask = uni.request({
		url: CONFIG.apiurl,
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded',
			'xinyi-key': 'Weixinsoft/qingcanyincrm',
			'appid': CONFIG.appid
		},
		data: data,
		success: function(rest) {
			callback(rest);
		},
		fail: function(error) {
			callback(error);
		}
	})
	//return requestTask;
}

function get(data, callback) {
	data = getPostData(data);
	//获取远程接口数据，并且进行缓存
	var requestTask = uni.request({
		url: CONFIG.apiurl,
		method: 'GET',
		header: {
			'content-type': 'application/x-www-form-urlencoded',
			'xinyi-key': 'Weixinsoft/qingcanyincrm',
			'appid': CONFIG.appid
		},
		data: data,
		success: function(rest) {
			callback(rest);
		},
		fail: function(error) {
			callback(error);
		}
	})
	return requestTask;
}

function i18n_loc_get_default () { // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/i18n_loc_get_default/
  // original by: Brett Zamir (http://brett-zamir.me)
  //      note 1: Renamed in PHP6 from locale_get_default(). Not listed yet at php.net.
  //      note 1: List of locales at <http://demo.icu-project.org/icu-bin/locexp>
  //      note 1: To be usable with sort() if it is passed the `SORT_LOCALE_STRING`
  //      note 1: sorting flag: http://php.net/manual/en/function.sort.php
  //   example 1: i18n_loc_get_default()
  //   returns 1: 'en_US_POSIX'
  //   example 2: i18n_loc_set_default('pt_PT')
  //   example 2: i18n_loc_get_default()
  //   returns 2: 'pt_PT'

  var $global = (typeof window !== 'undefined' ? window : global)
  $global.$locutus = $global.$locutus || {}
  var $locutus = $global.$locutus
  $locutus.php = $locutus.php || {}
  $locutus.php.locales = $locutus.php.locales || {}

  return $locutus.php.locale_default || 'en_US_POSIX'
}
function ini_get (varname) { // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/ini_get/
  // original by: Brett Zamir (http://brett-zamir.me)
  //      note 1: The ini values must be set by ini_set or manually within an ini file
  //   example 1: ini_set('date.timezone', 'Asia/Hong_Kong')
  //   example 1: ini_get('date.timezone')
  //   returns 1: 'Asia/Hong_Kong'

  var $global = (typeof window !== 'undefined' ? window : global)
  $global.$locutus = $global.$locutus || {}
  var $locutus = $global.$locutus
  $locutus.php = $locutus.php || {}
  $locutus.php.ini = $locutus.php.ini || {}

  if ($locutus.php.ini[varname] && $locutus.php.ini[varname].local_value !== undefined) {
    if ($locutus.php.ini[varname].local_value === null) {
      return ''
    }
    return $locutus.php.ini[varname].local_value
  }

  return ''
}
function utf8_encode (argString) { // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Ulrich
  // bugfixed by: Rafał Kukawski (http://blog.kukawski.pl)
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld')
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return ''
  }

  // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var string = (argString + '')
  var utftext = ''
  var start
  var end
  var stringl = 0

  start = end = 0
  stringl = string.length
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n)
    var enc = null

    if (c1 < 128) {
      end++
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      )
    } else if ((c1 & 0xF800) !== 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      )
    } else {
      // surrogate pairs
      if ((c1 & 0xFC00) !== 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n)
      }
      var c2 = string.charCodeAt(++n)
      if ((c2 & 0xFC00) !== 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1))
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      )
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end)
      }
      utftext += enc
      start = end = n + 1
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl)
  }

  return utftext
}
function strcasecmp (fString1, fString2) {
  //  discuss at: http://locutus.io/php/strcasecmp/
  // original by: Martijn Wieringa
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  //   example 1: strcasecmp('Hello', 'hello')
  //   returns 1: 0

  var string1 = (fString1 + '').toLowerCase()
  var string2 = (fString2 + '').toLowerCase()

  if (string1 > string2) {
    return 1
  } else if (string1 === string2) {
    return 0
  }

  return -1
}
function md5(str) {
	//  discuss at: http://locutus.io/php/md5/
	// original by: Webtoolkit.info (http://www.webtoolkit.info/)
	// improved by: Michael White (http://getsprink.com)
	// improved by: Jack
	// improved by: Kevin van Zonneveld (http://kvz.io)
	//    input by: Brett Zamir (http://brett-zamir.me)
	// bugfixed by: Kevin van Zonneveld (http://kvz.io)
	//      note 1: Keep in mind that in accordance with PHP, the whole string is buffered and then
	//      note 1: hashed. If available, we'd recommend using Node's native crypto modules directly
	//      note 1: in a steaming fashion for faster and more efficient hashing
	//   example 1: md5('Kevin van Zonneveld')
	//   returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'

	var hash
	try {
		var crypto = require('crypto')
		var md5sum = crypto.createHash('md5')
		md5sum.update(str)
		hash = md5sum.digest('hex')
	} catch (e) {
		hash = undefined
	}

	if (hash !== undefined) {
		return hash
	}

	var utf8Encode = utf8_encode
	var xl

	var _rotateLeft = function(lValue, iShiftBits) {
		return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits))
	}

	var _addUnsigned = function(lX, lY) {
		var lX4, lY4, lX8, lY8, lResult
		lX8 = (lX & 0x80000000)
		lY8 = (lY & 0x80000000)
		lX4 = (lX & 0x40000000)
		lY4 = (lY & 0x40000000)
		lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF)
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8)
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8)
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8)
			}
		} else {
			return (lResult ^ lX8 ^ lY8)
		}
	}

	var _F = function(x, y, z) {
		return (x & y) | ((~x) & z)
	}
	var _G = function(x, y, z) {
		return (x & z) | (y & (~z))
	}
	var _H = function(x, y, z) {
		return (x ^ y ^ z)
	}
	var _I = function(x, y, z) {
		return (y ^ (x | (~z)))
	}

	var _FF = function(a, b, c, d, x, s, ac) {
		a = _addUnsigned(a, _addUnsigned(_addUnsigned(_F(b, c, d), x), ac))
		return _addUnsigned(_rotateLeft(a, s), b)
	}

	var _GG = function(a, b, c, d, x, s, ac) {
		a = _addUnsigned(a, _addUnsigned(_addUnsigned(_G(b, c, d), x), ac))
		return _addUnsigned(_rotateLeft(a, s), b)
	}

	var _HH = function(a, b, c, d, x, s, ac) {
		a = _addUnsigned(a, _addUnsigned(_addUnsigned(_H(b, c, d), x), ac))
		return _addUnsigned(_rotateLeft(a, s), b)
	}

	var _II = function(a, b, c, d, x, s, ac) {
		a = _addUnsigned(a, _addUnsigned(_addUnsigned(_I(b, c, d), x), ac))
		return _addUnsigned(_rotateLeft(a, s), b)
	}

	var _convertToWordArray = function(str) {
		var lWordCount
		var lMessageLength = str.length
		var lNumberOfWordsTemp1 = lMessageLength + 8
		var lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64
		var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16
		var lWordArray = new Array(lNumberOfWords - 1)
		var lBytePosition = 0
		var lByteCount = 0
		while (lByteCount < lMessageLength) {
			lWordCount = (lByteCount - (lByteCount % 4)) / 4
			lBytePosition = (lByteCount % 4) * 8
			lWordArray[lWordCount] = (lWordArray[lWordCount] |
				(str.charCodeAt(lByteCount) << lBytePosition))
			lByteCount++
		}
		lWordCount = (lByteCount - (lByteCount % 4)) / 4
		lBytePosition = (lByteCount % 4) * 8
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition)
		lWordArray[lNumberOfWords - 2] = lMessageLength << 3
		lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29
		return lWordArray
	}

	var _wordToHex = function(lValue) {
		var wordToHexValue = ''
		var wordToHexValueTemp = ''
		var lByte
		var lCount

		for (lCount = 0; lCount <= 3; lCount++) {
			lByte = (lValue >>> (lCount * 8)) & 255
			wordToHexValueTemp = '0' + lByte.toString(16)
			wordToHexValue = wordToHexValue + wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2)
		}
		return wordToHexValue
	}

	var x = []
	var k
	var AA
	var BB
	var CC
	var DD
	var a
	var b
	var c
	var d
	var S11 = 7
	var S12 = 12
	var S13 = 17
	var S14 = 22
	var S21 = 5
	var S22 = 9
	var S23 = 14
	var S24 = 20
	var S31 = 4
	var S32 = 11
	var S33 = 16
	var S34 = 23
	var S41 = 6
	var S42 = 10
	var S43 = 15
	var S44 = 21

	str = utf8Encode(str)
	x = _convertToWordArray(str)
	a = 0x67452301
	b = 0xEFCDAB89
	c = 0x98BADCFE
	d = 0x10325476

	xl = x.length
	for (k = 0; k < xl; k += 16) {
		AA = a
		BB = b
		CC = c
		DD = d
		a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478)
		d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756)
		c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB)
		b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE)
		a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF)
		d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A)
		c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613)
		b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501)
		a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8)
		d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF)
		c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1)
		b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE)
		a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122)
		d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193)
		c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E)
		b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821)
		a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562)
		d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340)
		c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51)
		b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA)
		a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D)
		d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453)
		c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681)
		b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8)
		a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6)
		d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6)
		c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87)
		b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED)
		a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905)
		d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8)
		c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9)
		b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A)
		a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942)
		d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681)
		c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122)
		b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C)
		a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44)
		d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9)
		c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60)
		b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70)
		a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6)
		d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA)
		c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085)
		b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05)
		a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039)
		d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5)
		c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8)
		b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665)
		a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244)
		d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97)
		c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7)
		b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039)
		a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3)
		d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92)
		c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D)
		b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1)
		a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F)
		d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0)
		c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314)
		b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1)
		a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82)
		d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235)
		c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB)
		b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391)
		a = _addUnsigned(a, AA)
		b = _addUnsigned(b, BB)
		c = _addUnsigned(c, CC)
		d = _addUnsigned(d, DD)
	}

	var temp = _wordToHex(a) + _wordToHex(b) + _wordToHex(c) + _wordToHex(d)

	return temp.toLowerCase()
}

function ksort(inputArr, sortFlags) {

	var i18nlgd = i18n_loc_get_default
	var strnatcmp = strnatcmp

	var tmpArr = {}
	var keys = []
	var sorter
	var i
	var k
	var sortByReference = false
	var populateArr = {}

	var $global = (typeof window !== 'undefined' ? window : global)
	$global.$locutus = $global.$locutus || {}
	var $locutus = $global.$locutus
	$locutus.php = $locutus.php || {}
	$locutus.php.locales = $locutus.php.locales || {}

	switch (sortFlags) {
		case 'SORT_STRING':
			// compare items as strings
			sorter = function(a, b) {
				return strnatcmp(b, a)
			}
			break
		case 'SORT_LOCALE_STRING':
			// compare items as strings, based on the current locale
			// (set with i18n_loc_set_default() as of PHP6)
			var loc = i18nlgd()
			sorter = $locutus.locales[loc].sorting
			break
		case 'SORT_NUMERIC':
			// compare items numerically
			sorter = function(a, b) {
				return ((a + 0) - (b + 0))
			}
			break
		default:
			// case 'SORT_REGULAR': // compare items normally (don't change types)
			sorter = function(a, b) {
				var aFloat = parseFloat(a)
				var bFloat = parseFloat(b)
				var aNumeric = aFloat + '' === a
				var bNumeric = bFloat + '' === b
				if (aNumeric && bNumeric) {
					return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0
				} else if (aNumeric && !bNumeric) {
					return 1
				} else if (!aNumeric && bNumeric) {
					return -1
				}
				return a > b ? 1 : a < b ? -1 : 0
			}
			break
	}

	// Make a list of key names
	for (k in inputArr) {
		if (inputArr.hasOwnProperty(k)) {
			keys.push(k)
		}
	}
	keys.sort(sorter)

	var iniVal = (typeof require !== 'undefined' ? ini_get('locutus.sortByReference') : undefined) ||
		'on'
	sortByReference = iniVal === 'on'
	populateArr = sortByReference ? inputArr : populateArr

	// Rebuild array with sorted key names
	for (i = 0; i < keys.length; i++) {
		k = keys[i]
		tmpArr[k] = inputArr[k]
		if (sortByReference) {
			delete inputArr[k]
		}
	}
	for (i in tmpArr) {
		if (tmpArr.hasOwnProperty(i)) {
			populateArr[i] = tmpArr[i]
		}
	}

	return sortByReference || populateArr
}

function time() {
	return Math.floor(new Date().getTime() / 1000)
}

function strtotime(text, now) {
	var parsed
	var match
	var today
	var year
	var date
	var days
	var ranges
	var len
	var times
	var regex
	var i
	var fail = false

	if (!text) {
		return fail
	}

	// Unecessary spaces
	text = text.replace(/^\s+|\s+$/g, '')
		.replace(/\s{2,}/g, ' ')
		.replace(/[\t\r\n]/g, '')
		.toLowerCase()

	// in contrast to php, js Date.parse function interprets:
	// dates given as yyyy-mm-dd as in timezone: UTC,
	// dates with "." or "-" as MDY instead of DMY
	// dates with two-digit years differently
	// etc...etc...
	// ...therefore we manually parse lots of common date formats
	var pattern = new RegExp([
		'^(\\d{1,4})',
		'([\\-\\.\\/:])',
		'(\\d{1,2})',
		'([\\-\\.\\/:])',
		'(\\d{1,4})',
		'(?:\\s(\\d{1,2}):(\\d{2})?:?(\\d{2})?)?',
		'(?:\\s([A-Z]+)?)?$'
	].join(''))
	match = text.match(pattern)

	if (match && match[2] === match[4]) {
		if (match[1] > 1901) {
			switch (match[2]) {
				case '-':
					// YYYY-M-D
					if (match[3] > 12 || match[5] > 31) {
						return fail
					}

					return new Date(match[1], parseInt(match[3], 10) - 1, match[5],
						match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
				case '.':
					// YYYY.M.D is not parsed by strtotime()
					return fail
				case '/':
					// YYYY/M/D
					if (match[3] > 12 || match[5] > 31) {
						return fail
					}

					return new Date(match[1], parseInt(match[3], 10) - 1, match[5],
						match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
			}
		} else if (match[5] > 1901) {
			switch (match[2]) {
				case '-':
					// D-M-YYYY
					if (match[3] > 12 || match[1] > 31) {
						return fail
					}

					return new Date(match[5], parseInt(match[3], 10) - 1, match[1],
						match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
				case '.':
					// D.M.YYYY
					if (match[3] > 12 || match[1] > 31) {
						return fail
					}

					return new Date(match[5], parseInt(match[3], 10) - 1, match[1],
						match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
				case '/':
					// M/D/YYYY
					if (match[1] > 12 || match[3] > 31) {
						return fail
					}

					return new Date(match[5], parseInt(match[1], 10) - 1, match[3],
						match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
			}
		} else {
			switch (match[2]) {
				case '-':
					// YY-M-D
					if (match[3] > 12 || match[5] > 31 || (match[1] < 70 && match[1] > 38)) {
						return fail
					}

					year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2000 : match[1]
					return new Date(year, parseInt(match[3], 10) - 1, match[5],
						match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
				case '.':
					// D.M.YY or H.MM.SS
					if (match[5] >= 70) {
						// D.M.YY
						if (match[3] > 12 || match[1] > 31) {
							return fail
						}

						return new Date(match[5], parseInt(match[3], 10) - 1, match[1],
							match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
					}
					if (match[5] < 60 && !match[6]) {
						// H.MM.SS
						if (match[1] > 23 || match[3] > 59) {
							return fail
						}

						today = new Date()
						return new Date(today.getFullYear(), today.getMonth(), today.getDate(),
							match[1] || 0, match[3] || 0, match[5] || 0, match[9] || 0) / 1000
					}

					// invalid format, cannot be parsed
					return fail
				case '/':
					// M/D/YY
					if (match[1] > 12 || match[3] > 31 || (match[5] < 70 && match[5] > 38)) {
						return fail
					}

					year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2000 : match[5]
					return new Date(year, parseInt(match[1], 10) - 1, match[3],
						match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
				case ':':
					// HH:MM:SS
					if (match[1] > 23 || match[3] > 59 || match[5] > 59) {
						return fail
					}

					today = new Date()
					return new Date(today.getFullYear(), today.getMonth(), today.getDate(),
						match[1] || 0, match[3] || 0, match[5] || 0) / 1000
			}
		}
	}

	// other formats and "now" should be parsed by Date.parse()
	if (text === 'now') {
		return now === null || isNaN(now) ?
			new Date().getTime() / 1000 | 0 :
			now | 0
	}
	if (!isNaN(parsed = Date.parse(text))) {
		return parsed / 1000 | 0
	}
	// Browsers !== Chrome have problems parsing ISO 8601 date strings, as they do
	// not accept lower case characters, space, or shortened time zones.
	// Therefore, fix these problems and try again.
	// Examples:
	//   2015-04-15 20:33:59+02
	//   2015-04-15 20:33:59z
	//   2015-04-15t20:33:59+02:00
	pattern = new RegExp([
		'^([0-9]{4}-[0-9]{2}-[0-9]{2})',
		'[ t]',
		'([0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?)',
		'([\\+-][0-9]{2}(:[0-9]{2})?|z)'
	].join(''))
	match = text.match(pattern)
	if (match) {
		// @todo: time zone information
		if (match[4] === 'z') {
			match[4] = 'Z'
		} else if (match[4].match(/^([+-][0-9]{2})$/)) {
			match[4] = match[4] + ':00'
		}

		if (!isNaN(parsed = Date.parse(match[1] + 'T' + match[2] + match[4]))) {
			return parsed / 1000 | 0
		}
	}

	date = now ? new Date(now * 1000) : new Date()
	days = {
		'sun': 0,
		'mon': 1,
		'tue': 2,
		'wed': 3,
		'thu': 4,
		'fri': 5,
		'sat': 6
	}
	ranges = {
		'yea': 'FullYear',
		'mon': 'Month',
		'day': 'Date',
		'hou': 'Hours',
		'min': 'Minutes',
		'sec': 'Seconds'
	}

	function lastNext(type, range, modifier) {
		var diff
		var day = days[range]

		if (typeof day !== 'undefined') {
			diff = day - date.getDay()

			if (diff === 0) {
				diff = 7 * modifier
			} else if (diff > 0 && type === 'last') {
				diff -= 7
			} else if (diff < 0 && type === 'next') {
				diff += 7
			}

			date.setDate(date.getDate() + diff)
		}
	}

	function process(val) {
		// @todo: Reconcile this with regex using \s, taking into account
		// browser issues with split and regexes
		var splt = val.split(' ')
		var type = splt[0]
		var range = splt[1].substring(0, 3)
		var typeIsNumber = /\d+/.test(type)
		var ago = splt[2] === 'ago'
		var num = (type === 'last' ? -1 : 1) * (ago ? -1 : 1)

		if (typeIsNumber) {
			num *= parseInt(type, 10)
		}

		if (ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\.)?$/i)) {
			return date['set' + ranges[range]](date['get' + ranges[range]]() + num)
		}

		if (range === 'wee') {
			return date.setDate(date.getDate() + (num * 7))
		}

		if (type === 'next' || type === 'last') {
			lastNext(type, range, num)
		} else if (!typeIsNumber) {
			return false
		}

		return true
	}

	times = '(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec' +
		'|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?' +
		'|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)'
	regex = '([+-]?\\d+\\s' + times + '|' + '(last|next)\\s' + times + ')(\\sago)?'

	match = text.match(new RegExp(regex, 'gi'))
	if (!match) {
		return fail
	}

	for (i = 0, len = match.length; i < len; i++) {
		if (!process(match[i])) {
			return fail
		}
	}

	return (date.getTime() / 1000)
}

function date(format, timestamp) {

	var jsdate, f
	// Keep this here (works, but for code commented-out below for file size reasons)
	// var tal= [];
	var txtWords = [
		'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	]
	// trailing backslash -> (dropped)
	// a backslash followed by any character (including backslash) -> the character
	// empty string -> empty string
	var formatChr = /\\?(.?)/gi
	var formatChrCb = function(t, s) {
		return f[t] ? f[t]() : s
	}
	var _pad = function(n, c) {
		n = String(n)
		while (n.length < c) {
			n = '0' + n
		}
		return n
	}
	f = {
		// Day
		d: function() {
			// Day of month w/leading 0; 01..31
			return _pad(f.j(), 2)
		},
		D: function() {
			// Shorthand day name; Mon...Sun
			return f.l()
				.slice(0, 3)
		},
		j: function() {
			// Day of month; 1..31
			return jsdate.getDate()
		},
		l: function() {
			// Full day name; Monday...Sunday
			return txtWords[f.w()] + 'day'
		},
		N: function() {
			// ISO-8601 day of week; 1[Mon]..7[Sun]
			return f.w() || 7
		},
		S: function() {
			// Ordinal suffix for day of month; st, nd, rd, th
			var j = f.j()
			var i = j % 10
			if (i <= 3 && parseInt((j % 100) / 10, 10) === 1) {
				i = 0
			}
			return ['st', 'nd', 'rd'][i - 1] || 'th'
		},
		w: function() {
			// Day of week; 0[Sun]..6[Sat]
			return jsdate.getDay()
		},
		z: function() {
			// Day of year; 0..365
			var a = new Date(f.Y(), f.n() - 1, f.j())
			var b = new Date(f.Y(), 0, 1)
			return Math.round((a - b) / 864e5)
		},

		// Week
		W: function() {
			// ISO-8601 week number
			var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3)
			var b = new Date(a.getFullYear(), 0, 4)
			return _pad(1 + Math.round((a - b) / 864e5 / 7), 2)
		},

		// Month
		F: function() {
			// Full month name; January...December
			return txtWords[6 + f.n()]
		},
		m: function() {
			// Month w/leading 0; 01...12
			return _pad(f.n(), 2)
		},
		M: function() {
			// Shorthand month name; Jan...Dec
			return f.F()
				.slice(0, 3)
		},
		n: function() {
			// Month; 1...12
			return jsdate.getMonth() + 1
		},
		t: function() {
			// Days in month; 28...31
			return (new Date(f.Y(), f.n(), 0))
				.getDate()
		},

		// Year
		L: function() {
			// Is leap year?; 0 or 1
			var j = f.Y()
			return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0
		},
		o: function() {
			// ISO-8601 year
			var n = f.n()
			var W = f.W()
			var Y = f.Y()
			return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0)
		},
		Y: function() {
			// Full year; e.g. 1980...2010
			return jsdate.getFullYear()
		},
		y: function() {
			// Last two digits of year; 00...99
			return f.Y()
				.toString()
				.slice(-2)
		},

		// Time
		a: function() {
			// am or pm
			return jsdate.getHours() > 11 ? 'pm' : 'am'
		},
		A: function() {
			// AM or PM
			return f.a()
				.toUpperCase()
		},
		B: function() {
			// Swatch Internet time; 000..999
			var H = jsdate.getUTCHours() * 36e2
			// Hours
			var i = jsdate.getUTCMinutes() * 60
			// Minutes
			// Seconds
			var s = jsdate.getUTCSeconds()
			return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3)
		},
		g: function() {
			// 12-Hours; 1..12
			return f.G() % 12 || 12
		},
		G: function() {
			// 24-Hours; 0..23
			return jsdate.getHours()
		},
		h: function() {
			// 12-Hours w/leading 0; 01..12
			return _pad(f.g(), 2)
		},
		H: function() {
			// 24-Hours w/leading 0; 00..23
			return _pad(f.G(), 2)
		},
		i: function() {
			// Minutes w/leading 0; 00..59
			return _pad(jsdate.getMinutes(), 2)
		},
		s: function() {
			// Seconds w/leading 0; 00..59
			return _pad(jsdate.getSeconds(), 2)
		},
		u: function() {
			// Microseconds; 000000-999000
			return _pad(jsdate.getMilliseconds() * 1000, 6)
		},

		// Timezone
		e: function() {
			// Timezone identifier; e.g. Atlantic/Azores, ...
			// The following works, but requires inclusion of the very large
			// timezone_abbreviations_list() function.
			/*              return that.date_default_timezone_get();
			 */
			var msg = 'Not supported (see source code of date() for timezone on how to add support)'
			throw new Error(msg)
		},
		I: function() {
			// DST observed?; 0 or 1
			// Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
			// If they are not equal, then DST is observed.
			var a = new Date(f.Y(), 0)
			// Jan 1
			var c = Date.UTC(f.Y(), 0)
			// Jan 1 UTC
			var b = new Date(f.Y(), 6)
			// Jul 1
			// Jul 1 UTC
			var d = Date.UTC(f.Y(), 6)
			return ((a - c) !== (b - d)) ? 1 : 0
		},
		O: function() {
			// Difference to GMT in hour format; e.g. +0200
			var tzo = jsdate.getTimezoneOffset()
			var a = Math.abs(tzo)
			return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4)
		},
		P: function() {
			// Difference to GMT w/colon; e.g. +02:00
			var O = f.O()
			return (O.substr(0, 3) + ':' + O.substr(3, 2))
		},
		T: function() {
			return 'UTC'
		},
		Z: function() {
			// Timezone offset in seconds (-43200...50400)
			return -jsdate.getTimezoneOffset() * 60
		},

		// Full Date/Time
		c: function() {
			// ISO-8601 date.
			return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb)
		},
		r: function() {
			// RFC 2822
			return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb)
		},
		U: function() {
			// Seconds since UNIX epoch
			return jsdate / 1000 | 0
		}
	}

	var _date = function(format, timestamp) {
		jsdate = (timestamp === undefined ? new Date() // Not provided
			:
			(timestamp instanceof Date) ? new Date(timestamp) // JS Date()
			:
			new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
		)
		return format.replace(formatChr, formatChrCb)
	}

	return _date(format, timestamp)
}


function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};

module.exports = {
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	PHP: {
		date,
		time,
		strtotime,
		md5,
		ksort
	},
	HTTP: {
		get,
		post,
		getPostData
	}
}
