'use strict';
	
/**
  * Сжимаем строку
  * 
  * @param {string} string - исходная строка
  * @returns {string}
  */
const rle = (string) => (typeof string != 'string') ? ''
	:string.replace(/(.)\1+/g, (series, char) => (char + series.length));

