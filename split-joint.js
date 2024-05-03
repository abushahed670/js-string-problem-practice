const lyrics = 'tumu bondhu kala paKhi ame jeno ki. bosonthu kale jeno bolte pare ni.';
//split with letter
const chars = lyrics.split(''); //no gap in - ''
 console.log(chars);
// split with word
const parts = lyrics.split(' ');
console.log(parts);
// split with sentences
const sentences = lyrics.split('.');
 console.log(sentences);


// slice in start number and end number

const partial = lyrics.slice(5, 15);
console.log(partial);

// trim -- it cut the withe space between end and start.. it has also trimEnd and trimStart too
const greeting = '  Hello World ';
console.log(greeting.trim());

//to joint any string 

const lines = ['tumu bondhu kala paKhi, ame jeno ki, bosonthu kale jeno bolte pare ni'];
const newSong = lines.join(': ');// use gap to make gap end point
console.log(newSong);