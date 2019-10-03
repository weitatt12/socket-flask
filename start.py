from flask import Flask, render_template
from flask_socketio import SocketIO, emit, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app)

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    return render_template('chat.html', username=current_user.username)

@socketio.on('message')
def message(data):
    # print(f"\n\n{data}\n\n")
    send(data)
    # emit('some-event', 'this is custom event message')


if __name__ == '__main__':
    socketio.run(app, debug = True)