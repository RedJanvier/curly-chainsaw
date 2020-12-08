module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('package_validity', {
      package_validity_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      package: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      validity: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      unit: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      price_usd: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
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
    return queryInterface.dropTable('package_validity');
  },
};
