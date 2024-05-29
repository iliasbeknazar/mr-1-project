(function(){
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');


    const time = new Date();
    
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
   
    const calHour (hour,min)=>{
        const hh = hour % 12 || 12;

        const deg = (360 / 12) * hh
        const degMin = (30 / 60) * min
    
        return deg + degMin 
    }
    const calTime = (time)=>{
        const deg = (360 / 60) * time
    
        h = calHour (h,m)
        m = calTime (m)
        s = calTime (s)

        hours.style.transform = `rotate(${h}deg)`
        minutes.style.transform = `rotate(${m}deg)`
        seconds.style.transform = `rotate(${s}deg)`
    }



})()


