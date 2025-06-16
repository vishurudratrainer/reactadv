

function changeColor(room,color){
    let copyRoom = Object.assign({},room,{color:color,length:10})
    return copyRoom
}


let room1 ={color:"red",dimesnion:100}
let changed_room1= changeColor(room1,"yellow")
console.log("Original",room1)
console.log("Modified",changed_room1)

