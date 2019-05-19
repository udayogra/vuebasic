let app = new Vue({
  el: '#app',
  data: {
    currentTime :'sss' + new Date().toLocaleString(),
    rating: 1,
    speaker: '',
    topic: '',
    value: 10,
    time: '12:00pm',
    showAdvancedSettings: false,
    ratings: [{value :1, text : '1 star'},{value :2, text : '2 star'},{value :3, text : '3 star'},{value :4, text : '4 star'},{value :5, text : '5 star'} ],
    currentRatings: {},
    ratingMap: {},
    checkedSessions : [],
    sessions: [
      { id: 100, speaker: 'Uday Ogra', time : '10:00 AM', topic: 'Integrating modern day Javascript framewroks with ColdFusion', img: 'https://pbs.twimg.com/profile_images/1518734182/uday2_400x400.jpg' },
      {
        id: 101, speaker: 'Suchika Singh', time : '11:00 AM',topic: 'All about scheduled tasks and using them in ColdFusion', img: 'https://www.adobe.com/content/dam/acom/en/devnet/authors/bio/s/Suchika_Singh.jpg'
      },{
        id: 102, speaker: 'Pavan Kumar', time : '01:00 PM',topic: 'Securing your CF applications and using security analyzer tool', img: 'https://www.adobe.com/content/dam/acom/en/devnet/authors/bio/i/Immanuel_noel.jpg'
      },{
        id: 103, speaker: 'Raj Pandian', time : '02:00 PM',topic: 'Scaling up your CF applications by using distributed caching', img: 'data:image/jpeg;base64,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'
      }
    ]
  },
  methods: {


    rateSession: function (id, rating) {
      app.$set(app.ratingMap, id, rating);
      //this.ratingMap[id] = rating;
      
    },

    addSession: function () {
      this.sessions.push({ id: this.sessions.length + 1, speaker: this.speaker, topic: this.topic, time : this.time });
      this.showAdvancedSettings = false;
    },
    deleteMultiSessions: function () {
      for(var idx in this.checkedSessions){
         this.deleteSession(this.checkedSessions[idx] );
      }
    },
    deleteSession: function (id) {
      var filtered = this.sessions.filter(function (value, index, arr) {

        return value.id != id;

      });

      this.sessions = filtered;

    }
  }
})