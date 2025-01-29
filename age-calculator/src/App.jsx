import "./styles/style.css"
import DayInput from "./components/DayInput";
import MonthInput from "./components/MonthInput";
import YearInput from "./components/YearInput";
import YearsDisplay from "./components/YearDisplay";
import MonthDisplay from "./components/MonthDisplay";
import DayDisplay from "./components/DayDisplay";
import ButtonCalculate from "./components/ButtonCalculate";
import { useState } from "react";

function App() {

  const [day,setDay] = useState();
  const [month,setMonth] = useState();
  const [year,setYear] = useState();
  const [calculatedYears,setCalculatedYears] = useState("--");
  const [calculatedMonths,setCalculatedMonths] = useState("--");
  const [calcultateDays,setCalculatedDays]=useState("--");
  const [errors,setErrors] = useState({day:"",month:"",year:""});
  function calculateAge(){
    /*Empty Input Erros */
    setErrors({day:"",month:"",year:""});
    
   let newErrors = {dayError:"",monthError:"",yearError:""};

   if(!day){
      newErrors.day = "Field is required";
   }
   if(!month){
      newErrors.month = "Field is required";
   }
   if(!year){
      newErrors.year = "Field is required";
   }
   if(newErrors.day || newErrors.month || newErrors.year){
    setErrors(newErrors);
    return;
   }

   
  
    
    
    
    /*
Errors - 
1 - If any input is empty: 
    ➝ throw "Field is required"

2 - If day input is invalid:
    a) If the day is less than 1 or greater than 31:
       ➝ throw "Must be a valid day"
    b) If the day exceeds the maximum number of days for the given month:
       ➝ throw "Must be a valid day"
       (Example: February 30, April 31)

3 - If the month input is invalid:
    a) If the month is less than 1 or greater than 12:
       ➝ throw "Must be a valid month"

4 - If the year input is invalid:
    a) If the year is greater than the current year:
       ➝ throw "Must be in the past"
    b) If the year is equal to the current year but the month is in the future:
       ➝ throw "Must be a valid month"
    c) If the year is equal to the current year and the month is valid but the day is in the future:
       ➝ throw "Must be a valid day"
*/



  }
  return (
    <main className="main-container">
      <div className="date-inputs">
        <DayInput day={day} onChange={(e)=> setDay(e.target.value)} error={errors.day}> </DayInput>
        <MonthInput month={month} onChange={(e)=> setMonth(e.target.value)} error={errors.month}> </MonthInput>
        <YearInput year={year} onChange = {(e)=>setYear(e.target.value)} error={errors.year}></YearInput>
      </div>
      <ButtonCalculate onClick={calculateAge}></ButtonCalculate>
      <div className="date-display">
        <YearsDisplay years={calculatedYears}></YearsDisplay>
        <MonthDisplay months={calculatedMonths}></MonthDisplay>
        <DayDisplay days={calcultateDays}></DayDisplay>
      </div>
    </main>

  );
}

export default App
