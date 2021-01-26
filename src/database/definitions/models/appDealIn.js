module.exports = (sequelize, DataTypes) => {
  const AppDealIn = sequelize.define(
    'AppDealIn',
    {
      app_deal_in_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        foreignKey: true,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      category_title: DataTypes.STRING,
      category: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      type_gender: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'app_deals_in',
    },
    {},
  );

  AppDealIn.associate = models => {
    AppDealIn.belongsTo(models.Application, {
      foreignKey: 'app',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    AppDealIn.belongsTo(models.Category, {
      foreignKey: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
    AppDealIn.belongsTo(models.Genre, {
      foreignKey: 'type_gender',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return AppDealIn;
};
