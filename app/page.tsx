import Image from 'next/image';
import bmi from './images/bmi.png';
import bmr from './images/bmr.png';
import car from './images/car.png';
import logo from './images/logo.png';
import Link from 'next/link';
export default function Home() {
  return(
<div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4 font-inter">   
            <div className="container max-w-6xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <Image src={logo} alt='bmi' width={150} height={150} className='mx-auto'/>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    เครื่องคำนวณอัจฉริยะ
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    เลือกเครื่องมือที่คุณต้องการเพื่อเริ่มต้นการคำนวณ ไม่ว่าจะเป็นสุขภาพหรือการเงิน เรามีให้คุณครบครัน
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <Link href="/bmi" className="card block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col items-center">
                            <div className="bg-white-100 rounded-full p-4 mb-4">
                                <Image src={bmi} alt='bmi' width={150} height={150} className='mx-auto'/>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">คำนวณ BMI</h2>
                            <p className="text-gray-500 text-center">
                                คำนวณดัชนีมวลกายของคุณเพื่อประเมินสถานะสุขภาพโดยรวม
                            </p>
                        </div>
                    </Link>

                    <Link href="/bmr" className="card block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col items-center">
                            <div className="bg-white-100 rounded-full p-4 mb-4">
                              <Image src={bmr} alt='bmi' width={150} height={150} className='mx-auto'/>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">คำนวณ BMR</h2>
                            <p className="text-gray-500 text-center">
                                คำนวณอัตราการเผาผลาญพลังงานขั้นพื้นฐาน เพื่อวางแผนการออกกำลังกายและโภชนาการ
                            </p>
                        </div>
                    </Link>

                    <Link href="/carinstallment" className="card block p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col items-center">
                            <div className="bg-white-100 rounded-full p-4 mb-4">
                              <Image src={car} alt='bmi' width={150} height={150} className='mx-auto'/>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">คำนวณค่างวดรถ</h2>
                            <p className="text-gray-500 text-center">
                                ประเมินค่าใช้จ่ายและวางแผนการผ่อนชำระค่างวดรถยนต์ในแต่ละเดือน
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      
  )
}
