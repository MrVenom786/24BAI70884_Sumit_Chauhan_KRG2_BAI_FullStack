export class StudentModel {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.email = data.email || '';
    this.course = data.course || '';
  }

  static fromBackend(data) {
    return new StudentModel({
      id: data.id,
      name: data.name,
      email: data.email,
      course: data.course || ''
    });
  }

  toJSON() {
    return {
      name: this.name,
      email: this.email,
      course: this.course
    };
  }

  validate() {
    const errors = [];
    if (!this.name || !this.name.trim()) {
      errors.push('Name is required');
    }
    if (!this.email || !this.email.trim()) {
      errors.push('Email is required');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.email && !emailRegex.test(this.email)) {
      errors.push('Invalid email format');
    }
    return errors;
  }

  isValid() {
    return this.validate().length === 0;
  }
}

export const Student = {
  id: null,
  name: '',
  email: '',
  course: ''
};