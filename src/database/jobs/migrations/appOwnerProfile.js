module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('app_owner_profile', {
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
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      about: DataTypes.STRING,
      avatar: DataTypes.STRING,
      main_phone: DataTypes.STRING,
      secondary_phone: DataTypes.STRING,
      country: DataTypes.STRING,
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
    return queryInterface.dropTable('app_owner_profile');
  },
};
