'use client'

import React, { useState } from 'react'
import SeatSelection from './SeatSelection'
import './SeatSelection.css' 

export default function Step4Page() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/beach-background.jpg')" }}

    >
      <div className="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-blue-800 text-center">
          ขั้นตอนที่ 4: เลือกที่นั่ง
        </h1>
        <SeatSelection
          selectedSeats={selectedSeats}
          onChange={setSelectedSeats}
        />
      </div>
    </div>
  )
}
