
export interface authenticateRes {
  success: boolean,
  token: string
}
export interface RegisterRes {
  success: boolean,
  token: string
}

export interface ProfileResponse{
  email: string;
  name: string;
  surname: string;
  address: string;
  phoneNumber: string
}

export interface EditProfileResponse{
  email: string;
  profile : ProfileResponse
}


export interface ProfileData {
  name: string,
  surname: string,
  address: string,
  phoneNumber: string
}
