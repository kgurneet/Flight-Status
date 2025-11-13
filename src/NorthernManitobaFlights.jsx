import React, { useState } from 'react';
import { Plane, Search, Calendar, MapPin, Building2, Clock, AlertCircle } from 'lucide-react';

import React, { useState } from 'react';
import { Plane, Search, Calendar, MapPin, Building2, Clock, AlertCircle } from 'lucide-react';

const NorthernManitobaFlights = () => {
  const [airline, setAirline] = useState('');
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const airlines = [
    'Calm Air',
    'Perimeter Aviation',
    'Keewatin Air',
    'Missinippi Airways',
    'Fast Air',
    'Wasaya Airways'
  ];

  const destinations = [
    'Churchill',
    'Thompson',
    'The Pas',
    'Winnipeg',
    'Island Lake',
    'St. Theresa Point',
    'Garden Hill',
    'Wasagamack',
    'Red Sucker Lake',
    'Gods Lake Narrows',
    'Gods River',
    'Oxford House',
    'Shamattawa',
    'York Landing',
    'Ilford',
    'Pukatawagan',
    'Brochet',
    'Tadoule Lake',
    'Lac Brochet',
    'South Indian Lake',
    'Lynn Lake',
    'Leaf Rapids',
    'Gillam',
    'Fox Lake'
  ];

  const generateMockFlights = () => {
    const mockFlights = [
      { airline: 'Calm Air', flight: 'CA501', origin: 'Winnipeg', destination: 'Churchill', time: '08:30', status: 'On Time', gate: 'A12', terminal: '1' },
      { airline: 'Calm Air', flight: 'CA302', origin: 'Thompson', destination: 'Winnipeg', time: '10:15', status: 'Boarding', gate: 'B8', terminal: '1' },
      { airline: 'Perimeter Aviation', flight: 'PAG701', origin: 'Winnipeg', destination: 'Island Lake', time: '09:45', status: 'On Time', gate: 'C3', terminal: '2' },
      { airline: 'Perimeter Aviation', flight: 'PAG412', origin: 'St. Theresa Point', destination: 'Winnipeg', time: '11:30', status: 'Delayed', gate: 'B5', terminal: '1' },
      { airline: 'Keewatin Air', flight: 'KAR203', origin: 'Thompson', destination: 'Gods Lake Narrows', time: '12:00', status: 'On Time', gate: 'A7', terminal: '1' },
      { airline: 'Missinippi Airways', flight: 'MAW155', origin: 'The Pas', destination: 'Pukatawagan', time: '13:20', status: 'Departed', gate: 'C1', terminal: '2' },
      { airline: 'Calm Air', flight: 'CA615', origin: 'Winnipeg', destination: 'Thompson', time: '14:00', status: 'On Time', gate: 'A15', terminal: '1' },
      { airline: 'Wasaya Airways', flight: 'WSG420', origin: 'Garden Hill', destination: 'Winnipeg', time: '15:45', status: 'On Time', gate: 'B12', terminal: '1' },
      { airline: 'Perimeter Aviation', flight: 'PAG890', origin: 'Winnipeg', destination: 'Shamattawa', time: '16:30', status: 'Boarding', gate: 'C5', terminal: '2' },
      { airline: 'Keewatin Air', flight: 'KAR308', origin: 'Oxford House', destination: 'Thompson', time: '17:00', status: 'On Time', gate: 'A9', terminal: '1' }
    ];

    return mockFlights.filter(flight => {
      const matchAirline = !airline || flight.airline === airline;
      const matchOrigin = !origin || flight.origin === origin;
      const matchDestination = !destination || flight.destination === destination;
      return matchAirline && matchOrigin && matchDestination;
    });
  };

  const handleSearch = () => {
    const filteredFlights = generateMockFlights();
    setResults(filteredFlights);
    setSearched(true);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'On Time': return 'text-green-700 bg-green-100 border-green-300';
      case 'Boarding': return 'text-blue-700 bg-blue-100 border-blue-300';
      case 'Delayed': return 'text-orange-700 bg-orange-100 border-orange-300';
      case 'Departed': return 'text-gray-700 bg-gray-100 border-gray-300';
      case 'Cancelled': return 'text-red-700 bg-red-100 border-red-300';
      default: return 'text-gray-700 bg-gray-100 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'Delayed') return <AlertCircle size={16} />;
    if (status === 'Boarding') return <Clock size={16} />;
    return null;
  };

  const auroraImage = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2000';
  const fallsImage = 'https://www.travelmanitoba.com/imager/cmsimages/01-things-to-do/outdoors-nature/140527/Kwasitchewan-Falls-aerial_Credit-Kyle-Schappert-large_7720ea4b9ce3111350aa9ec49f07b273.jpg';
  const lakeImage = 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2000';

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${auroraImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-900/90 to-teal-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 mb-8 border border-emerald-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <Plane className="text-emerald-300" size={36} />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Northern Manitoba Flight Status</h1>
                    <p className="text-emerald-200 mt-1">Serving First Nations Communities</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-emerald-200 text-sm">Current Time</div>
                <div className="text-white text-2xl font-bold">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 mb-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Search size={24} className="text-teal-600" />
              Search Flights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Building2 size={18} className="text-teal-600" />
                  Airline
                </label>
                <select
                  value={airline}
                  onChange={(e) => setAirline(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white transition-all"
                >
                  <option value="">All Airlines</option>
                  {airlines.map(a => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <MapPin size={18} className="text-teal-600" />
                  From
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white transition-all"
                >
                  <option value="">All Origins</option>
                  {destinations.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <MapPin size={18} className="text-emerald-600" />
                  To
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white transition-all"
                >
                  <option value="">All Destinations</option>
                  {destinations.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Calendar size={18} className="text-teal-600" />
                  Date
                </label>
                <input
                  type="date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="w-full p-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white transition-all"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
            >
              <Search size={22} />
              Search Flights
            </button>
          </div>

          {searched && (
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800">
                  Flight Results
                </h2>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold">
                  {results.length} flights found
                </span>
              </div>
              
              {results.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <div className="bg-slate-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <Plane size={48} className="opacity-30" />
                  </div>
                  <p className="text-lg font-medium">No flights found matching your search criteria.</p>
                  <p className="text-sm mt-2">Try adjusting your filters</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((flight, idx) => (
                    <div key={idx} className="border-2 border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-teal-300 transition-all bg-white">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-gradient-to-br from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold">
                              {flight.airline}
                            </div>
                            <div className="bg-slate-100 px-4 py-2 rounded-lg">
                              <span className="font-mono text-slate-700 font-semibold">{flight.flight}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="text-left">
                              <div className="text-xs text-slate-500 uppercase font-semibold mb-1">From</div>
                              <div className="text-lg font-bold text-slate-800">{flight.origin}</div>
                            </div>
                            <div className="flex items-center gap-2 px-4">
                              <div className="h-px w-12 bg-slate-300"></div>
                              <Plane size={20} className="text-teal-600" />
                              <div className="h-px w-12 bg-slate-300"></div>
                            </div>
                            <div className="text-left">
                              <div className="text-xs text-slate-500 uppercase font-semibold mb-1">To</div>
                              <div className="text-lg font-bold text-slate-800">{flight.destination}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 lg:border-l-2 lg:border-slate-200 lg:pl-6">
                          <div className="text-center">
                            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Departure</div>
                            <div className="text-3xl font-bold text-slate-800">{flight.time}</div>
                            <div className="text-xs text-slate-500 mt-1">Gate {flight.gate} • Terminal {flight.terminal}</div>
                          </div>
                          
                          <div className={`px-6 py-3 rounded-xl font-bold border-2 flex items-center gap-2 min-w-[140px] justify-center ${getStatusColor(flight.status)}`}>
                            {getStatusIcon(flight.status)}
                            {flight.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {!searched && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-blue-700/50">
                  <img 
                    src={auroraImage}
                    alt="Northern Lights Manitoba"
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-sm p-4">
                    <h3 className="text-white font-bold">Aurora Borealis</h3>
                    <p className="text-blue-200 text-sm">Northern Manitoba Skies</p>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-blue-700/50">
                  <img 
                    src={fallsImage}
                    alt="Kwasitchewan Falls"
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-sm p-4">
                    <h3 className="text-white font-bold">Kwasitchewan Falls</h3>
                    <p className="text-blue-200 text-sm">Natural Wonder</p>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-blue-700/50">
                  <img 
                    src={lakeImage}
                    alt="Northern Lake"
                    className="w-full h-48 object-cover"
                  />
                  <div className="bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-sm p-4">
                    <h3 className="text-white font-bold">Pristine Waters</h3>
                    <p className="text-blue-200 text-sm">Remote Communities</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-sm border-2 border-blue-700/50 rounded-xl p-6 text-blue-100 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-700/50 p-3 rounded-lg backdrop-blur-sm flex-shrink-0">
                    <MapPin size={24} className="text-blue-200" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-2 text-white">🌟 Serving Remote Northern Manitoba Communities</p>
                    <p className="leading-relaxed">This application provides real-time flight information for remote First Nations communities throughout Northern Manitoba, including Churchill, Island Lake, Gods Lake Narrows, St. Theresa Point, Garden Hill, and many others. These essential air services connect communities to vital resources, healthcare, and family.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NorthernManitobaFlights;