const fs = require('fs');
const path = require('path');

// 1. Load base questions
const baseQuestions = require('./data/base_questions.json');
console.log(`Loaded ${baseQuestions.length} base questions.`);

// 2. Load all generators
const generatorFiles = [
  'cat1_t03_t04.js',
  'cat1_t05_t06.js',
  'cat1_t07_t08.js',
  'cat1_t09_t10.js',
  'cat2_t11_t12.js',
  'cat2_t13_t14.js',
  'cat2_t15_t16.js',
  'cat2_t17_t18.js',
  'cat3_t19_t20.js',
  'cat3_t21_t22.js',
  'cat3_t23_t24.js',
  'cat3_t25_t26.js',
  'cat3_t27_t28.js',
  'cat4_t29_t30.js',
  'cat4_t31_t32.js',
  'cat4_t33_t34.js',
  'cat4_t35_t36_t37.js',
  'cat5_t38_t39.js',
  'cat5_t40_t41.js',
  'cat5_t42_t43.js',
  'cat6_t44_t45.js',
  'cat6_t46_t47.js',
  'cat6_t48_t49_t50.js'
];

let generatedItems = [];
for (const file of generatorFiles) {
  const modPath = path.join(__dirname, 'generators', file);
  const mod = require(modPath);
  let items = [];
  if (typeof mod.generate === 'function') {
    items = mod.generate();
  } else {
    for (const fn of Object.values(mod)) {
      if (typeof fn === 'function') {
        items = items.concat(fn());
      }
    }
  }
  console.log(`Loaded ${file}: ${items.length} items`);
  generatedItems = generatedItems.concat(items);
}

console.log(`Total generated items: ${generatedItems.length}`);

// Merge base questions and generated items
const allQuestions = [...baseQuestions, ...generatedItems];

// Sort questions by topic and id (e.g. topic01_01 ... topic50_50)
allQuestions.sort((a, b) => {
  const getNum = (id) => {
    const parts = id.match(/topic(\d+)_(\d+)/);
    if (!parts) return 0;
    return parseInt(parts[1], 10) * 1000 + parseInt(parts[2], 10);
  };
  return getNum(a.id) - getNum(b.id);
});

console.log(`Total combined questions: ${allQuestions.length}`);

// Validation checks
const idSet = new Set();
const topicCounts = {};
const duplicates = [];

for (const q of allQuestions) {
  if (idSet.has(q.id)) {
    duplicates.push(q.id);
  }
  idSet.add(q.id);

  topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;

  // Basic sanity
  if (!q.vietnamese || !q.standardEnglish || !Array.isArray(q.acceptedAnswers) || q.acceptedAnswers.length === 0) {
    console.error(`Invalid item:`, q);
    process.exit(1);
  }
}

if (duplicates.length > 0) {
  console.error(`Duplicate IDs found:`, duplicates);
  process.exit(1);
}

const topics = Object.keys(topicCounts);
console.log(`Total distinct topics: ${topics.length}`);

let all50 = true;
for (const [topic, count] of Object.entries(topicCounts)) {
  if (count !== 50) {
    console.error(`Topic "${topic}" has ${count} items instead of 50!`);
    all50 = false;
  }
}

if (all50 && allQuestions.length === 2500 && topics.length === 50) {
  console.log(`SUCCESS! Exactly 2,500 questions across 50 topics verified!`);
  // Save full dataset to data/full_dataset.json
  fs.writeFileSync('./data/full_dataset.json', JSON.stringify(allQuestions, null, 2), 'utf-8');
  console.log(`Saved to ./data/full_dataset.json`);
} else {
  console.error(`Validation failed!`);
  process.exit(1);
}
