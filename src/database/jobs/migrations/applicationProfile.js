module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('application_profile', {
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
    return queryInterface.dropTable('application_profile');
  },
};
