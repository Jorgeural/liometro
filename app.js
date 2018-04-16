var intervaloSegundos;

new Vue({
  el: "#app",
  data: {
    liometro: 0,
    started: false,
    ended: false,
    tiempo: 0,
    incremento: 1
  },
  methods: {
    escaquearse() {
      if (this.liometro >= 0 && !this.ended) {
        this.liometro -= 1;
        if (this.liometro < 0) {
          this.liometro = 0;
        }
      }
    },
    start() {
      this.started = true;
      console.log("started");
      intervaloSegundos = setInterval(() => {
        this.intervalFunc();
      }, 1000);
    },
    intervalFunc() {
      this.tiempo += 1;
      this.liometro += this.incremento;
      this.incremento *= 1.25;
      this.end();
    },
    end() {
      if (this.liometro >= 100) {
        this.liometro = 100;
        this.ended = true;
        clearInterval(intervaloSegundos);
      }
    },
    restart(){
        this.started = false;
        this.ended = false;
        this.liometro = 0;
        this.incremento = 1;
        this.tiempo = 0;
    }
  },
  computed: {}
});
