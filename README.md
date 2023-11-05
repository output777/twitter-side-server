project-root/
│
├── src/ # 이 폴더는 모든 소스 코드를 포함하고 있습니다.
│ ├── controllers/ # "컨트롤러"는 HTTP 요청을 받고 응답을 처리하는 클래스를 포함합니다.
│ │ ├── UserController.ts # 예를 들어, 사용자 관련 요청(로그인, 회원가입 등)을 처리합니다.
│ │ └── ProductController.ts # 제품 관련 요청(제품 목록 보기, 제품 추가 등)을 처리합니다.
│ │
│ ├── models/ # "모델"은 애플리케이션의 데이터 구조와 관련 비즈니스 로직을 정의합니다.
│ │ ├── User.ts # 사용자 데이터 구조와 사용자 관련 비즈니스 로직을 포함합니다.
│ │ └── Product.ts # 제품 데이터 구조와 제품 관련 비즈니스 로직을 포함합니다.
│ │
│ ├── services/ # "서비스"는 비즈니스 로직의 핵심을 담당합니다. 이들은 데이터 처리를 담당합니다.
│ │ ├── UserService.ts # 사용자 데이터를 처리하는 서비스 로직입니다.
│ │ └── ProductService.ts # 제품 데이터를 처리하는 서비스 로직입니다.
│ │
│ ├── repositories/ # "리포지토리"는 데이터베이스와의 상호작용을 담당합니다.
│ │ ├── UserRepository.ts # 사용자 데이터를 데이터베이스에서 가져오고 저장하는 역할입니다.
│ │ └── ProductRepository.ts # 제품 데이터를 데이터베이스에서 가져오고 저장하는 역할입니다.
│ │
│ ├── interfaces/ # "인터페이스"는 특정 클래스가 따라야 할 규칙을 정의합니다.
│ │ ├── IUser.ts # IUser 인터페이스는 사용자 클래스가 구현해야 하는 메서드를 정의합니다.
│ │ └── IProduct.ts # IProduct 인터페이스는 제품 클래스가 구현해야 하는 메서드를 정의합니다.
│ │
│ ├── utils/ # "유틸리티"는 여러 곳에서 재사용될 수 있는 공통 함수를 포함합니다.
│ │ └── logger.ts # 로거 유틸리티는 로그를 기록하는 공통 기능을 제공합니다.
│ │
│ ├── middleware/ # "미들웨어"는 요청을 처리하기 전후에 특정 로직을 실행하는 함수들입니다.
│ │ └── authMiddleware.ts # 인증 미들웨어는 요청이 유효한 인증을 가지고 있는지 확인합니다.
│ │
│ ├── routes/ # "라우트"는 URL 경로와 이에 대응하는 컨트롤러의 메서드를 연결합니다.
│ │ ├── userRoutes.ts # 사용자 관련 경로와 컨트롤러를 연결합니다.
│ │ └── productRoutes.ts # 제품 관련 경로와 컨트롤러를 연결합니다.
│ │
│ └── app.ts # "애플리케이션의 엔트리 포인트"는 서버를 시작하고 설정하는 주요 파일입니다.
│
├── dist/ # "컴파일된 코드"가 저장되는 곳으로, TypeScript가 JavaScript로 변환된 코드입니다.
├── node_modules/