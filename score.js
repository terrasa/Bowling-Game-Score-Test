// If all pins (10) drop in the first roll = strike, 10 points + the next 2 rolls score
// If all pins drop in the second roll = spare, 10 points + the next roll score
// if no 10 pins drop, frist roll + second roll

class Frame{
    constructor(allFrames, frameNumber){
        this.allFrames = allFrames
        this.firstRoll = allFrames[frameNumber][0];
        this.secondRoll = allFrames[frameNumber][1];
        if(frameNumber == 9) this.thirdRoll = allFrames[frameNumber][2]
        this.frameNumber = frameNumber

        this.isStrike = function () {
            if (this.firstRoll == 10) return true
            return false

        }
		
        this.isSpare = function() {
            if(this.secondRoll) {
				if(this.firstRoll + this.secondRoll == 10)
                 return true
            	}
            	return false
        }

        this.isLastFrame = function() {
            if (this.frameNumber == 9) return true
            return false
        }

        this.isBeforeLastFrame = function (){
            if (this.frameNumber == 8) return true
            return false
        }

        this.score = function(){
            if(this.isLastFrame()) {

                if(this.isStrike()){
                    const result = 10 + this.secondRoll + this.thirdRoll
                    return result 
                } 

                else if(this.isSpare()){
                    const result = this.firstRoll + this.secondRoll + this.thirdRoll
                    return result
                }

                else{
                    const result = this.firstRoll + this.secondRoll
                    return result
                }
            }

            if(!this.isStrike() && !this.isSpare()){
                return this.firstRoll + this.secondRoll
            }

            if (this.isBeforeLastFrame()){                   
                          
                if(this.isStrike()){
                    const nextRolls = this.allFrames[this.frameNumber+1]
                    const nextFrame = new Frame(this.allFrames, this.frameNumber+1)
                    return 10 + nextFrame.firstRoll + nextFrame.secondRoll
                    
                }   
            }

            if(this.isSpare()){
                const nextRolls = this.allFrames[this.frameNumber+1]
                const nextFrame = new Frame(this.allFrames, this.frameNumber+1)
                return 10 + nextFrame.firstRoll
            }
			
			if(this.isStrike()){
				const nextRolls = this.allFrames[this.frameNumber+1]
                const nextFrame = new Frame(this.allFrames, this.frameNumber+1)
				if(!nextFrame.isStrike()){
					
					return 10 + nextFrame.firstRoll + nextFrame.secondRoll
				}
				else{
					const secondNextRolls = this.allFrames[this.frameNumber+2]
                	const SecondNextFrame = new Frame(this.allFrames, this.frameNumber+2)
					return 10 + nextFrame.firstRoll + SecondNextFrame.firstRoll
				}
			}
        }
    }
}

module.exports.finalResult = function finalResult(allFrames){
    var finalResult = allFrames.map(function(element,index){
	    const aCase = new Frame(allFrames,index)
	    return aCase.score();
    })
    return finalResult
}



module.exports.finalScore = function finalScore(finalResult){
    return finalResult.reduce((firstScore,nextScore) => firstScore + nextScore, 0);
}

module.exports.Frame = Frame