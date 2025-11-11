import express, { request, response } from "express";

const authRouter = express.Router(); // 라우터 객체 인스턴스를 반환

authRouter.post('/api/login', (request, response, next) =>{
  response.status(200).send('로그인 성공');
});

// authRouter.post('./api/re', (request, response, next) => {
//   response.status(200).send('회원가입 성공');
// });

// 라우터 정의 .....

export default authRouter;