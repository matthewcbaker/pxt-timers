
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

    public constructor() {
        this.total = 0
    }

    //% block
    //% weight=75
    //% blockGap=8
    public start(): void {
    }

    //% block
    //% weight=74
    //% blockGap=8
    public stop(): void {
    }

    //% block
    //% weight=73
    //% blockGap=25
    public reset(): void {
    }

    //% blockCombine
    //% weight=50
    get milliseconds(): number {
        return this.total
    }

    //% blockCombine
    //% weight=50
    get seconds(): number {
        return this.total / 1000
    }
}
