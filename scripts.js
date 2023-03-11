let hour=0;
let min=0;
let sec=0;
let intervalId;
let isStart= false;
const hourId= document.getElementById('hour');
const minId= document.getElementById('min');
const secId= document.getElementById('sec');

const start= ()=> {
    if(isStart) return;
    isStart=true;
    intervalId= setInterval(()=>{
        sec++;
        if(sec===59){
            secId.innerText=sec.toString().padStart(2, "0");
            sec=-1;

            setTimeout(()=>{
                min++;
                if(min===60){
                    hour++;
                    hourId.innerText=hour.toString().padStart(2, "0");
                    min=0;
                    minId.innerText=min.toString().padStart(2, "0");
                    
                    
                }
                else minId.innerText=min.toString().padStart(2, "0");


            },1000)

        }
        else secId.innerText=sec.toString().padStart(2, "0");

    },1000);
   

}

const stop=()=>{
    isStart=false;
    clearInterval(intervalId);

}

const reset=()=> {
     
    isStart=false;
    clearInterval(intervalId);
    hour=0;
    sec=0;
    min=0;
    hourId.innerText='00';
    minId.innerText='00';
    secId.innerText='00';

}