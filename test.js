var assert = require('assert');
var test = it;
var table = require('./');
var almost = require('almost-equal');

test('sin', function () {
	var sin = table.sin(1024);
	assert.equal(sin[0], 0);
	assert.equal(sin[~~(1024/4)], 1);
	assert(almost(sin[~~(1024/2)], 0, 0.0001, 0.0001));
});

test('cos', function () {
	var cos = table.cos(4);
	assert.equal(cos[0], 1);
	assert(almost(cos[1], 0, 0.0001, 0.0001));
	assert.equal(cos[2], -1);
	assert(almost(cos[3], 0, 0.0001, 0.0001));
});

test('delta', function () {
	var delta = table.delta(4);
	assert.equal(delta[0], 1);
	assert.equal(delta[1], 0);
	assert.equal(delta[2], 0);
	assert.equal(delta[3], 0);
});

test('pulse', function () {
	var pulse = table.pulse(10, 0);
	assert.equal(pulse[0], 1);
	assert.equal(pulse[1], -1);
	assert.equal(pulse[9], -1);
});

test('square', function () {
	var square = table.square(10);
	assert.equal(square[0], 1);
	assert.equal(square[4], 1);
	assert.equal(square[5], -1);
	assert.equal(square[9], -1);
});

test('triangle', function () {
	var triangle = table.triangle(8);
	// console.log(triangle)
	assert.equal(triangle[0], 0);
	assert.equal(triangle[1], 0.5);
	assert.equal(triangle[2], 1);
	assert.equal(triangle[3], 0.5);
	assert.equal(triangle[4], 0);
	assert.equal(triangle[6], -1);
});

test('saw', function () {
	var saw = table.saw(8);
	assert.equal(saw[0], 1);
	assert.equal(saw[7], -1);
});

test('pass table', function () {
	var saw = table.saw(new Float64Array(120));
	var sin = table.sin(new Float64Array(120));
	var cos = table.cos(new Float64Array(120));
	var triangle = table.triangle(new Float64Array(120));
	var pulse = table.pulse(new Float64Array(120));
	var noise = table.noise(new Float64Array(120));
});