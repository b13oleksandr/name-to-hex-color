import { nameToHexColor } from '../src/nameToHexColor';

const HEX_COLOR_REGEX = /^#[a-fA-F0-9]{6}$/;

test('nameToHexColor have to return hex color', () => {
  expect(nameToHexColor('John Connor'))
    .toMatch(HEX_COLOR_REGEX);

  expect(nameToHexColor('Anakin Skywalker'))
    .toMatch(HEX_COLOR_REGEX);

  expect(nameToHexColor('Dominic Toretto'))
    .toMatch(HEX_COLOR_REGEX);

  expect(nameToHexColor('Shrek'))
    .toMatch(HEX_COLOR_REGEX);

  expect(nameToHexColor('Олександр Бондарчук'))
    .toMatch(HEX_COLOR_REGEX);

  expect(nameToHexColor(''))
    .toMatch(HEX_COLOR_REGEX);
});
