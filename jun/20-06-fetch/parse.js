// In JSON sind Oblect properties immer in Anführungszeichen

// Im JSON können Objekte und Arrays unbegrenzt verschachtelt werden
const dataString = '{"firstName": "Sabina", "hobbies": ["wandern","klettern"]}';

const obj = JSON.parse(dataString);

obj.hobbies.forEach(hobby => {
    console.log(hobby);
});
