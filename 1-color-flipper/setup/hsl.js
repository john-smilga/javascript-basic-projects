/* 
    hsl(hue,saturation,light,alpha)
    hsl(0 - 360, 0 -100%,0 - 100%,0 - 1)

*/

// get value for saturation and light (0-100)
function getValues() {
  let value = [];
  for (let i = 0; i <= 100; i++) {
    value.push(i);
  }
  return value;
}
