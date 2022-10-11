import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from './components/ProfilePage/ProfilePage';
import Login from './components/Login/Login';




const App = () => {
  return (
    
    // <Switch>
    //       <Route exact path="/">
    //        <Ex/>
    //       </Route>
    //       <Route exact path="/facebook">
    //         <ProfilePage/>
    //       </Route>
    //       <Route path="/">
    //         {/* <Home /> */}
    //       </Route>
    //     </Switch>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App