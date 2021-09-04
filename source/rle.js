'use strict';
/**
  * Сжимаем строку по алгоритму rle с использованием регулярных выражений
  * 
  * @param {string} inputStr - исходная строка
  * @returns {string|TypeError} - сжатая строка или объект ошибки при неправильном типе аргумента
  */
const rleRegExp = (inputStr) =>
    (typeof inputStr !== 'string')
        ? new TypeError('inputStr is not string')
        : inputStr.replace(/(.)\1+/g, (series, char) => (char + series.length));

/**
  * Сжимаем строку по алгоритму rle
  * 
  * @param {string} inputStr - исходная строка
  * @returns {string|TypeError} - сжатая строка или объект ошибки при неправильном типе аргумента
  */
const rle = (inputStr) => {
    if (typeof inputStr !== 'string') {
        return new TypeError('inputStr is not string');
    }
    let compressed = '';
    let repCount = 0;
    for (let i = 0; i < inputStr.length; ++i) {
        if (inputStr[i] === inputStr[i+1]) {
            repCount++;
        } else {
            compressed += inputStr[i] + (repCount > 0 ? repCount + 1 : '');
            repCount = 0;
        }
    }
    return compressed;
}

