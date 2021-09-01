const { expect, it } = require('@jest/globals');
const Manager = require('../lib/manager');

describe('Manager', () => {
    it('Should return the managers info', () => {
        let employee = new Manager('Timmy', 1, 'timmy@gmail.com', 1);

        expect(employee.name).toEqual('Timmy');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('timmy@gmail.com');
        expect(employee.officeNumber).toEqual(1);
    });
    it('Should return the managers name', () => {
        let employee = new Manager('Timmy', 1, 'timmy@gmail.com', 1);

        expect(employee.getName(employee)).toEqual('Timmy')
    });
    it('Should return the managers id number', () => {
        let employee = new Manager('Timmy', 1, 'timmy@gmail.com', 1);

        expect(employee.getId(employee)).toEqual(1);
    });
    it('Should return the managers email', () => {
        let employee = new Manager('Timmy', 1, 'timmy@gmail.com', 1);

        expect(employee.getEmail(employee)).toEqual('timmy@gmail.com');
    });
    it('Should return the managers role', () => {
        let employee = new Manager('Timmy', 1, 'timmy@gmail.com', 1);

        expect(employee.getRole(employee)).toEqual('Manager');
    });
});