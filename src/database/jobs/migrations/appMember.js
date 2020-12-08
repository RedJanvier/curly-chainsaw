module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('app_members', {
      app_member_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app_owner: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
        allowNull: false,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      third_id: DataTypes.STRING,
      primary_app: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      ownership_type: DataTypes.ENUM('owner', 'admin', 'manager'),
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
    return queryInterface.dropTable('app_members');
  },
};
