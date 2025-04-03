function createProfile(username, playTime) {

    return {
        username,
        playTime,
        
        getInfo() {
            return `${this.username} has ${this.playTime} active hours!`;
        },

        changeUsername(newName) {
            this.username = newName;
        },

        updatePlayTime(hours) {
            this.playTime += hours;
        }
        
    };
}
  
   const profile = createProfile("Jacob", 300);

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"