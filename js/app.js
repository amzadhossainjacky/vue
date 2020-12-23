
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


// v-once directive
//one time rendering
/* 
var app = new Vue({
    el: '#app',
    data: {
        name: 'Jacky'
    },
    methods: {
       update(){
            setTimeout(()=>{
                this.name = 'Amzad'
            }, 2000);
       }
    },
});

 */

//event demo ..
/* 
var app = new Vue({
    el: '#app',
    data: {
        name: 'Jacky',
        x: 0,
        y: 0
    },
    methods: {
       update(){
            this.name = 'Amzad'
       },
       getCoord(e){
            this.x = e.clientX;
            this.y = e.clientY;
       }
    },
});
 */

 //argument passing
/* var app = new Vue({
    el: '#app',
    data: {
        name: 'Jacky',
    },
    methods: {
       update(arg, event){
            this.name = arg;
            console.log(event);
       },
    },
});
 */

//two ay data binding
/* 
var app = new Vue({
    el: '#app',
    data: {
        firstName:"",
        lastName: ""
    },
    methods: {
        formHandle(){
            console.log(this.firstName);
            console.log(this.lastName);
       },
    },
});
 */

 
// computed property

var app = new Vue({
    el: '#app',
    data: {
        inc: 0,
        dec: 0,
        fixed: 10
    },

    computed: {
        increase(){
            console.log("A");
            return this.inc + this.fixed
        },
        decrease(){
            console.log("B");
            return this.dec + this.fixed
        }
    }
});



























