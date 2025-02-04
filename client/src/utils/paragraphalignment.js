export function paragraphAlignment(text = '', wordInterval) {
  let words = text.split(' ');
  for (let i = wordInterval; i < words.length; i += wordInterval + 1) {
    words.splice(i, 0, '<br/><br/>');
  }
  return words.join(' ');
}
