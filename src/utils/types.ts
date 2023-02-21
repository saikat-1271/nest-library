export type CreateUserParams = {
  username: string;
  email: string;
};

export type UpdateUserParams = {
  username: string;
  email: string;
};

export type CreateBooksParams = {
  name: string;
  date: Date;
  userId: number;
};

export type UpdateBooksParams = {
  name: string;
  date: Date;
  userId: number;
};

export type GetbooksById = {
  id: number;
};

export type UpdateBooks = {
  name: string;
  date: Date;
  userId: number;
};
