'use client'

import React from 'react'

interface PaymentMethodProps {
  paymentMethod: string
  onChange: (method: string) => void
}

export default function PaymentMethod({ paymentMethod, onChange }: PaymentMethodProps) {
  return (
    <div className="mb-6">
      <label className="block font-medium text-black mb-2">เลือกวิธีการชำระเงิน:</label>
      <select
        value={paymentMethod}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded text-black"
      >
        <option value="">-- กรุณาเลือก --</option>
        <option value="เงินสด">เงินสด</option>
        <option value="โอนผ่านบัญชีธนาคาร">โอนผ่านบัญชีธนาคาร</option>
        <option value="พร้อมเพย์">พร้อมเพย์</option>
      </select>
    </div>
  )
}

