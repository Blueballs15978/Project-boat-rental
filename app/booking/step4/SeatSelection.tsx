'use client'

import React from 'react'
import './SeatSelection.css' // <-- Import ไฟล์ CSS

interface SeatSelectionProps {
  selectedSeats: string[]
  onChange: (seats: string[]) => void
}

const seatLayout = [
  ['A1', 'A2', '', 'A3', 'A4'],
  ['B1', 'B2', '', 'B3', 'B4'],
  ['C1', 'C2', '', 'C3', 'C4'],
]

export default function SeatSelection({ selectedSeats, onChange }: SeatSelectionProps) {
  const handleSelect = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      onChange(selectedSeats.filter((s) => s !== seat))
    } else {
      onChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="seat-container">
      <h2 className="seat-heading">🐬 เลือกที่นั่งของคุณ 🏖️</h2>
      <div className="space-y-2">
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-grid">
            {row.map((seat, index) =>
              seat === '' ? (
                <div key={index} style={{ width: '3rem', height: '3rem' }} />
              ) : (
                <button
                  key={seat}
                  onClick={() => handleSelect(seat)}
                  className={`seat-button ${
                    selectedSeats.includes(seat) ? 'selected' : ''
                  }`}
                >
                  {seat}
                </button>
              )
            )}
          </div>
        ))}
      </div>

      <div className="seat-info">
        <strong>ที่นั่งที่เลือก:</strong>{' '}
        {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'ยังไม่เลือก'}
      </div>
    </div>
  )
}
