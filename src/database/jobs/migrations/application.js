module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('application', {
      app_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app_owner: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
      },
      category: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      app_third: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      primary_app: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('application');
  },
};
