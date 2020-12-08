module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('post_to', {
      post_to_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      platform_id: DataTypes.STRING,
      sys_user: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      app: DataTypes.BIGINT(20),
      subscription: DataTypes.BIGINT(20),
      app_subscription: DataTypes.STRING,
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('post_to');
  },
};
