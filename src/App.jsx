import { Routes, Route, Navigate} from 'react-router-dom'
import Home from "@/_root/pages/Home.jsx";
import AuthPage from "@/_auth/AuthPage.jsx";
import PageLayout from "@/Layout/PageLayout.jsx";
import Profile from "@/_root/pages/Profile.jsx";
import {auth} from "@/firebase/firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";

function App() {
    const [authUser] = useAuthState(auth)

  return (
      <PageLayout>
          <Routes>
              {/*element={ <Home /> }*/}
              {/*<Route path={'/'} element={ authUser? <Home /> : <Navigate to="/auth" /> }/>*/}
              <Route path={'/'} element={ <Home /> }/>
              <Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to="/" /> } />
              {/*<Route path='/:username' element={<Profile/>} />*/}
              <Route path='/:username' element={authUser? <Profile/> : <Navigate to="/auth" /> } />
              {/*<Route path='/profile' element={<Profile/>} />*/}
          </Routes>
      </PageLayout>

  )
}

export default App
