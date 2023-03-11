import React, { useEffect, useState } from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const CustomizeCoupon = () => {

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

    console.log(imageFile)

    useEffect(() => {
        setColor1(color.hex)
    }, [color])

    return (
        <div className='flex'>
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
                <div>
                    <h1>Choose the background color</h1>
                    
                        <label htmlFor="my-modal" className="btn">open modal</label>

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
                    </div>
                            <input id="dropzone-file" type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" onChange={(e) => setImageFile([...e.target.files])} />

                </div>
            </div>
        </div>
    )
}

export default CustomizeCoupon