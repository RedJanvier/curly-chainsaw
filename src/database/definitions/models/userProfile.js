module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define(
    'UserProfile',
    {
      user_profile_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      user: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      date_of_birth: {
        type: DataTypes.DATE,
      },
      about: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      tableName: 'user_profile',
    },
    {},
  );

  UserProfile.associate = models => {
    UserProfile.belongsTo(models.User, {
      foreignKey: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return UserProfile;
};
