export default {
    appendPet: (state, { animalType, pet }) => {
        state[animalType].push(pet)
    }
}