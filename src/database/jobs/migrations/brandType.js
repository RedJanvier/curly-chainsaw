module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('brand_type', {
      brand_type_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sys_user: {
        type: DataTypes.INTEGER(11),
        foreignKey: true,
        defaultValue: 0,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
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
    return queryInterface.dropTable('brand_type');
  },
};
