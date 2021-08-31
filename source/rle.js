'use strict';

function rle(string)
{
  return string.replace(/(.)\1+/g, function(a, b) {return b + a.length});
}

