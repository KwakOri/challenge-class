# Global State Management

## Props Drilling

## Redux, Zustand, Recoil, React Query ...

## Context API

## Redux의 단점

복잡하다. 그래서 러닝 커브가 있다.

아주 간단한 상태 관리를 위해서도 많은 세팅, 사전 세팅이 필요하다.

## React Query와 Recoil, Zustand의 등장 배경 차이

Recoil과 Zustand는 기존 Redux의 전역 상태 관리의 복잡함을 해소하기 위해서, React Query는 비동기 통신 작업을 쉽게 만들기 위해서 등장했다.

## flux 아키텍쳐

단방향 데이터 흐름.

의도된 복잡함 - 데이터의 엄격한 변경을 위해서.
예측가능하고 유지보수를 용이하게 하기 위해서 (predictable and maintainable)

## Redux의 핵심 개념

저장소 : store
CUD : reducer
R : useSelector
