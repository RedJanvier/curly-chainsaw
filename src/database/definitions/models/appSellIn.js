module.exports = (sequelize, DataTypes) => {
  const AppSellIn = sequelize.define(
    'AppSellIn',
    {
      app_sell_in_id: {
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
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'app_sells_in',
    },
    {},
  );

  AppSellIn.associate = models => {
    AppSellIn.hasMany(models.ProfilePlus, {
      foreignKey: 'app_sell_in',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return AppSellIn;
};
