// TODO: Import the Validate class.
const Validate = require('../validate.js');

// TODO: Describe a testing suite for checking the functionality of the Validate class.

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.

describe('Validate', () => {  
    describe('invalid', () => {
      it('should return false for empty password', () => {
        const str = '';
  
        const result = new Validate().isPassword(str);
  
        expect(result).toEqual(false);
      });
    });
  });