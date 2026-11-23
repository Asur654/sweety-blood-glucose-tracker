import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Activity, CheckCircle2, AlertCircle } from 'lucide-react';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/health')
      .then(res => {
        setBackendStatus(res.data.status === 'ok' ? 'Connected & Healthy' : 'Unexpected Response');
        setLoading(false);
      })
      .catch(err => {
        setBackendStatus('Not connected (start backend server on :5000)');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
        <div className="inline-flex p-3 rounded-2xl bg-emerald-50 text-emerald-600 mb-4">
          <Activity className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Sweety</h1>
        <p className="text-sm text-slate-500 mt-1">Blood Glucose Tracker (MERN + PostgreSQL)</p>

        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">System Status</p>
          <div className="flex items-center space-x-2">
            {backendStatus.includes('Connected') ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
            )}
            <span className="text-sm text-slate-700 font-medium">Backend API: {backendStatus}</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-400">
          Setup Phase Initialized • Ready for Model Definitions
        </div>
      </div>
    </div>
  );
}

export default App;
