module.exports = (sequelize, DataTypes) => {
  const AppSubscription = sequelize.define(
    'AppSubscription',
    {
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
    },
    {
      tableName: 'app_subscription',
    },
    {},
  );

  AppSubscription.associate = models => {
    AppSubscription.belongsTo(models.Package, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    AppSubscription.belongsTo(models.AppOwner, {
      foreignKey: 'app_owner',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    AppSubscription.belongsTo(models.PaymentTransaction, {
      foreignKey: 'payment_transaction',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return AppSubscription;
};
