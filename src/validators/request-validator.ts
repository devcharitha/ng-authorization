import jwt from 'jsonwebtoken';

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

export function createJWT(payload: object): string {
  const secretKey = 'nextgen';
  const options = {
    expiresIn: '120s'
  };
  return jwt.sign(payload, secretKey, options);
}