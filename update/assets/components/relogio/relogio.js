relogio=()=>{

    const data=new Date()
    let hr=data.getHours()
    let mn=String(data.getMinutes()).padStart(2, '0');
    let ms=String(data.getSeconds()).padStart(2, '0')

    let horaatual=hr+":"+mn+":"+ms

    return horaatual
}
relogioNew=()=>{

    const data=new Date()
    let hr=data.getHours()
    let mn=String(data.getMinutes()).padStart(2, '0');
    let ms=String(data.getSeconds()).padStart(2, '0')
    let mm=String(data.getMilliseconds()).padStart(2, '0')

    let horaatual=hr+":"+mn+":"+ms+":"+mm

    return horaatual
}
 
 
//  ---setInterval(relogio(),500)

//  setInterval(genarateID, 500);