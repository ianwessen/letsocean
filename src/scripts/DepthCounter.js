
// import { sum } from '../data/data.js'

// document.addEventListener('DOMContentLoaded', function () {
//     console.log('thing')
//     console.log('thing2', sum(4,9))
// })

// document.addEventListener('scroll', function (e) {
//     let depth = e.pageY || window.scrollY;
//     let pressure = 1 + (0.05 * depth);
//     const depthCounter = document.getElementById('js-depth-counter');
//     const pressureCounter = document.getElementById('js-pressure-counter');
//     depthCounter.innerHTML = 'Depth: ' + Math.floor(depth/2) + 'm';
//     pressureCounter.innerHTML = 'Pressure: ' + Math.floor(pressure) + ' atm';
// })

console.log('TOP')

// import dependencies
import { concat } from './utils';

// console.log('concat', concat)

// return DepthCounter class
export class DepthCounter {
    constructor(elem, users){
        this.elem = elem;
        this.users = users;
        this.initialized = false;
    }
    // initialize plugin
    init() {
        let ul = document.createElement( 'ul' );
        ul.classList.add('users-list');
        // store element reference
        this.ul = this.elem.appendChild( ul );
         // render initial list of users
        this.renderList();
        // set initialized to `true`
        this.initialized = true;
    }
    // get fullname of the user
    getUserFullName( user ) {
        // return concat( user.firstname, user.lastname );
    }
    // get list of users with fullname
    getUsers() {
        return this.users.map( 
            user => this.getUserFullName( user )
        );
    }
    // return `li` element with user fullname
    getUserLi( fullname ) {
       let li = document.createElement( 'li' );
       li.innerText = fullname;
        return li;
    }
    // append `li` element to the users `ul` element
    appendLi( li ) {
        this.ul.appendChild( li );
    }
    // render entire users list
    renderList() {
        let users = this.getUsers();
        let liElements = users.map( 
            fullname => this.getUserLi( fullname ) 
        );
        for( let li of liElements ){
            this.appendLi( li );
        }
    }
    // add new user
    addUser( user ) {
        let fullname = this.getUserFullName( user );
        let li = this.getUserLi( fullname );
        this.appendLi( li );
    }
}