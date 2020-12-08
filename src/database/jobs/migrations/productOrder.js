module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('product_order', {
      product_order_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      order: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      post: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app_third: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER(4),
        defaultValue: 1,
      },
      colour: DataTypes.STRING,
      size: DataTypes.STRING,
      price: DataTypes.STRING,
      quantity: {
        type: DataTypes.INTEGER(4),
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
    return queryInterface.dropTable('product_order');
  },
};
