let time = document.getElementById("time");


function clock (){
    const date = new Date();
    const minute = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);

    let hour = date.getHours();

    let meridiems;
    if(hour >= 12){
        meridiems = "PM";
    }
    else{
        meridiems= "AM";
    }

    hour = hour % 12;
    const Hours = hour.toString().padStart(2,0);


    time.textContent = Hours + ":"+ minute +":" +seconds + " " + meridiems;
}

setInterval(clock,1000);