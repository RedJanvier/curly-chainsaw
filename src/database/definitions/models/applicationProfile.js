module.exports = (sequelize, DataTypes) => {
  const ApplicationProfile = sequelize.define(
    'ApplicationProfile',
    {
      app_profile_id: {
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
      title: DataTypes.STRING,
      sub_title: DataTypes.STRING,
      email: DataTypes.STRING,
      location: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      common_place: DataTypes.STRING,
      avatar: DataTypes.TEXT,
      website: DataTypes.STRING,
      cover: DataTypes.TEXT,
      long: DataTypes.DECIMAL(9, 6),
      lat: DataTypes.DECIMAL(9, 6),
    },
    {
      tableName: 'application_profile',
    },
    {},
  );

  ApplicationProfile.associate = models => {
    ApplicationProfile.belongsTo(models.Application, {
      foreignKey: 'app',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return ApplicationProfile;
};
