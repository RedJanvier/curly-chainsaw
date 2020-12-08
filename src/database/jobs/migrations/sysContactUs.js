module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('sys_contat_us', {
      sys_contactus_id: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      full_name: DataTypes.STRING,
      address: DataTypes.STRING,
      subject: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      body: DataTypes.STRING,
      browser_history: DataTypes.STRING,
      os_history: DataTypes.STRING,
      ip_address: DataTypes.STRING,
      delivered_to: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      cc_to: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      replied_by: {
        type: DataTypes.STRING,
        foreignKey: true,
        defaultValue: 0,
      },
      target_permission: DataTypes.STRING,
      target_employee: {
        type: DataTypes.BIGINT(20),
        foreignKey: true,
      },
      status: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0,
      },
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
    return queryInterface.dropTable('sys_contat_us');
  },
};
