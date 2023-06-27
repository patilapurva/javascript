

var interviewEligibility = function (gredScore,hscScore,sscScore, candidateName) {
    if (gredScore >= 70) {
      console.log(`Congrates ${candidateName} you are eligible for TCS intrview `);
    } else {
      if (hscScore >= 80) {
        console.log(`Congrates ${candidateName} you are eligible for TCS intrview `);
      } else {
        if (sscScore > 90) {
          console.log(`Congrates ${candidateName} you are eligible for TCS intrview `);
        } else {
          console.log(`Unfortuntely ${candidateName} you are not eligible for intrview `);
        }
      }
    }
  };
  interviewEligibility(80, 86, 90, "Apurva");
  interviewEligibility(70, 65, 55, "Shital");
  interviewEligibility(60, 79, 88, "Shreyash");