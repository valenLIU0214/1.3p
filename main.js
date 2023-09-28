// main.js
const Home = {
    template: `<div class="container">
                    <h2>Welcome to My Portfolio</h2>
                    <p>This is a demonstration of my skills and projects. Feel free to navigate through the sections to know more about my work!</p>
               </div>`
};

const Projects = {
    template: `<div class="container">
                    <h2>My Projects</h2>
                    <ul>
                        <li v-for="project in projects">{{ project.name }} - {{ project.description }}</li>
                    </ul>
               </div>`,
    data() {
        return {
            projects: [
                { name: "Project 1", description: "A description of Project 1" },
                { name: "Project 2", description: "A description of Project 2" }
            ]
        };
    }
};

const Contact = {
    template: `<div class="container">
                    <h2>Contact Me</h2>
                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input id="name" v-model="name" type="text" required/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input id="email" v-model="email" type="email" required/>
                        </div>
                        <button type="submit">Send</button>
                    </form>
               </div>`,
    data() {
        return {
            name: '',
            email: ''
        };
    },
    methods: {
        submitForm() {
            alert(`Name: ${this.name}, Email: ${this.email}`);
        }
    }
};

const routes = [
    { path: "/", component: Home },
    { path: "/projects", component: Projects },
    { path: "/contact", component: Contact }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');