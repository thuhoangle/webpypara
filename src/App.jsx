import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "@/_root/pages/Home.jsx";

import UserPage from "@/_root/pages/UserPage.jsx";
import AuthPage from "@/_auth/AuthPage.jsx";
import PageLayout from "@/Layout/PageLayout.jsx";
import Profile from "@/_root/pages/Profile.jsx";

function App() {


  return (
      <PageLayout>
          <Routes>
              <Route path={'/'} element={ <Home /> } />
              <Route path='/auth' element={<AuthPage/>} />
              {/*<Route path='/shibapawpaw' element={<UserPage/>} />*/}
              <Route path='/profile' element={<Profile/>} />
          </Routes>
      </PageLayout>

    //   <Router>
    //       <AuthProvider>
    //       {/*<Header/>*/}
    // {/*<main className={'flex h-screen'}>*/}
    //           <Routes>
    //             {/*public routes*/}
    //             {/*  <Route element={<AuthLayout/>}>*/}
    //             {/*  <Route>*/}
    //             {/*      /!*<Route path="/auth" element={<Login />}></Route>*!/*/}
    //             {/*      <Route path="/login" element={<Login />}></Route>*/}
    //             {/*      <Route path="/signup" element={<SignUp />}></Route>*/}
    //             {/*  </Route>*/}
    //
    //
    //             {/*private routes*/}
    //               <Route element={<RootLayout/>}>
    //                   <Route path='/' element={<Home/>}></Route>
    //                   <Route path='/auth' element={<AuthPage/>}></Route>
    //                   <Route path='/user' element={<UserPage/>}></Route>
    //               </Route>
    //           </Routes>
    // {/*</main>*/}
    //       </AuthProvider>
    //   </Router>
  )
}

export default App
