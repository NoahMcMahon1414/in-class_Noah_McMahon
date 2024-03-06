import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Auth() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail('');
        setPassword('');
        setErrorMessage('');
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'username') setUsername(value);
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: username });
        setUsername('');
      
        setUser(userCredential.user);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setEmail('');
      setPassword('');
      setUsername('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const errorDiv = errorMessage === '' ? '' : <Alert color="danger">Error: {errorMessage}</Alert>;

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isReadytoSubmit = !!user || !isValidEmail(email) || password === '';

  return (
    <div>
      <FormGroup floating>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          valid={isValidEmail(email)}
          invalid={!isValidEmail(email)}
          value={email}
          onChange={(event) => handleChange(event)}
        />
        <Label for="email">Email</Label>
      </FormGroup>

      <FormGroup floating>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => handleChange(event)}
        />
        <Label>Password</Label>
      </FormGroup>

      <FormGroup floating>
        <Input
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => handleChange(event)}
        />
        <Label>Username</Label>
      </FormGroup>

      <FormGroup>
        <Button color="primary" className="mr-2" onClick={handleSignUp} disabled={isReadytoSubmit || username === ''}>
          Sign Up
        </Button>
        {' '}
        <Button color="success" className="mr-2" onClick={handleSignIn} disabled={isReadytoSubmit || username !== ''}>
          Sign In
        </Button>
        {' '}
        <Button color="danger" className="mr-2" onClick={handleSignOut} disabled={user === null}>
          Sign Out
        </Button>
      </FormGroup>
      {errorDiv}
      </div>
  );
}

export default Auth;
