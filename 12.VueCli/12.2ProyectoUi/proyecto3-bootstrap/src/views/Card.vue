<template>
    <div class="mt-5">
        <b-button variant='danger'> Rojo</b-button>
        <b-button variant='dark'> darck</b-button>
        <b-row class="mt-5">
            <b-col md='4' cols='12'>
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                    <b-button variant='success' href='/'> Agregar</b-button>
                </b-card>
            </b-col>
            <b-col md='4' cols='12'>
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                    <b-button variant='success'> Agregar</b-button>
                </b-card>
            </b-col>
            <b-col md='4' cols='12'>
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                    <b-button variant='success'> Agregar</b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>
 
</template>
<script>
export default {
    name:'Card'
}
</script>