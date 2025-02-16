export class MatrixEffect {
    private canvas: HTMLCanvasElement | undefined;
    private ctx: CanvasRenderingContext2D | undefined;
    private fontSize: number = 16;
    private columns: number = 0;
    private drops: number[] = [];
    private chars: string = "";
    private isAnimating: boolean = false;
  
    constructor() {
     
    }
  
    // Méthode publique pour démarrer l'animation
    public start(): void {
      this.canvas = document.createElement("canvas");
      this.canvas.style.position = "absolute";
      this.canvas.style.top = "0px";
      this.canvas.style.zIndex = "88";
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d")!;
      this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
  
      this.resize();
      this.drops = Array(this.columns).fill(0);
  
      window.addEventListener("resize", () => this.resize());
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.animate();
      }
    }
  
    private resize(): void {
      if(this.canvas){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(0);
      }
    }
  
    private draw(): void {
      if(this.ctx && this.canvas){
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fond moins noir
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
        this.ctx.fillStyle = "#0F0"; // Vert Matrix
        this.ctx.font = `${this.fontSize}px monospace`;
    
        for (let i = 0; i < this.drops.length; i++) {
          const text = this.chars.charAt(Math.floor(Math.random() * this.chars.length));
          this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
    
          if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
            this.drops[i] = 0;
          }
    
          this.drops[i]++;
        }
      }
    
    }
  
    private animate(): void {
      if (this.isAnimating) {
        this.draw();
        requestAnimationFrame(() => this.animate());
      }
    }
  
    // Méthode pour arrêter l'animation si besoin
    public stop(): void {
      this.isAnimating = false;
    }
  }
  