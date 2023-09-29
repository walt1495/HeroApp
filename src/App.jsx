import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DcScreen from "./dc/DcScreen"
import MarvelScreen from "./marvel/MarvelScreen"
import Layout from './layouts/Layout';
import Home from './components/Home';
import Login from './components/Login';
import SearchScreen from './components/SearchScreen';
import CreateScreen from './components/CreateScreen';
import UpdateScreen from './components/UpdateScreen';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dc" element={<DcScreen />} />
            <Route path="/marvel" element={<MarvelScreen />} />
            <Route path="/hero/create" element={<CreateScreen />} />
            <Route path="/hero/update/:id" element={<UpdateScreen />} />
            <Route path="/search" element={<SearchScreen />}>
              <Route path="/search/:hero" element={<SearchScreen />} />
            </Route>
            <Route />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
