const { expect, it } = require('@jest/globals');
const index = require('../index.js');
const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    it('Should return the engineers info', () => {
        let employee = new Engineer('Timmy', 1, 'timmy@gmail.com', 'git-timmy');

        expect(employee.name).toEqual('Timmy');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('timmy@gmail.com');
        expect(employee.github).toEqual('git-timmy');
    });
    it('Should return the engineers name', () => {
        let employee = new Engineer('Timmy', 1, 'timmy@gmail.com', 'git-timmy');

        expect(employee.getName(employee)).toEqual('Timmy')
    });
    it('Should return the engineers id number', () => {
        let employee = new Engineer('Timmy', 1, 'timmy@gmail.com', 'git-timmy');

        expect(employee.getId(employee)).toEqual(1);
    });
    it('Should return the engineers email', () => {
        let employee = new Engineer('Timmy', 1, 'timmy@gmail.com', 'git-timmy');

        expect(employee.getEmail(employee)).toEqual('timmy@gmail.com');
    });
    it('Should return the engineers email', () => {
        let employee = new Engineer('Timmy', 1, 'timmy@gmail.com', 'git-timmy');

        expect(employee.getGithub(employee)).toEqual('git-timmy');
    });
    it('Should return the engineers role', () => {
        let employee = new Engineer('Timmy', 1, 'timmy@gmail.com', 'git-timmy');

        expect(employee.getRole(employee)).toEqual('Engineer');
    });
});