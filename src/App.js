import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

const MOYA_FILYA = 'Filya'

const BUTTON_VALUE = "" +
  "Можно было бы хранить где-то ещё и брать где-то ещё.. " +
  "Например на сервере. " +
  "Но порой ЛС тоже нужен."

const MyCatKey = 'myCat';


function App() {

  const onClickMyCatAccessor = async event => {

    const promise1 = new Promise((resolve, reject) => {
      //TODO Базовый ивент обыграть
      //
      // /*1.*/ console.log("event: ", event)
      // /*2.*/ console.log("event.value: ", event.valueOf());


      localStorage.setItem(MyCatKey, MOYA_FILYA);
      // const myKatSetItemResult = localStorage.setItem(myCatKey, MOYA_FILYA);
      // console.log("myKat setItem result: ", myKatSetItemResult); // undefined

      const myKat = localStorage.getItem(MyCatKey)

      console.log("myKatFromLocalStorage ", myKat); // Filya // #1 по очереди вывода в лог

      // // Посчитано спустя время браузером
      // // ________  promise1 myCat result: [Promise object with fields] :
      // //
      // // [[PromiseStatus]]: "rejected"
      // // [[PromiseValue]]: "Reject reason"
      //
      // if (true) reject("Reject reason")

      resolve(myKat);
    });

    const promise1Result = promise1
      .then((value) => {
        // спустя время выполняется
        console.log("promise1 successfully resolved result: ", value); // Filya // №3 по очереди вывода в лог

        return value + " __ added in first then Promise..."
        // event.valueOf() expected output: "Success!"
      })
      .then(resultOfPreviousThen => {
        // console.log("resultOfPreviousThen ", resultOfPreviousThen); // Filya __ added in first then
        // Promise...

        return resultOfPreviousThen
      })
    console.log("---- await promise1Result ", await promise1Result); // Filya __ added in first then Promise...

    console.log("_________  Promise result: ", promise1); // №2 по очереди вывода в лог
  }

  return (
    <Button variant="contained"
            color="primary"
            onClick={onClickMyCatAccessor}
            value={BUTTON_VALUE}
            className="Button"
    >
      AVE_FILYA
    </Button>
  );
}

export default App;
