'use strict';
	
/**
  * Сжимаем строку по алгоритму rle с использованием регулярных выражений
  * 
  * @param {string} string - исходная строка
  * @returns {string} - сжатая строка
  */
const rleRegExp = (string) =>
    (typeof string !== 'string')
        ? ''
        : string.replace(/(.)\1+/g, (series, char) => (char + series.length));

/**
  * Сжимаем строку по алгоритму rle
  * 
  * @param {string} string - исходная строка
  * @returns {string} - сжатая строка
  */
const rle = (string) => {
    if (typeof string !== 'string') {
        return '';
    }
    let compressed = '';
    let repCount = 0;
    for (let i = 0; i < string.length; ++i) {
        if (string[i] === string[i+1]) {
            repCount++;
        } else {
            compressed += string[i] + (repCount > 0 ? repCount + 1 : '');
            repCount = 0;
        }
    }
    return compressed;
}
