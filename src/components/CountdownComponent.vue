<template>
	<h2 class="text-center my-4 ant-border">{{timerOutput}}</h2>
  </template>
  
  <script>
export default {
  name: 'CountdownComponent',
  data(){
    return{
		countDownToTime : new Date("Dec 01, 2024 00:00:00").getTime(),
        timerOutput:  null
    }
  },
  props: {
    msg: String
  },
  methods:{
	startTimer() {
		const timeNow = new Date().getTime();
		const timeDifference = this.countDownToTime - timeNow;
		const millisecondsInOneSecond = 1000;
		const millisecondsInOneMinute = millisecondsInOneSecond * 60;
		const millisecondsInOneHour = millisecondsInOneMinute * 60;
		const millisecondsInOneDay = millisecondsInOneHour * 24;
		const differenceInDays = timeDifference / millisecondsInOneDay;
		const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
		const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
		const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
		const remainingDays = Math.floor(differenceInDays);
		const remainingHours = Math.floor(remainderDifferenceInHours);
		const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
		const remainingSeconds =Math.floor(remainderDifferenceInSeconds);
		this.timerOutput = "Start Adventkalender in " + remainingDays + " Tagen " + ": " + remainingHours + " Stunden " + ": " + remainingMinutes + " Minuten " + ": " + remainingSeconds + " Sekunden";
		}
  },
  mounted(){
	setInterval(() => { this.startTimer() }, 1000);
  }
};
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .ant-border {
	
	border: 3px dashed rgb(82, 11, 11);
	border-color: #c8560f;
	/*padding: 10px;
	animation: ant-border 1s infinite; */
}

  </style>