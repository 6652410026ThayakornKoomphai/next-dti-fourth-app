'use client'

import Image from 'next/image'
import bmi from './../images/bmi.png'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        {/*  */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full transform transition duration-500 hover:scale-105">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            BMI Calculator
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            คำนวณ BMI
          </p>

          <div className="mb-6">
            <Image src={bmi} alt='bmi' width={150} height={100} className='mx-auto'/>
          </div>

          <div className="w-full space-y-4">
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                ป้อนน้ำหนัก (กิโลกรัม)
              </label>
              <input
                type="number"
                id="weight"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-300"
                placeholder="ป้อนน้ำหนักของคุณ"
              />
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                ส่วนสูง (เซนติเมตร)
              </label>
              <input
                type="number"
                id="height"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-300"
                placeholder="ป้อนส่วนสูงของคุณ"
              />
            </div>
          </div>

          <div className="w-full mt-6 space-y-3">
            <button
              className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
            >
              คำนวณ BMI
            </button>
            <button
              className="w-full bg-red-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
            >
              Reset
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-md font-bold text-gray-800">
              ค่า BMI คำนวณได้: <span className="text-green-600">0.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
