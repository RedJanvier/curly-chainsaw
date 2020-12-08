module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('sys_users_profile', {
      sys_user_profile_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      avatar: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      twitter: DataTypes.STRING,
      instagram: DataTypes.STRING,
      facebook: DataTypes.STRING,
      slogan: DataTypes.STRING,
      employee: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('sys_users_profile');
  },
};
