/**
 * Created by Administrator on 2017/5/17.
 */


function date(){
    var mm = document.getElementById("time");
    var d=new Date();
    var weekday=new Array(7);
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    mm.innerText=d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"+d.getHours()+"小时"+d.getMinutes()+"分钟"+d.getSeconds()+"秒"+ weekday[d.getDay()];
    //document.write(f.getFullYear()+"年"+(f.getMonth()+1)+"月"+f.getDate()+"日"+f.getHours()+"小时"+f.getMinutes()+"分钟"+f.getSeconds()+"秒"+"星期" + weekday[f.getDay()])
}


function time(){
    setInterval("date()",1000);


}


