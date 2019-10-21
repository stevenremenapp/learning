// import module1 from 'module1';
// import module2 from 'module2';

// export keyword makes item available
// default makes it easier to identify a single export, but you can export multiple items

function jump() {

}

const harry = 'potter';
const voldemort = 'He who must not be named';

export default function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}