export default function generatePassword(){
    let password:string = "";
    let character:string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()-_+=?"
    let passwordLength:number = 8;

    for(let index = 0; index < passwordLength; index++){
        let random = Math.floor(Math.random() * (character.length - 1) + 1);
        password += character[random];
    }

    return password;
}