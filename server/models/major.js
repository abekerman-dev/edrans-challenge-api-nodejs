'use strict';

module.exports = (sequelize, DataTypes) => {
    const Major = sequelize.define('Major', {
        name: DataTypes.STRING,
        degree: DataTypes.STRING
    });

    return Major;
};