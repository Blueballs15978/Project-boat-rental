"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import "./Step3.css";

export default function Step3() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const name = searchParams.get("name") || "";
  const phone = searchParams.get("phone") || "";
  const email = searchParams.get("email") || "";
  const service = searchParams.get("service") || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/booking/confirmation?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(
        phone
      )}&email=${encodeURIComponent(email)}&service=${service}&bookingDate=${date}&time=${time}`
    );
  };

  return (
    <div className="step3-container">
      <form onSubmit={handleSubmit} className="step3-form">
        <h2 className="step3-title">Step 3: เลือกวันและเวลา</h2>
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="step3-input"
        />
        <input
          type="time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="step3-input"
        />
        <button type="submit" className="step3-button">
          ยืนยัน
        </button>
      </form>
    </div>
  );
}
