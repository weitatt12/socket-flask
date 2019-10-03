document.addEventListener('DOMContentLoaded', () => {
    let socket = io.connect('http://' + document.domain + ':' + location.port);

    socket.on('message', data => {
        const p = document.createElement('p');
        const br = document.createElement('br');
        p.innerHTML = data;
        document.querySelector('#display-message-section').append(p);

        // console.log(`Message received ${data}`)
    });

    socket.on('some-event', data => {
        console.log(data);
    });

    // send message
    document.querySelector('#send_message').onClick = () => {
        socket.send({ 'msg': document.querySelector('#user_message').value, 'username': username });
    }
})