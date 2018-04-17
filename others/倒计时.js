
    /*
        new Date("month dd,yyyy hh:mm:ss");
        new Date("month dd,yyyy");
        new Date(yyyy,mth,dd,hh,mm,ss);
        new Date(yyyy,mth,dd);
        new Date(ms);
    */
    function go(t){
        var date1=new Date();//现在的时间
        var date2=new Date(t);//结束时间
        if(date1>date2){//已经结束了
            return;
        }
        var timer=setInterval(function(){leftTimer(date2)},1000);
    }
    
    function leftTimer(enddate){
        var leftTime=(new Date(enddate))-(new Date());//计算剩余时间，单位是毫秒
        var seconds=parseInt(leftTime/1000%60,10);
        var minutes=parseInt(leftTime/1000/60%60,10);
        var hours=parseInt(leftTime/1000/60/60%24,10);
        var days=parseInt(leftTime/1000/60/60/24,10);
        
        seconds=checkTime(seconds);
        minutes=checkTime(minutes);
        hours=checkTime(minutes);
        days=checkTime(days);
          if (days >= 0 || hours >= 0 || minutes >= 0 || seconds >= 0) document.getElementById("timer").innerHTML = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
          if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {

    }
    
    function checkTime(i){
        if(i<10){
            i='0'+i;
        }
        return i;
    }
