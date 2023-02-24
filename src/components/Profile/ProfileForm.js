import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';


const ProfileForm = () => {

  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = event =>{
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCO_5MwtpO6aijlQv3QHhntme1iMxUYmzs',{
      method:'POST',
      body: JSON.stringify({
        idToken:authCtx.token,
        password:enteredNewPassword,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res =>{
      // assume: Always succeeds!
    })
  }



  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' minLength='7' id='new-password' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
