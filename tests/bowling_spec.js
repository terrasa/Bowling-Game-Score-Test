const Score = require('../score.js')
const expect = require('chai').expect;

describe('Bowling game ', () => {
    
    it('All 0', (done) => {

        const allFrames = [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
            [0,0],
            [0,0],
            [0,0],
            [0,0],
            [0,0],
            [0,0]
                ]
      
        const aCase1 = new Score.Frame(allFrames,0)
        const aCase10 = new Score.Frame(allFrames,9)

        const finalResult = Score.finalResult(allFrames)
        const finalScore = Score.finalScore(finalResult)

       
          expect(aCase1.firstRoll).to.equal(0);
          expect(aCase1.secondRoll).to.equal(0);
          expect(aCase10.firstRoll).to.equal(0);
          expect(aCase10.secondRoll).to.equal(0);          
          
          expect(finalResult).to.deep.equal([0,0,0,0,0,0,0,0,0,0])
          expect(finalScore).to.equal(0)
          
          return done();
        });

    
    it('All Strike', (done) => {

        const allFrames = [
            [10,false],
            [10,false],
            [10,false],
            [10,false],
            [10,false],
            [10,false],
            [10,false],
            [10,false],
            [10,false],
            [10,10,10]
                ]
      
        const aCase1 = new Score.Frame(allFrames,0)
        const aCase10 = new Score.Frame(allFrames,9)

        const finalResult = Score.finalResult(allFrames)
        const finalScore = Score.finalScore(finalResult)

        
           expect(aCase1.firstRoll).to.equal(10);
           expect(aCase1.secondRoll).to.equal(false);
           expect(aCase10.firstRoll).to.equal(10);
           expect(aCase10.secondRoll).to.equal(10);          
          
           expect(finalResult).to.deep.equal([30,30,30,30,30,30,30,30,30,30])
           expect(finalScore).to.equal(300)
          
          return done();
    });

    it('Before last frame, Strike', (done) => {

        const allFrames = [
            [1,5],
            [10,false],
            [4,3],
            [4,4],
            [4,4],
            [5,5],
            [6,2],
            [4,4],
            [10,false],
            [8,1]
                ]
      
        const finalResult = Score.finalResult(allFrames)
        const finalScore = Score.finalScore(finalResult)

                    
          
        expect(finalResult).to.deep.equal([ 6, 17, 7, 8, 8, 16, 8, 8, 19, 9 ])
        expect(finalScore).to.equal(106)
          
          return done();
    });

    it('Last Frame with Spare', (done) => {

        const allFrames = [
            [1,2],
            [10,false],
            [5,4],
            [7,3],
            [10,false],
            [10,false],
            [1,4],
            [6,2],
            [7,3],
            [3,7,2] 
            ];
             

        const finalResult = Score.finalResult(allFrames)
        const finalScore = Score.finalScore(finalResult)
                      
        
        expect(finalResult).to.deep.equal([ 3, 19, 9, 20, 21, 15, 5, 8, 13, 12 ])
        expect(finalScore).to.equal(125)
          
          return done();
    });

    it('Last Frame with no Strike nor Spare', (done) => {

        const allFrames = [
            [1,2],
            [10,false],
            [5,4],
            [7,3],
            [10,false],
            [10,false],
            [1,4],
            [6,2],
            [7,3],
            [1,3] 
            ];
             

        const finalResult = Score.finalResult(allFrames)
        const finalScore = Score.finalScore(finalResult)
                      
        
        expect(finalResult).to.deep.equal([ 3, 19, 9, 20, 21, 15, 5, 8, 11, 4 ])
        expect(finalScore).to.equal(115)
          
          return done();
    });

    it('Given by Jordan', (done) => {

        const allFrames = [
            [1,2],
            [10,false],
            [5,4],
            [7,3],
            [10,false],
            [10,false],
            [1,4],
            [6,2],
            [7,3],
            [10,3,7]
            ];

        const finalResult = Score.finalResult(allFrames)
        const finalScore = Score.finalScore(finalResult)
                            
        
        expect(finalResult).to.deep.equal([ 3, 19, 9, 20, 21, 15, 5, 8, 20, 20 ])
        expect(finalScore).to.equal(140)
          
          return done();
    });
});

