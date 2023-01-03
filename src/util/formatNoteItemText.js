export default function formatNoteItemText(text) {
  if (text === null || text === undefined) {
    text = 'No note text';
  }
  if (text.length > 200) {
    text = text.substring(0, 200) + '...';
  }

  text = text.trim();
  text = text.replace(/\n*\n/g, ' - ');

  if (text === '') {
    text = 'No note text';
  }

  return text;
}
