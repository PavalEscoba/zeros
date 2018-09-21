module.exports = function getZerosCount(number) {
  //my own solution
  let result = 0;
  let pow = 1;
  while (5 ** pow < number){
    result += Math.floor(number/(5**pow));
    pow +=1;
  }
  return result;
/*   let zeros = 0; // элегантное решение отсюда https://site.ada.edu.az/~medv/acm/Docs%20e-olimp/Volume%202/123.htm
  while(number > 0){
    number = Math.trunc(number / 5);
    zeros += number;
  }
  return zeros; */
}