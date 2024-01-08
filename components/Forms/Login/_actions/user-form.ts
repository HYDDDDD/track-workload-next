import { FormEvent } from "react";

import axios from "axios";
import { FormApi, SubmissionErrors } from "final-form";

// export const onSubmit = (email: string, password: string) => {
//   axios
//     .post("http://127.0.0.1:8000/api/jwt/create/", {
//       email: email,
//       password: password,
//     })
//     .then((res) => console.log(res));
// };

export const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // axios
  //   .post("http://127.0.0.1:8000/api/jwt/create/", {
  //     email: email,
  //     password: password,
  //   })
  //   .then((res) => console.log(res));
};
