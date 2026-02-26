const scriptures = [
  { ref: "Psalm 119:105", text: "Thy word is a lamp unto my feet, and a light unto my path." },
  { ref: "Proverbs 3:5", text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding." },
  { ref: "Joshua 1:9", text: "Be strong and of a good courage; be not afraid, neither be thou dismayed." },
  { ref: "Isaiah 41:10", text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God." },
  { ref: "Matthew 5:16", text: "Let your light so shine before men, that they may see your good works." },
  { ref: "Matthew 6:33", text: "Seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you." },
  { ref: "John 8:12", text: "I am the light of the world: he that followeth me shall not walk in darkness." },
  { ref: "John 14:6", text: "Jesus saith unto him, I am the way, the truth, and the life." },
  { ref: "Romans 8:28", text: "We know that all things work together for good to them that love God." },
  { ref: "Romans 12:2", text: "Be not conformed to this world: but be ye transformed by the renewing of your mind." },
  { ref: "1 Corinthians 13:13", text: "And now abideth faith, hope, charity, these three; but the greatest of these is charity." },
  { ref: "2 Corinthians 5:7", text: "For we walk by faith, not by sight." },
  { ref: "Galatians 5:22", text: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith." },
  { ref: "Ephesians 6:11", text: "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil." },
  { ref: "Philippians 4:6", text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." },
  { ref: "Philippians 4:13", text: "I can do all things through Christ which strengtheneth me." },
  { ref: "Colossians 3:23", text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men." },
  { ref: "1 Thessalonians 5:17", text: "Pray without ceasing." },
  { ref: "2 Timothy 1:7", text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." },
  { ref: "Hebrews 11:1", text: "Now faith is the substance of things hoped for, the evidence of things not seen." },
  { ref: "James 1:5", text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally." },
  { ref: "1 Peter 5:7", text: "Casting all your care upon him; for he careth for you." },
  { ref: "1 John 4:19", text: "We love him, because he first loved us." },
  { ref: "Revelation 3:20", text: "Behold, I stand at the door, and knock." }
];

const branhamQuotes = [
  { sermon: "Faith Is The Substance", date: "47-0412", text: "When God makes a promise, the believer does not wait for feeling, climate, or circumstance to agree. He takes the Word as settled truth, walks in that truth, and lets life line up behind obedience. Faith does not deny trouble; faith declares that God is greater than trouble. The Christian home is strengthened when father, mother, and children speak the promise at the table, in prayer, and in daily labor until confidence in Christ becomes the atmosphere of the house." },
  { sermon: "Perfect Faith", date: "63-0825E", text: "Perfect faith is not noise; it is rest. It is the heart anchored in God until fear loses its voice. You may pass through trial, but you know the One who promised. If He said it, He is able to perform it. In the family circle, faith is practiced in small things—kindness, forgiveness, prayer, and patience—until the home reflects the character of Jesus Christ and every member learns to trust Him personally." },
  { sermon: "God Keeps His Word", date: "57-0306", text: "The Bible is not a history book only; it is the living covenant for this hour. Every promise belongs to every believer who receives it by faith. God cannot fail His own Word. When uncertainty comes, return to Scripture, bow the head, and confess what God has said. In that posture, peace comes. Homes that build on the Word find strength for decisions, healing for hurts, and courage for tomorrow." },
  { sermon: "The Token", date: "63-0901M", text: "The Token must be applied, not admired. The life of Christ shown in daily conduct is the evidence that redemption is real in us. The family altar is where children see that Christianity is more than church attendance: it is prayer, repentance, mercy, and obedience in ordinary hours. Apply what Christ purchased. Let His life be seen in speech, in discipline, in love, and in the way burdens are carried together." },
  { sermon: "Leadership", date: "65-1207", text: "Everyone is led by something. The question is not whether we are following, but whom we follow. The Spirit of God leads into truth, humility, and service. A home guided by the Spirit becomes a school of Christ where each person learns to listen before speaking, forgive before bitterness grows, and seek God before making plans. True leadership in the home begins on the knees and continues in daily example." },
  { sermon: "The Greatest Battle Ever Fought", date: "62-0311", text: "The battle begins in the mind. If the enemy can hold a thought against the promise, he can disturb the whole life. But when the believer answers with the Word, darkness retreats. In family devotion, Scripture is not decoration; it is a weapon and a shield. Train children to answer fear with truth, temptation with prayer, and confusion with the promises of God. Victory starts where the Word is believed." },
  { sermon: "Christ Is The Mystery Of God Revealed", date: "63-0728", text: "God was expressed in Christ, and Christ is to be expressed in His people. That means the life of Jesus is to be visible in practical love, holiness, and faithfulness. The Christian family is one place where this mystery becomes visible every day: in how husband and wife honor one another, how children are taught, and how grace is shown after mistakes. Doctrine must become life, and life must point to Christ." },
  { sermon: "Hear Ye Him", date: "60-0806", text: "Many voices call for attention, but God says, 'Hear ye Him.' The voice of Christ in Scripture brings order to troubled hearts. When families pause to read one verse and pray sincerely, they open room for divine guidance. God still speaks peace to the anxious and direction to the uncertain. Make space for His voice daily, and the home will discover wisdom for work, school, finances, and relationships." },
  { sermon: "The Unfailing Realities Of The Living God", date: "60-0626", text: "The living God is not theory; He is present help. His realities do not fail when emotions rise and fall. We can trust Him in scarcity, in sickness, and in unanswered questions. Family devotion reminds us that God remains God in every season. Read the Scripture, confess the promise, and thank Him before seeing the answer. Gratitude in advance is a quiet testimony that faith is alive and expectation is fixed on Him." },
  { sermon: "Expectation", date: "50-0810", text: "Expectation is the atmosphere where faith grows. If we come to God with indifference, we miss what He is ready to do. But when heart and mouth agree with His Word, we receive with gratitude. At home, cultivate expectation around prayer. Teach children to believe that God hears. Record answered prayers and revisit them in difficult days. Testimonies remembered become fuel for fresh confidence in the Lord." }
];

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
}

function buildDevotion(date) {
  const n = dayOfYear(date);
  const s = scriptures[(n * 7) % scriptures.length];
  const q = branhamQuotes[(n * 11) % branhamQuotes.length];
  return {
    scripture: s,
    quote: {
      text: q.text,
      ref: `${q.sermon} (${q.date}) · Day ${n}`
    }
  };
}

function renderYearOptions() {
  const select = document.getElementById('yearSelect');
  const current = new Date().getFullYear();
  for (let y = current - 1; y <= current + 3; y += 1) {
    const option = document.createElement('option');
    option.value = String(y);
    option.textContent = String(y);
    if (y === current) option.selected = true;
    select.appendChild(option);
  }
}

function daysInYear(year) {
  const start = new Date(year, 0, 1);
  const end = new Date(year + 1, 0, 1);
  return Math.round((end - start) / 86400000);
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

function selectDay(button, date) {
  document.querySelectorAll('.day.active').forEach((d) => d.classList.remove('active'));
  button.classList.add('active');

  const devotion = buildDevotion(date);
  document.getElementById('devotionDate').textContent = formatDate(date);
  document.getElementById('scriptureText').textContent = devotion.scripture.text;
  document.getElementById('scriptureRef').textContent = devotion.scripture.ref;
  document.getElementById('quoteText').textContent = devotion.quote.text;
  document.getElementById('quoteRef').textContent = devotion.quote.ref;
}

function renderCalendar(year) {
  const grid = document.getElementById('calendarGrid');
  grid.innerHTML = '';

  const total = daysInYear(year);
  for (let i = 1; i <= total; i += 1) {
    const date = new Date(year, 0, i);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'day';
    btn.textContent = String(i);
    btn.title = formatDate(date);
    btn.addEventListener('click', () => selectDay(btn, date));
    grid.appendChild(btn);
  }
}

function goToToday() {
  const today = new Date();
  const yearSelect = document.getElementById('yearSelect');
  yearSelect.value = String(today.getFullYear());
  renderCalendar(today.getFullYear());
  const index = dayOfYear(today) - 1;
  const btn = document.querySelectorAll('.day')[index];
  if (btn) {
    btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    selectDay(btn, today);
  }
}

renderYearOptions();
const currentYear = Number(document.getElementById('yearSelect').value);
renderCalendar(currentYear);

document.getElementById('yearSelect').addEventListener('change', (e) => {
  renderCalendar(Number(e.target.value));
  document.getElementById('devotionDate').textContent = 'Select a day';
  document.getElementById('scriptureText').textContent = 'Choose a date from the calendar to view the daily scripture.';
  document.getElementById('scriptureRef').textContent = '';
  document.getElementById('quoteText').textContent = 'Daily quote will appear here.';
  document.getElementById('quoteRef').textContent = '';
});

document.getElementById('todayBtn').addEventListener('click', goToToday);
goToToday();
