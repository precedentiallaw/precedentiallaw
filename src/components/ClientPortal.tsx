
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, DollarSign, MessageSquare, Download, Clock, CheckCircle2 } from 'lucide-react';

const ClientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const mockCases = [
    {
      id: 'C001',
      title: 'Business License Application',
      status: 'In Progress',
      attorney: 'Sarah Al Mansouri',
      lastUpdate: '2024-01-15',
      nextAction: 'Document review scheduled'
    },
    {
      id: 'C002',
      title: 'Commercial Contract Review',
      status: 'Completed',
      attorney: 'Ahmed Khalid',
      lastUpdate: '2024-01-10',
      nextAction: 'Final documents delivered'
    }
  ];

  const mockDocuments = [
    {
      name: 'Business License Draft.pdf',
      date: '2024-01-15',
      size: '2.4 MB',
      type: 'Contract'
    },
    {
      name: 'Legal Opinion - Tax Matters.pdf',
      date: '2024-01-12',
      size: '1.8 MB',
      type: 'Opinion'
    }
  ];

  const mockInvoices = [
    {
      id: 'INV-001',
      date: '2024-01-15',
      amount: 'AED 5,000',
      status: 'Paid',
      description: 'Legal consultation services'
    },
    {
      id: 'INV-002',
      date: '2024-01-01',
      amount: 'AED 3,500',
      status: 'Pending',
      description: 'Document review services'
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Client Portal Login</CardTitle>
            <CardDescription>Access your legal matters and documents</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                Sign In
              </Button>
              <div className="text-center">
                <Button variant="link" size="sm">Forgot password?</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-playfair font-bold">Client Portal</h1>
        <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
          Sign Out
        </Button>
      </div>

      <Tabs defaultValue="cases" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="cases">My Cases</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="cases" className="space-y-4">
          {mockCases.map((case_) => (
            <Card key={case_.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{case_.title}</CardTitle>
                    <CardDescription>Case ID: {case_.id} • Attorney: {case_.attorney}</CardDescription>
                  </div>
                  <Badge variant={case_.status === 'Completed' ? 'default' : 'secondary'}>
                    {case_.status === 'Completed' ? <CheckCircle2 className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                    {case_.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Last Update:</strong> {case_.lastUpdate}
                  </div>
                  <div>
                    <strong>Next Action:</strong> {case_.nextAction}
                  </div>
                </div>
                <div className="mt-4">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          {mockDocuments.map((doc, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-precedential-gold" />
                    <div>
                      <h3 className="font-medium">{doc.name}</h3>
                      <p className="text-sm text-gray-500">{doc.date} • {doc.size} • {doc.type}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          {mockInvoices.map((invoice) => (
            <Card key={invoice.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Invoice {invoice.id}</h3>
                    <p className="text-sm text-gray-500">{invoice.description}</p>
                    <p className="text-sm text-gray-500">{invoice.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{invoice.amount}</p>
                    <Badge variant={invoice.status === 'Paid' ? 'default' : 'destructive'}>
                      {invoice.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Secure Messages</CardTitle>
              <CardDescription>Communicate securely with your legal team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Case Update - Business License</h4>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-700">Your business license application has been submitted to the relevant authorities. We expect a response within 5-7 business days.</p>
                  <p className="text-sm font-medium mt-2">- Sarah Al Mansouri</p>
                </div>
                
                <div className="flex space-x-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientPortal;
