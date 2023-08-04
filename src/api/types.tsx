export interface UserAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeo;
}
export interface UserGeo {
  lat: string;
  lng: string;
}
export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  name: string;
  id: number;
  email: string;
  username: string;
  adress: UserAdress;
  phone: string;
  website: string;
  company: UserCompany;
}
