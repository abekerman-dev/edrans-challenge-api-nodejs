'use strict';

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {
        name: DataTypes.STRING,
        birthDate: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: true
            },
            field: 'birth_date'
        },
        address: DataTypes.STRING
    });

    Student.associate = (models) => {
        models.student.belongsTo(models.major, {
            foreignKey: 'major_id'
        });

        models.student.belongsToMany(models.subject, 
            {   
                through: 'student_subject',
                foreignKey: 'student_id'
            }
        );
    };

    return Student;
};

