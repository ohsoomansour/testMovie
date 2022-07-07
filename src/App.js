/*#6.0 Introduction ~ #6.1 useEffect
1.component가 처음 render될 때만 코드가 실행되고 다시는 실행하지 않길 원함!
2. function useEffect(⓵effect: EffectCallback, ⓶deps?: DependencyList)
  > ⓵effect: 우리가 딱 한번만 실행하고 싶은 코드 
    ⓶deps: []
#6.2 Deps
1. 내가 이 검색창에 무언가를 썼을대, 검색API를 이용 
  > 'keyword'가 변화할 때만 'marvel'을 검색하도록 
#6.4 Cleanup
1. function Hello() {
  useEffect(() => {
    console.log("I'm here!");
  ★return () => console.log("destroyed : (");  >> Hello 컴포넌트가 destroy되면서 "destroyed : ("  반환하고 감 >> Cleanup function이라고 부름 
  }, []) 
  return <h1> Hello </h1>
}   

+ 추가설명: component가 사라지거나 없어질때 event listenr를 없애준다던지

#7.0 To Do List part One
1. 바닐라js -  ★form 태그에 'submit 이벤트'를 가지고 있음 = "onSubmit 이벤트 헨들러 사용이 가능하다"
 >>   
2. event.preventDefault 개념 ※ https://ko.javascript.info/forms-submit
  2-1)form은 클라이언트에서 -> 서버에 입력데이터를 전송하는 역할을 담당 
  form요소 내의 submit버튼 ( <button > <input type="submit">)을 클릭했을 때 submit 이벤트의 특징 
  > submit이벤트는 form요소에서 발생
   *submit이벤트: <input type="submit"> <input type="image"> 또는 input 필드에서 Enter 누르기 >> "이벤트 트리거"
  >submit이벤트(태그)는 값을 전송하면서 창이 '새로고침'이 발생 
  >event.preventDefault > '새로고침'을 막고 submit를 통한 데이터전달은  정상적으로 작동 
#7.1 To Do List part Two
1. setToDos((currentArray) => [toDo, ...currentArray] ) "첫 번째 argument로 현재 'state = []'를 보낸다  "

*/
/*#7.2 Coin Tracker
1.  https://api.coinpaprika.com/v1/tickers  코인 정보를 받아옴 
2.  fetch함수는 HTTP 요청 전송기능을 제공하는 클라이언트 사이드 Web API다. ※fetch: Deep dive p.864 ~ 865 
   > ★'프로미스'를 지원, HTTP 응답을 나타내는 Response 객체를 래핑한 Promise객체를 반환한다
   > Response.prototype.json메서드는 Response객체에서 HTTP 응답 몸체를 취득하여 역직렬화 한다 *역직렬: string > Object로 반환 
   > 예) fetch('https://api.coinpaprika.com/v1/tickers').then(response => console.log(resonspe)) 

3.javascript - 접근자프로퍼티 ※ https://ko.javascript.info/property-accessors
 get: 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함 예) get fullName() {return}
 set: 인수가 하나인 함수로, 프로퍼티에 값을 쓸 뜨 호출됨 

 4. GET메소드 ※https://atoz-develop.tistory.com/entry/HTTP-GET-%EB%A9%94%EC%86%8C%EB%93%9C%EC%99%80-POST-%EB%A9%94%EC%86%8C%EB%93%9C%EC%9D%98-%EB%B9%84%EA%B5%90
  4-1)URL에 데이터를 포함하여 데이터 조회에 적합하다
  4-2) GET요청의 종류: 웹브라우저 주소창에 URL을 입력하는 경우, 링크를 클릭하는 경우, 입력폼의 method 속성값이 get인경우 

5. 자바스크립트 템플릿 리터럴기능  ※https://curryyou.tistory.com/185
 > ★백틱(`)으로 템플릿 리터럴을 사용하면, 줄바꿈등을 쉽게 표현할 수 있다.(따옴표 방식은 줄바꿈 허용하지 않음) 
 > ★표현식 삽입, ${} 사이에 변수나 연산 등을 삽입, 결과는 문자열을 자동 변환 
 > 템플릿은 문자열에 + 연산자를 여러 번 붙여 사용하지 않고 `이 차의 가격은 ${price}입니다 ` 가능 
*/ 
/*#7.3 Movie App part One
  1.async가 붙은 함수는 반드시 'promise'를 반환 , await는 async 함수 안에서만 동작 
  > await 키워드를 만나면 '프로미스'가 처리 될때까지 기다림
*/
/*#7.4 Movie App part Two - Router 개념
1.설치: npm install react-router-dom@6 
*/
/*#7.7 Publishing

'github pages'에 업로드 할 수 있게 해주는 나이스한 패키지 > ★npm i gh-pages >
[package.json]npm run build실행 > 'build script'실행 > production ready code(코드가 압축&모든게 최적화)를 생성 */
/*1. Repository name(프로젝트 이름) > 2. git: 소드코드를 내컴퓨터 > 인터넷으로 올려주는 역할 > 
3. gitbash > git config --global user.name "ohsoomansour"
4. git config --global user.email "ceoosm@naver.com"(github가입 이메일) > 5. git config --list 으로 설정 잘 들어갔나 확인
6 Visual Studio Code에서 순서대로 터미널에서 실행
git init
git add README.md  ( git add: 어떤 파일을 깃에 올릴지 함 보쟈, git add . 프로젝트 모든 파일을 추가 하겠다  )
 - git add index.html (index.html만 올리겠다)
git status : 내가 올릴려고 하는 파일들 나열 index.html등 > git에 올릴수 있는 파일들을 알려줌
git commit -m "first commit" : 히스토리를 만듬 > 최종본이라고 볼 수있음
git branch -M main 
git remote add origin https://github.com/ohsoomansour/testMovie.git
git remote -v : 위 연결고리 확인용  
git push -u origin main : master - > master 성공

★수정발생: git add . (전체하는게 편함 )
git status 
git add. 
git commit -m "second commit" 
git push -u origin main
※git remote add origin https://github.com/ohsoomansour/testMovie.git 
> error: remote origin already exists.> git remote rm origin

★gh-pages
1.npm i gh pages > !오류 npm ERR! Cannot read property 'pickAlgorithm' of null > install -g npm@7.24.2
2."scripts": {"deploy": "gh-pages -d build", "predeploy": "npm run build" }
 > 의미는 깃헙페이지를 실행시키고 디렉토리에서 build를 가져간다 predeploy: deplopy 되기전에 build를 자동으로 실행 최적화
   "homepage": "https://ohsoomansour.github.io/testMovie/"
3.npm run build > npm run deploy (published 성공!)
4. !Your site is published at https://ohsoomansour.github.io/Bitcoin/ > √ 체크표시로 바꾸는 법
  Settings > Pages > [Source] - Branch: gh-pages 변경 > (다시 로그인) > (싸이트 접속 x)
  > Your site is published at https://ohsoomansour.github.io/Bitcoin/index.html
5. 간혹 404 에러가 뜨거나 흰 화면만 지속적으로 보이는 경우는 검사창을 열어 에러가 있는지 확인해보고 코드를 수정후
>  다시 전체 코드 commit, push 후 재배포 하거나 길게는 하루정도 기다려보면 사이트가 다시 잘 작동하는 것을 볼 수 있다.   
6. 추측: npm install react-router-dom@6 6버전 설치 후 문제 발생 
published 후 빈페이지>  https://choar816.tistory.com/159
*/

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "movie/:id" element={<Detail />} /> 
      </Routes>
    </BrowserRouter> 
  )
   
}

export default App;
