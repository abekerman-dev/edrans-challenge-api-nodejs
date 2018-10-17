'use strict';

module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('Subject', {
        name: DataTypes.STRING,
        credit_hours: DataTypes.INTEGER
    });

    return Subject;
};