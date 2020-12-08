module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('order', {
      order_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app_third: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      third_user: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      channel: {
        allowNull: false,
        type: DataTypes.INTEGER(4),
      },
      lat: DataTypes.DECIMAL(10, 8),
      long: DataTypes.DECIMAL(10, 8),
      formatted_address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      shipping_fee: DataTypes.STRING,
      sku: DataTypes.STRING,
      order_type: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
      paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      sale: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      seen: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      cancel: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      modified: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      delivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      delivery_type: {
        type: DataTypes.INTEGER(4),
        defaultValue: 1,
      },
      cancel_by: DataTypes.INTEGER(4),
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
    return queryInterface.dropTable('order');
  },
};
