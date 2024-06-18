import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/_root/pages/Home.jsx';
import AuthPage from '@/_auth/AuthPage.jsx';
import PageLayout from '@/Layout/PageLayout.jsx';
import Profile from '@/_root/pages/Profile.jsx';
// import { useAuthStore } from '@/store/authStore.js';

function App() {
  return (
    <PageLayout>
      <Routes>
        {/*element={ <Home /> }*/}
        {/*<Route path={'/'} element={ authUser? <Home /> : <Navigate to="/auth" /> }/>*/}
        <Route path={'/'} element={<Home />} />

        <Route path="/auth" element={<AuthPage />} />

        {/*<Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to="/" /> } />*/}
        <Route path="/:username" element={<Profile />} />
        {/* <Route path="/authUser.first_name}" element={<Profile />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
