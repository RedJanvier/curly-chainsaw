module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('country', {
      country_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      country_code: DataTypes.STRING,
      country_prefix: DataTypes.STRING,
      country_name: DataTypes.STRING,
      country_currency: DataTypes.STRING,
      country_language: DataTypes.STRING,
      usd_rate: DataTypes.DECIMAL(20, 0),
      usd_support: DataTypes.BOOLEAN,
      network_support: DataTypes.INTEGER(4),
      country_status: {
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
    return queryInterface.dropTable('country');
  },
};
