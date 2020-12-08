module.exports = (sequelize, DataTypes) => {
  const CategoryProfile = sequelize.define(
    'CategoryProfile',
    {
      category_profile_id: {
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
      category: {
        type: DataTypes.INTEGER(11),
        foreignKey: true,
      },
      category_title: DataTypes.STRING,
      about_category: DataTypes.STRING,
    },
    {
      tableName: 'category_profile',
    },
    {},
  );

  CategoryProfile.associate = models => {
    CategoryProfile.belongsTo(models.Category, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return CategoryProfile;
};
