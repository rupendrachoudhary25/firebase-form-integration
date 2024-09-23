

import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEKt9gVlQq8Ooull7VK6pwkflrc1zcZjI",
  authDomain: "firbase-first25.firebaseapp.com",
  projectId: "firbase-first25",
  storageBucket: "firbase-first25.appspot.com",
  messagingSenderId: "744341708688",
  appId: "1:744341708688:web:0798c2fa974444b1009d15",
  databaseURL: "https://firbase-first25-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function FirebaseData() {
  // State to track input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (event) => {
    event.preventDefault(); // Prevent form from submitting in the default way

    // Send data to Firebase Realtime Database
    set(ref(db, "users/rupendra"), {
      name: name,
      email: email,
      password: password,
    })
      .then(() => {
        alert("Data submitted successfully!");
        setName('')
        setEmail('')
        setPassword('')
      })
      .catch((error) => {
        console.error("Error writing to Firebase", error);
      });
  };

  return (
    <form onSubmit={Submit}>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /> <br />
     
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        placeholder="Enter your EmailId"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FirebaseData;
