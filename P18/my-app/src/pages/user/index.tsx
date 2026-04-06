import { useRouter } from "next/router";
import { useEffect } from "react";

const UserSettingPage = () => {
  const { push } = useRouter();
  
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      push('/auth/login');
    }
  }, [push]);

  return (
    <div>
      User Setting Page
    </div>
  );
};

export default UserSettingPage;

