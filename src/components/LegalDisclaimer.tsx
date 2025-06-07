
import React from 'react';
import { AlertTriangle, Shield, FileText } from 'lucide-react';

const LegalDisclaimer: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-precedential-gold/10">
                <Shield className="w-8 h-8 text-precedential-gold" />
              </div>
            </div>
            <h2 className="text-3xl font-playfair font-bold mb-4">Legal Disclaimers & Privacy</h2>
            <p className="text-lg text-gray-600">
              Important information regarding our legal services and your privacy rights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-precedential-gold mr-3" />
                <h3 className="text-xl font-bold">Attorney-Client Privilege</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Communications with our legal team are protected by attorney-client privilege under UAE law. 
                All consultations remain strictly confidential.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Initial consultations are confidential</li>
                <li>• All documents are securely stored</li>
                <li>• Information shared only with your consent</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-precedential-gold mr-3" />
                <h3 className="text-xl font-bold">Professional Standards</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our practice adheres to the highest professional standards as established by UAE legal regulations 
                and international best practices.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Licensed to practice in UAE</li>
                <li>• Continuing legal education compliance</li>
                <li>• Professional liability insurance</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Important Legal Notices</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">No Attorney-Client Relationship</h4>
                <p className="text-gray-700 text-sm">
                  Visiting this website or contacting our firm does not create an attorney-client relationship. 
                  Such a relationship is established only through a signed engagement agreement.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Case Results Disclaimer</h4>
                <p className="text-gray-700 text-sm">
                  Prior results do not guarantee similar outcomes. Each legal matter is unique and outcomes 
                  depend on specific facts and circumstances.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Jurisdictional Limitations</h4>
                <p className="text-gray-700 text-sm">
                  Our practice is limited to UAE law. We do not provide legal advice regarding laws of other 
                  jurisdictions unless specifically qualified to do so.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Privacy Protection</h4>
                <p className="text-gray-700 text-sm">
                  We are committed to protecting your privacy. Personal information is collected and used in 
                  accordance with UAE data protection regulations and our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
