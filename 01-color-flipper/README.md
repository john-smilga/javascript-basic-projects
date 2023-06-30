## 랜덤으로 배경색을 바꿀 수 있는 Color Flipper🌈

>navbar에 있는 Simple을 누르면 index.html링크로 이동한다.
colors배열의 값들을 random으로 출력하게 하기위해 Math.floor(Math.random() * colors.length);사용한다.
document.body.style.backgroundColor로 body의 background에 접근해 버튼으로 누를때마다 backgroundColor가 바뀌게 구현하였다.
hex를 누르면 hex.html로 이동하고 #f438f5이런 형태의 16진수 color를 만들기 위해 6번 반복하면서 random인 값들을 출력해 다양한 color를 만든다.
16진수 color를 만들어 다양한 색을 random으로 나오게 할 수도 있었겠구나라는 생각이 들었다..💡

<br/>

<img height="400" src="https://velog.velcdn.com/images/cocorig/post/5a07b01e-ff19-40ed-a589-a5318a22d5b6/image.gif"/>


### note..📝
`textContent`와 `innerText`는 JavaScript에서 DOM 요소의 `텍스트 콘텐츠`에 접근하는 데 사용되는 두 가지 속성

### 차이점은?
 `textContent`: 태그 상관없이 해당 노드가 가지고 있는 텍스트 값을 모두 읽어온다.
 이 속성은 숨겨진 스타일이나 스크립트로 인해 렌더링되지 않는 텍스트도 포함하여 모든 텍스트를 반환합니다. 즉, 숨겨진 요소의 텍스트 내용도 가져온다


`innerText`: DOM 요소의 "렌더링된" 텍스트 콘텐츠를 반환한다.
  이 속성은 CSS에 의해 숨겨진 요소의 텍스트를 가져오지 않으며, `시각적으로 표시되는 텍스트`만 반환한다. 





