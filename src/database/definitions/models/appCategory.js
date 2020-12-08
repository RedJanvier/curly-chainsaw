module.exports = (sequelize, DataTypes) => {
  const AppCategory = sequelize.define(
    'AppCategory',
    {
      app_category_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category_title: DataTypes.STRING,
      about_category: DataTypes.STRING,
    },
    {
      tableName: 'app_category',
    },
    {},
  );

  AppCategory.associate = models => {
    AppCategory.hasOne(models.Application, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return AppCategory;
};
