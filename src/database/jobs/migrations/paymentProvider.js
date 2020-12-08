module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('payment_providers', {
      payment_provider_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      provider_name: DataTypes.STRING,
      provider_public_key: DataTypes.STRING,
      provider_private_key: DataTypes.STRING,
      service_type: DataTypes.INTEGER(4),
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
    return queryInterface.dropTable('payment_providers');
  },
};
