import { signIn } from "next-auth/client"

const Login = () => {
    return (
        <div className="grid place-items-center">
            <img
                loading="lazy"
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt="fb logo"
                height={400}
                width={400}
                objectFit="contain"
            />
            <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login
