/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

const { default: Axios } = require('axios');

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#crud',
    created: function() {
        this.getKeeps();
    },
    data: {
        keeps: [],
        pagination: {
            'total': 0,
            'current_page': 0,
            'per_page': 0,
            'last_page': 0,
            'from': 0,
            'to': 0,
        },
        newKeep: '',
        fillKeep: { 'id': '', 'keep': '' },
        errors: [],
        offset: 3, // numero de paginas a la derecha e izquierda, por ejemplo: 123[4]567sig
    },
    computed: {
        isActived: function() {
            return this.pagination.current_page;
        },
        pagesNumber: function() {
            if (!this.pagination.to) {
                return [];
            }
            let from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }

            let to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }

            let pagesArray = [];
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }

    },
    methods: {
        getKeeps: function(page) { // TRAE TODOS LOS REGISTROS
            let urlKeeps = 'tasks?page=' + page;
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data.tasks.data,
                    this.pagination = response.data.pagination
            });
        },
        editKeep: function(keep) { // EDITA EL KEEP ( TAREA )
            this.fillKeep.id = keep.id; // LLenamos el nuevo id
            this.fillKeep.keep = keep.keep; // LLenamos el campo tarea
            $('#edit').modal('show'); // Abrimos el formulario de edicion en ventana modal
        },
        updateKeep: function(id) { // ACTUALIZAMOS
            let url = 'tasks/' + id;
            axios.put(url, this.fillKeep).then(response => { // Actualiza el registro en la BD
                this.getKeeps(); // Actualiza la pantalla
                this.fillKeep = { 'id': '', 'keep': '' }; // Reinicia el objeto
                this.errors = []; // Reiniciamos los errores
                $('#edit').modal('hide'); // Cerramos la ventana Modal
                toastr.success('Tarea Actualizada correctamente')
            }).catch(error => {
                this.errors = error.response.data;
            });

        },
        deleteKeep: function(keep) { // ELIMINA UN REGISTRO
            let url = 'tasks/' + keep.id

            axios.delete(url).then(response => { // Elimina el registro

                this.getKeeps(); // Actualiza la pantalla
                toastr.success('Eliminado Correctamente'); // Notificacion
            });
        },
        createKeep: function() { // CREA UN NUEVO REGISTRO
            let url = 'tasks';
            axios.post(url, {
                keep: this.newKeep // Enviamos la peticion
            }).then(response => {
                this.getKeeps(); // Actualiza los registros
                this.newKeep = ''; // Resetea la variable
                this.errors = []; // Resetea los errores
                $('#create').modal('hide'); // Cierra la ventana
                toastr.success('Nueva tarea creada con exito'); // Envia mensaje notificando
            }).catch(error => {
                this.errors = error.response.data
            });
        },
        changePage: function(page) {
            this.pagination.current_page = page;
            this.getKeeps(page);
        }
    }
});