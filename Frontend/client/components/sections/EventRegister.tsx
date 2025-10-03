import { useState, FormEvent } from "react";
import { submitEventRegistration, EventRegistration } from "../../../shared/api";

export default function EventRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: Omit<EventRegistration, 'id' | 'created_at'> = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      event: formData.get('event') as string,
      message: formData.get('message') as string,
    };

    try {
      const result = await submitEventRegistration(data);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Failed to register for event');
      }
    } catch (error) {
      setError('Network error. Please check if the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return <div className="p-4 text-green-600">Registration successful!</div>;
  }

  return (
    <form onSubmit={onSubmit} className="p-4 max-w-md mx-auto space-y-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Register Now</h2>
      <input name="name" type="text" placeholder="Your Name" required className="w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
      <input name="event" type="text" placeholder="Event Name" required className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Message (optional)" className="w-full p-2 border rounded" />
      {error && <div className="text-red-600">{error}</div>}
      <button type="submit" disabled={isLoading} className="px-4 py-2 bg-blue-600 text-white rounded">
        {isLoading ? 'Registering...' : 'Register Now'}
      </button>
    </form>
  );
}
