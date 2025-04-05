const text=document.getElementById("advice");
const btn=document.getElementById("button");

const arr={
  method:'GET',
  headers:{
    'X-Api-Key':'BRIRDRf7JIGpAG+iWazsCw==87bq7dTA3HYOm0oD'
  }
}

async function getJoke(){
    try {
        btn.innerText="Loading...";
        text.innerText="updating..."
        btn.disabled=true;
        const response= await fetch("https://api.api-ninjas.com/v1/advice?limit=1",arr);
        const advice=await response.json();
        text.innerText=advice.advice;
        btn.disabled=false; 
        btn.innerText="Give me an advice"  ;  
    } catch (err) {
        text.innerText="Sorry! an error happened"
        btn.disabled=false;
    }
   
}



btn.addEventListener("click",getJoke);
