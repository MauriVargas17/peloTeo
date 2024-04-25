import { expect } from 'chai';
import { handleSubmit } from './src/components/Register';

describe('handleSubmit', () => {
  it('should handle form submission with valid data', () => {
    const event = {
      preventDefault: () => {}
    };

    const formData = {
      name: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      phone: '123456789'
    };

    const setErrors = newErrors => {
    };

    const result = handleSubmit(event, formData, setErrors);

    expect(result).to.equal(undefined);
  });

  it('should handle form submission with invalid data', () => {
    const event = {
      preventDefault: () => {}
    };

    const formData = {
      name: '',
      lastname: 'Doe',
      email: 'invalidemail',
      password: 'password',
      phone: 'abcdefg'
    };

    const setErrors = newErrors => {
    };

    const result = handleSubmit(event, formData, setErrors);

    expect(setErrors).to.have.been.calledOnce;
    expect(result).to.equal(undefined);
  });

  it('should handle form submission with empty data', () => {
    const event = {
      preventDefault: () => {}
    };

    const formData = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      phone: ''
    };

    const setErrors = newErrors => {
    };

    const result = handleSubmit(event, formData, setErrors);

    expect(setErrors).to.have.been.calledOnce;
    expect(result).to.equal(undefined);
  });

  it('should handle form submission with valid data except phone number', () => {
    const event = {
      preventDefault: () => {}
    };

    const formData = {
      name: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      phone: 'invalidphone'
    };

    const setErrors = newErrors => {
    };

    const result = handleSubmit(event, formData, setErrors);

    expect(setErrors).to.have.been.calledOnce;
    expect(setErrors).to.have.been.calledWithExactly({ phone: 'El phone debe ser un número' });
    expect(result).to.equal(undefined);
  });
});
