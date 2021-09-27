import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'

const App = () => {
  return <div className='App'>
    <Routes/>
  </div>
}

const links = {
  codePage: `/card-code`,
  addOrWithdrawPage: `/add-or-withdraw`,
  addCashPage: `/add-cash`,
  withdrawCashPage: `/withdraw-cash`,
}

const Routes = () => {
  return <Switch>
    <Route exact path={`/`}>
      <InsertCard/>
    </Route>
    <Route path={links.codePage}>
      <CardCode/>
    </Route>
    <Route path={links.addOrWithdrawPage}>
      <AddOrWithdrawCash/>
    </Route>
    <Route path={links.addCashPage}>
      <AddCashPage/>
    </Route>
    <Route path={links.withdrawCashPage}>
      <WithdrawCashPage/>
    </Route>
  </Switch>
}

const InsertCard = () => {
  return <div>
    <h1>Доброго времени суток</h1>
    <h2>Для продолжения работы, необходимо вставить карту</h2>
    <Link to={links.codePage}>
      <button>
        Вставить карту
      </button>
    </Link>
  </div>
}

const CardCode = () => {
  const [val, setVal] = useState<string>('')

  return <div>
    <h2>Ваш номер карты: 0000 0000 0000 0000</h2>
    <h2>Введите пинкод</h2>
    <input
      maxLength={4}
      placeholder={'0000'}
      //проверка на число
      onChange={e => !isNaN(Number(e.target.value)) && setVal(e.target.value)}
      value={val}
      type='password'/>
  </div>
}

const AddOrWithdrawCash = () => {
  return <div>
    <Link to={links.addCashPage}>Положить деньги на карту</Link><br/>
    <Link to={links.withdrawCashPage}>Вывести деньги с карты</Link>
  </div>
}

const AddCashPage = () => {
  return <div>
    <h2>Внести деньги</h2>
    <InputComponent buttonEvent={(v) => alert(`внесено -` + v)}/>
    <MoneyOnCard/>
    <MoneyOnPurse/>
  </div>
}

const WithdrawCashPage = () => {
  return <div>
    <h2>Вывести деньги</h2>
    <InputComponent buttonEvent={(v) => alert(`получено -` + v)}/>
    <MoneyOnCard/>
    <MoneyOnPurse/>
  </div>
}

interface InputComponentPropsType {
  buttonEvent: (sum: number) => void
}

const InputComponent = (props: InputComponentPropsType) => {
  useEffect(() => {
    return () => setVal(``)
  }, [])
  const [val, setVal] = useState<string>()
  return <div>
    <input
      placeholder={`Введите сумму`}
      value={val}
      //проверка на число
      onChange={e => !isNaN(Number(e.target.value)) && setVal(e.target.value)}
      type='text'/>
    <button
      onClick={() => props.buttonEvent(Number(val))}>
      Подтвердить
    </button>
  </div>
}

const MoneyOnCard = () => {
  let sum = 1000000
  return <div>
    <span>Баланс карты - {sum}</span>
  </div>
}

const MoneyOnPurse = () => {
  let sum = 1000000
  return <div>
    <span>Баланс кошелька - {sum}</span>
  </div>
}

export default App
