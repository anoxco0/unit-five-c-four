import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [meet,setMeet]=useState([]);
  const [location, setLocation] = useState();
  useEffect(()=>{
    axios.get(`http://localhost:8080/meetups`).then((res)=>{
      setMeet(res.data)
    })
  },[])
  const handleChange = (e) =>{
    const {className,value} = e.target;
    setLocation(value);
  }
  return (
    <div className="homeContainer">
      {meet
        .filter((el) => { 
          if(el.location===location)
          return true;
          else
          return false
        }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`/meetups/${el.location}`} className="events">
              <div key={el.id}></div>
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => {handleChange(e)}}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={'/addmeetup'}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {meet
            .map((el) => {
              return (
                <Link to={`/meetups/${el.location}`} className="events">
                 <table key={el.id}>
                   <tbody>
                     <tr>
                       <td> {el.title} </td>
                       <td> {el.theme} </td>
                       <td> {el.location} </td>
                       <td> {el.description} </td>
                       <td> {el.date} </td>
                       <td> {el.tiem} </td>
                       <td> {el.image} </td>
                     </tr>
                   </tbody>
                 </table>
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
