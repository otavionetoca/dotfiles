import './form.css';

function CreditCardForm(): JSX.Element {
  const handleSubmit = (): void => {
    console.log('handling form submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="credit-card-number">Credit card number</label>
        <input id="credit-card-number" type="number" />
      </div>
    </form>
  )
}

export default CreditCardForm;
