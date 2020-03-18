import React from 'react';
import './style.css'

const ScoreTable=({usersArray})=>{
return (
  <div>
  <h1>Score Table</h1>
    <div className='tablediv'>

<table class="content-table">
  <thead>
    <tr>
    <th>Position</th>
      <th>Name</th>
      <th>Total Quizzes</th>
      <th>Quizzes Pass</th>
      <th>Quizzes Fail</th>
      <th>Best Record</th>
      <th>Total Points</th>
    </tr>
  </thead>
  <tbody>
    
    {usersArray.map((user, index)=>(
       <tr>
      <td>{index+1}</td>
    <td>{user.name}</td>
    <td>{user.totalQuizzes}</td>
      <td>{user.quizzesPass}</td>
      <td>{user.quizzesFail}</td>
      <td>{user.bestRecord}</td>
      <td>{user.totalPoints}</td>
    </tr> 
  ))}

  
    
  </tbody>
</table>

    </div></div>
)
}
export default ScoreTable;