## Days-till
 * Day till Class is used to calculate the number of Days remain till the given date
 * Given the Date you want to check in the Constructor of this Class.
 * Has over <b>Thirty</b> usefull functions
 * And we keep adding new Functions to this Class...
 * No dependencies (*-*)

## Installation

# Using npm:
```sh
npm install --save @Lakshmanshankar/days-till
```
# Using Yarn

```sh
yarn add @Lakshmanshankar/days-till
```

# Demo
```js
var daystill=require(".@lakshmanshankar/daystill")
//Date You want to calculate the Days

let DaysTill=new Daystill(Date,Month,Year)
//example let DaysTill=new DaysTill(12,12,2032)

let Count=DaysTill.CountDays()
console.log(Count)
//Output -> 3806

let Hrs=DaysTill.CountHrs()
console.log(Hrs)
//Output -> 91351

let Mins=x.CountMinutes()
console.log(Mins)
//Output ->5481112 

//That's all For Count Till
```

## Whichfunctions
```js
let Count=Daystilll.whichDate("Saturday",2,1,2002)
console.log(Count)
//Output -> 12


let Count=Daystilll.whichDay(12,12,2012)
console.log(Count)
//Output -> Wednesday
```

[For Full documentation](https://lakshmanshankar.github.io/days-till)

Happy Coding :) 
