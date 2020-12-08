import PasswordUtils from './passwordUtils';
import TokenUtils from './tokensUtils';
import SnakeUtils from './snake.case';

const Password = new PasswordUtils();
const Token = new TokenUtils();
const SnakeCase = new SnakeUtils();

const Utils = {
  Password,
  Token,
  SnakeCase,
};

export default Utils;
