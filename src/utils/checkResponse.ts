export default function parseResponse(arg0: string) {
  let substr = '';
  for(let i = 0; i < arg0.length; i++) {
    if(arg0.charAt(i) !== '\u0000')
      substr += arg0.charAt(i);
  }
  return substr;
}