document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("csvFile");
  const feedback = document.getElementById("feedback");
  const resultDiv = document.getElementById("result");

  fileInput.addEventListener("change", handleFile);

  function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    feedback.innerText = "Processing...";
    resultDiv.innerHTML = "";

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => processData(results.data),
      error: () => feedback.innerText = "Error parsing the CSV file."
    });
  }

  function convertScoreToPoint(score) {
    score = parseFloat(score);
    if (score >= 70) return 5;
    if (score >= 60) return 4;
    if (score >= 50) return 3;
    if (score >= 45) return 2;
    if (score >= 40) return 1;
    return 0;
  }

  function processData(rows) {
    const students = [];

    rows.forEach(row => {
      const studentId = row["StudentID"]?.trim();
      const name = row["Name"]?.trim();

      let totalUnits = 0;
      let totalPoints = 0;

      for (let i = 1; i <= 10; i++) {
        const gradeKey = `Grade${i}`;
        const unitKey = `Unit${i}`;

        const grade = row[gradeKey];
        const unit = row[unitKey];

        if (!grade || !unit) continue;

        const point = convertScoreToPoint(grade);
        const creditUnit = parseFloat(unit);

        if (!isNaN(point) && !isNaN(creditUnit)) {
          totalPoints += point * creditUnit;
          totalUnits += creditUnit;
        }
      }

      const cgpa = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : "0.00";

      if (studentId && name) {
        students.push({
          studentId,
          name,
          totalUnits,
          totalPoints: totalPoints.toFixed(2),
          cgpa
        });
      }
    });

    if (students.length === 0) {
      feedback.innerText = "No valid student data found. Check your CSV format.";
      return;
    }

    feedback.innerText = "Done!";
    displayTable(students);
  }

  function displayTable(data) {
    let html = `
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">
        <thead style="background: #f2f2f2;">
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Total Units</th>
            <th>Total Points</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
    `;

    data.forEach(student => {
      html += `
        <tr>
          <td>${student.studentId}</td>
          <td>${student.name}</td>
          <td>${student.totalUnits}</td>
          <td>${student.totalPoints}</td>
          <td class="red"><strong>${student.cgpa}</strong></td>
        </tr>
      `;
    });

    html += "</tbody></table>";
    resultDiv.innerHTML = html;
  }
});