import { toast } from "react-toastify";

import { useRouter } from "next/navigation";

import { useLoginMutation } from "@/lib/redux/features/authApiSlice";
import { setAuth } from "@/lib/redux/features/authSlice";
import { useAppDispatch } from "@/lib/redux/hooks";

export default function useLogin(email: string, password: string) {
  const dispatch = useAppDispatch();

  // _Mutation
  const [login, { isLoading }] = useLoginMutation();

  // _Router
  const router = useRouter();

  // _Action
  const onSubmit = () => {
    login({ email, password })
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        toast.success("ล็อกอินสำเร็จ");
        router.push("/personnel/");
      })
      .catch(() => {
        toast.error("กรุณาล็อกอินอีกครั้ง");
      });
  };

  return { isLoading, onSubmit };
}
