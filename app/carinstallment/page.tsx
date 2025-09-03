'use client'

import Image from 'next/image'
import car from './../images/car.png'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [interest, setInterest] = useState('');
    const [downpayment, setDownpayment] = useState('15%');
    const [months, setMonths] = useState('12');
    const [installmentResult, setInstallmentResult] = useState('0.00');

    const handleClickReset = () => {
        setName('');
        setPrice('');
        setInterest('');
        setMonths('12');
        setDownpayment('15%');
        setInstallmentResult('0.00');
    }

    const handleClickCalculate = () => {
        // Validate inputs
        if (!price || !interest || !downpayment || !months) {
            alert('Please fill in all the required fields: price, interest, and months.');
            return;
        }

        // Convert string inputs to numbers
        const carPrice = parseFloat(price);
        const annualInterestRate = parseFloat(interest) / 100;
        const loanMonths = parseInt(months);
        const downPaymentRate = parseFloat(downpayment) / 100;

        // Calculate down payment amount
        const downPaymentAmount = carPrice * downPaymentRate;

        // Calculate the loan amount
        const loanAmount = carPrice - downPaymentAmount;

        // Calculate total interest based on a simple interest model
        const totalInterest = loanAmount * annualInterestRate * (loanMonths / 12);
        
        // Calculate the total amount to be paid back (principal + interest)
        const totalPayment = loanAmount + totalInterest;

        // Calculate the monthly installment
        const monthlyInstallment = totalPayment / loanMonths;

        // Update the state with the calculated value, formatted to 2 decimal places
        setInstallmentResult(monthlyInstallment.toFixed(2));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
            {/* Main card container */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl">
                {/* Header section */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Car Installment Calculator</h1>
                    <p className="text-lg text-gray-600">คำนวณ Car Installment</p>
                </div>

                {/* Car image */}
                <div className="flex justify-center mb-6">
                    <Image src={car} alt='car' width={150} height={150} className='mx-auto' />
                </div>

                {/* Form elements container */}
                <div className="space-y-6">
                    {/* Input for name */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">ชื่อผู้คำนวณ</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            type="text"
                            placeholder="กรอกชื่อของคุณ"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                        />
                    </div>

                    {/* Input for car price */}
                    <div className="flex flex-col">
                        <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-1">ราคารถ (บาท)</label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            id="price"
                            type="number"
                            placeholder="กรอกราคารถของคุณ"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                        />
                    </div>

                    {/* Input for interest rate */}
                    <div className="flex flex-col">
                        <label htmlFor="interest" className="text-sm font-medium text-gray-700 mb-1">ดอกเบี้ยต่อปี (%)</label>
                        <input
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            id="interest"
                            type="number"
                            placeholder="กรอกดอกเบี้ยต่อปีของคุณ"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                        />
                    </div>

                    {/* Radio buttons for down payment */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-2">เงินดาวน์ (%)</label>
                        <div className="flex flex-wrap gap-4">
                            {['15%', '20%', '25%', '30%', '35%'].map((percent) => (
                                <div key={percent} className="flex items-center">
                                    <input
                                        value={percent}
                                        onChange={(e) => setDownpayment(e.target.value)}
                                        id={`down-payment-${percent}`}
                                        name="down-payment"
                                        type="radio"
                                        checked={downpayment === percent}
                                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded"
                                    />
                                    <label htmlFor={`down-payment-${percent}`} className="ml-2 text-sm text-gray-700">
                                        {percent}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dropdown for installment months */}
                    <div className="flex flex-col">
                        <label htmlFor="months" className="text-sm font-medium text-gray-700 mb-1">จำนวนเดือนที่ผ่อน</label>
                        <select
                            value={months}
                            onChange={(e) => setMonths(e.target.value)}
                            id="months"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                        >
                            <option value="12">12 เดือน</option>
                            <option value="24">24 เดือน</option>
                            <option value="36">36 เดือน</option>
                            <option value="48">48 เดือน</option>
                            <option value="60">60 เดือน</option>
                            <option value="72">72 เดือน</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between gap-4 pt-4">
                        <button
                            type="button"
                            onClick={handleClickCalculate}
                            className="flex-1 px-6 py-3 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-md"
                        >
                            คำนวณ
                        </button>
                        <button
                            type="button"
                            className="flex-1 px-6 py-3 rounded-full font-bold text-indigo-600 bg-white border border-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-md"
                            onClick={handleClickReset}>
                            ล้างข้อมูล
                        </button>
                    </div>

                    {/* Result display */}
                    <div className="text-center pt-6">
                        <p className="text-2xl font-bold text-gray-800">
                            ผ่อนชำระต่อเดือน: <span className="text-indigo-600">{installmentResult}</span> บาท
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-6 space-y-4'>
                <Link href='/' className="w-full bg-gray-500 text-white font-semibold py-3 px-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300" >
                    กลับไปหน้าหลัก
                </Link>
            </div>

            {/* Footer text outside the card */}
            <div className="mt-6 text-sm text-gray-500">
                Developed by <span className="text-blue-500 font-medium">Thayakorn DekDev SAU Team</span>
            </div>
        </div>
    )}