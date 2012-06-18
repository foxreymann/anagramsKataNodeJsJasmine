exports.anagrams = function(word) {
    var ret = unique(permute(word)).sort();
    usedChars = [];
    permArr = [];
    return ret;
}

function unique(items) {
    var fs = require('fs');
    var dict = fs.readFileSync('english_words.txt').toString().toLowerCase().split("\n");

    ret = [];
    for(i in items) {
       if(dict.indexOf(items[i]) != -1) {
            ret.push(items[i]);
        }
    }
    return ret;
}

var permArr = [], usedChars = [];
function permute(input) {
    var i, ch, chars = input.split("");
    for (i = 0; i < chars.length; i++) {
        ch = chars.splice(i, 1);
        usedChars.push(ch);
        if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
        permute(chars.join(""));
        chars.splice(i, 0, ch);
        usedChars.pop();
    }
    return eliminateDuplicates(permArr); 
};

function eliminateDuplicates(arr) {
  var i,
      len=arr.length,
      out=[],
      obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
