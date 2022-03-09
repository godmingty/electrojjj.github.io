// var strin = "s=yanir;e=2022flwp;l=qm;m=5;r=r2;t=7833;as=[44];at=FALSE;au=0;al=0;ac=FALSE;tu=0;tl=0;wd=FALSE;wbt=FALSE;cif=x;ss=;c=x;lsr=x;be=FALSE;cn=0;ds=x;dr=x;ba=FALSE;d=FALSE;cf=FALSE;all=FALSE;co=;cnf=a"
// strin = strin.replaceAll("Y","true")
//     .replaceAll("N","false")
//     .replace("s", "scouter_name")
//     .replace(";e",";event")
//     .replace(";l",";Match_Level")
//     .replace("=qm","=Quals")
//     .replace("=ef","=Eighth-Final")
//     .replace("=qf","=Quarter-Final")
//     .replace("=sf","=Semi-Final")
//     .replace("=f","=Final")
//     .replace(";m",";Match")
//     .replace(";r",";Robot")
//     .replace(";t",";Team")
//     .replace(";at",";Taxi")
//     .replace(";au",";Upper_Cargo_Scored")
//     .replace(";al",";Lower_Cargo_Scored")
//     .replace(";ac",";Auto_Aquired_Cargo")
//     .replace(";tu",";Upper_Cargo_Scored_Teleop")
//     .replace(";tl",";Lower_Cargo_Scored_Teleop")
//     .replace(";wd",";Was_Defended")
//     .replace(";wbt",";Wallbot")
//     .replace(";cif",";Cargo_Intake_From")
//     .replace(";Cargo_Intake_From=t",";Cargo_Intake_From=Terminal")
//     .replace(";Cargo_Intake_From=g",";Cargo_Intake_From=Ground")
//     .replace(";Cargo_Intake_From=b",";Cargo_Intake_From=Both")
//     .replace(";Cargo_Intake_From=x",";Cargo_Intake_From=Not Attempted")
//     .replace(";ss",";Shooting_Spots")
//     .replace(";c",";Climb")
//     .replace(";Climb=1",";Climb=Low")
//     .replace(";Climb=2",";Climb=Mid")
//     .replace(";Climb=3",";Climb=High")
//     .replace(";Climb=4",";Climb=Traversal")
//     .replace(";Climb=a",";Climb=Attempted_but_failed")
//     .replace(";Climb=x",";Climb=Not_attempted")
//     .replace(";lsr",";If_climb_failed")
//     .replace(";If_climb_failed=1",";If_climb_failed=Low")
//     .replace(";If_climb_failed=2",";If_climb_failed=Mid")
//     .replace(";If_climb_failed=3",";If_climb_failed=High")
//     .replace(";If_climb_failed=4",";If_climb_failed=Traversal")
//     .replace(";If_climb_failed=n",";If_climb_failed=No successful")
//     .replace(";If_climb_failed=x",";If_climb_failed=n/a")
//     .replace(";be",";Started_Climb_before_Endgame")
//     .replace(";cn",";Num_of_Robots_Climbed")
//     .replace(";ds",";Driver_Skill")
//     .replace(";Driver_Skill=n",";Driver_Skill=Not Effective")
//     .replace(";Driver_Skill=a",";Driver_Skill=Average")
//     .replace(";Driver_Skill=v",";Driver_Skill=Very Effective")
//     .replace(";Driver_Skill=x",";Driver_Skill=Not Observed")
//     .replace(";dr",";Defense_Rating")
//     .replace(";Defense_Rating=n",";Defense_Rating=Not Effective")
//     .replace(";Defense_Rating=a",";Defense_Rating=Average")
//     .replace(";Defense_Rating=v",";Defense_Rating=Very Effective")
//     .replace(";Defense_Rating=x",";Defense_Rating=Not Observed")
//     .replace(";ba",";Shot_enemy_balls_away")
//     .replace(";d",";Died_Tipped")
//     .replace(";cf",";Card_Foul")
//     .replace(";all",";Make_good_alliance")
//     .replace(";co",";Comments")
//     .replace(";cnf",";Confidence_Rating")
//     .replace(";Confidence_Rating=v",";Confidence_Rating=Very Confident")
//     .replace(";Confidence_Rating=a",";Confidence_Rating=Average")
//     .replace(";Confidence_Rating=n",";Confidence_Rating=Not Confident")

// console.log(strin);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('String?', strin => {
    var properties = strin.split(';');
    var obj = {};
    properties.forEach(function(property) {
        var tup = property.split('=');
        obj[tup[0]] = tup[1];
    });
    console.log(obj);
    readline.close();
});