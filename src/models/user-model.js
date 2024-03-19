const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            email: DataTypes.TEXT,
            password: DataTypes.TEXT,
            nome: DataTypes.TEXT
           
        }, {
            tableName: 'user',
            timestamps: false,
            sequelize: database
        });
    }
}

module.exports = { UserModel };
