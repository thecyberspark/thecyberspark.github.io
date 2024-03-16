// src/pages/LoginPage.js or another relevant file
import React, {useState} from 'react';
import { useAuth , } from '../../contexts/AuthContext';
import './login.css';
const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  if (isLoggedIn) {
    // Redirect to dashboard or home page
    window.location.href = '/';
  }

  function handleLogin(event) {
      event.preventDefault();
        setLoading(true);
      const payload = {
            email: event.target.email.value,
            password: event.target.password.value,
      }
      // send a post request to the url = https://jobs.cyberspark.in/api/docusaurus
        setError(null);
        fetch('https://jobs.cyberspark.in/api/docusaurus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setIsLoggedIn(true);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError(error);

            }).finally(()=>{
            setLoading(false);
        })
        }

      // send a request to the server to log in the user
    // Your login logic here

      // setIsLoggedIn(true);


  return (
      <div className="container margin-top--lg">
          <div className="row">
              <div className="col col--4 col--offset-4">
                  <div className="card">
                      <div className="card__header">
                          <h2>Login</h2>
                      </div>
                      <div className="card__body">
                          <form onSubmit={handleLogin}>
                              <div className="margin-bottom--md">
                                  <label for="email" className="form-label">Email:</label>
                                  <input type="email" id="email" name="email" className="form-input" placeholder="Enter your email" required/>
                              </div>
                              <div className="margin-bottom--md">
                                  <label for="password" className="form-label">Password:</label>
                                  <input type="password" id="password" name="password" className="form-input" placeholder="Enter your password" required/>
                              </div>
                              <div className="form-group">
                                  <button type="submit" className="button button--primary button--block" disabled={loading}>

                                        {loading ? 'Logging in...' : 'Login'}

                                  </button>
                              </div>

                              <div className="margin-top--sm">
                                    {error && <p className="text--danger">Invalid Login</p>}
                                </div>

                          </form>
                      </div>
                      {/*<div className="card__footer">*/}
                      {/*    <small>Don't have an account? <a href="#">Sign up</a></small>*/}
                      {/*</div>*/}
                  </div>
              </div>
          </div>
      </div>



);
};

export default LoginPage;
