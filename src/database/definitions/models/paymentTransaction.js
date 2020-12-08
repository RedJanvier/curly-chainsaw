module.exports = (sequelize, DataTypes) => {
  const PaymentTransaction = sequelize.define(
    'PaymentTransaction',
    {
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
    },
    {
      tableName: 'payment_transaction',
    },
    {},
  );

  PaymentTransaction.associate = models => {
    PaymentTransaction.hasMany(models.AppSubscription, {
      foreignKey: 'payment_transaction',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    PaymentTransaction.belongsTo(models.Package, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    PaymentTransaction.belongsTo(models.AppOwner, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    PaymentTransaction.hasOne(models.ResellerSubscription, {
      foreignKey: 'payment_transaction',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return PaymentTransaction;
};
