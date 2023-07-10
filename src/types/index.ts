export type User = {
  id: string;
  phone: string;
  lastName: string;
  firstName: string;
  location: {
    state: string;
    street: string;
    city: string;
    timezone: string;
    country: string;
  };
  email: string;
  gender: string;
  title: string;
  registerDate: string;
  picture: string;
  dateOfBirth: string;
};

export type SimpleUser = Pick<
    User,
    'id' | 'title' | 'lastName' | 'firstName' | 'email' | 'picture'
>
