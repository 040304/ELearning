const fs = require('fs');

console.log('Reading index.html...');
const originalHtml = fs.readFileSync('index.html', 'utf-8');

// Backup original
fs.writeFileSync('index.html.bak', originalHtml, 'utf-8');
console.log('Backed up original index.html to index.html.bak');

// Load full dataset
const fullDataset = require('./data/full_dataset.json');
console.log(`Loaded ${fullDataset.length} questions from full_dataset.json.`);

// Format MOCK_DATA as JavaScript array string
const mockDataString = 'const MOCK_DATA = ' + JSON.stringify(fullDataset, null, 2) + ';';

// Find start and end of MOCK_DATA in originalHtml
const startIndex = originalHtml.indexOf('const MOCK_DATA = [');
if (startIndex === -1) {
  console.error('Could not find const MOCK_DATA = [');
  process.exit(1);
}

// Find the closing ]; of MOCK_DATA
const searchFrom = startIndex + 'const MOCK_DATA = ['.length;
const endMarker = '];\n\n    /**\n     * WEB AUDIO API SYNTHESIZER';
let endIndex = originalHtml.indexOf(endMarker, searchFrom);

if (endIndex === -1) {
  // Try CRLF
  const endMarkerCRLF = '];\r\n\r\n    /**\r\n     * WEB AUDIO API SYNTHESIZER';
  endIndex = originalHtml.indexOf(endMarkerCRLF, searchFrom);
}

if (endIndex === -1) {
  // Try regex
  const regex = /\];\s*\/\*\*\s*\* WEB AUDIO API SYNTHESIZER/;
  const match = regex.exec(originalHtml.slice(searchFrom));
  if (match) {
    endIndex = searchFrom + match.index;
  }
}

if (endIndex === -1) {
  console.error('Could not find end of MOCK_DATA');
  process.exit(1);
}

console.log(`Found MOCK_DATA from index ${startIndex} to ${endIndex}`);

// Replace MOCK_DATA
let updatedHtml = originalHtml.slice(0, startIndex) + mockDataString + originalHtml.slice(endIndex + 2); // +2 for ];

// Now add the Shuffle button in card-top-bar
const shuffleBtnHtml = `          <button class="btn-subtle" id="btn-shuffle-topic" title="Trộn ngẫu nhiên các câu hỏi trong chủ đề">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 3 21 3 21 8"></polyline>
              <line x1="4" y1="20" x2="21" y2="3"></line>
              <polyline points="21 16 21 21 16 21"></polyline>
              <line x1="15" y1="15" x2="21" y2="21"></line>
              <line x1="4" y1="4" x2="9" y2="9"></line>
            </svg>
            <span>Trộn câu</span>
          </button>
          <button class="btn-subtle" id="btn-prev-q"`;

if (updatedHtml.includes('<button class="btn-subtle" id="btn-prev-q"')) {
  updatedHtml = updatedHtml.replace('<button class="btn-subtle" id="btn-prev-q"', shuffleBtnHtml);
  console.log('Added Shuffle button to HTML.');
} else {
  console.warn('Could not find btn-prev-q in HTML!');
}

// Add btnShuffleTopic to this.dom
const domTarget = `btnPrevQ: document.getElementById('btn-prev-q'),`;
const domReplacement = `btnShuffleTopic: document.getElementById('btn-shuffle-topic'),\n          btnPrevQ: document.getElementById('btn-prev-q'),`;

if (updatedHtml.includes(domTarget)) {
  updatedHtml = updatedHtml.replace(domTarget, domReplacement);
  console.log('Added btnShuffleTopic to this.dom.');
} else {
  console.warn('Could not find btnPrevQ in this.dom!');
}

// Add event listener for btnShuffleTopic
const listenerTarget = `this.dom.btnPrevQ.addEventListener('click', () => {`;
const listenerAddition = `if (this.dom.btnShuffleTopic) {
          this.dom.btnShuffleTopic.addEventListener('click', () => {
            this.shuffleTopicQuestions();
          });
        }

        this.dom.btnPrevQ.addEventListener('click', () => {`;

if (updatedHtml.includes(listenerTarget)) {
  updatedHtml = updatedHtml.replace(listenerTarget, listenerAddition);
  console.log('Added event listener for btnShuffleTopic.');
} else {
  console.warn('Could not find btnPrevQ event listener!');
}

// Add shuffleTopicQuestions method
const methodTarget = `getCurrentQuestion() {`;
const methodAddition = `shuffleTopicQuestions() {
        if (!this.currentQuestions || this.currentQuestions.length === 0) return;
        // Fisher-Yates shuffle
        for (let i = this.currentQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = this.currentQuestions[i];
          this.currentQuestions[i] = this.currentQuestions[j];
          this.currentQuestions[j] = temp;
        }
        this.currentIndex = 0;
        this.saveCurrentTopicIndex(0);
        this.renderQuestion();
        showToast("Đã trộn ngẫu nhiên 50 câu hỏi trong chủ đề!");
      }

      getCurrentQuestion() {`;

if (updatedHtml.includes(methodTarget)) {
  updatedHtml = updatedHtml.replace(methodTarget, methodAddition);
  console.log('Added shuffleTopicQuestions method.');
} else {
  console.warn('Could not find getCurrentQuestion method!');
}

// Write back to index.html
fs.writeFileSync('index.html', updatedHtml, 'utf-8');
console.log('Successfully updated index.html!');
