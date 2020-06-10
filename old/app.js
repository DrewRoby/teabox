new Vue ({
  el: '#app',
  data: {
    numItems: 0,
    unsoldItemIDs: [],//populate with unsold items from database
    maxItems: 25,//prompulate with max items from database
    primaryColor: "#000000"
    colorsArray: []
    availColors: []
  },
  methods: {
    // makeItemCards = function(){
    //   console.log("farts");
      //generate cards for number of items specified when Submit Items is clicked
    // },
    doThing = function() {
      console.log(numItems)
    },
    addColor = function() {
      this.numColors.push("Color 1: <input type="color" name="color1">");
    },
    subtractColor = function() {
      this.numColors.pop()
    }
  }
});

//Should show cards for actie items on login
//If 'submit more items" is clicked, should generate cards up to the max amount of active items allowed for the account
//Item card brand should fetch list of possible brands from db and narrow down as user types
//Item card should turn color of selected primaryColor
//
