"use strict";

const regex = /^-?(?!0\d)\d{6}$/
const testStrings = ['123456', '-123456', '-12345', '023456', '-000016'];

testStrings.forEach((str, index) => {
  const isMatch = regex.test(str);
  console.log(`${str} -> ${isMatch}`);
});






