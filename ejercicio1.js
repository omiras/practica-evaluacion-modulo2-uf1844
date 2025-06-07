function nicknameGenerator(name) {
    // Tu código aquí
}

console.log(nicknameGenerator("Robert")); // "Rob"
console.log(nicknameGenerator("Kimberly")); // "Kim"
console.log(nicknameGenerator("Samantha")); // "Sam"
console.log(nicknameGenerator("Jeannie")); // "Jean"
console.log(nicknameGenerator("Douglas")); // "Doug"
console.log(nicknameGenerator("Gregory")); // "Greg"
console.log(nicknameGenerator("Al")); // "Error: Name too short"
console.log(nicknameGenerator("Tom")); // "Error: Name too short"
console.log(nicknameGenerator("Alex")); // "Alex" (porque 'e' es vocal)
console.log(nicknameGenerator("Chris")); // "Chr" (porque 'r' es consonante)
console.log(nicknameGenerator("Emma")); // "Emma" (porque 'm' es consonante)
console.log(nicknameGenerator("Ian")); // "Error: Name too short"