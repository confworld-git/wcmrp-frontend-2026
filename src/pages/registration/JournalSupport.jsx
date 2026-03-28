import React, { useState } from "react";
import { journalPackages } from "../../utils/journalData";
import PackageInclusionsModal from "./PackageInclusionsModal";

const JournalSupport = ({ selectedJournal, setSelectedJournal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (pkg) => {
    if (selectedJournal?.id === pkg.id) {
      setSelectedJournal(null);
    } else {
      setSelectedJournal(pkg);
    }
  };

  return (
    <div className="py-8 px-4 md:px-6">
      <div className="text-center mb-8">
       
        <h2 className="text-2xl font-bold text-indigo-700 mb-2">Research Publication Support</h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
          Increase the impact of your research with structured support for publication in Q1, Q2, Q3, Q4 Scopus indexed journals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {journalPackages.map((pkg) => {
          const isSelected = selectedJournal?.id === pkg.id;
          return (
            <div
              key={pkg.id}
              className={`relative rounded-2xl border-2 p-5 flex flex-col transition-all duration-200 ${
                isSelected
                  ? "border-indigo-800 shadow-lg shadow-indigo-600/20 bg-indigo-600"
                  : "border-indigo-600 bg-indigo-50 hover:border-indigo-800 hover:shadow-md"
              }`}
            >
              
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 text-xs font-bold">✓</span>
                </div>
              )}
              <h3 className={`font-bold text-base mb-0.5 pr-8 ${isSelected ? "text-white" : "text-gray-800"}`}>{pkg.tier}</h3>
              <p className={`text-[10px] font-semibold uppercase tracking-widest mb-4 ${isSelected ? "text-indigo-100" : "text-gray-400"}`}>{pkg.package}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-orange-400 text-xs font-semibold">⚡ Exclusive Offer</span>
                <span className={`text-2xl font-extrabold ${isSelected ? "text-white" : "text-indigo-700"}`}>${pkg.specialPrice.toLocaleString()}</span>
              </div>
              <p className={`text-xs mb-5 ${isSelected ? "text-indigo-100" : "text-gray-400"}`}>
                Regular: <span className="line-through">${pkg.regularPrice.toLocaleString()} USD</span>
              </p>
              <div className={`mb-5 inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg w-fit ${
                isSelected ? "bg-white/20 text-white" : "bg-indigo-100 text-indigo-700"
              }`}>
                Save ${(pkg.regularPrice - pkg.specialPrice).toLocaleString()}
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => handleSelect(pkg)}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    isSelected ? "bg-white text-indigo-700 hover:bg-indigo-50" : "bg-indigo-700 text-white hover:bg-indigo-800"
                  }`}
                >
                  {isSelected ? "✓ Added" : "Add"}
                </button>
                
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex pt-4">
  <button
    type="button"
    onClick={() => setModalOpen(true)}
    className="py-2 px-4 rounded-xl text-xs font-medium border border-indigo-600 text-indigo-600 transition-colors flex items-center justify-center gap-1.5 ml-auto"
    
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(58,74,0,0.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "transparent";
    }}
  >
    <span className="text-indigo-600">👁 View Full Inclusions</span> 
  </button>
</div>

      {selectedJournal && (
        <div className="mt-5 flex items-center justify-between bg-indigo-600 rounded-xl px-5 py-3 shadow-md shadow-indigo-200">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <span className="text-indigo-600 text-xs font-bold">✓</span>
            </span>
            <span className="text-sm font-medium text-white">{selectedJournal.tier} selected</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-white">+${selectedJournal.specialPrice.toLocaleString()}</span>
            <button type="button" onClick={() => setSelectedJournal(null)} className="text-xs text-red-200 hover:text-red-100 font-medium underline">
              Remove
            </button>
          </div>
        </div>
      )}

      <PackageInclusionsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default JournalSupport;