import API, { endpoints } from "./API";

export const signUp = (user) => {
  API.post(endpoints["register"], user).then((res) => console.log(res.data));
};
