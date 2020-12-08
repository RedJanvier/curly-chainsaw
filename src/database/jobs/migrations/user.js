module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', {
      userid: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_type: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      third_user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      third_group: {
        type: DataTypes.STRING,
      },
      third_messenger: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      account_status: {
        type: DataTypes.INTEGER(11),
        defaultValue: 1,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
