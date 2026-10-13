const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/main.css');
const css = fs.readFileSync(cssPath, 'utf8');

console.log("=== CHECKING CSS/MAIN.CSS FOR SELECT STYLES ===");

// 1. Verify no shorthand background on .modal-dialog .form-control
const modalFormControlMatch = css.match(/\.modal-dialog\s+\.form-control\s*\{([^}]+)\}/);
console.log(".modal-dialog .form-control:", modalFormControlMatch ? modalFormControlMatch[1].trim() : "NOT FOUND");
if (modalFormControlMatch && modalFormControlMatch[1].includes('background:')) {
  console.error("FAIL: .modal-dialog .form-control still contains 'background:' shorthand!");
} else {
  console.log("PASS: .modal-dialog .form-control uses background-color.");
}

// 2. Verify select.form-control properties
const selectMatch = css.match(/select\.form-control\s*\{([^}]+)\}/);
console.log("select.form-control:", selectMatch ? selectMatch[1].trim() : "NOT FOUND");
if (selectMatch) {
  const content = selectMatch[1];
  console.log("- background-repeat: no-repeat:", content.includes('background-repeat: no-repeat !important'));
  console.log("- background-position: right 1rem center:", content.includes('background-position: right 1rem center !important'));
  console.log("- background-size: 16px 16px:", content.includes('background-size: 16px 16px !important'));
  console.log("- appearance: none:", content.includes('appearance: none !important'));
  console.log("- padding-inline-end / right:", content.includes('2.75rem'));
}

// 3. Verify dark mode select
const darkSelectMatch = css.match(/\[data-theme="dark"\]\s+select\.form-control\s*\{([^}]+)\}/);
console.log("[data-theme=\"dark\"] select.form-control:", darkSelectMatch ? darkSelectMatch[1].trim() : "NOT FOUND");
if (darkSelectMatch) {
  const content = darkSelectMatch[1];
  console.log("- dark background-repeat: no-repeat:", content.includes('background-repeat: no-repeat !important'));
  console.log("- dark background-position: right 1rem center:", content.includes('background-position: right 1rem center !important'));
  console.log("- dark background-size: 16px 16px:", content.includes('background-size: 16px 16px !important'));
}

// 4. Verify RTL select
const rtlSelectMatch = css.match(/\[dir="rtl"\]\s+select\.form-control\s*\{([^}]+)\}/);
console.log("[dir=\"rtl\"] select.form-control:", rtlSelectMatch ? rtlSelectMatch[1].trim() : "NOT FOUND");

console.log("=== ALL SELECT CHECKS COMPLETED ===");
