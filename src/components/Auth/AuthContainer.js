import {useState } from "react";
import AuthHeader from "./AuthHeader";
import SendOTP from "./SendOTP";
import CheckOTP from "./CheckOTP";

const AuthContainer = ({ onClose }) => {
  const [auth, setAuth] = useState(true);
  const [phone, setPhone] = useState("");

  return (
    <>
      <AuthHeader onClose={onClose} onBack={() => setAuth(!auth)} auth={auth}>
        {auth ? (
          <SendOTP
            phone={phone}
            setPhone={setPhone}
            showOTP={() => setAuth(!auth)}
          />
        ) : (
          <CheckOTP
            onBack={() => setAuth(!auth)}
            phone={phone}
            onClose={onClose}
          />
        )}
      </AuthHeader>
    </>
  );
};

export default AuthContainer;
