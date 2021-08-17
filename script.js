function time()
{
var val=new Date();
var h=val.getHours();
var m=val.getMinutes();
var s=val.getSeconds();
var ap="am";
    if(h>12)
    {
        h=h-12;
        ap="pm";
    }
    if(h<10)
    {
        h='0'+h;
    } 
    if(m<10)
    {
        m='0'+m;
    }
    if(s<10)
    {
        s='0'+s;
    }
document.getElementById("clock").innerHTML=h+":"+m+":"+s+" "+ap;
};
setInterval(time,1000);
