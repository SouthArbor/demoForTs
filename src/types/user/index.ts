export enum UserLockEnum {
  LOCK,
  UNLOCK,
}

export enum UserCancelEnum {
  "NOT_CANCEL",
  "CANCEL",
}

export enum UserGenderEnum {
  "MAN" = 0,
  "WOMAN" = 1,
  "SECRECY" = -1,
}

type UserInfo = {
  id: number;
  username: string;
  mobile: number;
  avatar: string;
  isLock: UserLockEnum;
  isCancel: UserCancelEnum;
  gender: UserGenderEnum;
};

export enum UserTokenEnum {
  ASSET_TOKEN = "asset_token",
  REFRESH_TOKEN = "refresh_token",
}

type LoginByPassword = {
  mobile: string;
  password: string;
};

type LoginByCode = Pick<LoginByPassword, "mobile"> & {
  code: string;
};

type Register = LoginByPassword & {
  code: string;
};

type UpdateUserPassword = LoginByPassword & {
  newPassword: string;
  code: string;
};

export type {
  UserInfo,
  LoginByPassword,
  LoginByCode,
  Register,
  UpdateUserPassword,
};