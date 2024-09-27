import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Header from "./components/Header";
import Upgrade from "./components/Upgrade"; 
import Login from "./components/Login";
import Error from "./components/Error";
import AdminPosts from './components/AdminPosts';
import IndivPost from "./components/IndivPost";
import CreatePost from "./components/CreatePost";

function App() {
  const { where, id } = useParams();
  const [ userToken, setUserToken ] = useState(localStorage.getItem("adminjwttoken"));
  const [ posts, setPosts ] = useState([]);
  const [ error, setError ] = useState(false); 
  const [ loading, setLoading ] = useState(true);
  const navigate = useNavigate(); 
  //console.log("token: " + userToken);
  //console.log(typeof localStorage.getItem("jwttoken"));
  //console.log("where: " + where);
  //useEffect(() => {
  //  console.log(posts)
  //}, [posts]);

  const updateToken = (newToken) => {
    setUserToken(newToken);
    localStorage.setItem("adminjwttoken", newToken);
  }

  const logOut = () => {
    localStorage.setItem("adminjwttoken", null);
    setUserToken(null);
    navigate("/");
  }

  const updatePosts = (newPosts) => {
    setPosts(newPosts);
  }

  const addPost = (anotherPost) => {
    setPosts([...posts, anotherPost]);
  }

  useEffect(() => {
    if (userToken !== null && userToken !== "null") {
      const fetchData = async () => {
        const options = { 
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userToken
          }
        }
        try { 
          const res = await fetch(import.meta.env.VITE_BACKEND + "/posts/admin", options);
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
      <Header userToken={userToken} logOut={logOut}/>
      <h1 className="w-full text-center text-5xl mt-20">Loading...</h1>
    </> 
  )} 

  if (error) {
    console.log(error);
    return (
    <>
      <Header userToken={userToken} logOut={logOut}/>
      <Error />
    </> 
  )} 


  const Body = ({ userToken, where, posts }) => {
    if (userToken === null || userToken === "null") {
      if (where === "signup") {
        return <Upgrade updateToken={updateToken} />
      }
      if (typeof where === "undefined") {
        return <Login updateToken={updateToken}  />
      }
    } 

    if (typeof where === "undefined" && (userToken !== null || userToken === "null")) {
      return <AdminPosts userToken={userToken} posts={posts} updatePosts={updatePosts} addPost={addPost} />
    }

    return <Error />
  }


  //route for individual posts
  if (userToken !== null && userToken !== "null" && where === "posts" && typeof id !== "undefined") {
    if (id === "create") { 
      return (
        <>
          <Header userToken={userToken} logOut={logOut}/>
          <CreatePost userToken={userToken}/>
        </>
      )
    }

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
          <IndivPost post={retrievedPost} userToken={userToken}/>
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
