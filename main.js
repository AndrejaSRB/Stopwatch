
let clock = document.querySelector('#clock');
let btnStart = document.querySelector('#start');
let btnStop = document.querySelector('#stop');
let btnReset = document.querySelector('#reset');
let btnLap = document.querySelector('#lap');
let lapDiv = document.querySelector('.laps');
let btnClear = document.querySelector('#clear');

window.addEventListener('beforeunload',function () {
    save();
    })
btnStart.addEventListener('click', startWatch);
btnLap.addEventListener('click', lapWatch);
btnClear.addEventListener('click', clearWatch);
let ms = 0,
    s = 0,
    m = 0,
    n=0;
let results = [];
 function startClock() {
    ms++
        if(ms >= 100){
            ms = 0
            s++
            if(s >= 60){
                s = 0;
                m++
            }
        }    
        clock.innerHTML = (m ? (m > 9 ? m:"0"+m): "00" ) + ":" + (s ? (s > 9 ? s:"0"+s): "00" ) + ":" + (ms ? (ms > 9 ? ms:"0"+ms): "00" );
 }


 function startWatch() {
    let loop = setInterval(startClock,20);
    removeClick()
    btnReset.addEventListener('click', function() {
        clearInterval(loop)
        addClick()
        ms = 0,
        s = 0,
        m = 0
        clock.innerHTML = (m ? (m > 9 ? m:"0"+m): "00" ) + ":" + (s ? (s > 9 ? s:"0"+s): "00" ) + ":" + (ms ? (ms > 9 ? ms:"0"+ms): "00" );
        btnStart.addEventListener('click', startWatch)
    })
    btnStop.addEventListener('click', function() {
        clearInterval(loop)
        addClick()
    })
    
    
 }

 function lapWatch() {
    let loop = setTimeout(startClock,20);
    n++
    if (ms <= 9){
        results=["0"+m+":0"+s+":00"+ms]

        
    }else if(ms>10){
        results=["0"+m+":"+s+":"+ms]
    }
    if (s <= 9){
        results=["0"+m+":0"+s+":"+ms]
    }else if(s>10){
        results=["0"+m+":"+s+":"+ms]
    }
    if (m <= 9){
        results=["0"+m+":0"+s+":"+ms]
    }else if(m>10){
        results=[""+m+":"+s+":"+ms]
    }
    if (n <= 5){
        lapDiv.innerHTML+="Lap "+n+": "+results+"</br>" 
    }
    else if (n>5){
            lapDiv.innerHTML+="Lap "+n+":      "+results+"</br>"  
            lapDiv.style.height = "200px"
                if (n>10){
             lapDiv.style.height = "500px"
    }
}
    
 }


 function clearWatch(params) {
     lapDiv.innerHTML = ""
     n=0
 }
 function resetWatch(loop) {
    clock.innerHTML = "00:00:00"
     ms=0;
     s=0;
     m=0;
 }
 btnStop.onclick = function () {
     clearInterval(loop)
 }
 function addClick() {
    btnStart.addEventListener('click', startWatch)
 }
 function removeClick() {
    btnStart.removeEventListener('click', startWatch)
 }