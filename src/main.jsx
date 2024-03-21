import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from "@/_root/pages/Home.jsx";
import UserPage from "@/_root/pages/UserPage.jsx";
import CreatePost from "@/components/createPost.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/*<App />*/}
    {/*  <Home/>*/}
      <UserPage></UserPage>
    {/*  <CreatePost/>*/}
  </BrowserRouter>,
)
