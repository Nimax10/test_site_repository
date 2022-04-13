const app = {
    data() {
        return {
            currentPage: 'catalog',
            userLogIn: false,
            currentElem: 0,
            about_product: [
                {id_product: 0, nameProduct: 'Название', dateRelise: '2020', price: '2000', category: 'DC', image: 'assets/css/logo.svg', dateAdd: '2020-01-01'},
                {id_product: 1, nameProduct: 'Название', dateRelise: '2020', price: '2000', category: 'DC', image: 'assets/css/logo.svg', dateAdd: '2020-01-02'},
                {id_product: 2, nameProduct: 'Название', dateRelise: '2020', price: '2000', category: 'DC', image: 'assets/css/logo.svg', dateAdd: '2020-01-03'},
                {id_product: 3, nameProduct: 'Название', dateRelise: '2020', price: '2000', category: 'DC', image: 'assets/css/logo.svg', dateAdd: '2020-01-04'},
                {id_product: 4, nameProduct: 'Название', dateRelise: '2020', price: '2000', category: 'DC', image: 'assets/css/logo.svg', dateAdd: '2020-01-05'},
            ],
            allProducts: [],
            sortBy: null,
            categories: [],
            filteredBy: null,
            sortedAndFillteredProducts: null,
            chosenProduct: null,
        }
    },
    created() {
        fetch('http://127.0.0.1:8000/api/getCategories', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        .then(respose => respose.json())
        .then(data => {
            this.categories = data
        })
        fetch('http://127.0.0.1:8000/api/getProducts', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        .then(respose => respose.json())
        .then(data => {
            this.allProducts = data
        })
    },
    methods: {
        filterAndSort() {
            if (this.sortBy !== null || this.filteredBy !== null) {
                fetch('http://127.0.0.1:8000/api/filter', {
                    method: "post",
                    body: JSON.stringify({
                        sortBy: this.sortBy,
                        filteredBy: this.filteredBy
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                .then(respose => respose.json())
                .then(data => {
                    this.allProducts = data
                })
            } else {
                fetch('http://127.0.0.1:8000/api/getProducts', {
                    method: "get",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "same-origin"
                })
                .then(respose => respose.json())
                .then(data => {
                    this.allProducts = data
                })
            }
        },
    },
    computed: {
        
    }
}   
Vue.createApp(app).mount("#app")