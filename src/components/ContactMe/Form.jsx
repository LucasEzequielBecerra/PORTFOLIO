import React from 'react'

const Form = () => {
  return (
    <form onSubmit={} id="myForm" className="">
      <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={name}
        onChange={}
        required
        className=""
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        name="email"
        value={email}
        onChange={}
        required
        className=""
      />
      <input
        type="text"
        placeholder="Asunto"
        name="subject"
        value={subject}
        onChange={}
        required
        className=""
      />
      <textarea
        placeholder="Mensaje"
        rows="5"
        name="message"
        value={message}
        onChange={}
        required
        className=""
      />

      <div className="">
        <button
          type="submit"
          disabled={!!isLoading}
          className=""
        >
          {isLoading ? (
            <div className="">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className=""
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className=""
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </div>
          ) : (
            <div className="">
              Enviar
            </div>
          )}
        </button>
      </div>

      <div className="">
        <div
          className=""
          role="alert"
          ref={alertSumbitMail}
        >
          <strong>¡Mensaje enviado!</strong>
          <br />
          Te responderé lo antes posible.
        </div>
        <div
          className=""
          role="alert"
          ref={alertErrorMail}
        >
          <strong>¡El mensaje no se pudo enviar!</strong>
          <br />
          Por favor, intenta nuevamente más tarde.
        </div>
      </div>
    </form>
  )
}

export default Form