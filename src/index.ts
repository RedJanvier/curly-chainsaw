import socket from 'socket.io';
import app, { onPort } from './app';

app.listen(onPort, () => {
  process.stdout.write(`Server is running on : ${onPort}\n`);
});
