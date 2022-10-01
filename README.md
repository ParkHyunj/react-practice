# 2.1
1> html을 만들고 js에서 button을 가져오기 -> 일반적인 바닐라 js                    
2> body에서 클릭의 수를 세기 위해 <span>을 사용 후, script 부분에 가져오기                            
3> vanilla.html처럼 리액트 파일들을 import하면 console창에서 react를 부를 수 있다.                                 

* html 코드는 브라우저에서 여는 것이다.                                  
* 작업할 디렉토리를 만든 다음에는 vscode에서 파일 -> 폴더 열기 -> 폴더선택                                 

# 2.2
1> react js element하는 법(6번)                                        
2> react js의 규칙 : html을 <body>에 직접 작성하지 않는다 -> <script>에 작성                              
3> React.createElement("")에서 괄호 안에는 생성하고자 하는 html 태그와 똑같은 이름이어야 한다.                          
4> react-dom은 react element들을 html body에 둘 수 있도록 해준다.                             
5> render : react element를 가지고 html로 만들로 배치한다는 것. 사용자에게 보여준다.                           
6> const root = document.getElementById("root"); :root를 react js로 가져오기//                              
  -> ReactDOM.render(span, root ) : span을 root 안에 render 해달라.                               
  -> <div id = "root"></div> : body 안에 적는 html                                   
7> createElement에 두 번째 argument로 둘 수 있는 것은 span의 property : class name, id, style 등등                           
8> createElement에 세 번째 argument는 span의 내용                               

* stage -> commit -> 동기화를 해야 github에 변경된 사항이 올라간다.                            
* span, div, button => 유효한 html 태그                             
          
# 2.3
1> span과 button 두 가지 모두를 render하기 => const container = React.createElement("div", null, [spoan, btn]);                            
                                            ReactDOM.render(div, root);                               
2> button에 event listener를 주는 방법 : button.addEventListener("click", handleClick); 도 있지만, const btn = React.createElement("button", {onClick: () => console.log("im clicked"),}, "Click me"); 이렇게 propert(2번째 argument)에 작성하기                        
3> js로 element를 생성하고, html로 바꾸는 방식                            
           
* constant(const)의 이름은 html의 태그 이름과 반드시 일치할 필요가 없다                                       

# 2.4 
1> react js와 react dom 코드를 import                                
2> <body> 부분에 비어있는 div를 생성 => 비어있는 div는 reactdom이 react element들을 가져다 놓을 곳                  
3> ReactDOM.render(container, root); 부분은 react element들을 root div 안에서 보여주라는 뜻                         
4> React.createElement("div", null, [h3, btn]);에서 div의 content들은 h3와 btn                              
5> element에 event listener을 달아야 한다. => onMouseEnter: () => console.log("mouse enter") 이렇게 쓰면 addEventListener을 할 필요가 없다.                                 
6> props 안에 event listener을 등록할 수 있다.                              

# 2.5 JSX
1> createElement를 대체할 수 있는 방법 => 이유는 개발자들에게 좀 더 편리한 도구를 사용하기 위해서 => jsx => js를 확장한 문법(html과 비슷해서 개발자들이 편해함)                            
2> 주석 처리 :  편집에서 찾기 / ctrl + /                                
3> const Title = <h3 id = "title" onMouseEnter= {() => console.log("mouse enter")}>Hello I'm a title</h3> (jsx)과                                       
   /* const h3 = React.createElement("h3", {id: "title", onMouseEnter: () => console.log("mouse enter"),}, "Hello I'm a stitle" ); */  => 동일                              
4> babel => jsx로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔주는 것                             

# 2.6 컴포넌트를 다른 컴포넌트에 넣는 방법
1> createElement 대신에 jsx를 사용하여 표현하기                              
2> <Title />은 <h3 id = "title" onMouseEnter= {() => console.log("mouse enter")}>Hello I'm a title</h3>);}  이 부분을 복사한 것과 같다.                            
3> 컴포넌트의 첫 글자는 반드시 대문자! <div> 사이의 Button은 내가 생성한 것, button은 html 태그                                 

