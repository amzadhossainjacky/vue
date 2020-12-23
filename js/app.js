
//use el and data property
/* 
var app = new Vue({
    el: '#app',
    data: {
        name: "Fariha Jahan Rainy",
        isItTrue: true,
        hobbies: ['coding','photography','cricket'],
        skills: {
            play: 'cricket',
            programingLanguage: 'php'
        },
        message: ()=>{

            return "Good Morning"
        }
    }
});
 */




//use methods property:
//this keyword diye data property ke access kora jabe

/* 
var app = new Vue({
    el: '#app',
    data: {
       
        title: "Good Morning!"
    },
    methods: {
        greeting(){
            return this.title
        }
    }
});
*/


//use Directives 
//all html attributes need directives
//uses: v-bind, v-html, v-text
/* 
var app = new Vue({
    el: '#app',
    data: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "this is a dog",
        href: "https://www.google.com",
        myText: "Hello",
        myHtml: "<strong> Bold Letter </strong>"

    }
});
 */

//condition   
// v-if v-else v-else-if
/* var app = new Vue({
    el: '#app',
    data: {

        userName: "Rainy",
        userAge: 24,
        allowedAge: 18,

    },
    methods: {
        check(){

            return this.userAge >= this.allowedAge ? true:false
        }
    }
});
 */

//loop

/* var app = new Vue({
    el: '#app',
    data: {

        cars: ['BMW', 'TOYOTA', 'TESLA'],
        users: {
            name: 'Fariha Jahan Rainy',
            age: 25,
            profession: "IT Engineer"
        }

    }
});

 */



var app = new Vue({
    el: '#app',
    data: {

    }
});



