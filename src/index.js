"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avg = exports.max = exports.min = void 0;

const min = (array = 0) => {
  if (array.length === 0 || array === 0) {
    return 0;
  }

  const sorted = array.sort((a, b) => a - b);
  return sorted[0];
};

exports.min = min;

const max = (array = 0) => {
  if (array.length === 0 || array === 0) {
    return 0;
  }

  const sorted = array.sort((a, b) => b - a);
  return sorted[0];
};

exports.max = max;

const avg = (array = 0) => {
  if (array.length === 0 || array === 0) {
    return 0;
  }

  const sum = array.reduce((item, acc) => acc + item, 0);
  const average = sum / (array.length);
  return average;
};

exports.avg = avg;
