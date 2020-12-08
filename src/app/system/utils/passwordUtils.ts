import * as bcrypt from 'bcryptjs';
import Password from '../../../core/abstractions/password';

/**
 * PasswordUtils
 * @extends Password
 */
class PasswordUtils extends Password {
  /**
   * Hash
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {string} password password to hash
   * @returns {string} hashed password
   * @memberof PasswordUtils
   */
  hash = (password: string): string => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  };

  /**
   * Compare
   * @author Verdotte Aututu
   * @since 0.001
   *
   * @param {string} password password to hash
   * @param {string} hashedPassword hashed password
   * @returns {boolean} true or false
   * @memberof PasswordUtils
   */
  compare = (password: string, hashedPassword: string): boolean => {
    return bcrypt.compareSync(password, hashedPassword);
  };
}

export default PasswordUtils;
