import { useEffect, useState } from "react";

export const LoginSignUp = () => {
  const [interests,setInterests] = useState([]);
  const [form, setForm] = useState({
     name:"",
     password:"",
     location:"",
     interests:[],
     image:"",
     subscribed:"",
  })
  const handleForm =(e)=>{
    console.log(e.target.value)
      const {className,value} = e.target;
      setForm({...form,[className]:value});
  }
  const handleInterests=(e)=>{
    console.log(e.target.value)
    const {className,value} = e.target;
    setInterests({...form,[className]:value});
  }
  console.log(form);
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => { }}>
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
          type="checkbox"
          className="technology"
          onChange={(event) => {handleInterests(event) }}
        />
        <br />
        <label>food</label>
        <input value='food' type="checkbox" className="food" onChange={(event) => {handleInterests(event) }} />
        <br />
        <label>movies</label>
        <input value='movie' type="checkbox" className="movies" onChange={(event) => {handleInterests(event) }} />
        <br />
        <label>culture</label>
        <input vlaue='culture' type="checkbox" className="culture" onChange={(event) => {handleInterests(event) }} />
        <br />
        <label>art</label>
        <input value='art' type="checkbox" className="art" onChange={(event) => {handleInterests(event) }} />
        <br />
        <label>drama</label>
        <input value='drama' type="checkbox" className="drama" onChange={(event) => { handleInterests(event)}} />
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
          onChange={(event) => { }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
