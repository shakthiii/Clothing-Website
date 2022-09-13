import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const user = async () => {
    const { user } = await signInWithGooglePopUp();
    console.log(user);
    const userDoc = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={user}>Sign In with Google</button>
    </div>
  );
}

export default SignIn;
