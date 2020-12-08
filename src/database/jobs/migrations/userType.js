module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('user_types', {
      user_type_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app_user: DataTypes.STRING,
      about_user_type: DataTypes.STRING,
      type: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      type_status: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      created_at: DataTypes.TEXT,
      updated_at: DataTypes.TEXT,
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('user_types');
  },
};
