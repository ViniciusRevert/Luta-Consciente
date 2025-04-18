export default class Slide {
  constructor(slide, imagens){
    this.slide = document.querySelector(slide)
    this.imagens = document.querySelector(imagens)
  }
  onStart(event){
    event.preventDefault();
  this.imagens.addEventListener('mousemove', this.onMove )
  }

onMove(event){
}
onEnd(){
this.imagens.removeEventListener('mousemove', this.onMove )

}

  addSlideEvents(){
  this.imagens.addEventListener('mousedown', this.onStart )
  this.imagens.addEventListener('mouseup', this.onEnd )


}

bindEvents(){
  this.onStart = this.onStart.bind(this); 
  this.onMove = this.onMove.bind(this); 
  this.onEnd = this.onEnd.bind(this); 


}

init(){
  this.bindEvents();
  this.addSlideEvents();
  return this;
}
}