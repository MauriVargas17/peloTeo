export const PaymentPage = ({hora}: {hora: string}) => {
  const whatsappNumber = '+59177587417'; // Tu número de WhatsApp en formato internacional sin el signo '+'
  const whatsappMessage = encodeURIComponent(`Hola, adjunto mi comprobante de pago, acabo de hacer una reserva para las ${hora}.`); // Mensaje predefinido para WhatsApp

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Escanee para Pagar</h1>
        <p className="text-gray-600 text-center mb-4">Por favor, escanee el siguiente código QR para realizar su pago.</p>
        <div className="flex justify-center">
          <img src='https://boofcv.org/images/thumb/3/35/Example_rendered_qrcode.png/400px-Example_rendered_qrcode.png'/>
        </div>
        <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank"
           className="mt-4 block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Enviar comprobante por WhatsApp
        </a>
      </div>
    </div>
  );
}