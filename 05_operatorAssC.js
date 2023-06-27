console.log("TCS Interview Criteria : ");
var interviewTcs = function(gradScore, hscScore, sscScore, candidateName){
var result = gradScore>=70  || hscScore>=80  || sscScore>90 ? `Congrats ${candidateName} You are eligiable for TCS interview` : `Unfortunatly ${candidateName} you are not eligiable for TCS interwiev `;
console.log(`${result}`);
}
interviewTcs(80, 86, 90, "Apurva");
interviewTcs(70, 65, 55, "Shreyash");
interviewTcs(60, 79, 88, "Riya");