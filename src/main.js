const app = Vue.createApp({
    data() {
        return {
            address: '175 bradley rd., waterfalls, Harare, Zimbabwe',
            birthday: '17/02/1992',
            email: 'tinashe.chaterera@example.com',
            firstName: 'Tinashe',
            gender: 'male',
            lastName: 'Chaterera',
            password: 'rans394@35dk',
            phone: '+263 77 602 1140',
            picture: 'https://randomuser.me/api/portraits/men/75.jpg',
            url: 'https://randomuser.me/api/'
        }
    },
    methods: {
        pad(n, s = String(n)) {
            return s.length < 2 ? `0${s}` : s;
        },
        birthdayDate(date) {
            let dt = new Date(date);
            return (
                `${this.pad(dt.getDate())}/${this.pad(dt.getMonth())}/${dt.getFullYear()}`
            );
        },
        getUser() {
            fetch(`${this.url}`)
                .then(res => res.json())
                .then(data => {
                    this.address = `
                    ${data.results[0].location.street.name},
                    ${data.results[0].location.city},
                    ${data.results[0].location.country}`;
                    this.birthday = this.birthdayDate(data.results[0].dob.date);
                    this.email = data.results[0].email;
                    this.gender = data.results[0].gender;
                    this.firstName = data.results[0].name.first;
                    this.lastName = data.results[0].name.last;
                    this.password = data.results[0].login.password;
                    this.phone = data.results[0].phone;
                    this.picture = data.results[0].picture.large;
                })
        }
    }
})

app.mount('#app');