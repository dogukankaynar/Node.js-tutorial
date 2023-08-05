
type Prime = (lowNumber: number, highNumber: number) => void;


const showPrimeNumbers: Prime = (lowNumber, highNumber) => {
  for (let i = lowNumber; i <= highNumber; i++) {
    let isPrime = true;
     for(let j=2; j<=i;j++){
        if(i % j===0 &&  j !==i ){
            isPrime=false
        }
     }
     if(isPrime){
        console.log(i);
        
     }
  }
};

const args = process.argv.slice(2);
const lowNumber = parseInt(args[0]);
const highNumber = parseInt(args[1]);

// showPrimeNumbers(arguments[0],arguments[1]);
// console.log(process.argv.slice(2))
