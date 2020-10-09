function angleInRadians(angle:number) {
    return (Math.PI/180) * angle
}

export function getCirclePos(start:{x:number,y:number},radius:number, angle:number){
    if(angle > 359) angle = 359.9
    const baseAngle = -90
    const startAngle = angleInRadians(baseAngle)
    const endAngle = angleInRadians(angle+baseAngle)
    
    const flag = angle <= 180?0:1;
    const z = angle > 359?'z':''
    return {
        rx: (Math.cos(startAngle) * radius) + start.x,
        ry: (Math.sin(startAngle) * radius) + start.y,
        x: (Math.cos(endAngle) * radius) + start.x,
        y: (Math.sin(endAngle) * radius) + start.y,
        flag,
        z
    }
}

export function getAngle(count:number,limit:number):number{
    const ratio = 360/limit
    return count * ratio;
}