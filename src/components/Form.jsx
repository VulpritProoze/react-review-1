function Form({
  method = "POST",
  action = "#",
  onSubmit = "#",
  inputElements = [
    label,
    type,
    placeHolder,
    className,
    attribs,
  ],
  submitLabel = "Submit",
  fieldsetClassName = "",
  fieldsetLegend = "",
}) {
  {
    /*
    inputElements: list of dict
    elements:
    label,
    type,
    placeHolder,
    className,
    attribs (such as 'required'),
*/
  }

  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      <fieldset className={`fieldset ${fieldsetClassName}`}>
        <legend className="fieldset-legend">{fieldsetLegend}</legend>
        {inputElements.map((element) => {
          return (
            <div key={element.label}>
              <label className="fieldset-label mb-1">{element.label}</label>
              <input
                type={element.type || "text"}
                placeholder={`${element.placeHolder}`}
                className={`input w-full mb-2 ${element.className}`}
                {...element.attribs}
              />
            </div>
          );
        })}
      </fieldset>
      <button type="submit" className="btn w-full mt-1 bg-black">
        {submitLabel}
      </button>
    </form>
  );
}

export default Form;
