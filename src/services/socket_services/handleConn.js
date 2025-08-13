export const handleConn = ( socket, readyConn ) => {
    socket.on('waiting', () => {
        console.log('SOCKET ID', socket.id);
        readyConn.set(socket.id, socket.id);
    });

    socket.on('searchConn', () => {
        if(readyConn.size){
            socket.emit('readyConn', readyConn);
        } else{
            setTimeout(() => {
                if(!readyConn.size){
                    socket.emit('error', 'No connection found!');
                } else{
                    socket.emit('readyConn', readyConn);
                }
            }, 20000);
        }
    });
}