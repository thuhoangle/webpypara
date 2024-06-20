import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/_root/pages/Home.jsx';
import AuthPage from '@/_auth/AuthPage.jsx';
import PageLayout from '@/Layout/PageLayout.jsx';
import Profile from '@/_root/pages/Profile.jsx';
import useAuthStore from '@/store/authStore.js';

function App() {
  const authUser = useAuthStore((state) => state.user);
  console.log('🚀 ~ App ~ authUser:', authUser);
  const ID = localStorage.getItem('IDSearch');

  return (
    <PageLayout>
      <Routes>
        {/* <Route path={'/'} element={ authUser? <Home /> : <Navigate to="/auth" /> }/>
        <Route path={'/'} element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        {/* <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to="/auth" />}
        /> */}

        <Route
          path="/profile"
          element={
            authUser ? <Profile id={authUser} /> : <Navigate to="/auth" />
          }
        />

        <Route
          path="/:username"
          element={authUser ? <Profile id={ID} /> : <Navigate to="/auth" />}
        />
      </Routes>
    </PageLayout>
  );
}

export default App;
