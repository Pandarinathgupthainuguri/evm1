var noFromUser = prompt('No of Oter1s');
let BClick = document.querySelector(".Blue");
let YClick = document.querySelector(".Yellow");
let WClick = document.querySelector(".White");


let a=document.getElementById('Result');
console.log(a.innerText);



let arr=[];


let click=0;


  YClick.onclick=function(){
    if(click >= noFromUser){
        return -1;
     }
     else{
         click++;
         arr.push('1')

         if (click == noFromUser) {

        let winner = findMajority(arr);
        let parent = document.getElementById("winner");
        let result = document.createElement('h2');
        result.innerText=`Winner is ${winner}`
        parent.appendChild(result);
        a.innerText="Stop"
             
         }
         console.log(click);
         console.log(arr)

     }
     


    // alert ("You have voted for TDP ");
}
    WClick.usedVote=function(){

        if(click >= noFromUser){
           return -1;
        }
        else{
            click++;
            arr.push('2')

            if (click == noFromUser) {

           let winner = findMajority(arr);
           let parent = document.getElementById("winner");
           let result = document.createElement('h2');
           result.innerText=`Winner is ${winner}`
           parent.appendChild(result);
           a.innerText="Stop"
                
            }
            console.log(click);
            console.log(arr)

        }
        


    // alert ("You have voted for JSP");
}
BClick.usedVote=function(){

    if(click >= noFromUser){
        return -1;
     }
     else{
         click++;
         arr.push('3')

         if (click == noFromUser) {

        let winner = findMajority(arr);
        let parent = document.getElementById("winner");
        let result = document.createElement('h2');
        result.innerText=`Winner is ${winner}`
        parent.appendChild(result);
        a.innerText="Stop"
             
         }
         console.log(click);
         console.log(arr)

     }
     

    // alert ("You have voted for YCP");
}

// Given an array of integers, find the majority element (appearing more than n/2 times).
// A function to find the majority element using Moore's voting algorithm
function findMajority(arr) {
    // Initialize the candidate element and the counter
    let candidate = arr[0];
    let count = 1;
    // Loop over the array elements from index 1
    for (let i = 1; i < arr.length; i++) {
      // If the current element is equal to the candidate, increment the counter
      if (arr[i] === candidate) {
        count++;
      } else {
        // Otherwise, decrement the counter
        count--;
        // If the counter becomes zero, update the candidate and reset the counter
        if (count === 0) {
          candidate = arr[i];
          count = 1;
        }
      }
    }
    // Check if the candidate is indeed the majority element by counting its frequency
    let frequency = 0;
    for (let num of arr) {
      if (num === candidate) {
        frequency++;
      }
    }
    // If the frequency is greater than n/2, return the candidate as the majority element
    if (frequency > arr.length / 2) {
        console.log(candidate);
      return candidate;
    }
    // If no element is found, return -1
    console.log(candidate);
    return -1;
  }


