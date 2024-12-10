export default function SuccessPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
        <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Thank you for your purchase. Your ticket has been booked successfully. 
        </p>
        <p className="mt-4 text-lg text-gray-700">
        Tickets will be sent to your email in 24 hours. If there are any problems - email us at info@realitiexpress.com 
        </p>
        <a href="/" className="mt-8 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700">
          Back to Home
        </a>
      </div>
    );
  }