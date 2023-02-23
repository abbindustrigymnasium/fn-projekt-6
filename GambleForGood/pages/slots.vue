<template>
    <div class="bg-gray-800">
        <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-white ml-4 pt-3">Slots</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded ml-4"></div>
        <div class="slot-container">
            <div class="slot symbol" v-for="(slot, index) in slots" :key="index">
                <transition name="slide" >
                    <img v-if="spinning" :src="slot.img.default" />
                    <img v-else :src="slot.img.default" />
                </transition>
            </div>
        </div>
        <div class="mt-6">
                                  <button
                                  @click="spin()" :disabled="disableSpin" class="flex w-1/5 justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 mx-auto">
                                      {{ disableSpin ? 'Spinning...' : 'Spin' }}
                                  </button>
                              </div>
        <!-- <div class="button-container">
            <button class="spin-button" @click="spin()" :disabled="disableSpin">{{ disableSpin ? 'Spinning...' : 'Spin' }}</button>
        </div> -->
    </div>
</template>
  
<style>
.slot-container {
    display: flex;
    justify-content: center;
}

.slot {
    background-color: white;
    margin-left: 25px;
    margin-right: 25px;
    border-width: 10px;
    border-radius: 5px;
    border-color: darkslategray;
    width: 200px;
    height: 300px;
    overflow: hidden;
    position: relative;
}

.symbol {
    display: flex;
    align-items: center;
}

.button-container {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.spin-button {
    background-color: white;
    border-color: darkslategray;
    border-width: 2.5px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 10px;
    
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