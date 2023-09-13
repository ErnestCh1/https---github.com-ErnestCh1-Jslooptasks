/*console.log('hello')
/*function daugyba(number){
for(let i=1; i<=100; i++){
        let output = i * number;
        console.log(output);
    }
}
//console.log(daugyba(2))

function plius(number){
    for(let i=1; i<=100; i++){
        let output = i + number;
        console.log(output);
    }


}

function minus(number){
    for(let i=1; i<=100; i++){
        let output = i - number;
        console.log(output);
    }

}

function kvadratas(number){
    for(let i=1; i<=100; i++){
        let output = i * i;
        console.log(output);
    }

}
 function kubas (number) {
    for(let i=1; i<=100; i++){
        let output = i*i*i;
        console.log(output);
    }

 }*/
 /*function atbulasDaugyba(number){
 for(let i=100; i>=1; i--){
    let output = i * number;
        console.log(output);

 }
}

function atbulasPlius(number){
    for(let i=100; i>=1; i--){
        let output = i + number;
            console.log(output);
    
     
}
}
function atbulasMinus(number){
    for(let i=100; i>=1; i--){
        let output = i - number;
            console.log(output);
    
     
}
}
function atbulasKvadratas(number){
    for(let i=100; i>=1; i--){
        let output = i*i*i;
            console.log(output);
    
     
}
}
function atbulasKubas(number){
    for(let i=100; i>=1; i--){
        let output = i*i*i;
            console.log(output);
    
     
}
}
//console.log(atbulasKubas(3))
/*function daugyba(number){
    for(let i=1; i<=100; i++){
            let output = i * number;
            console.log(`${i} * ${number} = ${output}`);
        }
    }
    console.log(daugyba(2))
    
    function plius(number){
        for(let i=1; i<=100; i++){
            let output = i + number;
            console.log(`${i} * ${number} = ${output}`);
        }
    
    
    }
    
    function minus(number){
        for(let i=1; i<=100; i++){
            let output = i - number;
            console.log(`${i} - ${number} = ${output}`);
        }
    
    }
    
    function kvadratas(number){
        for(let i=1; i<=100; i++){
            let output = i * i;
            console.log(`${i} * ${i} = ${output}`);
        }
    
    }
     function kubas (number) {
        for(let i=1; i<=100; i++){
            let output = i*i*i;
            console.log(`${i} * ${i} = ${output}`);
        }
    
     }*/
    
     /*function daugyba(number, a, b, x){
        for(let i=a; i<=b; i++){
                let output = i * number;
                if(i=x){
                console.log(`${i} * ${number} = ${output}`);
                }
            }
        }
       //console.log(daugyba(2, 1, 20, 3))
        
        function plius(number, i, a){
            for(let i=1; i<=100; i++){
                let output = i + number;
                console.log(`${i} * ${number} = ${output}`);
            }
        
        
        }
        
        function minus(number, i, a, x){
            for(let i=1; i<=100; i++){
                let output = i - number;
                console.log(`${i} - ${number} = ${output}`);
            }
        
        }
        
        
        function laipsnis(number){
            for(let i=1; i<=100; i++){
                let output = Math.pow(i, number);
                console.log(`${i} ^ ${number} = ${output}`);
            }
        
        }
       
         //console.log(laipsnis(2))*/

         console.log('Hello')

        /*for(let i = 1; i <= 100; i++ ){
            if ( i % 3 == 0 && i % 5 == 0 && i % 7 == 0 && i%9 == 0 ){
                console.log("FizzBuzzBiffFuzz")
                
            }else if (i%7 == 0 && i%5 == 0 && i%9 == 0){

                console.log("BuzzBiffFuzz" )
            }else if (i%7 == 0 && i%3 == 0 && i%9 == 0){
                    console.log ("FizzBiffFuzz")
            }else if (i%7 == 0 && i%9==0){
                    console.log ("BiffFuzz")
            }else if (i%3 == 0 && i%5 == 0 && i%9 == 0){
                console.log("FizzBuzzFuzz")
            }
            else if (i%3 == 0 && i%9 == 0){
                console.log ("FizzFuzz")
            }else if(i%5==0 && i%9==0){
                console.log ("BuzzFuzz")
            }else if ( i % 3 == 0 && i % 5 == 0 && i % 7 == 0  ){
                console.log("FizzBuzzBiff")
                
            }else if (i%7 == 0 && i%5 == 0){

                console.log("BuzzBiff" )
            }else if (i%7 == 0 && i%3 == 0){
                    console.log ("FizzBiff")
            }else if (i%7 == 0){
                    console.log ("Biff")
            }else if (i%3 == 0 && i%5 == 0){
                console.log("FizzBuzz")
            }
            else if (i%3 == 0){
                console.log ("Fizz")
            }else if(i%5==0){
                console.log ("Buzz")
            }else if (i%9==0){
                console.log("Fuzz")
            }else {
                console.log(i)
            }
        }*/

        function fizzBuzz(a, b, c, d, e){
            for(let i = 1; i <= 1000; i++){
                let output = "";
                if(i % a === 0 ) output += "Fizz";
                if(i % b === 0 ) output += "Buzz";
                if(i % c === 0 ) output += "Biff";
                if(i % d === 0 ) output += "Fuzz";
                if(i % e === 0 ) output += "Bizz";
                console . log(output || i);
        }
    }
    console.log(fizzBuzz(3,5,7,9,11))
