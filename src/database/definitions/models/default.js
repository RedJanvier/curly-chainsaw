module.exports = (sequelize, DataTypes) => {
  const Default = sequelize.define(
    'Default',
    {
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
    },
    {
      tableName: 'default',
      timestamps: false,
    },
    {},
  );

  Default.prototype.findByEmail = email => {
    return Default.findOne({ where: { email } });
  };

  return Default;
};
