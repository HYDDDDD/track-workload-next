import { toast } from "react-toastify";

import { useRouter } from "next/navigation";

import { useLoginMutation } from "@/lib/redux/features/authApiSlice";

export default function useLogin(email: string, password: string) {
  // _Mutation
  const [login, { isLoading }] = useLoginMutation();

  // _Router
  const router = useRouter();

  // _Action
  const onSubmit = () => {
    login({ email, password })
      .unwrap()
      .then(() => {
        toast.success("ล็อคอินสำเร็จ");
        router.push("/personnel/");
      })
      .catch(() => {
        toast.error("กรุณาล็อคอินอีกครั้ง");
      });
  };

  return { isLoading, onSubmit };
}
