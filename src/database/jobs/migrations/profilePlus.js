module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('profile_plus', {
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
    return queryInterface.dropTable('profile_plus');
  },
};
