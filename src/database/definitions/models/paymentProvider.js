module.exports = (sequelize, DataTypes) => {
  const PaymentProvider = sequelize.define(
    'PaymentProvider',
    {
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
    },
    {
      tableName: 'payment_providers',
    },
    {},
  );

  return PaymentProvider;
};