# 3.0 react.js의 state 
1> state : 기본적으로 데이터가 저장되는 곳, 바뀌는 데이터들의 값을 state로 표현 가능                                    
2> ReactDOM.render(<Container />, root );를 function에 한번 더 넣어줌으로써 리랜더링 가능 => function render() {ReactDOM.render(<Container />, root); 그리고 마지막에 render();                       
3> react.js는 ui에서 바뀐 부분만 업데이트해주고 있다.                             
4> 데이터가 바뀔 때마다 랜더링을 해야한다.                                

# 3.1 
1> ui를 업데이트하고 싶으면 render() 함수 사용                                  
2> react.js 어플 내에서 데이터를 보관하고 자동으로 리렌더링을 일으키는 방법                          
3> react 어플리케이션을 다룰 때, 어디에 데이터를 담으면 되는지                              
4> const data = React.useState(); => 하나의 data와 data를 바꿀 때 사용하는 함수를 사용할 수 있게 해준다.                             
5> React.useState() 함수는 초기값을 설정할 수 있다.                                 

# 3.2 modifier가 필요한 이유   
1> useState를 사용하면 배열이 생기는데, 첫 번째 요소가 data 값이고, 두 번째 요소가 이 data를 바꿀 때 사용하는 modifier이다.                        
2> React.useState 함수는 counter 같은 데이터를 숫자형 데이터로 건네준다.                           
3> 변수를 컴포넌트에 연결해서 변수에 데이터를 담은 다음, 해당 변수에 담긴 값을 바꾸는 내용                                 

# 3.3 Recap      
1> modifier 함수를 이용해 컴포넌트의 state를 바꿀 때, 컴포넌트는 새로운 값을 가지고 다시 한번 렌더링이 되는 것이다.                           
2> state가 바뀌면, React가 컴포넌트를 refresh(렌더링) 해준다.                           

# 3.4 State Functions
1> 사용자들의 input을 어떻게 얻는지, form을 만들었을 때 state는 어떤 식으로 작용하는지에 대해                               
2> state를 바꾸는 방법                             
-setCounter를 이용해서 우리가 원하는 값을 넣어주기(문자도 가능) => setCounter(5)                            
-이전 값을 이용해서 현재 값을 계산해 내기 =>  setCounter(current => current + 1); => 첫 번째 argument는 현재 값, 이 함수의 return 값이 새로운 state                            
3> setCounter에는 함수를 넣을 수 있다.                     

# 3.5 Inputs and State
1> unit conversion(단위 변환) 앱                           

# 3.6 State 복습
1> setState의 결과는 array => 첫 번째는 데이터, 2번째데이터를 수정하기 위한 함수                           
2> input의 value를 state로 연결했고 연결하는 이유 = input 값을 외부에서도 수정해주기 위해서                                            
3> onChange 함수                                   
4> Math.round => 반올림                                    

# 3.7 <-> 3.5와 반대되는 앱
1> 단위 변환을 뒤집어보는 함수(flip function)                             
2> 클릭하면 hours를 입력하게 해주고, minutes은 불가능하게 하기                           
3> setFlipped((current) => !current); => 부정명제                             
4> flipped === false => js 조건문 = !flipped                                

# 3.8  
1> flip => 시를 분으로 단위변환                             

# 3.9 두 개의 단위 변환기 (분/시간, 마일/킬로미터)
1> 코드 챌린지를 위한 준비 작업                                  
2> 컴포넌트는 그 안에 또 다른 컴포넌트를 렌더링 할 수 있다. => <MinutesToHours />                              
3> App 함수의 index 값에 따라 minutestohours, kmtomiles 둘 중 하나를 선택                                
4> {} 안에는 js를 쓸 수 있다.                                         
5> <hr />                                        
        
# 4.0 Props                   
1> Props : 일종의 방식. 부모 컴포넌트(App)로부터 자식 컴포넌트(minutestohours or kmtomiles)에 데이터를 보낼수 있게 해주는 방법                        
2> function App() {return <div></div>;} => 컴포넌트(함수를 의미)                              
3> function Btn()에서 ()안에가 props이다.                                
 
# 4.1 
1> onClick function은 App 컴포넌트에 있는 뭔가의 state를 바꾼다.                           
2> <div> <Btn text={value} changeValue={changeValue} /><Btn text="Continue" /> </div>; => 여기서 changeValue, text 등 아무리 불러도 코딩 결과값에는 영향이 없다. function ~~~~~() 이 괄호 안에 text, changeValue를 쳐야만 return에 영향을 줘서 영향을 끼친다.                                             
3> const MemorizedBtn = React.memo() => ~~~~ was rendered                                  

# 4.2 Prop Types
1> fontsize=fontsize=> fontsize(이름이 같은것을 =로 하면 그냥 한번만 써도 된다.)                     
2> prop type => 내가 어떤 타입의 prop을 받고 있는지를 체크해주는 기능                           
3> https://unpkg.com/prop-types@15.7.2/prop-types.js                              
4> react.js에서는 오류가 없이 유효하지만 prop type를 통해 실수가 있는지 알려주는 기능                         
5> function Btn({text, fontSize = 14}) => 이것처럼 고유값을 설정할 수 있다.(js)                          

# 5.1 Tour of CRA    
1> npm i prop-types => import PropTypes from "prop-types";                      
2> creat-react-app은 무작위적인 랜덤 class를 갖는다.                         
3> style들도 modular가 될 수 있다.                                  
4> 컴포넌트를 분리해서 만들 수 있고, 그 컴포넌트를 위한 css를 만들 수 있고, 그것들은 독립적인 형태이다.                             

# 6.0 
1> react.useState() => useState()만 써도 된다.                                      
2> 내가 state를 변경할 때 모든 code들은 다시 실행이 된다.(항상) 그런데 가끔 component 내부의 몇몇 코드는 처음 딱 한번만 실행되고 다시는 실행되지 않도록 하고 싶을 수도 있다.                        

# 6.1 useEffect
1> 특정 코드의 실행을 제한하는 방법 / 코드를 딱 한 번만 실행하고, 다시는 실행 x                          
2> useEffect => 두 개의 argument를 가지는 function                          
3> 첫 번째 argument는 딱 한번만 실행하고 싶은 코드                            

# 6.2 Deps
1> state 만들기 => const [a, b] = UseState("") => a - value, b - function                              
2> input을 만들고, event listener를 연결 => onChange = (event) => 이 함수가 작동할 때 argument로 event를 받는다.                          
3> useEffect(() => { console.log("SEARCH FOR", keyworld); }, [keyworld]);                            
 => useEffect 함수를 사용해서 한 번만 코딩을 읽지만, []에 keyworld를 씀으로써, keyworld가 변화할 때마다 코드를 실행하라고 react.js에게 알려준다.                               

 # 6.3 복습
 1> react.js에서 component를 새로고침하는 것                            
 2> component 안에 한 번만 실행하고 싶은 코드가 있을 수도 있고, 특정 데이터가 변화할 때 실행해야 할 수 있을 때 사용                          
 3> useEffect는 두 개의 argument를 가지는 function => 첫 번째 argument는 우리가 실행시키고 싶은 코드이고, 두 번째 argument는 dependencies                          
 4> dependency란, react.js가 지켜보아야 하는 것들. 그리고 그것들이 변화할 때, react.js가 코드를 실행시키는 것                            
 5> useEffect(() => { console.log("I run only once."); }, []);                            
   -> 이 useEffect는 console.log 코드를 실행하고 dependency는 없으므로, 코드가 한번만 실행이 된다.                          
6> useEffect(() => { console.log("I run when 'keyword' changes."); }, [keyword]);  -> keyword가 변화할 때 브라우저에 console.log를 찍어준다. 그리고 여기서 keyword는 setKeyword라는 function으로 인해 변화된다. setKeyword는 onChange라는 function에 의해 호출되고, onChange는 사용자 input이 변화할 때 호출이 된다.                           
7> useEffect(() => { console.log("I run when 'counter' changes."); }, [counter]);  -> dependency에 counter만 써줬기 때문에 counter가 변화할 때만 실행이 된다.                           
8> useEffect(() => { console.log("I run when keyword & counter change"); }, [keyword, counter]);  -> 이럴 때는 둘 중에 하나라도 변화가 일어나면 코드가 실행이 된다.                                     

# 6.4 Cleanup function         
1> showing ? "Hide" : "Show" => showing을 한다면, Hide라는 글자가 나오고, showing을 하지 않으면 Show라는 글자가 나온다.                                
2> <div></div>에서 js를 사용할 때는 {} 안에 쓰기                          
3> component가 언제 create 됐는지, 언제 destroy 됐는지 알 수 있는 함수                                       

# 7.0 List
1> to-do-list                             
2> creat-react-app을 사용하면 코딩을 새로 변경할 때마다 새로고침을 안 해도 자동으로 바뀐 내용으로 실행이 된다.                        
3> if (toDo === "") { return } setToDo(""); -> 빈칸에 뭔가를 치고 엔터를 치면 내용이 사라진다.                           

# 7.1 List part 2
1> 수정하는 함수를 사용할 때의 두 가지 옵션                         
 - setToDos((currentArray) => [toDo, ...currentArray]); => 함수로 보내기                       
 - setToDo(""); => 저장한 data 값                           
 2> console 창 : 같은 component의 list를 render할 때는 key라는 prop을 넣어줘야 한다.                             

 # 7.2 Coin Tracker
 1> 암호화폐들과 그 가격을 나열하는 프로젝트 => useEffect 이용 / useEffect(() => {}, [])                          
 2> 페이지나 앱을 들어왔을 때 로딩 메세지가 보이고, 코인들이 나열되면 로딩 메세지를 숨기고, 코인들을 리스트로 보여주는 프로젝트                           
 3> <li></li> 사이에 변수를 사용하고 싶다면 {} 안에 쓰기, {}를 안 하면, 그냥 string으로 인식한다.                                      

 # 7.3 Movie App part 1
 1> 영화를 보여주고, 그 영화들에 대한 정보들도 조금 보여주고, 거기에 링크를 넣어서 그 영화에 대해 더 많은 것을 찾아볼 수 있도록 앱에서 다른 곳으로 연결을 시켜보자                             
 2> 앱 안에서 페이지를 전환하는 방법을 배워보자                             
 3> <div> <img src={movie.medium_cover_image} /> <h2>{movie.title}</h2> </div> => 이 component들은 movies.array에 있는 각 movie에서 변형되어서 나온다.                              
 4> <img src={movie.medium_cover_image} /> => 이미지를 가져오기                                    

 # 7.4 Movie App part 2       
 1> react.js 앱에서 페이지를 전환하는 방법을 배워보자                    
 2> 하나의 route는 홈페이지, 홈스크린 등 스크린이나 페이지를 의미                       
 3> router는 url을 보고 있는 component                       
 4> npm install react-router-dom                         
 5> function App(){ return null; } export default App; => 홈페이지에서 아무것도 보이지 않게 만듬                    
 6> App.js는 더 이상 영화들을 보여주지 않고, 대신router를 render한다.                          

 # 7.5 React Router
 1> import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; => react-router-dom을 사용하기 위해 import 하기                        
 2> router의 종류 : Hash Router / Browser Router (Hash를 사용하면 /#/가 붙는다.)                       
 3> router component => <Router></Router>                               
 4> <Switch></Switch> => Route를 찾는 기능(Route는 localhost:3000/movies/123)에서 /movies/123을 의미                       
 5> 그리고 route를 찾으면 컴포넌트를 렌더링하면 된다.                                
 6> "/"  => 홈화면으로 간다는 의미 ==> <Route path="/"> <Home />                                 
 7> 첫 번째 컴포넌트 : Router / Router를 먼저 랜더링하고, 그 안에 들어가는 건 유저에게 보여주고 싶은 것들,유저가 있는 url에 따라서 / switch 컴포넌트를 넣은 이유는 한번에 하나의 route만 렌더링 하기 위해서 
 8> Link : 브라우저의 새로고침이 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트 =>  <Link to="/movie">{title}</Link>                                     

# 7.6 Parameters
1> /movie/:id => <Detail />에 접속하면서 url 뒤에 /변수가 쓰인다.                        
2> localhost:3000/movie/123123 => 123123이 id값 = /:id                                
3> import { useParams } from "react-router-dom";                            
   => url에 있는 값을 반환해주는 함수(변경되는 값(:id))                           
4> :id에서 id 부분은 마음대로 단어를 바꿔 쓸 수 있다.                              
5> async () => {                              

# 7.7 Publishing    
1> github page에 deploy하기                         
2> npm i gh-pages                                   
3> gh-pages => 결과물을 github pages에 업로드할 수 있게 해주는 패키지                       
4> html, css, javascript를 올리면 그걸 웹사이트로 만들어서 전세계에 무료로 배포해준다.                              
5> build => 우리 웹사이트의 production ready code를 생성하게 된다. production ready란 코드가 압축되고, 모든게 최적화된다는 의미                      
6> npm run build                          
7> build라는 파일이 생성되며 안의 내용들은 브라우저가 이해할 수 있는 코드다.                  
8> npm run build 후, build 파일을 github pages에 push해야한다.                     
9> package.json에 마지막에 , "homepage" 작성                        
10> git remote -v로 github repository 알아보기                       
11> deploy : 설치한 gh-pages를 실행시키고 build라는 디렉토리를 가져가는 기능                     
12> predeploy : deploy를 실행시키면, predeploy는 npm run build를 실행시킨다.                             
13> npm run deploy => Node.js가 predeploy를 먼저 실행시킨다. 그 후 npm run build                       
14> gh-pages -d build => gh-pages가 build 폴더를 적어놓은 웹사이트에 업로드하도록 한다.                              

# 7.9 Styles
1> <p> {summary.length > 235 ? '${summary.slice(0, 235)}' : summary} </p>                      
    => summary는 string이니깐 array의 method를 사용할 수 있다.                         
    => slice는 시작과 끝의 값을 필요로 한다. slice(a,b) : a부터 b까지                          
2> npm run deploy => github로 deploy가 된다. 사람들이 나의 웹사이트를 볼 수 있다.                         