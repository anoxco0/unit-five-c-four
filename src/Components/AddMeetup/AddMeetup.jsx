// User should be able to add/create new meetups 

import axios from "axios";
import { useState } from "react";

export const AddMeetup = () => {
  const [form , setForm] = useState({
    title: "",
      location: "",
      date: "",
      time: "",
      theme: "",
      description: "",
      image: ""
  });
  const handleChange = (e) =>{
    const {className,value} = e.target;
    setForm({...form,[className]:value});
  }
  
  const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post('http://localhost:8080/meetups',{
        title:form.title,
        date:form.date,
        time:form.time,
        theme:form.theme,
        description:form.description,
        image:form.image
    })
  }
  
  return (
    <div className="addMeetupContainer">
      <form>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" onChange={(e) => {handleChange(e) }} required />
        <label>Location</label>
        <select value={""} className="location" onChange={(event) => {handleChange(event) }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={(event) => { }}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          onChange={(event) => { handleChange(event)}}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={""} className="theme" onChange={(event) => {handleChange(event) }}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          onChange={(event) => {handleChange(event) }}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {handleChange(event) }}
          required
        />
        <br />
        <input onClick={(e)=>{handleSubmit(e)}} className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
