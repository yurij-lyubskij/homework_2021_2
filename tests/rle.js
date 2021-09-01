'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно для стандартных данных', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('rle работает с пустой строкой', function (assert) {
		assert.strictEqual(rle(''), '');
	});
	
	QUnit.test('rle работает, ничего не сжимая', function (assert) {
		assert.strictEqual(rle('AB'), 'AB');
	});
	
	QUnit.test('rle работает, когда в строке есть числа', function (assert) {
		assert.strictEqual(rle('BABB333'), 'BAB233');
	});
	
	QUnit.test('rle работает, когда на входе undefined', function (assert) {
		assert.strictEqual(rle(undefined), '');
	});
	
	QUnit.test('rle работает, когда на входе null', function (assert) {
		assert.strictEqual(rle(null), '');
	});
	
	QUnit.test('rle работает, когда на входе число', function (assert) {
		assert.strictEqual(rle(1), '');
	});
	
	QUnit.test('rle работает, когда на входе массив', function (assert) {
		assert.strictEqual(rle([1, 2, 3]), '');
	});
	
	QUnit.test('rle работает, когда на входе объект', function (assert) {
		assert.strictEqual(rle({key: 1}), '');
	});
});
