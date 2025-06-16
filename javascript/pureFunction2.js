

function changeColor(room,color){
    room.color = color
    return room
}


let room1 ={color:"red",dimesnion:100}
let changed_room1= changeColor(room1,"yellow")
console.log("Original",room1)
console.log("Modified",changed_room1)

