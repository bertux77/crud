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
        newKeep: '',
        fillKeep: { 'id': '', 'keep': '' },
        errors: []
    },
    methods: {
        getKeeps: function() { // TRAE TODOS LOS REGISTROS
            let urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
            });
        },
        editKeep: function(keep) { // EDITA EL KEEP ( TAREA )
            this.fillKeep.id = keep.id; // LLenamos el nuevo id
            this.fillKeep.keep = keep.keep; // LLenamos el campo tarea
            $('#edit').modal('show'); // Abrimos el formulario de edicion en ventana modal
        },
        updateKeep: function(id) {
            alert();
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
        }
    }
});