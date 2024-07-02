
/**
 * Timers
 */
//% weight=20 advanced=true color=#013382 icon="\uf2f2"
namespace timers {
    /**
     * Creates a new timer
     */
    //% block
    //% blockSetVariable=timer
    //% weight=90
    //% blockGap=25
    export function createTimer(): Timer {
        return new Timer()
    }
}

//% blockNamespace=timers
class Timer {
    private total: number
    private startTime: number

    public constructor() {
        this.reset()
    }

    //% block
    //% weight=75
    //% blockGap=8
    public start(): void {
        if (this.startTime === undefined)
            this.startTime = control.millis()
    }

    //% block
    //% weight=74
    //% blockGap=8
    public stop(): void {
        if (this.startTime !== undefined) {
            this.total += control.millis() - this.startTime
            this.startTime = undefined
        }
    }

    //% block
    //% weight=73
    //% blockGap=25
    public reset(): void {
        this.total = 0
        this.startTime = undefined
    }

    //% blockCombine
    //% weight=50
    get milliseconds(): number {
        return this.total + (this.startTime !== undefined ? control.millis() - this.startTime : 0)
    }

    //% blockCombine
    //% weight=50
    get seconds(): number {
        return this.milliseconds / 1000
    }
}
