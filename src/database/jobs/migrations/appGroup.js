module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('app_groups', {
      app_group_id: {
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
      third_id: DataTypes.STRING,
      group_title: DataTypes.STRING,
      group_desc: DataTypes.TEXT,
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
    return queryInterface.dropTable('app_groups');
  },
};
