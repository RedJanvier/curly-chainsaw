module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define(
    'Package',
    {
      package_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      unlimited: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      package_type: {
        type: DataTypes.ENUM('store', 'account'),
        defaultValue: 'store',
      },
    },
    {
      tableName: 'packages',
    },
    {},
  );

  Package.associate = models => {
    Package.hasMany(models.Payment, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Package.hasMany(models.PackageValidity, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Package.hasMany(models.PackageFeature, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Package.hasMany(models.PaymentTransaction, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Package.hasMany(models.AppSubscription, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Package.hasMany(models.ResellerSubscription, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return Package;
};
