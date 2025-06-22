import {usePathname, useRouter} from "next/navigation";
import {useAtomValue} from "jotai";
import {birthdayAtom, genderAtom} from "@/store/signupStore";
import useNickname from "@/entities/signup/hooks/useNickname";

export default function useSignupForm() {
  const { nickname, canProceed, validation } = useNickname();
  const selectedGender = useAtomValue(genderAtom);
  const birthday = useAtomValue(birthdayAtom)
  
  
  
  const pathname = usePathname();
  const router = useRouter();
  
  // 현재 경로 확인
  const isSignupNickname = pathname.includes('/signup/nickname');
  
  const handleNext = () => {
    router.push('/signup/nickname');
  }
  
  const handleSubmit = async () => {
    console.log("selectedGender", selectedGender)
    console.log("birthday", birthday)
    console.log("nickname", nickname)
    
    
    try {
        // TODO: 실제 회원가입 API 호출
        console.log('회원가입 진행:', { nickname })
        
        // 예시: API 호출
        /*
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nickname,
            // 다른 회원가입 정보들...
          }),
        })
        
        if (response.ok) {
          // 성공 처리
          router.push('/welcome')
        } else {
          const errorData = await response.json()
          alert(errorData.message || '회원가입 중 오류가 발생했습니다.')
        }
        */
    } catch (error) {
      console.error('회원가입 오류:', error)
      alert('네트워크 오류가 발생했습니다.')
    }
  }
  
  return {
    nickname, canProceed,
    validation,
    handleSubmit,
    handleNext,
    isSignupNickname,
  }
}