export default function CancelPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
        <h1 className="text-4xl font-bold text-red-600">Payment Canceled</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your payment was not completed. If this was a mistake, you can try again.
        </p>
        <a href="/#tickets" className="mt-8 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700">
          Back to Buying Tickets
        </a>
      </div>
    );
  }
  