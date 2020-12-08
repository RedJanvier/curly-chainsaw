module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    'Payment',
    {
      payment_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      transaction_id: {
        type: DataTypes.STRING,
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
      expiry_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      network: DataTypes.INTEGER(4),
      payment_mode: {
        type: DataTypes.INTEGER(4),
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
      currency: DataTypes.STRING,
      phone_number: DataTypes.STRING,
    },
    {
      tableName: 'payments',
    },
    {},
  );

  Payment.associate = models => {
    Payment.belongsTo(models.Package, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Payment.belongsTo(models.AppOwner, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return Payment;
};
