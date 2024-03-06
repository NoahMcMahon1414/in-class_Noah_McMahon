import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Input, FormGroup } from 'reactstrap';
import './App.css';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Config';
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

import { getDatabase, ref, onValue, push, runTransaction } from 'firebase/database';
import Tweet from './Tweet';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const tweetsRef = ref(db, 'tweets');


function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [tweets, setTweets] = useState({});
  const [tweetText, setTweetText] = useState('');




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setUsername(firebaseUser.displayName);
        console.log(firebaseUser.displayName);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onValue(tweetsRef, (snapshot) => {
      const tweetsData = snapshot.val();
      setTweets(tweetsData || {});
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  // Method to push tweet to the firebase database
  const sendTweet = () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      const tweet = {
        user: currentUser.displayName,
        timestamp: Date.now(),
        text: tweetText,
        likes: 0,
      };

      push(tweetsRef, tweet)
        .then(() => setTweetText(''))
        .catch((error) => console.log('Error: ', error));
    }
  };

  // Method for updating the likes on a tweet
  const updateLikes = (tweetId) => {
    let likesRef = ref(db, `tweets/${tweetId}/likes`);
    console.log("the likes reference is:" + likesRef);
    
    runTransaction(likesRef, (currentLikes) => {
      // If there are no current likes, set it to 1; otherwise, increment by 1
      return (currentLikes + 1);
    }).catch((error) => {
      console.log('Error updating likes: ', error);
    });
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Sort the keys of the tweets in descending order (by timestamp)
  const sortedKeys = Object.keys(tweets).sort((a, b) => {
    return tweets[b].timestamp - tweets[a].timestamp;
  });

  return (
    <div className="App">
        <Container>
          {!user && <Auth />}
          {user && (
            <div className="container">
              <h1>Welcome, {user.displayName} <Button color="danger" className="float-end mt-0" onClick={handleSignOut}>Sign Out!</Button></h1>
              <br /> <br />
              <div>
                <FormGroup>
                    <Input
                        type="text"
                        placeholder="share something... "
                        className="form-control"
                        value={tweetText}
                        onChange={(event) => setTweetText(event.target.value)}
                    />
                    <br />
                    <Button color="primary" onClick={sendTweet}>
                    Tweet!
                </Button>
                </FormGroup>
                
            </div>
            <div className="tweetContainer">
                {sortedKeys.map((tweetId) => (
                    <Tweet
                        update={() => updateLikes(tweetId)}
                        id={tweetId}
                        key={tweetId}
                        info={tweets[tweetId]}
                    />
                ))}
              </div>
            </div>
          )}
          {/* Your other components and content */}
      </Container>
    </div>
  );
}

export default App;