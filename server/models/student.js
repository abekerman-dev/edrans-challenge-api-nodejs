'use strict';

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        //timestamps: false,
        name: DataTypes.STRING,
        birth_date: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: true
            }
        },
        address: DataTypes.STRING
    });

    return Student;
};

