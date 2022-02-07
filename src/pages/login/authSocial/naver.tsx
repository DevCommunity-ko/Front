import { useEffect } from 'react';

const CallbackNaver = () => {
  useEffect(() => {
    const href = window.location.href;
    const params = new URL(href).searchParams;
    const code = params.get('code');
    const state = params.get('state');

    if (code === null || state === null) {
      alert('정상적인 접근이 아닙니다.');
      window.close();
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    window.opener.onNaverAuthSuccess({ code, state });
    window.close();
  }, []);
  return null;
};

export default CallbackNaver;
