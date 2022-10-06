
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('client', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }, 
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      telephone:{
        type: Sequelize.STRING,
        allowNull: true
      },
    
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('client');
  }
};
