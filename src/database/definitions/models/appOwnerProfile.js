module.exports = (sequelize, DataTypes) => {
  const AppOwnerProfile = sequelize.define(
    'AppOwnerProfile',
    {
      app_owner_pro_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app_owner: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        foreignKey: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      about: DataTypes.STRING,
      avatar: DataTypes.TEXT,
      main_phone: DataTypes.STRING,
      secondary_phone: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      tableName: 'app_owner_profile',
    },
    {},
  );

  AppOwnerProfile.associate = models => {
    AppOwnerProfile.belongsTo(models.AppOwner, {
      foreignKey: 'app_owner',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return AppOwnerProfile;
};
