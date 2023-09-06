import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'



const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        console.log(user)
        const userDocRef = await createUserDocFromAuth(user)

    }

    return (
        <div>
            <div>SIGN IN</div>
            <button onClick={logGoogleUser}>Sign in with google</button>
        </div>
    )
}

export default SignIn
