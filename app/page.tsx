import "./Home.css"; 

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <h1 className="home-title">🚤 Boat Booking App</h1>
        <p className="home-subtitle">จองเรือท่องเที่ยวง่าย ๆ ภายในไม่กี่คลิก</p>
        <a href="/booking" className="home-button">
          เริ่มจองเรือเลย
        </a>
      </div>
    </main>
  );
}
