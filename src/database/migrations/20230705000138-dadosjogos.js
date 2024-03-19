

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('dadosjogos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            numero: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            data: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            quemganhou: {
                type: Sequelize.STRING,
                allowNull: false,
            }
                       
        });
    },



    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('dadosjogos');
    }
};
