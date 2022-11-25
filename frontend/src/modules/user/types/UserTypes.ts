export enum UserRoles {
  BACKEND_USER = 'BACKEND_USER',
  BACKEND_LEAD = 'BACKEND_LEAD',
  FRONTEND_LEAD = 'FRONTEND_LEAD',
  FRONTEND_USER = 'FRONTEND_USER',
  DATA_USER = 'DATA_USER',
  DATA_LEAD = 'DATA_LEAD',
  STUDENT = 'STUDENT'
}


export type UserModel = {
  uuid: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
  roleDesc?: string;
  work?: string;
  teamLead?: string;
  skills?: string;
};
