'use client'

import Image from 'next/image'
import bmr from './../images/bmr.png'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmrResult, setBmrResult] = useState('0.00');

  const handleClickBmrCalculate = () => {
    if(!weight || !height || !age || parseFloat(weight) <= 0 || parseFloat(height) <= 0 || parseFloat(age) <= 0){
      alert('กรุณากรอกข้อมูลให้ถูกต้อง')  
      return
    }
    const result = gender === 'male' ? (66 + (13.7 * parseFloat(weight)) + (5 * parseFloat(height)) - (6.8 * parseFloat(age))) : (655 + (9.6 * parseFloat(weight)) + (1.8 * parseFloat(height)) - (4.7 * parseFloat(age)));
    setBmrResult(result.toFixed(2));
  }


  const handleClickReset = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setBmrResult('0.00');
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 font-inter">
      
      {/* The main card container for the BMR calculator */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center space-y-6">
        
        {/* Title and subtitle */}
        <h1 className="text-4xl font-extrabold text-center text-slate-800 tracking-tight mt-4">
          BMR Calculator
        </h1>
        <p className="text-xl font-light text-center text-slate-600">
          คำนวณ BMR
        </p>

        {/* BMR image */}
        <div className="w-24 h-24 relative overflow-hidden rounded-full shadow-lg">
            <Image src={bmr} alt='bmi' width={150} height={100} className='mx-auto'/>
        </div>

        {/* Input fields for user data */}
        <div className="w-full space-y-4">
          
          {/* Weight input */}
          <div className="flex flex-col">
            <label htmlFor="weight" className="text-slate-700 font-semibold mb-2">
              น้ำหนัก (กิโลกรัม)
            </label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              id="weight"
              placeholder="กรอกน้ำหนัก"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Height input */}
          <div className="flex flex-col">
            <label htmlFor="height" className="text-slate-700 font-semibold mb-2">
              ส่วนสูง (เซนติเมตร)
            </label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="number"
              id="height"
              placeholder="กรอกส่วนสูง"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age input */}
          <div className="flex flex-col">
            <label htmlFor="age" className="text-slate-700 font-semibold mb-2">
              อายุ (ปี)
            </label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              id="age"
              placeholder="กรอกอายุ"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender selection (Radio buttons) */}
          <div className="flex flex-col">
            <span className="text-slate-700 font-semibold mb-2">เพศ</span>
            <div className=" items-center space-x-6">
              <label className="flex items-center cursor-pointer">
                <input
                  checked ={gender == "male"}
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio h-5 w-5 text-blue-600 rounded-full"
                />
                <span className="ml-2 text-slate-700">ชาย</span>
              </label>
              <br />
              <label className="flex items-center cursor-pointer">
                <input
                  checked ={gender == "female"}
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio h-5 w-5 text-pink-600 rounded-full"
                />
                <span className="ml-2 text-slate-700">หญิง</span>
              </label>
            </div>
          </div>
        </div>

        {/* Action buttons */}

          <div className="w-full mt-6 space-y-3">
            <button
              className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
              onClick={handleClickBmrCalculate}>
              คำนวณ BMR
            </button>
            <button
              className="w-full bg-gray-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
              onClick={handleClickReset}>
              Reset
            </button>
          </div>

        {/* BMR result display */}
        <div className="w-full text-center py-4">
          <p className="text-xl font-bold text-slate-700">
            ค่า BMR คำนวณได้: <span className="text-blue-600">{bmrResult}</span>
          </p>
        </div>
      </div>
              <div className='mt-6 space-y-4'>
            <Link href='/' className="w-full bg-gray-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300" >
            กลับไปหน้าหลัก
            </Link>
          </div>

      {/* Footer text outside the card */}
      <div className="mt-8 text-center text-slate-500 text-sm">
        Developed by <span className="text-blue-500 font-semibold">Thayakorn DekDev SAU Team</span>
      </div>
    </div>
  )
}
