import { useState } from 'react'
import styles from './Form.module.css'
import validation from '../validation'

export default function Form (props) {
    
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });


    function handleInputChange (e) {
       setUserData({...userData, [e.target.name]: e.target.value,})
         setErrors(
            validation({...userData, [e.target.name]: e.target.value,})
           );
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.login(userData);
    }

    
    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit}>
                <img className={styles.img} src="https://64.media.tumblr.com/ea551ab31b29756d4d8fa3875ec8cd91/tumblr_o7y55ocum11rvfyzho1_500.png" alt='Rick and Morty Login'/>
                <div className={styles.login2}>
                    <label className={styles.label}>Username: </label>
                    <input className={errors.username && styles.warning} name='username' type='text' value={userData.username} onChange={handleInputChange} />
                    {!errors.username ? null : <p className={styles.danger}>{errors.username}</p>}
                </div>
                <div className={styles.login2}>
                    <label className={styles.label}>Password: </label>
                    <input className={errors.password && styles.warning} name='password' type='password' value={userData.password}  onChange={handleInputChange} />
                    {!errors.password ? null : <p className={styles.danger}>{errors.password}</p>}
                </div>
                <button className={styles.button} type='submit' >Login</button>
            </form>
        </div>

    )
}