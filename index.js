//Revision on callback/higher_order, closure, recursion
//callback
//i 
    //i-a
        //callback works asynchronously
        function hi(){
            //console.log('hi');
            //
            setTimeout(function(){
                //console.log('hi, this message will be seen after 3 seconds!')
            },3000)
        }
        hi();
    //i-b
        function showCar(car, callback, callback1){
            console.log('This is my ' + car);
            callback();
            callback1();
        }
        //
        function IamAcallback(){
            //console.log('hi, I am a callback function');
        }
        function IamCallback1(){
            //console.log('Hi, I am the second callback function')
        }
        showCar('Audi', IamAcallback, IamCallback1);
        //
    //i-c
        let human_year = 30;
            function calculate_dogs_age(human_year, callback){
                let dogs_age = human_year / 7
                callback(dogs_age);
            }
            function calculate_birds_age(human_year, callback){
                let birds_age = human_year / 9
                callback(birds_age)
            }
            function calculate_turtles_age(human_year, callback){
                let turtles_age = human_year * 2
                callback(turtles_age)
            }
            function showAllAges(human_year, dogs_age, birds_age, turtles_age){
                console.log('For human age ' + human_year + ' in dogs year would be ' + dogs_age);
                console.log('For human age ' + human_year + ' in dogs year would be ' + birds_age);
                console.log('For human age ' + human_year + ' in dogs year would be ' + turtles_age);
            }
            calculate_dogs_age(human_year, function(dogs_age){
                calculate_birds_age(human_year, function(birds_age){
                    calculate_turtles_age(human_year, function(turtles_age){
                        showAllAges(human_year, dogs_age, birds_age, turtles_age);
                    });
                })
            })
            //
    //
            //higher order and callback
            function higherOrderFunc(callback){
                //console.log('the first logic');
                callback()
            }
            function callbackFunction(){
                //console.log('callback function executed')
            }
            higherOrderFunc(callbackFunction);
//
//    
            //In-built higher_order functions, map(), filter(), reduce(), forEach() ...
            //map()
            const numbers = [3,7,4,3,677,3,4,53,6];
            let myMap = numbers.map((one)=>{
                let result = one % 2 === 0
                //console.log(result);//we ll get true or false
            });
            //filter()
            function myFilter(arr){
                let my_filter = arr.filter((item)=>{
                   return item % 2 === 0
                })
                //console.log(my_filter)
            }
            myFilter([2,66,43,3,55,16,77,7,8,10,100]);//[ 2, 66, 16, 8, 10, 100 ]
            //
            //reduce()
            function myReduce(arrOfNumb){
                let my_reduce = arrOfNumb.reduce((current_value, initail)=>{
                    return current_value += initail
                },0)
                //console.log(my_reduce);
            }
            myReduce([2,66,43,3,55,16,77,7,8,10,100]);//387
            //
//ii Closure
            //its a combination of functions bundled together with references to its surroundings.
            function myClosure(){
                const name = 'Roma';
                function firstFunction(){
                    //console.log('this is first function ' + name);
                }
                //
                function secondFunction(){
                    //console.log('this is second function ' + name);
                }
                //funtion call
                firstFunction();
                secondFunction();
            }
            //big function call
            myClosure();
            //
    //ii-a
            function outerFunction(){
                let outerVariable = 'this is outer variable';
                
                function innerFunctionOne(){
                    //console.log('inner function one : ' + outerVariable)
                }
                //
                function innerFunctionTwo(){
                    //console.log('inner function two : ' + outerVariable)
                }
                function innerFunctionThree(){
                    //console.log('inner function three : ' + outerVariable)
                }
                //inner function call
                return{
                    one: innerFunctionOne,
                    two: innerFunctionTwo,
                    three: innerFunctionThree,
                }
            }
                //let result = outerFunction();
                //result.one();//inner function one : this is outer variable
                //result.two();
            //
            function outerFunction1(input){
                function innerFunctionOne(){
                    let my_inner_one = input.toUpperCase();
                    console.log(my_inner_one);
                }
                //
                function innerFunctionTwo(){
                    let my_inner_two = input.length;
                    console.log(my_inner_two);
                }
                //
                function innerFunctionThree(){
                    let my_split = input.split('');
                    let my_reverse = my_split.reverse();
                    let my_joined = my_reverse.join('');
                    console.log(my_joined)
                }
                //function call
                // innerFunctionOne();
                // innerFunctionTwo();
                // innerFunctionThree();
                return{
                    one: innerFunctionOne,
                    two: innerFunctionTwo,
                    three: innerFunctionThree,
                }
            }
            let closureResult = outerFunction1('Hello there');
            // closureResult.one();
            // closureResult.two();
            // closureResult.three();
            //console.log(closureResult);
            //
//iii recursion
            //it is a function calls itself or execute only when a specific condition is true, mainly works with if ... else ...
            function addIt(arrayOfNumb){
                let initial_value = 0;
                for(let a=0; a<arrayOfNumb.length; a++){
                    initial_value += arrayOfNumb[a]
                    //console.log(initial_value);//1055
                }
                if(initial_value < 5000){
                    console.log('sorry, I do not want to show you the sum');
                }else{
                    console.log(initial_value);
                }
            }
            let myResult = addIt([34,66,3,56,7,889,4000]);
            //console.log(myResult);

    //iii-a        
             //reduce() with recursion ...
             function myReduce(arrOfNumb){
                let my_reduce = arrOfNumb.reduce((current_value, initail)=>{
                    return current_value += initail
                },0)
                //console.log(my_reduce);
                if(my_reduce % 2 === 0){//change the login here, according to your need ...
                    console.log('your answer is even number');
                }else{
                    console.log('your answer is odd number');
                }
            }
            myReduce([2,66,43,3,55,16,77,7,8,10,1]);//287
            
