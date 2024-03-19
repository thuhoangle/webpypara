import{ Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "@/_root/pages/Home.jsx";
import SignInForm from "@/_auth/forms/SignInForm.jsx";
import SignUpForm from "@/_auth/forms/SignUpForm.jsx";
import AuthLayout from "@/_auth/AuthLayout.jsx";
import RootLayout from "@/_root/RootLayout.jsx";


function App() {

  return (
    <main className={'flex h-screen'}>
      <Routes>
        {/*public routes*/}
          <Route element={<AuthLayout/>}>
              <Route path="/sign-in" element={<SignInForm />}></Route>
              <Route path="/sign-up" element={<SignUpForm />}></Route>
          </Route>


        {/*private routes*/}
          <Route element={<RootLayout/>}>
              <Route index element={<Home/>}></Route>
          </Route>

      </Routes>
    </main>
  )
}

export default App
