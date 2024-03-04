import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Container,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';

// Import necessary firebase functions and config files
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './Config';
//Import needed auth functions: getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut 

// Initialize Firebase app with the provided configuration

// Get the firebase authentication instance


// Import your other components here as desired


function App() {
  // Set initial state using useState (user, email, password, username, errorMessage)


  useEffect(() => {
    // Listen to state authentication state change
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        // If there is a user, set the state of `user`, and set state of email, password and errormessage to blank
        if (user) {
        
        //otherwise user is null
        } else {

        }
    });
    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  // Method for handling changes to forms
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use separate state setters for each field
  };

  // Method for handling someone signing up 
  const handleSignUp = async () => {
      try {
          // Create a new user and save their information

            // THEN update the display name of the user. Be sure to reset the form field to blank

          // Set the state as the current (firebase) user

        } catch (error) {
          setErrorMessage(error.message);
      }
  };

  // Method for handling someone signing in
  const handleSignIn = async () => {
      try {
          // Sign in the user

      } catch (error) {
          setErrorMessage(error.message);
      }
  };

  // Method for handling someone signing out
  const handleSignOut = async () => {
      try {
          // Sign out the user. Reset the form to blank


        } catch (error) {
          setErrorMessage(error.message);
      }
  };
  // set welcomeDiv to a sign up/sign in message if no user, otherwise display a message for the user

  // set up an ErrorDiv for any errors coming back from the the auth calls
  const errorDiv = errorMessage === "" ? "" : <Alert color='danger'>Error: {errorMessage}</Alert>;
 
  // evaluate if the email is valid
  const isValidEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //check if we are ready to submit the form / isNotReadytoSubmit will be true if any of the following conditions is met:
    //The user is already logged in (user is truthy). 
    //The email is not valid. 
    //The password is an empty string.
  const isNotReadytoSubmit = !!user || (!isValidEmail(email) || password === '');

  // Create (and render) divs to welcome the user / show errors 
  return (
    <Container>
      {welcomeDiv}
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
          //no type for username
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => handleChange(event)}
        />
        <Label>Username</Label>
      </FormGroup>

      <FormGroup>
        <Button color="primary" className="mr-2" onClick={handleSignUp} disabled={isNotReadytoSubmit || username === ''}>
          Sign Up
        </Button>
        {' '}
        <Button color="success" className="mr-2" onClick={handleSignIn} disabled={isNotReadytoSubmit || username !== ''}>
          Sign In
        </Button> 
        {' '}
        <Button color="danger" className="mr-2" onClick={handleSignOut} disabled={user === null}>
          Sign Out
        </Button>
      </FormGroup>
      {errorDiv}
    </Container>
  );
}

export default App;