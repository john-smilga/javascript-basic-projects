##  양수인지 음수인지에 따라 색상이 바뀌는 카운터 🌈

<br/>

> btn class를 querySelectorAll()메서드로 다 가져와서 forEach매서드로 버튼 하나하나 이벤트를 준다.
버튼 하나하나 가져와서 클릭이벤트를 주었었는데 이렇게 매서드를 쓰는게 나을꺼같다..!💡
class의 이름대로 cnt를 변경시킨다.

btn class를 querySelectorAll()메서드로 다 가져온 결과

NodeList(3) [button.btn.decrese, button.btn.reset, button.btn.increse]


### note..📝


### 프로젝트에서 다루는 주요 개념은 다음과 같다.

* document.querySelectorAll()
* forEach()
* addEventListener()

* currentTarget 속성

  event가 DOM을 통과할 때 event의 현재 대상을 식별한다. 항상 이벤트 핸들러가 첨부된 요소를 참조하며, Event.target이벤트가 발생한 요소를 식별하고 그 자손이 될 수 있는 요소를 식별한다.

  - #### ⭐️ target과 currentTarget의 차이는 무엇일까?
  
   `target`은 이벤트가 발생한 `바로 그 요소`를 직접 가리키고 `currentTarge`t은 `이벤트 리스너`  (EventListener)를 가진 요소를 가리킨다.
   <br/>
   #예시#

  ![](https://velog.velcdn.com/images/cocorig/post/e574c1d9-0996-4793-b420-f2554442e3cd/image.png)

흰부분이 부모태그인 button부분이고,빨간부분이 자식요소인 span태그이다.

  ```html
 <button class="btn decrese"><span style="background-color: tomato;">DECREASE</span></button>

  ```
  button에 클릭이벤트를 줬을때
 ```javascript
 btn.addEventListener('click',(e)=>{
        console.log(e.target)
        console.log(e.currentTarget)
 })
```
##  부모태크인 button을 클릭했을때

![](https://velog.velcdn.com/images/cocorig/post/2c942ab6-a73f-431d-aead-781a9f07dc9c/image.png)

    target -> button태그 부분을 눌렀으니 button태그가 이벤트 발생 시점이 된다.
    currentTarget -> button부분이 클릭이벤트를 가지고있으므로 button태그가 출력된다.
####  정리 : e.currentTarget과 e.target은 동일한 값이 나온다.
    
##  span 태그를 클릭했을때
![](https://velog.velcdn.com/images/cocorig/post/36856101-4354-4eeb-bd8c-0b060b20352d/image.png)

     target -> 빨간부분(span태그)부분을 눌렀으니 span태그가  이벤트 발생 시점이 된다.
    currentTarget -> 빨간부분을 눌렀어도 button태그가  클릭이벤트를 가지고있으므로 button태그가 출력된다.
 #### 정리: e.target은 이벤트를 발생시킨 span 태그를 가리키고, e.currentTarget는 이벤트핸들러가 연결된 button태그를 가리킨다.


* classList 
element.className을 통해 엘리먼트의 클래스 목록에 접근하는 방식을 대체하는 간편한 방법이다. DOMTokenList(공백으로 구분된 토큰 세트)를 반환한다.
  btn.classList -> DOMTokenList(2) ['btn', 'increse', value: 'btn increse']

- contains()메소드 : element가 특정 class를 가지고있는지 확인하기 위해서 사용한다.
    classList에 특정한 class가 존재하면 true를 반환하고 아니면 flase를 반환한다.
* textContent









