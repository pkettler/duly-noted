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
//***************Moved from NoteListItem to ../util/formatNoteItemText  */
// let truncatedText;
// if (text.length > 200) {
//   truncatedText = `${text.substr(0, 200)}...`;
// } else {
//   truncatedText = text;
// }

// const addDefaultText = (text) => {
//   let textToTrim = text.trim(text);
//   if (textToTrim === '') {
//     return (textToTrim = 'No Note Text');
//   } else if (textToTrim === ' ') {
//     return (textToTrim = 'No Note Text');
//   } else {
//     return textToTrim;
//   }
// };
