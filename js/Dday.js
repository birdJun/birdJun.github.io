const dDayForm=document.getElementById("dDay-form");
const dDayInput=document.querySelector("#dDay-form input:first-child");
const Btn=document.querySelector("#dDay-form input:last-child");
const dDayText=document.querySelector("#dDay-form h2");

function handleButtonClick(event){
    event.preventDefault();
    const dInput=(dDayInput.value).split(".");
    const dDay=new Date(`${dInput[0]}-${dInput[1]}-${dInput[2]}:00:00:00+0900`);
    const today=new Date();
    const gap=dDay-today;
    const day=Math.floor(gap/(1000*60*60*24));
    dDayText.innerText=`D-${day}`;
    console.log(day);
    localStorage.setItem('DDay',day);
    localStorage.setItem('DDay-Input',dInput);
}
dDayForm.addEventListener("submit",handleButtonClick);

if(localStorage.getItem('DDay')!==null){
    dDayText.innerText=`D-${localStorage.getItem('DDay')}`;
    const dDays=(localStorage.getItem('DDay-Input')).split(",");
    dDayInput.value=`${dDays[0]}.${dDays[1]}.${dDays[2]}`;
}