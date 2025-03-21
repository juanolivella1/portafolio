import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await emailjs.send(
        "service_t64pndg", // Reemplaza con tu Service ID
        "template_ys7291b", // Reemplaza con tu Template ID
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        "tgwsHBe7FMki5uSgF" // Reemplaza con tu Public Key
      );
      
      console.log("Correo enviado con éxito", response.status, response.text);
      alert("Mensaje enviado con éxito");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contáctame</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-md dark:bg-gray-900 ">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 dark:bg-gray-900 "
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Ingresa tu email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 dark:bg-gray-900"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
                placeholder="¿En que puedo ayudarte?"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 dark:bg-gray-900"
            />
          </div>
          <button
  type="submit"
  className={`
    w-full
    bg-blue-600
    text-white
    py-3
    px-6
    rounded-lg
    font-semibold
    transition-colors
    duration-150
    ease-in-out
    ${loading 
      ? 'bg-blue-400 cursor-not-allowed' 
      : 'hover:bg-blue-700 active:bg-blue-800'
    }
  `}
  disabled={loading}
  aria-label={loading ? 'Enviando mensaje, por favor espera' : 'Enviar mensaje de contacto'}
>
  <span className="flex items-center justify-center gap-2">
    {loading && (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )}
    {loading ? 'Enviando...' : 'Enviar'}
  </span>
</button> 
        </form>
      </div>
    </section>
  );
};

export default Contact;
