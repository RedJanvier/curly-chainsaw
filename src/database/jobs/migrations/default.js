module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('default', {
      userid: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phonenumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      mid: {
        type: DataTypes.STRING,
        unique: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('default');
  },
};
