export interface Location {
  city: string;
  country: string;
  postcode: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  location: Location;
  countryName?: string;
}
