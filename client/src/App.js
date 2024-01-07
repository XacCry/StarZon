import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

//Functions
import { currentUser } from './function/auth';
//Redux
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const idToken = localStorage.token
  if(idToken) {
    currentUser(idToken)
    .then(res => {
      //code
      console.log(res.data.userID)
      dispatch({
        type:'LOGIN',
        payload: {
          token: idToken,
          userID: res.data.userID,
          email: res.data.email,
          phone: res.data.phone
        }}) 
    }).catch(err => {
console.log(err)
    })
  }
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
