(function () {
  const byDate = new Map(DEVOTIONS.map((entry) => [entry.date, entry]));
  const picker = document.getElementById('dayPicker');
  const todayBtn = document.getElementById('todayBtn');

  const dateTitle = document.getElementById('dateTitle');
  const scriptureRef = document.getElementById('scriptureRef');
  const scriptureText = document.getElementById('scriptureText');
  const quoteText = document.getElementById('quoteText');
  const quoteSource = document.getElementById('quoteSource');

  function formatDate(value) {
    const dt = new Date(`${value}T00:00:00`);
    return dt.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function render(value) {
    const entry = byDate.get(value);
    if (!entry) {
      dateTitle.textContent = 'No devotion found for this date.';
      scriptureRef.textContent = '';
      scriptureText.textContent = '';
      quoteText.textContent = '';
      quoteSource.textContent = '';
      return;
    }

    dateTitle.textContent = formatDate(entry.date);
    scriptureRef.textContent = entry.scriptureRef;
    scriptureText.textContent = entry.scriptureText;
    quoteText.textContent = `“${entry.quoteText}”`;
    quoteSource.textContent = entry.quoteSource;
  }

  function setToday() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const date = `${yyyy}-${mm}-${dd}`;
    picker.value = byDate.has(date) ? date : DEVOTIONS[0].date;
    render(picker.value);
  }

  picker.min = DEVOTIONS[0].date;
  picker.max = DEVOTIONS[DEVOTIONS.length - 1].date;
  picker.addEventListener('change', () => render(picker.value));
  todayBtn.addEventListener('click', setToday);

  setToday();
})();
