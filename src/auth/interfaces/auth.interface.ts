import { ROLES } from 'src/constants/roles';

export interface PayoadToken {
  sub: string;
  role: ROLES;
}

export interface AuthBody {
  username: string;
  password: string;
}
