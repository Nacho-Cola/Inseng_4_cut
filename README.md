# [2023.11.22] 이동네트워크 과제 

이동네트워크 과제로 개발된 웹 애플리케이션입니다. 
사용자는 인터페이스를 통해 네컷 사진을 생성하고, 이미지 파일로 저장할 수 있습니다. 각 사진 프레임을 클릭하여 이미지를 업로드하거나 프레임 색상을 변경할 수 있으며, 최종 결과물을 다운로드할 수 있습니다.


<img width="944" alt="Screenshot 2024-12-26 at 5 56 12 PM" src="https://github.com/user-attachments/assets/c8746bfd-a539-4601-bf6c-cdb00ec03492" style="width: 30%; margin-right: 10px;">
<img width="944" alt="Screenshot 2024-12-26 at 5 49 56 PM" src="https://github.com/user-attachments/assets/6a07960e-35e2-490c-8f4a-4d5359f3333d" style="width: 30%; margin-right: 10px;">
<img width="944" alt="Screenshot 2024-12-26 at 5 55 54 PM" src="https://github.com/user-attachments/assets/d9dd0c20-d1a7-4e81-86c9-68a8b2aa7a36" style="width: 30%; margin-right: 10px;">

## 주요 기능

### 1. 사진 프레임 업로드
- 각 프레임을 클릭하여 이미지를 업로드할 수 있습니다.
- 업로드된 이미지는 프레임의 배경으로 설정됩니다.

### 2. 프레임 색상 변경
- 제공된 색상 버튼을 클릭하여 네컷 사진의 배경 색상을 변경할 수 있습니다.

### 3. 텍스트 표시 및 저장 버튼 효과
- 저장 버튼에 마우스를 올리면 텍스트가 변화합니다.
- 클릭 시 현재 네컷 사진 상태를 이미지 파일로 다운로드합니다.

### 4. 이미지 다운로드
- 사용자가 작업한 네컷 사진을 하나의 이미지 파일로 저장할 수 있습니다.

## 기술 스택
- **HTML5**: 웹 페이지 구조 설계
- **CSS3**: 스타일링 및 사용자 인터페이스 디자인
- **JavaScript**: 동적 기능 구현
- **html2canvas**: HTML 요소를 이미지로 캡처

## 파일 구조
```
.
├── index.html          # 초기 HTML 파일
├── photobooth.html     # 메인 HTML 파일
├── styles.css          # 스타일 정의 파일
├── App.js              # JavaScript 로직
├── README.md           # 프로젝트 설명 문서
```


