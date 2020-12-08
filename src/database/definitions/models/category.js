module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      category_id: {
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
      sub_category: {
        type: DataTypes.INTEGER(11),
        foreignKey: true,
      },
      category_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'category',
    },
    {},
  );

  Category.associate = models => {
    Category.hasMany(models.Post, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Category.hasMany(models.Post, {
      foreignKey: 'sub_category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Category.hasMany(models.Placement, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    Category.hasOne(models.CategoryProfile, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Category.hasMany(models.AppDealIn, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return Category;
};
