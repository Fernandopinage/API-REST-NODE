module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('clients', 
            { 
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
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
                agency:{
                    type: Sequelize.STRING(6),
                    allowNull: true
                },
                account:{
                    type: Sequelize.STRING(4),
                    allowNull: true
                }
            }
        );
    },

    // eslint-disable-next-line no-unused-vars
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};
