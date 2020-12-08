module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    'Brand',
    {
      brand_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      brand_type: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      sys_user: {
        type: DataTypes.INTEGER(11),
        foreignKey: true,
        defaultValue: 0,
      },
      abb: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      tableName: 'brand',
    },
    {},
  );

  Brand.associate = models => {
    Brand.hasMany(models.Post, {
      foreignKey: 'brand',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Brand.belongsTo(models.Post, {
      foreignKey: 'brand_type',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return Brand;
};
