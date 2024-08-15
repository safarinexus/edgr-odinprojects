import App from './App';
import ErrorPage from './components/ErrorPage';

const routes = [
    {
        path: "/:where?",
        element: <App />, 
        errorElement: <ErrorPage />,
    }, 
]

export default routes;