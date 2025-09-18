export class DSRT {
  constructor() {
    console.log("✅ DSRT.js aktif!");
  }

  init({ target, options }) {
    this.target = target;
    this.options = options;
    if (options.background) {
      target.style.background = options.background;
    }
    console.log("DSRT inisialisasi dengan opsi:", options);
  }

  addCube({ size = 1, color = "red" }) {
    const div = document.createElement("div");
    div.style.width = size * 50 + "px";
    div.style.height = size * 50 + "px";
    div.style.background = color;
    div.style.display = "inline-block";
    div.style.margin = "10px";
    this.target.appendChild(div);
  }
}
