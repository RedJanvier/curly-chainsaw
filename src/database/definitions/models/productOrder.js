module.exports = (sequelize, DataTypes) => {
  const ProductOrder = sequelize.define(
    'ProductOrder',
    {
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
    },
    {
      tableName: 'product_order',
    },
    {},
  );

  ProductOrder.associate = models => {
    ProductOrder.belongsTo(models.Post, {
      foreignKey: 'post',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    ProductOrder.belongsTo(models.Order, {
      foreignKey: 'order',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };

  return ProductOrder;
};
