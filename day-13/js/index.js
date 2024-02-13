// Main.js file
'use strict';

// Data: a group of people
const PEOPLELIST = [
    { name: "Jacob", interest: "Board Games", location: "Seattle" },
    { name: "Nathan", interest: "Basketball", location: "Kirkland" },
    { name: "Thomas", interest: "Baking", location: "Bellevue"},
    { name: "Ian", interest: "Tennis", location: "Sammamish"}
];

// Functional component for an individual person
function Person(props) {
    return (
        <div class="person">
            <p>Hello, my name is {props.name} and I am interested in {props.interest}!</p>
            <p>My location is {props.location}!</p>
        </div>
    );
}

// Functional component to represent a group of people
function PeopleGroup(props) {
    return (props.group.map((d) => {
        return <Person key={d.name} name={d.name} interest={d.interest} location={d.location}/>
    }));
}

// Render your component in the `main` section
let myPeople = <PeopleGroup group={PEOPLELIST} />

// Use ReactDOM.render correctly
ReactDOM.render(myPeople, document.querySelector('main'));