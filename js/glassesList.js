export class GlassesList{
    constructor(){
        this.glist = [];
    }
    addGlasses(glasses){
        this.glist.push(glasses);
    }
   themGlasses(){
       // tao bien chua noi dung html 
       let content ='';
       // duyen mang danh sach kinh
       content = this.glist.reduce((glconten,item,index)=>{
            glconten += `
            <div class="col-4">
            <img  class="img-fluid" onclick="tryOnGlasses(event)"   data-id="${item.id}" src="${item.src}" >
            </div>
            `;
            return glconten;
       },'');
       return content;
   }

}