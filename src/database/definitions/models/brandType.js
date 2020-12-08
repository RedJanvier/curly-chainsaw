module.exports = (sequelize, DataTypes) => {
  const BrandType = sequelize.define(
    'BrandType',
    {
      brand_type_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sys_user: {
        type: DataTypes.INTEGER(11),
        foreignKey: true,
        defaultValue: 0,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      tableName: 'brand_type',
    },
    {},
  );

  BrandType.associate = models => {
    BrandType.hasMany(models.Brand, {
      foreignKey: 'brand_type',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return BrandType;
};
