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
    const inputArr = inputStr.split('');
    let repCount = 0;
    return inputArr.reduce((compressed, _, i, Str) => {
        if (Str[i] === Str[i+1]) {
            repCount++;
        } else {
            compressed += Str[i] + (repCount > 0 ? repCount + 1 : '');
            repCount = 0;
        }
        return compressed;
    }, '');
       
}
