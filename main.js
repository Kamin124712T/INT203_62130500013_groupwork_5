const app = Vue.createApp({
    data() {
        return {
            gallerys:[{img:"images/Gallery1.jpg",address:"Kyoto,Japan",favorite:false,show:true},
                     {img:"images/Gallery2.jpg",address:"Tokyo,Japan",favorite:false,show:true},
                     {img:"images/Gallery3.jpg",address:"Wonderland,Kiki",favorite:false,show:true},
                     {img:"images/Gallery4.jpg",address:"Flying pig,Italy",favorite:false,show:true},
                     {img:"images/Gallery5.jpg",address:"Ponyo Kyushu,Japan",favorite:false,show:true}],
            focusImg:{show:false,index:0},
        }
    },
    methods: {
        favoriteImg(index){
            this.gallerys[index].favorite = !this.gallerys[index].favorite
        },
    },
    computed:{
        countGallerys(){
            return this.gallerys.length
        },
        countfavorite(){
            return this.gallerys.filter(g => g.favorite).length
        },
        countImgShow(){
            return this.gallerys.filter(g => g.show).length
        }
    },
})
