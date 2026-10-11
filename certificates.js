// ============================================================
//   CERTIFICATE & MARKSHEET DATABASE — Computer Saksharata Mission, Hirakud
//   ============================================
//   HOW TO ADD A NEW STUDENT:
//
//   1. Copy the full "EXAMPLE" block below
//   2. Paste it on a NEW line above the closing };
//   3. Change ALL the details: number, name, course, marks...
//   4. Click "Commit changes" — done! Website updates in 1 minute.
//
//   ⚠️ RULES (important):
//   - Keep the "quotes" and { } brackets exactly like the examples
//   - Every record must end with a comma ,
//   - Certificate numbers must be unique
//   - Avoid using " inside names (apostrophe ' is fine)
//   - Marks are OPTIONAL — if you skip "marks", only the certificate works
//
//   📌 GRADE GUIDE: 90+ = A+ · 80-89 = A · 70-79 = B+ · 60-69 = B · 50-59 = C · below 50 = F
// ============================================================

// ====== EXAMPLE (copy this whole block for a new student) ======
//  "CSM/2026/010": {
//    name: "Student Name",
//    course: "DCA — Diploma in Computer Applications",
//    duration: "12 Months",
//    issue: "April 2026",
//    result: "Passed — Distinction",
//    marks: [
//      { subject: "Computer Fundamentals", max: 100, obtained: 88 },
//      { subject: "MS Office & Windows", max: 100, obtained: 92 }
//    ]
//  },
// ====== END OF EXAMPLE ======

const CERTIFICATES = {
  "CSM/2024/001": {
    name: "Rahul Verma",
    course: "DCA — Diploma in Computer Applications",
    duration: "12 Months",
    issue: "June 2024",
    result: "Passed — Distinction",
    marks: [
      { subject: "Computer Fundamentals & OS", max: 100, obtained: 88 },
      { subject: "MS Office & Advanced Excel", max: 100, obtained: 92 },
      { subject: "Internet & E-Governance", max: 100, obtained: 85 },
      { subject: "Database & Project Work", max: 100, obtained: 90 }
    ]
  },
  "CSM/2024/002": {
    name: "Sneha Sahoo",
    course: "Tally Prime with GST",
    duration: "3 Months",
    issue: "September 2024",
    result: "Passed — First Class",
    marks: [
      { subject: "Tally Prime Basics", max: 100, obtained: 82 },
      { subject: "GST Billing & Returns", max: 100, obtained: 78 },
      { subject: "Inventory & Payroll", max: 100, obtained: 80 },
      { subject: "Accounts Practical", max: 100, obtained: 84 }
    ]
  },
  "CSM/2025/001": {
    name: "Amit Patel",
    course: "ADCA — Advanced Diploma in Computer Applications",
    duration: "12 Months",
    issue: "March 2025",
    result: "Passed — Distinction",
    marks: [
      { subject: "Advanced MS Office", max: 100, obtained: 90 },
      { subject: "Programming (C, C++, Python)", max: 100, obtained: 86 },
      { subject: "Web Designing Basics", max: 100, obtained: 88 },
      { subject: "Tally Accounting", max: 100, obtained: 84 },
      { subject: "Major Project & Seminar", max: 100, obtained: 92 }
    ]
  }
};
