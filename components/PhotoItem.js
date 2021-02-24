app.component('photo-item',{
    props:{
        imgShow:Number,
        gallerys:Array,
        focusImg:Array,
    },
    template: 
    /*html*/
    `
    <span v-show="imgShow==0" class="text-4xl font-medium mx-auto mt-16">Image can't be found in the Gallery</span>
    <div v-for="(gallery, index) in gallerys" v-show="gallery.show" class="flex flex-row items-center mt-10 ">
        <img class="w-96 mr-10 border-4 border-blue-600 p-0.5 " :class="[index==focusImg.index && focusImg.show == true ? 'border-opacity-100' : 'border-opacity-0' ]" :src="gallery.img" @click="changfocusImg(index)" @dblclick="favoriteImg(index)">
        <span class="text-5xl font-medium cursor-pointer" @click="favoriteImg(index)">{{gallery.address}}</span>
        <i v-show="gallery.favorite" class="material-icons text-4xl mt-3 ml-10 text-red-500">favorite</i>
    </div>
    `,
    data(){
        return {
            
        }
    },
    methods: {
        favoriteImg(index){
            this.$emit('favorite-img',index)
        },
        changfocusImg(index){
            if(!this.focusImg.show){
                this.focusImg.show = true
            }
            this.focusImg.index = index
        },
    }
})