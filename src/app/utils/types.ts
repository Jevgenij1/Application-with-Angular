export type User = {
  id: string | number;
  firstName: string;
  lastName: string;
  userAvatar?: string;
};

export type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};
