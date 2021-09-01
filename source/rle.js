'use strict';
	
/**
  * Сжимаем строку
  * 
  * @param {string} string - исходная строка
  * @returns {string}
  */
const rle = (string) => string.replace(/(.)\1+/g, function(a, b) {return b + a.length});

