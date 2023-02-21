<template>
    <div>
        <h1>Slots Machine</h1>
        <div class="slot-container">
            <div class="slot" v-for="(slot, index) in slots" :key="index">
                <transition name="slide" >
                    <img v-if="spinning" :src="slot.img.default" />
                    <img v-else :src="slot.img.default" />
                </transition>
            </div>
        </div>
        <button @click="spin()" :disabled="disableSpin">{{ disableSpin ? 'Spinning...' : 'Spin' }}</button>
    </div>
</template>
  
<style>
.slot-container {
    display: flex;
    justify-content: center;
}

.slot {
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.1s ease-in-out;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
}

.slide-enter-active {
    transform: translateY(0);
    opacity: 1;
}
</style>
  
<script>
const allEqual = arr => arr.every( v => v.img.default === arr[0].img.default )

export default {
    data() {
        return {
            slots: [
                { img: import('../static/slots-6.png') },
                { img: import('../static/slots-6.png') },
                { img: import('../static/slots-6.png') },
            ],
            spinning: false,
            disableSpin: false,
            win: false
        }
    },

    methods: {
        spin() {
            if (this.disableSpin) return;

            this.disableSpin = true;
            let count = 0;
            const interval = setInterval(() => {
                if (count === 5) {
                    clearInterval(interval);
                    this.disableSpin = false;
                    setTimeout(() => {
                        this.checkWin();
                    }, 200);
                    return;
                }

                this.spinning = true;
                setTimeout(() => {
                    this.spinning = false;
                    this.slots.forEach((slot, index) => {
                        import(`../static/slots-${Math.floor(Math.random() * 6) + 1}.png`)
                        .then(img => {
                            this.slots[index] = { img };
                        });
                    });
                }, 200);
                count++;
            }, 200);
        },

        checkWin() {
            this.win = false;
            if (allEqual(this.slots)) {
                this.win = true;
                console.log("you win")
                return;
            } else {
                console.log("you lose")
                return;
            }
        }
    }
}
</script>