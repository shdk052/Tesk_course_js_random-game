// פונקצייה בJS
// let - משתנה שניתן לשנות את הערך שלו
// const - משתנה שלא ניתן לשנות את הערך שלו
// document.getElementById - פונקצייה שמחזירה אלמנט מהדף לפי הID שלו
// value - מאפיין שמחזיר את הערך של אלמנט (למשל, מה שהמשתמש כתב בתיבת טקסט)
// parseInt - פונקצייה שממירה מחרוזת למספר שלם

function game () {
    let guess = parseInt(document.getElementById("num").value);

    // תנאי שמוודא שהמשתמש בחר מספר בין 1 ל-5
    if (guess < 1 || guess > 5) {
        document.getElementById("msg").innerHTML = "אנא בחר מספר בין 1 ל-5!";
    }

    else {
        let rand_num = Math.floor(Math.random()*5) + 1; // המשך תנאי שמייצרת מספר רנדומלי בין 1 ל-5
        if (guess === rand_num) {
            document.getElementById("result").innerHTML = "  כל הכבוד! ניחשת נכון!";
        }
        else {
            document.getElementById("result").innerHTML = "  לא ניחשת נכון, נסה שוב!";
        }
        document.getElementById("msg").innerHTML = "המספר שהוגרל הוא: " + rand_num;
    }
    }


