export enum UserRoles {
  BACKEND_USER = 'BACKEND_USER',
  BACKEND_LEAD = 'BACKEND_LEAD',
  FRONTEND_LEAD = 'FRONTEND_LEAD',
  FRONTEND_USER = 'FRONTEND_USER',
  DATA_USER = 'DATA_USER',
  DATA_LEAD = 'DATA_LEAD',
  STUDENT = 'STUDENT',
}

export enum UsualUsers {
  BACKEND_USER = 'BACKEND_USER',
  FRONTEND_USER = 'FRONTEND_USER',
}

export enum LeadUsers {
  BACKEND_LEAD = 'BACKEND_LEAD',
  FRONTEND_LEAD = 'FRONTEND_LEAD',
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

export type UserReview = {
  date: string;
  comment: string;
  skills: any;
};
