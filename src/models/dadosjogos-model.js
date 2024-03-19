const { Model, DataTypes } = require("sequelize");

class DadosjogosModel extends Model {
    static init(sequelize) {
        super.init(
            {
                numero: DataTypes.STRING,
                data: DataTypes.DATE,
                quemganhou: DataTypes.STRING
    
            },
            {
                sequelize,
                tableName: "dadosjogos",
                timestamps: false,
            }
        );
    }
}


module.exports = { DadosjogosModel };


