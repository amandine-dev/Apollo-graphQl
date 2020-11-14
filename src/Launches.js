import React from "react";
import { useQuery, gql } from '@apollo/client';
import "./launches.css";
import ReactPlayer from 'react-player'
import Moment from 'react-moment';

const LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      links {
        video_link
      }
      rocket {
        rocket_name
      }
      launch_success
      details
    }
  }
`;

function GetLaunches() {
  const { loading, error, data } = useQuery(LAUNCHES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
 (console.log(data))
 
 return data.launches.map((launch) => (
            <div key={launch.launch_date_utc} className="Launch">
            <div>
              <h3 className="name">🚀 {launch.rocket.rocket_name}</h3>
              <div className="status">
              <div className={launch.launch_success ? 'status-success' : 'status-fail'}></div>
                <Moment format="YYYY/MM/DD">{launch.launch_date_utc}</Moment>
                <div className="text2">
                     <p className="text">{launch.details}</p>  
                </div>   
                <div className="reactplayer">
                <ReactPlayer 
                    url={launch.links.video_link}
                    muted
                    controls
                    width="100%"
                    height="100%"
                    />
                </div>
              </div>
              
            </div>
          </div>

            
 )
 );
}
  
  export default GetLaunches;