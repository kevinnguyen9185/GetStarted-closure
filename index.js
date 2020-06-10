


function checkWithoutClosure(staringUrl, toCompareUrl){
  return staringUrl === toCompareUrl;
}

(function Widget2(){
  var startingUrl = '/home';

  console.log(checkWithoutClosure(startingUrl, '/home'));
  console.log(checkWithoutClosure(startingUrl, '/home1'));
  console.log(checkWithoutClosure(startingUrl, '/home2'));
})();


//==============================================

// function checkWithClosure(startingUrl) {
//   return function(toCompareUrl) {
//     return startingUrl === toCompareUrl;
//   }
// }

// (function Widget1(){
//   var checkHomePage = checkWithClosure('/home');

//   console.log(checkHomePage('/home'));
//   console.log(checkHomePage('/home1'));
//   console.log(checkHomePage('/home2'));
// })();
