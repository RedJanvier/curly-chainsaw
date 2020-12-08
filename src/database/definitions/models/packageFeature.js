module.exports = (sequelize, DataTypes) => {
  const PackageFeature = sequelize.define(
    'PackageFeature',
    {
      package_feature_id: {
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
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'package_feature',
    },
    {},
  );

  PackageFeature.associate = models => {
    PackageFeature.belongsTo(models.Package, {
      foreignKey: 'package',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return PackageFeature;
};
