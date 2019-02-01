describe("Test guessNum Function", function(){

  describe("guessNum Test to Pass", function(){
    it("should return You guessed it!", function(){
      expect(guessNum(4)).toEqual("You guessed it!");
    });
    it("should return Way off!!!! Pick between 1 and 10.", function(){
          expect(guessNum(6)).toEqual("Guess again.");
    });
  });

  describe("guessNum Test to Fail", function(){
    it("should return A number was not input.", function(){
      expect(guessNum("a")).toEqual("A number was not input.");
    });
    it("should return A value was not entered.", function(){
      expect(guessNum("")).toEqual("A value was not entered.");
    });
  });

  describe("guessNum boundray tests", function(){
    it("should return Way off!!!! Pick between 1 and 10.", function(){
      expect(guessNum(0)).toEqual("Way off!!!! Pick between 1 and 10.");
    });
    it("should return Guess again.", function(){
      expect(guessNum(1)).toEqual("Guess again.");
    });
    it("should return Guess again.", function(){
      expect(guessNum(2)).toEqual("Guess again.");
    });
    it("should return Guess again.", function(){
      expect(guessNum(9)).toEqual("Guess again.");
    });
    it("should return Guess again.", function(){
      expect(guessNum(10)).toEqual("Guess again.");
    });
    it("should return Way off!!!! Pick between 1 and 10.", function(){
      expect(guessNum(11)).toEqual("Way off!!!! Pick between 1 and 10.");
    });
  });





});
