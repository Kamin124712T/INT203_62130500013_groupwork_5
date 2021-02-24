app.component('photo-search',{
    props:{
        gallerys:Array,
        imgShow:Number,
    },
    template: 
    /*html*/
    `
    <i class="material-icons text-right text-5xl mr-32 mt-8 cursor-pointer mb-6 " v-show="!search" @click="changSearch">search</i>
    <div v-show="search" class="flex items-center justify-center mt-4 ">
        <input type="text" v-model="inputSearch" placeholder="Please enter text" @keyup="showGallerys" @keyup="countImgShow" class="bg-gray-100 border-gray-300 text-gray-500  border-2 h-14 w-3/4 text-3xl pb-1 focus:ring-1 focus:ring-gray-600 focus:outline-none">
        <button class="border-2 h-14 w-24 ml-3  bg-blue-400 text-white text-2xl focus:ring-2 focus:ring-blue-600 focus:outline-none rounded-2xl" @click="changSearch" >Cancel</button>
    </div>
    <span v-show="search" class="text-2xl  mx-auto text-gray-500">{{imgShow}} search result(s)</span>
    `,
    data(){
        return {
            search:false,
            inputSearch:'',
        }
    },
    methods: {
        changSearch(){
            this.search = !this.search;
            this.inputSearch='';
        },
        showGallerys(){
            for (let index = 0; index < this.gallerys.length; index++) {
                this.gallerys[index].show = this.gallerys[index].address.toUpperCase().search(this.inputSearch.toUpperCase()) == -1 ? false:true
            }  
        },
    },
})