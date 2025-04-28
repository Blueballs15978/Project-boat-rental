"use client";

import { useRouter } from "next/navigation";
import "./Step1.css"; 

export default function Step1() {
  const router = useRouter();

  const handleBoatSelection = (boatName: string) => {
    router.push(`/booking/step2?service=${encodeURIComponent(boatName)}`);
  };

  return (
    <div className="step1-container">
      <div className="step1-content">
        <h2 className="step1-title">Step 1: เลือกเรือ</h2>
        <ul className="step1-list">

          <li className="boat-item speedboat">
            <button onClick={() => handleBoatSelection("เรือสปีดโบ๊ท")} className="step1-button">
              🚤 เรือสปีดโบ๊ท
            </button>
            <div className="tooltip">
              <img src="/images/speedboat.jpg" alt="เรือสปีดโบ๊ท" className="boat-image" />
              <p>เรือเร็วสำหรับการเดินทางที่ใช้เวลาไม่นาน</p>
              <p><strong>ความจุ:</strong> 6-8 คน</p>
              <p><strong>ราคา:</strong> 1,500 บาท/ชั่วโมง</p>
              <p><strong>Wi-Fi:</strong> ไม่มี</p>
              <p><strong>เหมาะกับ:</strong> นักเดินทาง, คู่รัก</p>
            </div>
          </li>

          <li className="boat-item sailboat">
            <button onClick={() => handleBoatSelection("เรือใบ")} className="step1-button">
              ⛵ เรือใบ
            </button>
            <div className="tooltip">
              <img src="/images/sailboat.jpg" alt="เรือใบ" className="boat-image" />
              <p>เรือที่ใช้ลมในการเคลื่อนที่ เหมาะสำหรับการพักผ่อน</p>
              <p><strong>ความจุ:</strong> 4-6 คน</p>
              <p><strong>ราคา:</strong> 1,200 บาท/ชั่วโมง</p>
              <p><strong>Wi-Fi:</strong> มี</p>
              <p><strong>เหมาะกับ:</strong> คู่รัก, ผู้ชอบธรรมชาติ</p>
            </div>
          </li>

          <li className="boat-item fishingboat">
            <button onClick={() => handleBoatSelection("เรือหาปลา")} className="step1-button">
              🛶 เรือหาปลา
            </button>
            <div className="tooltip">
              <img src="/images/fishingboat.webp" alt="เรือหาปลา" className="boat-image" />
              <p>เหมาะสำหรับการตกปลา มีพื้นที่ในการจัดเก็บ</p>
              <p><strong>ความจุ:</strong> 2-4 คน</p>
              <p><strong>ราคา:</strong> 900 บาท/ชั่วโมง</p>
              <p><strong>Wi-Fi:</strong> ไม่มี</p>
              <p><strong>เหมาะกับ:</strong> นักตกปลา, คนชอบความสงบ</p>
            </div>
          </li>

          <li className="boat-item yacht">
            <button onClick={() => handleBoatSelection("ยอชท์")} className="step1-button">
              🚢 ยอชท์
            </button>
            <div className="tooltip">
              <img src="/images/yacht.jpg" alt="ยอชท์" className="boat-image" />
              <p>เรือหรูหราเหมาะสำหรับการพักผ่อนหรือปาร์ตี้</p>
              <p><strong>ความจุ:</strong> 10-20 คน</p>
              <p><strong>ราคา:</strong> 4,000 บาท/ชั่วโมง</p>
              <p><strong>Wi-Fi:</strong> มี</p>
              <p><strong>เหมาะกับ:</strong> ครอบครัว, กลุ่มเพื่อน</p>
            </div>
          </li>

          <li className="boat-item kayak">
            <button onClick={() => handleBoatSelection("เรือคายัค")} className="step1-button">
              🛶 เรือคายัค
            </button>
            <div className="tooltip">
              <img src="/images/kayak.jpg" alt="เรือคายัค" className="boat-image" />
              <p>เรือเล็กที่เหมาะสำหรับการพายไปตามแม่น้ำหรือทะเล</p>
              <p><strong>ความจุ:</strong> 1-2 คน</p>
              <p><strong>ราคา:</strong> 500 บาท/ชั่วโมง</p>
              <p><strong>Wi-Fi:</strong> ไม่มี</p>
              <p><strong>เหมาะกับ:</strong> นักผจญภัย, คนรักธรรมชาติ</p>
            </div>
          </li>

          <li className="boat-item longtailboat">
            <button onClick={() => handleBoatSelection("เรือหางยาว")} className="step1-button">
              🚤 เรือหางยาว
            </button>
            <div className="tooltip">
              <img src="/images/longtailboat.jpeg" alt="เรือหางยาว" className="boat-image" />
              <p>เรือพื้นบ้านที่นิยมในไทย เหมาะกับการเดินทางใกล้ฝั่ง</p>
              <p><strong>ความจุ:</strong> 6-10 คน</p>
              <p><strong>ราคา:</strong> 800 บาท/ชั่วโมง</p>
              <p><strong>Wi-Fi:</strong> ไม่มี</p>
              <p><strong>เหมาะกับ:</strong> นักท่องเที่ยว, ครอบครัว</p>
            </div>
          </li>

          <li className="boat-item cruise">
            <button onClick={() => handleBoatSelection("เรือสำราญ")} className="step1-button">
              🚢 เรือสำราญ
            </button>
            <div className="tooltip">
              <img src="/images/cruise.avif" alt="เรือสำราญ" className="boat-image" />
              <p>เรือขนาดใหญ่สำหรับการท่องเที่ยวแบบหรูหรา</p>
              <p><strong>ความจุ:</strong> 100+ คน</p>
              <p><strong>ราคา:</strong> 10,000 บาท/ชั่วโมง</p>
              <p><strong>Wi-Fi:</strong> มี</p>
              <p><strong>เหมาะกับ:</strong> ทริปท่องเที่ยว, กรุ๊ปทัวร์</p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}






