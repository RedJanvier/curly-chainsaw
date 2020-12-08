module.exports = (sequelize, DataTypes) => {
  const ProfilePlus = sequelize.define(
    'ProfilePlus',
    {
      profile_plus_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        foreignKey: true,
        unique: true,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      agent_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      operate_in: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      phone_number: DataTypes.STRING,
      phone_number_2: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      return_policy: DataTypes.STRING,
      address: DataTypes.STRING,
      app_sell_in: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lat: DataTypes.DECIMAL(10, 8),
      long: DataTypes.DECIMAL(10, 8),
      formatted_address: DataTypes.STRING,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    },
    {
      tableName: 'profile_plus',
    },
    {},
  );

  ProfilePlus.associate = models => {
    ProfilePlus.belongsTo(models.Application, {
      foreignKey: 'app',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    ProfilePlus.belongsTo(models.Country, {
      foreignKey: 'country',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    ProfilePlus.belongsTo(models.AppSellIn, {
      foreignKey: 'app_sell_in',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return ProfilePlus;
};
