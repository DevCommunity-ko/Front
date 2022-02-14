import { useRouter } from 'next/router';


import { useUser } from '../../../hooks';

const CallbackNaver = () => {
  const { sso } = useUser();
  const router = useRouter();

  if (typeof window === 'undefined') {
    return null;
  }

  const params = new URL(window.location.href).searchParams;
  const code = params.get('code');
  const state = params.get('state');

  if (code === null || state === null) {
    alert('정상적인 접근이 아닙니다.');
    window.close();
    return;
  }
  sso({
    provider: 'naver',
    code,
    state,
  });
  void router.push('/register');
  return null;
};

export default CallbackNaver;
