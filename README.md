# Kakao Project(2020.04.20 ~ 2020.05.01 )  
[Kakao Friends Shop](https://store.kakaofriends.com/kr/index?tab=home) clone   
[Back-End Github Repository](https://github.com/wecode-bootcamp-korea/kakao-backend)  
5 people in this project(front-end 3, back-end 3)  


## Project Demo
![](https://images.velog.io/images/soncl_97/post/ab359518-5620-470f-af57-fa5b405eec8e/image.png)
[Demo Video](https://www.youtube.com/watch?v=HObgKbCabHo&feature=youtu.be)


## Tech
React.js, SASS, Javascript, html


## Features
* 스크롤 이벤트 기능
* 카테고리 호버 기능
* match를 이용한 제품 상세페이지 이동 기능
* 로그인, 회원가입 기능
* 상단의 메뉴 클릭시 해당 컴포넌트로 바뀌는 기능
* react router를 이용한 페이지 이동 기능
* 라이브러리로 배너 슬라이드 구현
* 백엔드 api
* Git merge로 conflict 해결
* 트렐로로 서로간의 업무 파악 및 Scrum방식으로 프로젝트 진행

## What did I do
#### Nav/Footer:

- Nav/Footer 레이아웃 구성
- 카테고리에 마우스를 가져가면 메뉴가 나타나고 마우스를 메뉴 바깥으로 빼면 사라지도록 구현
- 백엔드 api를 fetch하여 카테고리 안에 메뉴 텍스트 데이터 불러오기
- 메뉴를 클릭하면 해당 페이지로 이동

#### 신규/세일/미니인형:

- 신규/세일 레이아웃 구성
- 백엔드 api를 fetch하여 제품 리스트 컴포넌트 구현
- match.params를 이용하여 제품을 클릭하면 각 상품의 디테일 정보를 볼 수 있는 페이지로 이동
- react-slick 라이브러리를 사용하여 배너 구현
- 백엔드 api를 fetch하여 배너에 들어가는 이미지 데이터 불러오기

#### 제품 상세페이지:

- 제품 상세페이지 레이아웃 구성
- 백엔드 api를 fetch하여 제품의 상세 정보 데이터 불러오기
- 하단의 +버튼을 누르면 제품 수량이 올라가는 기능 구현

#### 그외:

- 프로젝트 프레젠테이션 담당
