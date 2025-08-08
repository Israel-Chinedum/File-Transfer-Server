
let fileBuffer = [];
let nrf = 0;

export const handleChunk = (socket) => {
    socket.on('chunk', (chunkData) => {
        // Number of received files as nrf;
        // console.log('Receiving...')
        const { type, size, name, buffer, ended = false } = chunkData;
        if(!ended && buffer){
            for(let i = 0; i < buffer.length; i++){
                fileBuffer.push(buffer[i]);
            }
        } else{
            const buff = Buffer.from(fileBuffer);
            console.log(buff);
            fileBuffer.length = 0;
            nrf++;
            console.log(`Successfully received ${nrf} ${nrf > 1 ? 'files' : 'file'}`);
        }
    })
}