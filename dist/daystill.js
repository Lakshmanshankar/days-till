/**
 * @license MIT
 * @author Lakshmanshankar
 * Superset of Classic Date Class 
 * Daystill class Have more Functions than Date class for simple operations
 * You can calculate the days,hours,minutes till given date and many more functions
 * for detailed Documentation Link github.com/Lakshmanshankar/days-till
 */
 "use strict";
 class Daystill extends Date{
    /**
    * Day till Class is used to calculate the number of Days remain till the given date.    
    * Given the Date you want to check in the Constructor of this Class and this class Have few more method like isToday(),isYesterday()etc..   
    * And we keep adding new Functions to this Class...
    * No dependencies (*-*)
    * @author Lakshmanshankar
    * @link https://github.com/Lakshmanshankar/days-till
    * @param {Number} Date Date you want to calculate Days
    * @param {Number} Month Month you want to calculate Days
    * @param {Number} Year Year for Calculate Days
    */
    constructor(date,month,year){
        super()
        let Dat=new Date()
        this.date=date
        this.month=month
        this.year=year
        this.Cdate=Dat.getDate()
        this.Cmonth=Dat.getMonth()+1
        this.Cyear=Dat.getFullYear()
        this.TotalDays=0
        this.days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    }
    /**
     * Function is used to check that the given date is Yesterday or Not
     * @param {Number} date Date you want to check is Yesterday
     * @returns {Boolean} true if the date given is Yesterday
     */
    isYesterday(date){
        return (date==this.Cdate-1)?true:false
    }
    /**
     * Function is used to check that the given date is Today or Not
     * @param {Number} date Date you want to check is Today
     * @returns {Boolean} true if the date given is Today
     */
    isToday(date){
        return (date==this.Cdate)?true:false
    }
    /**
     * Function is used to check that the given date is Tomorrow or Not
     * @param {Number} date Date you want to check is Tomorrow
     * @returns {Boolean} true if the date given is tomorrow
     */
    isTomorrow(date){
        return (date==this.Cdate+1)?true:false
    }
    /** isValidInfo() will check the values given in the constructor is valid or not Days till will calculate Only for the future
     * @returns {Boolean} true if Given information is valid else false
     */
    isValidInfo(){
        if ((this.year>=this.Cyear)  && (this.month<=12)){
            let LastDay=CountLast(this.year,this.month)
            return (this.date<=LastDay)?true:false
        }else{
            return "INFORMATION NOT VALID"
        }
    }
    /**
     * CountDays will return number of days till the date given in the constructor
     * Base function for CountHours() and CountMinutes()
     * @returns {number} Return Number of Days till given date
     */
    CountDays(){
        if (this.isValidInfo() == true) {
            let InternalYears=this.year-this.Cyear
            if (InternalYears==0 && this.month>=this.Cmonth){
                return CallCurrentYear(this.Cyear,this.Cmonth,this.Cdate,this.year,this.month,this.date,this.TotalDays)
            }else if(this.year==this.Cyear+1){
                return CallCurrentNext(this.Cyear,this.Cmonth,this.Cdate,this.year,this.month,this.date,this.TotalDays)
            }else{
                return CallAllYear(this.Cyear,this.Cmonth,this.Cdate,this.year,this.month,this.date,this.TotalDays)
            }
        }else{
            return "Day till only for future"
        }
    }
    /**CountHours will return number of Hours till the date given in the constructor
     * @returns {number} return number of Hours till a given time
     */
    CountHours(){
        return (24-new Date().getHours())+this.CountDays()*24
    }
    /**
     * CountMinutes will return number of Minutes till the date given in the constructor
     * @returns {number} return number of Minutes till a given time
     */
    CountMinutes(){
        return (60-new Date().getMinutes())+this.CountHours()*60
    }
    /**
     * return Number Of Hours Remaining Today
     * @returns {Number} Number Of Hours Remaining Today
     */
    HoursRemaingToday(){
        return (24-new Date().getHours())
    }
    /**A string containg current Day of the week
     * @returns {String} returns Day of week
     */
    Today(){
        return this.days[new Date().getDay()]
    }
    /**A string containg DayAfter the current Day of the week
     * @returns {String} returns DayAfter today
     */
    Tomorrow(){
        return this.days[new Date().getDay()+1]
    }
    /*A string containg DayBefore the current Day of the week
     *@returns {String} returns DayBefore Today
     */
    Yesterday(){
        return this.days[new Date().getDay()-1]
    }
    /**
     * Async functions used for Remainders
     * @param {String} Mins if Timer Reaches A given time it returns A STIRNG("Time Reached")
     */
    Remainder(Mins){
       let Target=Mins
       let MinCal=0
       let RemainMins=Mins
       let SetCounter=0
       let MyReTimer=setInterval(() => {
       SetCounter+=1
       console.log(RemainMins,60-SetCounter,"left")
        if (SetCounter==60) {
            MinCal+=1
            RemainMins-=1
        }
        if(MinCal==Target){
            clearInterval(MyReTimer)
            return 'Time Reached'
        }
    },1000);
    }
    /**
     * Calculate which day of the week is the Date given to this Command
     * @param {Number} date Date you want to calculate Day
     * @param {Number} month Month you want to calculate Day
     * @param {Number} year Year you want to calculate Day
     * @returns {String} Day of the Week
     */
    whichDay(date,month,year){
        let newSt=new Date();
        newSt.setFullYear(year,month-1,date)
        let newSetDay=newSt.getDay()
        return (this.days[newSetDay])
    }
    /**
     * This will return the Actual Date using the params Given 
     * @param {String} Day Day of the Week
     * @param {Number} IndexOfDay Ex if you want to get 2nd monday of a month you have to give 2 here  
     * @param {Number} Month Which Month you want to get the Date
     * @param {Number} Year Which year you want to get the Date
     */
    whichDate(Day,IndexOfDay,Month,Year){
        let Target=Day
        let counter=0
        let yearly=new Date()
        yearly.setFullYear(Year,Month,1)
        let LastDay=CountLast(Year,Month)
        for (let index = 1; index <= LastDay; index++) {
            let daysIng=this.whichDay(index,Month,Year)
            if (daysIng==Target) {
                counter+=1
            }
            if ((counter == IndexOfDay) && (IndexOfDay<=4)) {
                return index
            }
        }
        if (IndexOfDay>4) {
            return "invalid Day"
            
        }
    }
}
function CallAllYear(Cyear,Cmonth,Cdate,year,month,date,TotalDays){
    let YearlyCounters=0
    for (let index = Cyear+1; index <year; index++) {
        if (index%4==0) {
            YearlyCounters+=366
        }else{
            YearlyCounters+=365
        }
    } 
    let instance=new Daystill(31,12,Cyear)
    let allCurrentYearDays=instance.CountDays()+OnlyLastYear(year,month)+date
    return YearlyCounters+allCurrentYearDays
}
function OnlyLastYear(year,month) {
    let Counter=0
    for (let index = 1; index < month; index++) {
        Counter+=CountLast(year,index)
    }    
    return Counter
}
function CallCurrentNext(Cyear,Cmonth,Cdate,year,month,date,TotalDays) {
    let CurrentMonth=CountLast(Cyear,Cmonth)-Cdate;
    let LastMonth=date;
    TotalDays+=(CurrentMonth+LastMonth)
    let Months=12-Cmonth+(month-1)
    let Starter=Cmonth+1
    let CurrYr=Cyear
    for (let index = 0; index < Months; index++) {
        if (Starter>12) {
            Starter=1
            CurrYr+=1
        }
       TotalDays+=CountLast(CurrYr,Starter)
       Starter+=1
    }
    return TotalDays
}
/**
 * this function is called if days are less than a year
 */
function CallCurrentYear(Cyear,Cmonth,Cdate,year,month,date,TotalDays) {
    if (Cmonth==month){
        let s=(Cdate<=date)?date-Cdate:0
        return TotalDays+s
    }
    let CurrentMonth=CountLast(Cyear,Cmonth)-Cdate;
    let LastMonth=date;
    TotalDays+=(CurrentMonth+LastMonth)
    for (let index = Cmonth+1; index <= month-1; index++) {
        TotalDays+=CountLast(year,index)
    }
    return TotalDays
}
function CountLast(year,month) {
    var thirty=[1,3,5,7,8,10,12]
    if (thirty.includes(month)) {
        return 31
    } else if (month==2){
        return (year%4==0)?29:28;
    }else{
        return 30
    }
}

module.exports=Daystill;