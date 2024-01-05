// import { ZodError } from "zod";

// import { FormErrors, UserFormData, userSchema } from "@/lib/schema/userSchema";

// export const validate = (
//   values: UserFormData,
//   setInfoUser: React.Dispatch<React.SetStateAction<boolean>>,
// ): FormErrors => {
//   try {
//     userSchema.parse(values);
//   } catch (error) {
//     if (error instanceof ZodError) {
//       return error.errors.reduce((errors, err) => {
//         const path = err.path.join(".");
//         errors[path] = err.message;
//         return errors;
//       }, {} as FormErrors);
//     }
//   }

//   return {};
// };
