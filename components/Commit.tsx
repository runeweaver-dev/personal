import React from 'react';
import '../styles/Commit.scss';

function Commit(commit: any) {

  let datestamp = new Date(commit["commit"]["author"]["date"]).getTime();

  function DisplayTimePassed(dateString: string){

    let now = new Date().getTime();

    let timeAgo = now - datestamp;

    let seconds = Math.floor(timeAgo / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days*24*60)-(hours*60)
    seconds = seconds - (days*24*60*60) - (hours*60*60) - (minutes*60);

    if(days > 0){
      return (<p>{days} days ago</p>)
    }

    if(hours > 0){
        return (<p>{hours} hours ago</p>)
    }

    if(minutes > 0){
        return (<p>{minutes} minutes ago</p>)
    }

    return (<>
      <p>{seconds} seconds ago</p>
    </>)
  }

  let commitDateTime = commit["commit"]["author"]["date"];

  let message = commit["commit"]["message"];

  if(message.length > 60){
    message = message.substring(0, 60) + "...";
  }

  return (
    <div className="Commit">
      <DisplayTimePassed {...commitDateTime}/>
      <p>{message}</p>
    </div>
  )
}

export default Commit;
