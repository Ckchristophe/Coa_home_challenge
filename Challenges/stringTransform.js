/*Coding Challenge 2: String Transformation*/
//---------------------------------------------------------------------------------------


function transformString(str) {
    const length = str.length;
    let transformedStr = '';
  
    if (length % 15 === 0) {
      // Reverse the string
      transformedStr = str.split('').reverse().join('');
  
      // Replace each character with its ASCII code
      transformedStr = transformedStr.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
      // Reverse the string
      transformedStr = str.split('').reverse().join('');
    } else if (length % 5 === 0) {
      // Replace each character with its ASCII code
      transformedStr = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
      // No transformation
      transformedStr = str;
    }
  
    return transformedStr;
  }
  
  // Example usage
  console.log(transformString('Hamburger')); // Output: "regrubmaH"
  console.log(transformString('Pizza')); // Output: "80 105 122 122 97"
  console.log(transformString('Chocolate Chip Cookie')); // Output: "eikooCpihCetalocohC"