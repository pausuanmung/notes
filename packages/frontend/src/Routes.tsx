import { Route, Routes } from "react-router-dom";
import NotFound from "./containers/NotFound.tsx";
// import Home from "./containers/Home.js";

export default function Links() {
  return (
    <Routes>
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}