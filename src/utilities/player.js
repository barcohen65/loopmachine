export class Player {
    constructor(options) {
      this.audio = new Audio(options.audio);
      this.name = options.name;
    }
    getName() {
      return this.name;
    }
    play() {
      this.audio.play();
    }
    stop() {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    mute() {
      this.audio.muted = !this.audio.muted;
    }
    loop() {
      this.audio.loop = !this.audio.loop;
    }
    setTime(time) {
      this.audio.currentTime = time;
    }
    getTime() {
      return this.audio.currentTime;
    }
    isPlaying() {
      return !this.audio.paused;
    }
  }
  