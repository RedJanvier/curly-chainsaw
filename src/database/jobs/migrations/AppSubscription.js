module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('app_subscription', {
      app_subscription_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      payment_transaction: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app_owner: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      package: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      expiry_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      validity: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      unit: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
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
    return queryInterface.dropTable('app_subscription');
  },
};
