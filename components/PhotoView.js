app.component('photo-view',{
    props:{
        gallerys:Array,
        focusImg:Array,
    },
    template: 
    /*html*/
    `
    <div v-show="focusImg.show && gallerys[focusImg.index].show" class="w-full  bg-black mt-6 " >
        <div class="flex justify-end"><i class="material-icons  text-5xl text-white mt-2 mr-3 cursor-pointer" @click="quit">highlight_off</i></div>
        <div class="flex flex-row items-center justify-center">
            <i class="material-icons text-6xl text-white cursor-pointer" @click="next(-1)">navigate_before</i>
            <img class="mx-auto " @click="favoriteImg(focusImg.index)" :src="gallerys[focusImg.index].img " height="" width="750" >
            <i class="material-icons text-6xl text-white cursor-pointer" @click="next(1)">navigate_next</i>
        </div>
        <div class="text-4xl font-medium mx-auto text-white mt-3 mb-4 text-center">{{gallerys[focusImg.index].address}}</div>
    </div>
    `,
    data(){
        return {

        }
    },
    methods: {
        next(i){
            this.focusImg.index += i;
            if(this.focusImg.index==-1){
                this.focusImg.index = this.gallerys.length-1;
            }
            else if(this.focusImg.index== this.gallerys.length){
                this.focusImg.index = 0;
            }
            if(!this.gallerys[this.focusImg.index].show){
                this.next(i)
            }
        },
        quit(){
            this.focusImg.show = false;
        },
        favoriteImg(index){
            this.$emit('favorite-img',index)
        },
    },
})