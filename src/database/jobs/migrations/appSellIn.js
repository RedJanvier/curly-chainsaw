module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('app_sells_in', {
      app_sell_in_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sys_user: {
        type: DataTypes.INTEGER(11),
        foreignKey: true,
        defaultValue: 0,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
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
    return queryInterface.dropTable('app_sells_in');
  },
};
