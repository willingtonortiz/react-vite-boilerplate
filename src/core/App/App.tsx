import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "../../modules/temp/presentation/components/Counter/Counter";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};
