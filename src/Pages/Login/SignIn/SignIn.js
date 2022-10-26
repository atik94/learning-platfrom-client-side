// import { GoogleAuthProvider } from "firebase/auth";
// import React from "react";
// import { useContext } from "react";
// import { FaGoogle } from "react-icons/fa";
// import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

// const SignIn = () => {
//   const { providerLogin } = useContext(AuthContext);
//   const googleProvider = new GoogleAuthProvider();
//   const handleGoogleSignIn = () => {
//     providerLogin(googleProvider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//       .catch((error) => console.log(error));
//   };
//   return (
//     <div>
//       <button onClick={handleGoogleSignIn} className="btn btn-info btn-sm">
//         Sign In <FaGoogle></FaGoogle>
//       </button>
//     </div>
//   );
// };

// export default SignIn;
