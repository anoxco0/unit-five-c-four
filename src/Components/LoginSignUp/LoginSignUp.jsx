import axios from "axios";
import { useState } from "react";

export const LoginSignUp = () => {
  const [interest, setInterest] = useState([]);
  const [tdata,setData] = useState([]);
  const [logi,setLog] = useState({
    name:"",
    password:""
  });

  const [form, setForm] = useState({
     name:"",
     password:"",
     location:"",
     interests:[],
     image:"",
     subscribed:"",
  })
  const handleForm =(e)=>{
    
      const {className,value} = e.target;
      if((className==='technology')||
        (className==='food')||
      (className==='movies')||
      (className==='culture')||
      (className==='art')||
      (className==='drama')){
    setInterest([...interest,value]);
    setForm({...form,interests:interest})
      }
      else
      setForm({...logi,[className]:value});
  }
  const postdata = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8080/users',{
      name:form.name,
     password:form.password,
     location:form.location,
     interests:form.interests,
     image:form.image,
     subscribed:form.subscribed,
    })
  }
  const handleLogin = (e)=>{
    const {className,value} = e.target;
    setLog({...logi,[className]:value});
  }
  const postData = (e)=>{
    e.preventDefault();
    axios.get(`http://localhost:8080/users`).then((res)=>{setData(res.data)});
    const dat = tdata.filter((e)=>{
       if(logi.name===e.name && logi.password===e.password){
         return true;
       }
       else{
         return false;
       }
    })
    console.log('dat',dat)
  }
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => {postdata(e) }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleForm(event) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {handleForm(event)}}
          required
        />
        <br />
        <select  className="location" onChange={(event) => {handleForm(event) }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          value='technology'
          type="checkbox"
          className="technology"
          onChange={(event) => {handleForm(event) }}
        />
        <br />
        <label>food</label>
        <input value='food' type="checkbox" className="food" onChange={(event) => {handleForm(event) }} />
        <br />
        <label>movies</label>
        <input value='movie' type="checkbox" className="movies" onChange={(event) => {handleForm(event) }} />
        <br />
        <label>culture</label>
        <input value='culture' type="checkbox" className="culture" onChange={(event) => {handleForm(event) }} />
        <br />
        <label>art</label>
        <input value='art' type="checkbox" className="art" onChange={(event) => {handleForm(event) }} />
        <br />
        <label>drama</label>
        <input value='drama' type="checkbox" className="drama" onChange={(event) => { handleForm(event)}} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {handleForm(event) }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={(e) => { }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {handleLogin(event)}}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {handleLogin(event) }}
          required
        />
        <br />
        <input onClick={(e)=>{postData(e)}} type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
