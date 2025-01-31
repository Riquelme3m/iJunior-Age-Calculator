import "./styles/style.css"
import DayInput from "./components/DayInput";
import MonthInput from "./components/MonthInput";
import YearInput from "./components/YearInput";
import YearsDisplay from "./components/YearDisplay";
import MonthDisplay from "./components/MonthDisplay";
import DayDisplay from "./components/DayDisplay";
import ButtonCalculate from "./components/ButtonCalculate";
import { useState } from "react";


function getDaysInMonth(year, month) {
   return new Date(year, month, 0).getDate();
}
function App() {

   const [day, setDay] = useState();
   const [month, setMonth] = useState();
   const [year, setYear] = useState();
   const [calculatedYears, setCalculatedYears] = useState("--");
   const [calculatedMonths, setCalculatedMonths] = useState("--");
   const [calcultateDays, setCalculatedDays] = useState("--");
   const [errors, setErrors] = useState({ day: "", month: "", year: "" });



   function calculateAge() {
      /*Empty Input Erros */
      setErrors({ day: "", month: "", year: "" });

      let newErrors = { day: "", month: "", year: "" };
      let maxDaysInTheMonth = getDaysInMonth(year, month);
      let currentYear = new Date().getUTCFullYear();
      let currentMonth = new Date().getUTCMonth();
      let currentDay = new Date().getDate();

      console.log(currentDay);
      let parsedMonth = Number(month);
      let parsedDay = Number(day);
      let parsedYear = Number(year);


      if (!day || !month || !year) {
         if (!day) {
            newErrors.day = "Field is required";
         }
         if (!month) {
            newErrors.month = "Field is required";
         }
         if (!year) {
            newErrors.year = "Field is required";
         }
      }
      else {

         if(parsedDay < 1 || parsedDay > maxDaysInTheMonth || parsedMonth < 1 || parsedMonth > 12){
            if (parsedDay < 1 || parsedDay > maxDaysInTheMonth) {
               newErrors.day = "Must be a valid day";
            }
   
            if (parsedMonth < 1 || parsedMonth > 12) {
               newErrors.month = "Must be a valid month";
            }
         }


         else if (parsedYear > currentYear) {
            newErrors.year = "Must be in the past";
         }

         else if (parsedYear === currentYear && parsedMonth > (currentMonth + 1)) {
            newErrors.month = "Must be in the past";
         }
         else if (parsedYear === currentYear && parsedMonth === (currentMonth + 1) && parsedDay >= currentDay) {
            newErrors.day = "Must be in the past";
         }
      }
      if (newErrors.day || newErrors.month || newErrors.year) {
         setErrors(newErrors);
         return;
      }

      let fullYears = (currentMonth < parsedMonth - 1) ? currentYear - parsedYear - 1 : currentYear - parsedYear;

      let fullMonths = (currentMonth + 1) < (parsedMonth) ? (currentMonth + 1 + 12) - parsedMonth : (currentMonth + 1) - parsedMonth;

      let fullDays = (currentDay < parsedDay) ? (getDaysInMonth(currentYear, currentMonth) + currentDay - parsedDay) : (currentDay - parsedDay);

      setCalculatedYears(fullYears);
      setCalculatedMonths(fullMonths);
      setCalculatedDays(fullDays);

   }
   return (
      <main className="main-container">
         <div className="date-inputs">
            <DayInput day={day} onChange={(e) => setDay(e.target.value)} error={errors.day}> </DayInput>
            <MonthInput month={month} onChange={(e) => setMonth(e.target.value)} error={errors.month}> </MonthInput>
            <YearInput year={year} onChange={(e) => setYear(e.target.value)} error={errors.year}></YearInput>
         </div>
         <div className="division">
            <hr/>
            <ButtonCalculate onClick={calculateAge}></ButtonCalculate>
         </div>
         <div className="date-display">
            <YearsDisplay years={calculatedYears}></YearsDisplay>
            <MonthDisplay months={calculatedMonths}></MonthDisplay>
            <DayDisplay days={calcultateDays}></DayDisplay>
         </div>
      </main>

   );
}

export default App
