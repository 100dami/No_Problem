// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        comment : {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestampes : false,
    }); 
};