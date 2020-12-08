abstract class Password {
  abstract hash(password: string): string;
  abstract compare(password: string, hashedPassword: string): boolean;
}

export default Password;
