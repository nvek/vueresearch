

<template>
    <div id="app">
        <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div class="container">
                <router-link class="navbar-brand" to="/">Home</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav">


                        <li class="nav-item">
                            <router-link class="nav-link" to="/blog">Blog</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/todos">Todos</router-link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <div style="padding-top: 80px">
            <router-view/>
        </div>
    </div>

</template>


<script>

    export default {
        name: 'App',
        components: {
        },
        data: () => ({
            //
        }),
    };
</script>