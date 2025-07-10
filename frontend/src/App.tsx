import Home from "./page/Home"
import { Routes, Route } from "react-router-dom"
import Login from "./page/Login"
import MainLayout from "./components/MainLayout"
import { LoginProvider } from "./contexts/LoginContext"

function App() {


  return (
    <LoginProvider>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </LoginProvider>
  )
}

export default App

// https://salehmubashar-com.translate.goog/blog/5-cool-animations-in-react-with-framer-motion?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true