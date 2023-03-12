import React, { useContext, useState } from 'react'
import { UserContext } from "../context/AuthContext";


const Hero = () => {

    const { signIn, user ,googleLogin} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerOrg = async (e) => {
        e.preventDefault();
        try {
            //const data = await signIn(email, password);
            //console.log(data);
        } catch (err) {
            if (err.code === "auth/wrong-password") {
                console.log("Wrong password")
            }
            else if (err.code === "auth/user-not-found") {
                console.log("User not found")
            }
            else {
                console.log(err.code);
            }
        }
    };

    const googleLoginUser = async () => {
        try {
            const data = await googleLogin();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section class="h-screen">
            <div class="w-[1oovw]">
                <div
                    class="g-6 flex h-full flex-row-reverse items-center justify-center lg:justify-between">
                    <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    
                    <div class="relative">
                    <img src={'login.png'}  class="h-full"/>
                    <img src={'laptop.png'} class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/3"/>
                    <div class="container absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[27%] w-[40.3%] bg-white"></div>
                    </div>
                    </div>
                    <div class="md:w-8/12 lg:mx-auto lg:w-5/12">
                        <form>
                            <div class="relative" data-te-input-wrapper-init>
                                <label className="label">
                                    <span className="label-text">What is the name of your Organisation?</span>
                                </label>
                                <input type="name" placeholder="Organisation Name" className="input input-bordered w-full "  autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div class="relative" data-te-input-wrapper-init>
                                <label className="label">
                                    <span className="label-text">Contact Number?</span>
                                </label>
                                <input type="email" placeholder="Mobile" className="input input-bordered w-full "  autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div class="relative" data-te-input-wrapper-init>
                                <label className="label">
                                    <span className="label-text">Where is it based from?</span>
                                </label>
                                <input type="text" placeholder="Location" className="input input-bordered w-full "  autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div class="relative" data-te-input-wrapper-init>
                                <label className="label">
                                    <span className="label-text">What is your email?</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered w-full "  autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div class="relative " data-te-input-wrapper-init>
                                <label className="label">
                                    <span className="label-text">What is your password?</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered w-full " autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div class="relative mb-6" data-te-input-wrapper-init>
                                <label className="label">
                                    <span className="label-text">Confirm your password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" className="input input-bordered w-full " autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            
                            <button
                                type="submit"
                                class="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light" onClick={registerOrg}>
                                Register
                            </button>                    
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero