
// let num1 = 0;
// let num2 = 1;

// console.log(num1);
// console.log(num2);



// for(let i = 0; i <= 10 ; i++){
//     let newNum = num1 + num2;
//     console.log(newNum);
    
//     num1 = num2
//     num2 = newNum;
   
// }
    

// using recurtion 

// let count = 2;

// function fav(pre,next) {
//     if (count < 10){
//         newNum = pre + next
//         console.log(newNum);
//         pre = next;
//         next = newNum
//         count++
//         fav()
        
//     }else{
//         return 
//     }
// }

// fav(0,1)




// function cleanInputString(str) {
//     const regex = /[+-\s]/g;
//     return str.replace(regex, '');
// }

//   console.log(cleanInputString(23 + 5));
  

// const obj = {
//     name:"tunnan",
//     age:22
// }

// function changeName(ob) {
//     ob.name = "jisun";
    
// }

// changeName(obj)
// console.log(obj);

function palindrome(str) {
    const regex = /[^a-z0-9]/g;
    const cleanStr = str.toLowerCase().replace(regex, "");
    const reverseStr = cleanStr.split("").reverse().join("");
    const isPalindrome = cleanStr === reverseStr;
  
    return isPalindrome;
  }
  
  console.log(palindrome("1 a 1"));
  