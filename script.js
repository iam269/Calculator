function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Eroare';
  }
}

function sqrtValue() {
  const display = document.getElementById('display');
  let value = display.value;
  if (value !== '') {
    try {
      let num = eval(value);
      if (typeof num === 'number' && !isNaN(num)) {
        let result = Math.sqrt(num);
        display.value = isNaN(result) ? 'Eroare' : result;
      } else {
        display.value = 'Eroare';
      }
    } catch {
      display.value = 'Eroare';
    }
  }
}
