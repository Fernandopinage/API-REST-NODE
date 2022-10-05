
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cliente', 
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
      telefone:{
        type: Sequelize.STRING,
        allowNull: true
      },
    
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cliente');
  }
};
