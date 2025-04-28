'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import PaymentMethod from './PaymentMethod'

export default function Confirmation() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [isConfirmed, setIsConfirmed] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    bookingDate: '',
    time: '',
    service: '',
  });
  
  useEffect(() => {
    const name = searchParams.get('name') || '';
    const email = searchParams.get('email') || '';
    const phone = searchParams.get('phone') || '';
    const bookingDate = searchParams.get('bookingDate') || '';
    const time = searchParams.get('time') || '';
    const service = searchParams.get('service') || '';
    setCustomerInfo({ name, email, phone, bookingDate, time, service });
  }, [searchParams]);
  
  const handleConfirm = async () => {
    if (!paymentMethod) {
      alert('กรุณาเลือกวิธีการชำระเงินก่อนยืนยันการจอง');
      return;
    }
  
    const confirmed = window.confirm('คุณแน่ใจหรือไม่ว่าต้องการยืนยันการจองนี้?');
    if (confirmed) {
      setIsConfirmed(true);
  
      // Send data to Google Sheets via SheetDB
      try {
        const response = await fetch('https://sheetdb.io/api/v1/w8m03rkjdhd3k', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              name: customerInfo.name,
              email: customerInfo.email,
              phone: customerInfo.phone,
              bookingDate: customerInfo.bookingDate,
              time: customerInfo.time,
              service: customerInfo.service,
              paymentMethod: paymentMethod,
              createdAt: new Date().toLocaleString('th-TH')
            }
          }),
        });
  
        if (response.ok) {
          console.log('บันทึกข้อมูลลง Google Sheets เรียบร้อยแล้ว!');
        } else {
          console.error('เกิดข้อผิดพลาดตอนส่งข้อมูล');
        }
      } catch (error) {
        console.error('จับข้อผิดพลาด:', error);
      }
    }
  }
  
  

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-teal-500 to-blue-800 flex items-center justify-center p-6">
      <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 print:shadow-none print:p-0">
        {!isConfirmed ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">📋 ตรวจสอบข้อมูลการจอง</h1>
            <div className="mb-6 space-y-3 text-gray-700 text-lg leading-relaxed">
              <p><strong>👤 ชื่อ:</strong> {customerInfo.name}</p>
              <p><strong>📧 อีเมล:</strong> {customerInfo.email}</p>
              <p><strong>📞 เบอร์โทร:</strong> {customerInfo.phone}</p>
              <p><strong>📅 วันที่จอง:</strong> {customerInfo.bookingDate}</p>
              <p><strong>⏰ เวลา:</strong> {customerInfo.time}</p>
              <p><strong>🛥️ บริการ:</strong> {customerInfo.service}</p>
            </div>

            <PaymentMethod
              paymentMethod={paymentMethod}
              onChange={setPaymentMethod}
            />

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition shadow"
              >
                ✅ ยืนยันการจอง
              </button>
              <button
                onClick={() => router.push('/')}
                className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-full transition shadow"
              >
                ⬅️ กลับหน้าหลัก
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4 text-green-600 text-center">✅ ยืนยันการจองสำเร็จ!</h1>
            <p className="mb-6 text-center text-lg text-gray-700">ขอบคุณที่ใช้บริการของเรา 🎉</p>

            <div className="bg-white border border-dashed border-blue-300 rounded-xl p-6 shadow-md mb-6 print:border-none print:shadow-none">
              <h2 className="text-xl font-semibold mb-4 text-blue-800 text-center">🧾 ใบเสร็จรับเงิน</h2>
              <div className="text-gray-700 space-y-2 text-base">
                <p><strong>👤 ชื่อผู้จอง:</strong> {customerInfo.name}</p>
                <p><strong>📞 เบอร์โทร:</strong> {customerInfo.phone}</p>
                <p><strong>📧 อีเมล:</strong> {customerInfo.email}</p>
                <p><strong>🛥️ บริการ:</strong> {customerInfo.service}</p>
                <p><strong>📅 วันเวลา:</strong> {customerInfo.bookingDate} เวลา {customerInfo.time}</p>
                <p><strong>💳 วิธีการชำระเงิน:</strong> {paymentMethod}</p>
                <p><strong>🧾 เลขที่ใบเสร็จ:</strong> #{Math.floor(Math.random() * 100000)}</p>
                <p><strong>🗓️ วันที่ออกใบเสร็จ:</strong> {new Date().toLocaleDateString('th-TH')}</p>
              </div>
            </div>

            <div className="flex justify-center space-x-4 print:hidden">
              <button
                onClick={handlePrint}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition shadow"
              >
                🖨️ พิมพ์ใบเสร็จ
              </button>
              <button
                onClick={() => router.push('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition shadow"
              >
                ⬅️ กลับหน้าหลัก
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
