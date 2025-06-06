
import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && name && email) {
      setStep(2);
    } else if (step === 2 && message) {
      // Here you would typically send the message to your chat system
      console.log('Chat message:', { name, email, message });
      alert('Thank you for your message. Our legal team will respond within 15 minutes during business hours.');
      setIsOpen(false);
      // Reset form
      setStep(1);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-20 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight rounded-full w-14 h-14 shadow-lg flex items-center justify-center"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 w-80 bg-white rounded-lg shadow-2xl border z-50 max-h-96 flex flex-col">
          {/* Header */}
          <div className="bg-precedential-black text-white p-4 rounded-t-lg">
            <h3 className="font-bold">Live Legal Chat</h3>
            <p className="text-sm opacity-90">Get immediate legal assistance</p>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4">
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  Start Chat
                </Button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <p className="text-sm mb-2">Hello {name}! How can we help you today?</p>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your legal question..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-50 rounded-b-lg">
            <p className="text-xs text-gray-500 text-center">
              Response time: 15 min during business hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
