export class Draggable {
  constructor(el) {
    this.draggableEl = el;
    this.init();
  }

  init() {
    this.draggableEl.addEventListener("dragstart", (e) => {
      let rect = this.draggableEl.getBoundingClientRect();
      this.xstart0 = e.clientX - rect.left;
      this.ystart0 = e.clientY - rect.top;
    });

    this.draggableEl.addEventListener("drag", (e) => {
      this.draggableEl.style.position = "absolute";
      if (e.pageX != 0 && e.pageY != 0) {
        this.draggableEl.style.left = e.pageX - this.xstart0 + "px";
        this.draggableEl.style.top = e.pageY - this.ystart0 + "px";
      }
    });

    this.draggableEl.querySelector(".cross").addEventListener("click", (e) => {
      this.draggableEl.remove();
    });

    // this.draggable.addEventListener("dragend", (e) => {
    //   console.log(e);
    //   draggable.style.position = "absolute";
    //   draggable.style.left = e.pageX - xstart0 + "px";
    //   draggable.style.top = e.pageY - ystart0 + "px";
    // });
  }
}
