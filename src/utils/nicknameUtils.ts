// utils/nicknameUtils.ts

import {NicknameValidationResult} from "@/entities/signup/model/types";

/**
 * 닉네임 기본 유효성 검사
 * @param nickname 검사할 닉네임
 * @returns 검증 결과 객체
 */
export const validateNickname = (nickname: string): NicknameValidationResult => {
  // 빈 값 체크
  if (!nickname.trim()) {
    return { isValid: false, errorMessage: '닉네임을 입력해주세요.' }
  }
  
  // 최소 길이 체크
  if (nickname.length < 2) {
    return { isValid: false, errorMessage: '닉네임은 2자 이상이어야 합니다.' }
  }
  
  // 최대 길이 체크
  if (nickname.length > 12) {
    return { isValid: false, errorMessage: '닉네임은 12자 이하여야 합니다.' }
  }
  
  // 허용 문자 체크: 영어 대소문자, 한글, _, #, ! 만 허용
  const allowedPattern = /^[a-zA-Z가-힣_#!]+$/
  if (!allowedPattern.test(nickname)) {
    return { isValid: false, errorMessage: '영어 대소문자, 한글, _, #, !만 사용 가능합니다.' }
  }
  
  return { isValid: true, errorMessage: '' }
}

/**
 * 닉네임 중복 체크 시뮬레이션 (백엔드 개발 전 임시)
 * @param nickname 중복 체크할 닉네임
 * @returns Promise<boolean> 중복 여부
 */
export const checkNicknameDuplicate = (nickname: string): Promise<boolean> => {
  return new Promise((resolve) => {
    // 시뮬레이션용 중복 닉네임 목록
    const duplicateNicknames = [
      'admin', '관리자', 'test', 'user', '사용자',
      'cymply', 'hello', '테스트', 'root', '운영자'
    ]
    
    // 백엔드 API 호출 시뮬레이션을 위한 딜레이
    setTimeout(() => {
      const isDuplicate = duplicateNicknames.includes(nickname.toLowerCase())
      resolve(isDuplicate)
    }, 800)
  })
}

/**
 * 실제 백엔드 API 호출 함수 (스프링부트 준비 시 사용)
 * @param nickname 중복 체크할 닉네임
 * @returns Promise<boolean> 중복 여부
 */
export const checkNicknameDuplicateAPI = async (nickname: string): Promise<boolean> => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080'
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/check-nickname`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname }),
    })
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`)
    }
    
    const data = await response.json()
    return data.isDuplicate || false
    
  } catch (error) {
    console.error('닉네임 중복 체크 API 오류:', error)
    throw new Error('닉네임 확인 중 오류가 발생했습니다.')
  }
}