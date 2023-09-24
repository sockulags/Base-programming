
import React, { useState } from 'react';
// import { Formik, Form, Field } from 'formik';

const CreateWorkout = () => {

  const [isWorkoutNameAdded, setIsWorkoutNameAdded] = useState(false);
  const [isSessionAdded, setIsSessionAdded] = useState(false);
const [exercisesAdded, setExercisesAdded] = useState(0);
  const [name, setName] = useState('');
  const [session, setSession] = useState([{}]);
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const [restTime, setRestTime] = useState(90);



  const NewWorkout = () => {
    const handleSubmit1 = () => {
      console.log(name);
      setIsWorkoutNameAdded(true);   
          
    };
    return (
    <form >
          <h1>Workout Program Form</h1>

          <label htmlFor="name">Set workout name</label>
          <input name="name" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="button" value="Submit" onClick={handleSubmit1} />
        </form>
    );
  };

  const AddSession = () => {
    const handleSubmit2 = () => {
      console.log(session, session.length);
      setIsSessionAdded(true);   
     
          
    };
    return (
      <form>
   <div> <h1>{name}</h1>
   <input type="button" value="New Session" onClick={handleSubmit2} />
   </div>
  
   </form>
    )
  };

const AddSessionDetails = () => {
  const handleSubmit3 = (values) => {
    console.log("Form 3 submitted:", values);
    
    if(exercisesAdded === 0){setSession([{id: exercisesAdded, exerciseName: exerciseName, sets: sets, reps: reps, restTime: restTime}]);}
    else{setSession(session => [...session, {id: exercisesAdded, exerciseName: exerciseName, sets: sets, reps: reps, restTime: restTime}]);}

setExercisesAdded(exercisesAdded + 1);
    console.log(name, session);

    
  };
  return (
    <form >
      <h1>{name}</h1>
      <h2>Session nr {session.length}</h2>
      <label htmlFor="exercise">Exercise</label>
      <input name="exercise" type="text" onChange={(e) => setExerciseName(e.target.value)} value={exerciseName}/>
      <label htmlFor="sets">Set</label>
      <input name="sets" type="number" onChange={(e) => setSets(e.target.value)} value={sets}/>
      <label htmlFor="reps">Reps</label>
      <input name="reps" type="number" onChange={(e) => setReps(e.target.value)} value={reps}/>
      <label htmlFor="rest">Rest(s)</label>
      <input name="rest" type="number" onChange={(e) => setRestTime(e.target.value)} value={restTime}/>  
      <input type="button" value="Add Session" onClick={handleSubmit3} />
    </form>
  )
};


const SessionForm = () =>{
  
  return (session.map(s =>(
    <tr key={s.id}>
      <td>{s.exerciseName}</td>
      <td>{s.sets}</td>
      <td>{s.reps}</td>
      <td>{s.restTime + "s"}</td>
    </tr>
  )))
  }
 

  const SaveSession = () => {
    console.log(session);
  };


  return (
    <div>
      {!isWorkoutNameAdded ? NewWorkout() : !isSessionAdded ? AddSession() : AddSessionDetails(exercisesAdded)}
      <div>
      <table>
  <thead>
    <tr>
    <th>
      Exercise Name
    </th>
    <th>
      Sets
    </th>
    <th>
      Reps
    </th>
    <th>
      Rest Time
    </th>
    </tr>
  </thead>
<tbody>{
exercisesAdded === 0 ? <></> : SessionForm()
  
  }

  </tbody></table>
   
      </div>
      <input type='button' value="Save Session" onClick={() => SaveSession()}/>
    </div>
  );
};

export default CreateWorkout;
