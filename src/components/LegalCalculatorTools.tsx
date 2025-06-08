
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, FileText, Home, Users } from 'lucide-react';

const LegalCalculatorTools: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<string>('business');
  
  // Business Setup Cost Calculator
  const [businessData, setBusinessData] = useState({
    businessType: '',
    location: '',
    employees: 0,
    activities: 1
  });

  // Property Calculator
  const [propertyData, setPropertyData] = useState({
    propertyValue: 0,
    propertyType: '',
    buyerType: ''
  });

  // Family Law Calculator
  const [familyData, setFamilyData] = useState({
    income: 0,
    children: 0,
    marriageDuration: 0
  });

  const calculateBusinessCost = () => {
    let baseCost = 0;
    
    switch (businessData.businessType) {
      case 'llc':
        baseCost = businessData.location === 'mainland' ? 15000 : 8000;
        break;
      case 'fze':
        baseCost = 12000;
        break;
      case 'branch':
        baseCost = 25000;
        break;
      default:
        baseCost = 10000;
    }
    
    const employeeCost = businessData.employees * 3000;
    const activityCost = (businessData.activities - 1) * 2000;
    
    return baseCost + employeeCost + activityCost;
  };

  const calculatePropertyFees = () => {
    const transferFee = propertyData.propertyValue * 0.04; // 4% transfer fee
    const registrationFee = Math.min(propertyData.propertyValue * 0.025, 20000); // 2.5% capped at AED 20,000
    const brokerFee = propertyData.propertyValue * 0.02; // 2% broker fee
    const legalFee = Math.max(propertyData.propertyValue * 0.005, 5000); // 0.5% legal fee, minimum AED 5,000
    
    return {
      transferFee,
      registrationFee,
      brokerFee,
      legalFee,
      total: transferFee + registrationFee + brokerFee + legalFee
    };
  };

  const calculateMaintenanceEstimate = () => {
    const baseAmount = familyData.income * 0.25; // 25% of income
    const childSupport = familyData.children * 2000; // AED 2,000 per child
    const durationFactor = Math.min(familyData.marriageDuration / 10, 1); // Max factor of 1 for 10+ years
    
    return (baseAmount + childSupport) * (0.5 + durationFactor * 0.5);
  };

  const calculators = [
    {
      id: 'business',
      title: 'Business Setup Cost Calculator',
      description: 'Estimate the costs for setting up your business in Dubai',
      icon: Users
    },
    {
      id: 'property',
      title: 'Property Transaction Calculator',
      description: 'Calculate fees and costs for Dubai property transactions',
      icon: Home
    },
    {
      id: 'family',
      title: 'Family Law Calculator',
      description: 'Estimate maintenance and support calculations',
      icon: FileText
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold mb-4">Legal Calculator Tools</h2>
        <p className="text-lg text-gray-600">Get instant estimates for legal costs and requirements in Dubai</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {calculators.map((calc) => (
          <Card 
            key={calc.id} 
            className={`cursor-pointer transition-all ${activeCalculator === calc.id ? 'ring-2 ring-precedential-gold' : ''}`}
            onClick={() => setActiveCalculator(calc.id)}
          >
            <CardHeader className="text-center">
              <calc.icon className="w-12 h-12 text-precedential-gold mx-auto mb-2" />
              <CardTitle className="text-lg">{calc.title}</CardTitle>
              <CardDescription>{calc.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {activeCalculator === 'business' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-6 h-6 mr-2 text-precedential-gold" />
              Business Setup Cost Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Business Type</label>
                <Select value={businessData.businessType} onValueChange={(value) => setBusinessData({...businessData, businessType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="llc">Limited Liability Company (LLC)</SelectItem>
                    <SelectItem value="fze">Free Zone Establishment (FZE)</SelectItem>
                    <SelectItem value="branch">Branch Office</SelectItem>
                    <SelectItem value="representative">Representative Office</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Select value={businessData.location} onValueChange={(value) => setBusinessData({...businessData, location: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mainland">Dubai Mainland</SelectItem>
                    <SelectItem value="freezone">Free Zone</SelectItem>
                    <SelectItem value="offshore">Offshore</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Number of Employees</label>
                <Input 
                  type="number" 
                  value={businessData.employees}
                  onChange={(e) => setBusinessData({...businessData, employees: parseInt(e.target.value) || 0})}
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Business Activities</label>
                <Input 
                  type="number" 
                  value={businessData.activities}
                  onChange={(e) => setBusinessData({...businessData, activities: parseInt(e.target.value) || 1})}
                  placeholder="1"
                  min="1"
                />
              </div>
            </div>
            
            {businessData.businessType && businessData.location && (
              <div className="mt-6 p-4 bg-precedential-gold/10 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Estimated Setup Cost</h3>
                <p className="text-2xl font-bold text-precedential-gold">
                  AED {calculateBusinessCost().toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  *This is an estimate. Actual costs may vary based on specific requirements and government fees.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {activeCalculator === 'property' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Home className="w-6 h-6 mr-2 text-precedential-gold" />
              Property Transaction Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Property Value (AED)</label>
                <Input 
                  type="number" 
                  value={propertyData.propertyValue}
                  onChange={(e) => setPropertyData({...propertyData, propertyValue: parseInt(e.target.value) || 0})}
                  placeholder="1000000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Property Type</label>
                <Select value={propertyData.propertyType} onValueChange={(value) => setPropertyData({...propertyData, propertyType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Buyer Type</label>
                <Select value={propertyData.buyerType} onValueChange={(value) => setPropertyData({...propertyData, buyerType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select buyer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="company">Company</SelectItem>
                    <SelectItem value="foreign">Foreign Investor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {propertyData.propertyValue > 0 && (
              <div className="mt-6 p-4 bg-precedential-gold/10 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Transaction Cost Breakdown</h3>
                {(() => {
                  const fees = calculatePropertyFees();
                  return (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Transfer Fee (4%):</span>
                        <span>AED {fees.transferFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Registration Fee (2.5%):</span>
                        <span>AED {fees.registrationFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Broker Fee (2%):</span>
                        <span>AED {fees.brokerFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Legal Fee (0.5%):</span>
                        <span>AED {fees.legalFee.toLocaleString()}</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Estimated Costs:</span>
                        <span className="text-precedential-gold">AED {fees.total.toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {activeCalculator === 'family' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-6 h-6 mr-2 text-precedential-gold" />
              Family Law Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Monthly Income (AED)</label>
                <Input 
                  type="number" 
                  value={familyData.income}
                  onChange={(e) => setFamilyData({...familyData, income: parseInt(e.target.value) || 0})}
                  placeholder="20000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Number of Children</label>
                <Input 
                  type="number" 
                  value={familyData.children}
                  onChange={(e) => setFamilyData({...familyData, children: parseInt(e.target.value) || 0})}
                  placeholder="0"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Marriage Duration (Years)</label>
                <Input 
                  type="number" 
                  value={familyData.marriageDuration}
                  onChange={(e) => setFamilyData({...familyData, marriageDuration: parseInt(e.target.value) || 0})}
                  placeholder="5"
                  min="0"
                />
              </div>
            </div>
            
            {familyData.income > 0 && (
              <div className="mt-6 p-4 bg-precedential-gold/10 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Estimated Monthly Maintenance</h3>
                <p className="text-2xl font-bold text-precedential-gold">
                  AED {calculateMaintenanceEstimate().toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  *This is an estimate based on UAE family law guidelines. Actual amounts are determined by the court based on individual circumstances.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold mb-2">Need Professional Legal Advice?</h3>
        <p className="text-gray-600 mb-4">These calculators provide estimates only. For accurate legal advice tailored to your situation, consult with our experts.</p>
        <Button className="bg-precedential-gold text-precedential-black hover:bg-precedential-goldLight">
          Schedule Consultation
        </Button>
      </div>
    </div>
  );
};

export default LegalCalculatorTools;
