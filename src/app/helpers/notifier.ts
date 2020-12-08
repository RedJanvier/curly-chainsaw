const notifier = (event: string, payload: any = null, connection: any[]) => {
  if (!!connection && connection.length > 0) {
    connection.forEach(socket => {
      socket.emit(event, payload);
    });
  }
};

export default notifier;
