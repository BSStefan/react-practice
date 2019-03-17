// @flow
import { shortText } from './text';

it('Should return unformatted text if lenght is less than maxLength', () => {
  const text = 'Test';
  expect(shortText(text, 10)).toBe(text)
})

it('Should return formatted text if length is more than maxLength', () => {
  const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  const expectValue = 'Lorem Ipsum is simply dummy ...';
  expect(shortText(text, 32)).toBe(expectValue)
})

it('Should return empty if empty string is text', () => {
  const text = '';
  expect(shortText(text, 32)).toBe('')
})