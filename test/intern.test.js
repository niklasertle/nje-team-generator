const { expect, it } = require('@jest/globals');
const index = require('../index.js');
const Intern = require('../lib/intern')

describe('Intern', () => {
    it('Should return the interns info', () => {
        let employee = new Intern('Timmy', 1, 'timmy@gmail.com', 'denver');

        expect(employee.name).toEqual('Timmy');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('timmy@gmail.com');
        expect(employee.school).toEqual('denver');
    });
    it('Should return the interns name', () => {
        let employee = new Intern('Timmy', 1, 'timmy@gmail.com', 'denver');

        expect(employee.getName(employee)).toEqual('Timmy')
    });
    it('Should return the interns id number', () => {
        let employee = new Intern('Timmy', 1, 'timmy@gmail.com', 'denver');

        expect(employee.getId(employee)).toEqual(1);
    });
    it('Should return the interns email', () => {
        let employee = new Intern('Timmy', 1, 'timmy@gmail.com', 'denver');

        expect(employee.getEmail(employee)).toEqual('timmy@gmail.com');
    });
    it('Should return the interns email', () => {
        let employee = new Intern('Timmy', 1, 'timmy@gmail.com', 'denver');
        
        expect(employee.getSchool(employee)).toEqual('denver');
    });
    it('Should return the interns role', () => {
        let employee = new Intern('Timmy', 1, 'timmy@gmail.com', 'denver');

        expect(employee.getRole(employee)).toEqual('Intern');
    });
});