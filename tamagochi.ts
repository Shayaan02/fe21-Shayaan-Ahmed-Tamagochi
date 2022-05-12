class tamagochi {
    private hunger: number = 5;
    private happiness: number = 5;
    private timer1: number;
    private timer2: number;
    private delay: number = 10000;
    constructor(
        public name: string,
        public type: string
    ) {
        this.timer1 = setInterval(this.hungertimer.bind(this), this.delay);
        this.timer2 = setInterval(this.happinesstimer.bind(this), this.delay);
    }
    private hungertimer(): void {
        this.hunger++;
        console.log('hunger', this.hunger)
        // console.log('delay', this.delay)
        if (this.hunger === 10) {
            clearInterval(this.timer1);
            alert(`${this.name} is dead ;(`)
        }
    }
    private happinesstimer():void {
        this.happiness--;
        console.log('happniess', this.happiness);
        if (this.happiness === 0) {
            clearInterval(this.timer2);
            alert(`${this.name} is dead :(`);
        }
    }
    
     public feed():number {
        return this.hunger--;
     }   
    
     public play():number{
         return this.happiness++;
     }
}


export { tamagochi }
