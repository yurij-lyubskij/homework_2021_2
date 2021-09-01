'use strict';
	
/**
  * Сжимаем строку по алгоритму rle с использованием регулярных выражений
  * 
  * @param {string} string - исходная строка
  * @returns {string} - сжатая строка
  */
const rleRegExp = (string) => (typeof string != 'string') ? ''
    :string.replace(/(.)\1+/g, (series, char) => (char + series.length));

/**
  * Сжимаем строку по алгоритму rle
  * 
  * @param {string} string - исходная строка
  * @returns {string} - сжатая строка
  */
const rle = (string) => {
    if (typeof string != 'string') {
        return '';
    }
    let compressed = '';
    let rep_count = 0;
    for (let i = 0; i < string.length; ++i) {
        if (string[i] == string[i+1]) {
            rep_count++;
        } else {
            compressed += string[i] + (rep_count > 0 ? rep_count + 1 : '');
            rep_count = 0;
        }
    }
    return compressed;
}
