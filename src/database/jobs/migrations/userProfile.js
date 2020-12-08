module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('user_profile', {
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
        allowNull: false,
        foreignKey: true,
      },
      date_of_birth: {
        type: DataTypes.DATE,
      },
      about: DataTypes.STRING,
      avatar: DataTypes.STRING,
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
    return queryInterface.dropTable('user_profile');
  },
};
