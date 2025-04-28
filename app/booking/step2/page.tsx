"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import "./Step2.css";

export default function Step2() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/booking/step3?service=${service}&name=${encodeURIComponent(
        name
      )}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}`
    );
  };

  return (
    <div className="step2-container">
      <form onSubmit={handleSubmit} className="step2-form">
        <h2 className="step2-title">Step 2: ข้อมูลผู้จอง</h2>
        <input
          type="text"
          placeholder="ชื่อ"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="step2-input"
        />
        <input
          type="email"
          placeholder="อีเมล"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="step2-input"
        />
        <input
          type="tel"
          placeholder="เบอร์โทรศัพท์"
          required
          pattern="[0-9]{9,15}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="step2-input"
        />
        <button type="submit" className="step2-button">
          ถัดไป
        </button>
      </form>
    </div>
  );
}
