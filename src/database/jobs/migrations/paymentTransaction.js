module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('payment_transaction', {
      payment_transaction_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transaction_third: DataTypes.STRING,
      app_owner: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app_third: DataTypes.STRING,
      selected_app: DataTypes.TEXT,
      package: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      network: DataTypes.INTEGER(4),
      payment_mode: DataTypes.INTEGER(4),
      payment_type: DataTypes.INTEGER(4),
      validity: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      unit: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      currency: DataTypes.STRING,
      phone_number: DataTypes.STRING,
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
    return queryInterface.dropTable('payment_transaction');
  },
};
