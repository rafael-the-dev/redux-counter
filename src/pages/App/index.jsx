import { BrowserRouter, Router, Route} from 'react-router-dom';
import Home from '../Home'

const App = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path='/' element={<Home />} />
            </Router>
        </BrowserRouter>
    )
};

export default App;