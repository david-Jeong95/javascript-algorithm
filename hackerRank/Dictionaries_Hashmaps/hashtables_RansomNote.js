function checkMagazine(magazine, note) {
  // Write your code here
  const mMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (!mMap.has(magazine[i])) {
      mMap.set(magazine[i], 1);
    } else {
      mMap.set(magazine[i], mMap.get(magazine[i]) + 1);
    }
  }

  for (let word of note) {
    if (!mMap.has(word) || mMap.get(word) === 0) {
      console.log("No");
    }
    mMap.set(word, mMap.get(word) - 1);
  }
  console.log("Yes");
}
