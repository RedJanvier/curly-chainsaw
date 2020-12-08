module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('sys_users', {
      sys_user_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      password: DataTypes.STRING,
      position: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      employee_permissions: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('sys_users');
  },
};
