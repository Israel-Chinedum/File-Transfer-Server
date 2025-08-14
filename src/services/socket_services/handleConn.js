export const handleConn = ( socket, readyConn ) => {
    socket.on('waiting', () => {
        console.log('SOCKET ID', socket.id);
        readyConn.set(`User ${readyConn.size+1}`, socket.id);
    });

    socket.on('searchConn', () => {
        console.log('A search request was made')
        if(readyConn.size){
            const keys = Array.from(readyConn.keys())
            socket.emit('readyConn', keys);
        } else{
            setTimeout(() => {
                if(!readyConn.size){
                    socket.emit('error', 'No connection found!');
                } else{
                    const keys = Array.from(readyConn.keys())
                    socket.emit('readyConn', keys);
                }
            }, 20000);
        }
    });
}