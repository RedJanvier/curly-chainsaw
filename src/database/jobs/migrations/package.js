module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('packages', {
      package_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      unlimited: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      package_type: {
        type: DataTypes.ENUM('store', 'account'),
        defaultValue: 'store',
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
    return queryInterface.dropTable('packages');
  },
};
