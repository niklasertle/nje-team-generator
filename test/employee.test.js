const { expect, it } = require('@jest/globals');
const Employee = require('../lib/employee')

describe('Employee', () => {
    it('Should return the employees info', () => {
        let employee = new Employee('Timmy', 1, 'timmy@gmail.com');

        expect(employee.name).toEqual('Timmy');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('timmy@gmail.com');
    });
    it('Should return the employees name', () => {
        let employee = new Employee('Timmy', 1, 'timmy@gmail.com');

        expect(employee.getName(employee)).toEqual('Timmy')
    });
    it('Should return the employees id number', () => {
        let employee = new Employee('Timmy', 1, 'timmy@gmail.com');

        expect(employee.getId(employee)).toEqual(1);
    });
    it('Should return the employees email', () => {
        let employee = new Employee('Timmy', 1, 'timmy@gmail.com');

        expect(employee.getEmail(employee)).toEqual('timmy@gmail.com');
    });
    it('Should return the employees role', () => {
        let employee = new Employee('Timmy', 1, 'timmy@gmail.com');

        expect(employee.getRole(employee)).toEqual('Employee');
    });
});