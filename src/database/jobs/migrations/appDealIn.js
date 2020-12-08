module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('app_deals_in', {
      app_deal_in_id: {
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
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      category_title: DataTypes.STRING,
      category: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      type_gender: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
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
    return queryInterface.dropTable('app_deals_in');
  },
};
