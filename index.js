// const age=24;
// console.log(age);
// confirm('Please enter your age');   

// const name=prompt('Please enter your name');
// console.log(name);
// function greet(name){
//     console.log('Hello '+name);
// };
// function newFnn(){
//     console.log('This is a new function');
    
// }

const pass="736146"

const arr=[0,1,2,3,4,5,6,7,8,9]
var res=""
for (i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++){
        res=i+""+j
        if (res==pass) console.log("cracked!")
            break
    }
    res=""
}