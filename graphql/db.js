export const people = [
    {
        id: 1,
        name: "youngmin",
        age: 29,
        gender: "male",
    },
    {
        id: 2,
        name: "youngjoe",
        age: 28,
        gender: "male",
    },
    {
        id: 3,
        name: "Yusub",
        age: 29,
        gender: "male",
    }         
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}