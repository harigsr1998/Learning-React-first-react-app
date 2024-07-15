import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    } );
    return;
  }

  // Delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    } );
    return;
  }

  // Update job
  const updateJob = async (updatedJob) => {
    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedJob)
    } );
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/Learning-React-first-react-app/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/Learning-React-first-react-app/jobs" element={<JobsPage />} />
      <Route path="/Learning-React-first-react-app/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="/Learning-React-first-react-app/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
                      {/* ↑ ':' in :id represents that it is dynamic. It is a parameter that can be accessed using useParams() hook and by the params object passed on to the loader */}
      <Route path="/Learning-React-first-react-app/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path="/Learning-React-first-react-app/*" element={<NotFoundPage />} />
    </Route>
    )
  )

  return <RouterProvider router={router} />;
}

export default App