import './form.css';

function CreditCardForm(): JSX.Element {
  const handleSubmit = (): void => {
    console.log('handling form submit')
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input id="cardholder-name" type="text" />

      <label htmlFor='card-number'>Card Number</label>
      <input id='credit-card-number' type='number'/>

      <label htmlFor='expiry-date'>Exp. Date (MM/YY)</label>
      <input id='expiry-month'></input>
      <input id='expiry-year'></input>
    </form>
  )
}

export default CreditCardForm
