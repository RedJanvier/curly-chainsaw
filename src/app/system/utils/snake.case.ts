import { snakeCase } from 'snake-case';
import SnakeCase from '../../../core/abstractions/snake.case';

class SnakeUtils extends SnakeCase {
  toSnakeCase(payload: any) {
    try {
      for (const key in payload) {
        const snakeCased = snakeCase(key);
        const values = payload[key];
        delete payload[key];
        payload[snakeCased] = values;
      }
      return payload;
    } catch (error) {
      return error;
    }
  }
}

export default SnakeUtils;
