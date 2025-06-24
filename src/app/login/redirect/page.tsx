'use client'
import {useCallback, useEffect} from "react";
import {apiClient} from "@/shared/lib/apiClient";
import * as process from "process";
import {useRouter} from "next/navigation";
import {useAuth} from "@/shared/hooks/useAuth";

// 카카오 아이디랑 비밀번호를 친 후, 로그인 버튼을 누르면 이 페이지로 넘어온다
// 여기서 카카오에서 redirect url에 있는 code를 백엔드에 주고, 백엔드에서 카카오에 code를 잘 전달하면 로그인 성공!
export default function LoginRedirectPage() {
  const router = useRouter();
  const {login} = useAuth();
  
  const redirectLogin = useCallback(async () => {
    try {
      // URL에서 인가 코드 확인
      const code = new URL(window.location.href).searchParams.get("code");
      // const code = getSession
      
      if (code) {
        // 원래 코드를 백엔드에 보내고
        // 백엔드가 그 코드를 카카오에 보내고
        // 카카오에서 승인해주면 카카오에서 백엔드에 accessToken과 refreshToken을 줌
        // 그 토큰을 백엔드에서 프론트에 줘야함
        // 그리고 생년월일, 닉네임 입력까지 다 적고 회원가입 버튼을 누르면 백엔드에서 새로운 accessToken과 RefreshToken을 줄 예정
        
        // 그런데 지금 백엔드에 이 code를 받을 API가 없음. 나중에 만들어 달라고 해야함
        await login(code);
        router.push("/signup/profile")
      }
    } catch (e) {
      throw e;
    }

  }, []);
  
  useEffect(() => {
    // URL에서 인가 코드 확인
    redirectLogin()
    
  }, []);
  return (
    <></>
  )
}