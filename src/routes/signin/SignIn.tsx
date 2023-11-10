import SignUpForm from '../../components/signUpFrom/SignUpForm'
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocFromAuth(user)
    }

    return (
        <div>
            <div>SIGN IN</div>
            <button onClick={logGoogleUser}>Sign in with google</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn
