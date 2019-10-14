<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"></div>

                    <div class="card-body">
                        <form @submit="formSubmit">

                        <strong>Name:</strong>
                        <input type="text" class="form-control" v-model="name">

                        <strong>LastName:</strong>
                        <input type="text" class="form-control" v-model="lastName">

                        <strong>User:</strong>
                        <input type="text" class="form-control" v-model="user">

                        <strong>Password:</strong>
                        <input type="text" class="form-control" v-model="pass">

                        <button class="btn btn-success">Crear con REST</button>
                        </form>

                        <pre>
                        {{opc}}
                        {{output}}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {name: '',
              lastName: '',
              user: '',
              pass: '',
              opc: '',
              output: ''}
        },

        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                let data = {
                  firstName: this.name,
                  lastName: this.lastName,
                  username: this.user,
                  password: this.pass
                }

                this.axios.post('http://localhost:4000/sa-auth-ms/resources/users', data


                )
                .then(function (response) {
                    currentObj.opc = "Usuario creado satisfactoriamente desde Microservicio:"
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.opc = "ERROR"
                    currentObj.output = error;
                });
            }
        }
    }

</script>
