module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('post_type', {
      post_type_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      sys_user: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
      post_type: DataTypes.INTEGER(20),
      about_post_type: DataTypes.STRING,
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('post_type');
  },
};
