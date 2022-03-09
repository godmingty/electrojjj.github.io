const socket = io("localhost:3000");

socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});
function emitnow(data){
    socket.emit("fool_str",data, (response) => {
        console.log(response.status); // ok
    });
}