import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from "./components/Header";
import Signup from "./components/Signup"; 
import Login from "./components/Login";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Error from "./components/Error";
import { MdOutlineStopScreenShare } from 'react-icons/md';

function App() {
  const { where, id } = useParams();
  const [ userToken, setUserToken ] = useState(localStorage.getItem("jwttoken"));
  const [ posts, setPosts ] = useState([]);
  const [ error, setError ] = useState(false); 
  const [ loading, setLoading ] = useState(true);
  //console.log("token: " + userToken);
  //console.log(typeof localStorage.getItem("jwttoken"));
  //console.log("where: " + where);

  const updateToken = (newToken) => {
    setUserToken(newToken);
    localStorage.setItem("jwttoken", newToken);
  }

  const logOut = () => {
    localStorage.setItem("jwttoken", null);
    setUserToken(null);
  }

  useEffect(() => {
    if (userToken !== null && userToken !== "null") {
      const fetchData = async () => {
        const options = { 
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userToken
          },
        }
        try { 
          const res = await fetch(import.meta.env.VITE_BACKEND + "/posts", options);
          if (!res.ok) { 
            throw new Error("response error");
          }
          const data = await res.json();  
          setPosts(data.posts);
        } catch (error) { 
          setError(error); 
        } finally { 
          setLoading(false);
        }
      } 
  
      fetchData();
    } else {
      setLoading(false); 
      setError(false); 
    }
  }, [userToken])

  if (loading) {return (
    <>
      <Header />
      <h1 className="w-full text-center text-5xl mt-20">Loading...</h1>
    </> 
  )} 

  if (error) {return (
    <>
      <Header />
      <Error />
    </> 
  )} 


  const Body = ({ userToken, where, posts }) => {
    if (userToken === null || userToken === "null") {
      if (where === "signup") {
        return <Signup updateToken={updateToken} />
      }
      if (typeof where === "undefined") {
        return <Login updateToken={updateToken}  />
      }
    } 

    if (typeof where === "undefined" && (userToken !== null || userToken === "null")) {
      return <Posts posts={posts} />
    }

    return <Error />
  }



  if (userToken !== null && userToken !== "null" && where === "posts" && typeof id !== "undefined") {
    let flag = false;
    let retrievedPost = null;
    posts.forEach(post => {
      if (post.pid === Number(id)) {
        flag = true;
        retrievedPost = post;
      } 
    }) 

    if (flag) {
      return (
        <>
          <Header userToken={userToken} logOut={logOut}/>
          <Post post={retrievedPost} />
        </>
      )
    } else {
      return (
        <>
          <Header userToken={userToken} logOut={logOut}/>
          <Error />
        </>
      )
    }
  }
 
  return (
    <>
    <Header userToken={userToken} logOut={logOut}/>
    <Body userToken={userToken} where={where} posts={posts} />
    </>
  )
}

export default App;
