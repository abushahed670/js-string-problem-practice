const lyrics = 'tumi bondhu kala paKhi ame jeno ki, bosonthu kale jeno bolte pare ni';

const searchString = 'pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('paKhi');
// const doesExist = lyrics.includes(searchString);
// to ignore case and to make all lower case

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
// to make everything in one line 
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);
 
// find the index number from the array, if none in the array show -1

console.log(lyrics.indexOf('kala'));

//if we does not want -1 then we can handle it gently

if(lyrics.indexOf('sadada') !== -1){
    console.log('exists inside the string');
}
else {
    console.log('cannot find it')
}

// start with 

console.log(lyrics.startsWith('2me'));

// end with
 const fileName ='mybiodata.pdf';
 const otherFile = 'mypic.png'
 console.log(fileName.endsWith('.pdf'));
