import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MyBucketCard from "./components/MyBucketCard";
import BucketsPage from "./pages/BucketsPage";
import HomePage from "./pages/HomePage";
import MyBucketPage from "./pages/MyBucketPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TabPage from "./pages/TabPage";
import { getUserDetails } from "./redux/User/User.action";
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUserDetails())
  },[])
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/buckets/:id" element={<BucketsPage/>} />
        <Route path = "/mybuckets/:myId" element={<MyBucketPage />} />
        <Route path="/:tab" element={<TabPage/>} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
