import React, { useEffect } from 'react';

const CallbackNaver = () => {
  useEffect(() => {
    const href = window.location.href;
    let params = new URL(href).searchParams;
    let code = params.get('code');
    let state = params.get('state');
    console.log({ code });
    console.log({ state });
    /*
      이곳에서 code를 백엔드 서버로 전송합니다.
      백엔드에서 loginForm쪽으로 결과를 반환하도록 하여, 로그인 결과를 알 수 있도록 합니다.
    */

    // 페이지 내에서 할 모든 작업이 끝나면 페이지를 종료합니다.
    //window.close();
  }, []);
  return <div></div>;
};

export default CallbackNaver;
