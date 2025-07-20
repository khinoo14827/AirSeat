// จำลองค่าคาร์บอนสุ่ม (ไว้ใช้แทนค่าจริงจาก ESP32 ชั่วคราว)
function updateCO2() {
  const co2 = Math.floor(Math.random() * 1000) + 400;
  document.getElementById("co2-value").textContent = co2 + " ppm";
}

// เรียกทุก 2 วินาที
setInterval(updateCO2, 2000);
