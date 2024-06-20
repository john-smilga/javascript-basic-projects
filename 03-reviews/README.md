## 📨 리뷰 캐러셀 만들기 

### 이 프로젝트에서 다루는 주요 개념은 다음과 같습니다 :)

* 객체
  
* ## DOMContentLoaded 
  
   
    ```html
      <div class="img-container">
            <img id="person-img" src="" alt="image">
          </div>
          <h4 id="author"></h4>
          <p id="job"></p>
          <p id="info">
    ```

    ```javascript
    // load initial item,바로 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화!!
        window.addEventListener('DOMContentLoaded', function () {
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
        console.log('Dom 준비 완료!')
        });

```
 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생한다.
이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않는다.
DOM이 준비된 것을 확인한 후 원하는 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화할 때 새 이벤트를 활용할 수 있다.
브라우저가 html을 전부 읽고 즉시 발생해서 html에 값을 적지 않아도 DOMContentLoaded 이벤트로 바로 발생 시킬 수 있다.
예시를 실행하면 'Dom 준비 완료!'가 바로 출력되는걸 확인할 수 있다.

* addEventListener()
* array.length
* textContent