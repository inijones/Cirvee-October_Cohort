import React, { useState } from "react";
import "./SignIn.css";
import TextInput from "./ui/TextInput";

export default function SignIn() {
  const [email, setEmail] = useState("ini@gmail.com");

  return (
    <div className="card-wrapper">
      <form className="card" onSubmit="">
        <h2 className="card-title">Sign in to your account</h2>

        <div className="fields">
          <TextInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ini@gmail.com"
            type="email"
          />
        </div>
      </form>
    </div>
  );
}
