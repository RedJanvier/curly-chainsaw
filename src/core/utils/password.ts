import * as bcrypt from 'bcryptjs';

class Password {
  static hashPassword = (password: string) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  };

  static comparePassword = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword);
  };
}

export default Password;
