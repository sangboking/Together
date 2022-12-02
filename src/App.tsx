import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("@/pages/MainPage/MainPage"));

const App = () => {
  return (
    <Suspense fallback={<div>...로딩중 입니다.</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
