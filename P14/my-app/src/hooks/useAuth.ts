import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      router.push('/auth/login');
    }
  }, [router]);
};
