import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from "./modules";

const store = () => {
    // 미들웨어 추가시 다음과 같은 형식으로 추가
    // const store = configureStore({ reducer: rootReducer, middleware: [...getDefaultMiddleware()] });
    const store = configureStore({ reducer: rootReducer });
    return store;
};

const wrapper = createWrapper(store, {
    // 디버그 시 자세한 설명을 확인하기 위해 true로 설정합니다.
    // 배포 단계에서는 해당 설정을 false로 설정합니다.
    debug: true,
});


export default wrapper;