async function analyze() {
  const input = document.getElementById("input").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "جاري التحليل ...";

  try {
   const response = await fetch("https://heartbridge-api-backend-3.onrender.com/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })  // ✅ تم تصحيح المفتاح
    });

    const data = await response.json();
    resultDiv.innerHTML = data.analysis || "❌ لم يتم الحصول على تحليل.";
  } catch (error) {
    resultDiv.innerHTML = "❌ حدث خطأ أثناء الاتصال بـ API.";
  }
}
