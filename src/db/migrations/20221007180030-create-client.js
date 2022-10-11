module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('clients',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                telephone: {
                    type: Sequelize.STRING,
                    allowNull: true
                },
                agency: {
                    type: Sequelize.STRING(6),
                    allowNull: true
                },
                account: {
                    type: Sequelize.STRING(4),
                    allowNull: true
                },
                key: {
                    type: Sequelize.INTEGER(4),
                    allowNull: false
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('NOW'),
                  },
                  updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.fn('NOW'),
                  },
            }
        );
    },

    // eslint-disable-next-line no-unused-vars
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};
