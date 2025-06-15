import {useState} from "react";
import {useAuth} from "@/features/model/AuthContext";
import {useRouter} from "next/navigation";
import axios from "axios";
import {api} from "@/shared/api";

export default function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError('로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleKakaoLogin = async () => {
    try {
      setLoading(true);
      setError('');
      window.location.href = 'http://34.64.182.180:8080/oauth2/authorization/kakao';
      
      console.log('카카오 로그인 시작');
      // 임시로 콘솔 로그만 출력
      
    } catch (err) {
      setError('카카오 로그인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };
  
  return {
    email, setEmail,
    password, setPassword,
    error, setError,
    loading, setLoading,
    handleSubmit,
    handleKakaoLogin,
  }
}