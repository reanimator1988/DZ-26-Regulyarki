"use strict";

const regex = /^0*[0-9]{1,6}$/;
const testStrings = ['123456', '012345', '-000123', '123', '020567', '000000120345', '-123456'];

testStrings.forEach(str => {
  const isSixDigitNumber = regex.test(str);
  console.log(`${str} -> ${regex.test(str)}`);
});





