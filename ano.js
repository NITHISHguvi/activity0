// 1)Print odd numbers in an array
console.log("answer for 1 ques");
(()=>{                                                            //iif
var oddarray=[];
let anofun=(function(array){
    for(let ele of array){                         
        if(ele%2!==0)
        oddarray.push(ele);
    }
    return oddarray;
})

console.log(anofun([1,2,3,4,5,6,7,8,9,10]));
}) ()

console.log("answer for 2 ques");
(()=>{                                                            //iif
var caparray=[];
let anofun2=(function(str){
    for (let iterator of str) {
    let a= iterator.toUpperCase(); 
    caparray.push(a);
    }
    return caparray;
})

console.log(anofun2(["sanjay","balaji","kabilash"]));
}) ()
console.log("answer for 3 ques");
(()=>{                                                            //iif
    var add=[];
    var sum=0;
    let anofun2=(function(u){
        for (let s of u) {
            sum=sum+s;
        
        add.push(sum);
        }
        return add;
    })

console.log(anofun2([1,2,3,4,5,6,7,8]));
}) ()

const palindrome=((data)=>{
    arr=[];
    for(let str of data){
      let output=str.split('').reverse().join('')
      if(output===str){
      arr.push(output)
    }
    }
    console.log(arr)
    });
    palindrome(['111','mam','hello','saravana',"able was i ere i saw elba"])
    console.log("answer for 4 ques");
  primearray=[];
  nonprimearray=[];                                           //arrow func
  let anofun4=(array)=>{
      
      for (var iterator of array) {
          for (var i = 2; i < iterator; i++) {
              a=i;
              if(iterator%i==0){
              nonprimearray.push(iterator);
             break;}
          }   
          if(iterator%a!==0){
          primearray.push(iterator);}
  }
  return primearray;
  }
  
  console.log(anofun4([3,7,15,21,56,11]));