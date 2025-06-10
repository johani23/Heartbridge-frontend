
async function analyze() {
  const input = document.getElementById("input").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "جاري التحليل...";

  try {
    const response = await fetch("https://heartbridge-api-backend.onrender.com/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: input })
    });

    const data = await response.json();
    resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    resultDiv.innerHTML = "حدث خطأ أثناء الاتصال بالـ API.";
  }
}
