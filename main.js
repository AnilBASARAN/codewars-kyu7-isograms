let = isIsogram = str => str.toLowerCase() == [...new Set(str.toLowerCase().split(''))].join('')
? true : false
  


/*7kyu-isogram
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)