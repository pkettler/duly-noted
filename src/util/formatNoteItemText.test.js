import formatNoteItemText from './formatNoteItemText';
const emptyNoteTextPlaceholder = 'No note text';

function getRandomStringOfLength(ln) {
  const randomChars = Array(ln)
    .fill(null)
    .map(() => Math.floor(Math.random() * 25 + 65));
  return String.fromCharCode.apply(null, randomChars);
}

test("returns 'No note text' when text is undefined", () => {
  const formattedText = formatNoteItemText(undefined);
  expect(formattedText).toBe(emptyNoteTextPlaceholder);
});

test("returns 'No note text' when text is null", () => {
  const formattedText = formatNoteItemText(null);
  expect(formattedText).toBe(emptyNoteTextPlaceholder);
});

test("returns 'No note text' when text is empty", () => {
  const formattedText = formatNoteItemText('');
  expect(formattedText).toBe(emptyNoteTextPlaceholder);
});

test("returns 'No note text' when text is only line breaks and spaces", () => {
  const formattedText = formatNoteItemText(' \n \n\n \n\t');
  expect(formattedText).toBe(emptyNoteTextPlaceholder);
});

test('returns text with whitespace trimmed from start and end', () => {
  const formattedText = formatNoteItemText(' \nRemember to smile \n\t');
  expect(formattedText).toBe('Remember to smile');
});

test("returns text unchanged when it's fewer than 200 characters", () => {
  const text = 'Just a quick note';
  const formattedText = formatNoteItemText(text);
  expect(formattedText).toBe(text);
});
test("returns text unchanged when it's exactly 200 characters", () => {
  const text = getRandomStringOfLength(200);
  const formattedText = formatNoteItemText(text);
  expect(formattedText).toBe(text);
});

test("returns truncated text with ellipsis when it's more than 200 characters", () => {
  const text = getRandomStringOfLength(201);
  const formattedText = formatNoteItemText(text);
  expect(formattedText).toBe(`${text.substring(0, 200)}...`);
});

test("returns text with line breaks replaced when it's fewer than 200 characters", () => {
  const formattedText = formatNoteItemText("Key points:\n\nBe good\nDon't lie");
  expect(formattedText).toBe("Key points: - Be good - Don't lie");
});

test("returns text with line breaks replaced and truncated when it's more than 200 characters", () => {
  const text = `
Satisfied conveying an dependent contented he gentleman agreeable do be.
Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed.\nMr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood do provided stronger is. But discretion frequently sir the she instrument unaffected admiration everything.`;
  const formattedText = formatNoteItemText(text);
  expect(formattedText).toBe(
    'Satisfied conveying an dependent contented he gentleman agreeable do be. - Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do mr prevailed. - Mr feeling ...'
  );
});
