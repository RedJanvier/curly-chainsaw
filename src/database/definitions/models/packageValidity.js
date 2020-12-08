module.exports = (sequelize, DataTypes) => {
  const PackageValidity = sequelize.define(
    'PackageValidity',
    {
      package_validity_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      package: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
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
      price_usd: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'package_validity',
    },
    {},
  );

  PackageValidity.associate = models => {
    PackageValidity.belongsTo(models.Package, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return PackageValidity;
};
