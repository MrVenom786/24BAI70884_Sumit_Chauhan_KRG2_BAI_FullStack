export interface Student {
  id?: number;
  name: string;
  email: string;
  course: string;
}

export class StudentModel implements Student {
  id?: number;
  name: string;
  email: string;
  course: string;

  constructor(data: Partial<Student> = {}) {
    this.id = data.id;
    this.name = data.name || '';
    this.email = data.email || '';
    this.course = data.course || '';
  }

  static fromBackend(data: { id?: number; name: string; email: string; course?: string }): StudentModel {
    return new StudentModel({
      id: data.id,
      name: data.name,
      email: data.email,
      course: data.course || ''
    });
  }

  toJSON(): Omit<Student, 'id'> {
    return {
      name: this.name,
      email: this.email,
      course: this.course
    };
  }

  validate(): string[] {
    const errors: string[] = [];
    if (!this.name.trim()) errors.push('Name is required');
    if (!this.email.trim()) errors.push('Email is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) errors.push('Invalid email format');
    return errors;
  }

  isValid(): boolean {
    return this.validate().length === 0;
  }
}