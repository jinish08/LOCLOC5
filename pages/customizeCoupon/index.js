import React, { useContext, useEffect, useState } from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import Side from "../../assets/create.png";
import "react-color-palette/lib/css/styles.css";
import { UserContext } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const CustomizeCoupon = () => {

    const { designData, setDesignData , userData, setUserData } = useContext(UserContext)

    const router = useRouter();

    const [color, setColor] = useColor("hex", "#121212");

    const [imageFile, setImageFile] = useState([])
    const [imageUrls, setImageUrls] = useState([])


    useEffect(() => {
        if (imageFile.length < 1) return;
        const newArray = []
        imageFile.forEach((file) => {
            newArray.push(URL.createObjectURL(file))
        })
        setImageUrls(newArray)
    }, [imageFile])



    const [title, setTitle] = useState('Title tielt[ekvln')
    const [ccode, setCcode] = useState('1234567')

    const [color1, setColor1] = useState(color.hex)

    const generateAlphaNumberCouponCode = () => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (var i = 0; i < 7; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setCcode(result)
    }

    useEffect(() => {
        setColor1(color.hex)
    }, [color])

    const submitCoupon = () => {

        const data = {
            bgColor: color1,
            title: title,
            code: ccode,
            image: "",
        }

        setDesignData(data)

        router.push("/confirmCoupons")
    }

    return (
        <div className="bg-white h-screen flex w-full">
            <div className="flex flex-col items-start h-[70vh] mt-[10%] w-[70vw]">
                <div className="w-full mt-[-5%] flex items-center justify-center">
                    <ul className="steps steps-vertical w-full lg:steps-horizontal">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                        <li className="step step-primary">Purchase</li>
                        <li className="step step-primary">Receive Product</li>
                        <li className="step">Receive Product</li>
                    </ul>
                </div>
                <div className='flex justify-between w-[80%] mx-12 mt-10'>
                    <div className="mockup-phone border-primary mx-0 h-min">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <div>
                                    <div style={{ backgroundColor: color1 }} className={`w-[302px] -mt-10 mx-2 h-[110px] rounded-[15px] shadow-gray-500 shadow-xl flex`}>
                                        <div className='w-[60%] text-white flex flex-col my-3  mx-3 justify-between'>
                                            <div className='text-lg font-semibold'>{title}</div>
                                            <div className='text-sm'>Code: {ccode}</div>
                                        </div>
                                        <div className='w-[40%]'>
                                            {imageUrls.length > 0 ? <img src={imageUrls[0]} alt="Group-1" border="0" className="w-[282px] h-[110px] rounded-[15px] rounded-tl-none rounded-bl-none" />
                                                : <img src="https://i.ibb.co/0nZ3Z3r/Group-1.png" alt="Group-1" border="0" class="w-[282px] h-[110px] rounded-[15px] rounded-tl-none rounded-bl-none" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-10 mt-24'>
                            <label htmlFor="my-modal" className="btn">Choose BG Color</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <ColorPicker width={456} height={228}
                                        color={color}
                                        onChange={setColor} hideHSV dark />
                                    <div className="modal-action">
                                        <label htmlFor="my-modal" className="btn">Close</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <span>Title</span>
                                    <input type="text" placeholder="info@site.com" className="input input-bordered" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <span>Coupon Code</span>
                                    <input type="text" placeholder="info@site.com" className="input input-bordered" value={ccode} onChange={(e) => { setCcode(e.target.value) }} />
                                </label>
                                <label onClick={generateAlphaNumberCouponCode}>Auto generate</label>
                            </div>
                            <input id="dropzone-file" type="file" accept="image/*" className="file-input file-input-bordered file-input-primary w-full max-w-xs" onChange={(e) => setImageFile([...e.target.files])} />

                            <button className="btn btn-primary" onClick={submitCoupon}>Next</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end justify-end h-screen w-[30vw] bg-blue-600">
                <img src={Side.src} alt="" className="w-[30vw]" />
            </div>
        </div>
    )
}

export default CustomizeCoupon