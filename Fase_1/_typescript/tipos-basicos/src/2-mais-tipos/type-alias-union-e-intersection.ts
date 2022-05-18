type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number; // ? indica que o atributo é opcional
}

const jhow: User = {
    name: 'Jhow',
    lastName: 'Arenas',
    birthday: '01/01/2000',
}

// union types
// | -> um tipo ou de outro
type LogLevel = 'info' | 'error' | 'debug';
function logMessage(level: LogLevel, message: string) {
    console.log(`[${level}] - ${message}`);
}

logMessage('info', 'level tipo info foi chamado');
logMessage('error', 'level tipo error foi chamado');
logMessage('debug', 'level tipo debug foi chamado');
// logMessage('asd', 'level tipo asd não exite então ele da erro');

// intersection types: &
// & -> um tipo e de outro
type About ={
    bio: string;
    interesses: string[];
}
type Profile = User & About;

const userWidthProfile: Profile = {
    name: 'Jhow',
    lastName: 'Arenas',
    birthday: '01/01/2000',
    bio: 'Programador',
    interesses: ['Programação', 'Games']
}