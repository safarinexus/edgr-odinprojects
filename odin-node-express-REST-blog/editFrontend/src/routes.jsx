import App from './App'; 
import Error from './components/Error';

const routes = [
    {
        path: "/:where?/:id?", 
        element: <App />,
        errorElement: <Error />,
    }
]

export default routes;