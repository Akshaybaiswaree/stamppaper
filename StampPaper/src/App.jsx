import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from  "react-router-dom";


import StampPaper from "./Component/StampPaper";
import StampPaperSubmission from "./Component/StampPaperSubmission";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<StampPaper />} />
      <Route path="/stampPapersubmission" element={<StampPaperSubmission />} />
      
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
