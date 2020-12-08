interface Notification {
  ok(): string | number;
  created(): string | number;
  exist(): string | number;
  unauthorized(): string | number;
}

export default Notification;
