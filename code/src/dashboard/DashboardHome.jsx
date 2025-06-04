import React from "react";
import DashboardNavbar from "../components/adminpage/DashboardNavbar";
import { FiMail, FiDollarSign } from "react-icons/fi";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const DashboardHome = () => {
  // Dummy data - replace with your API calls later
  const metrics = {
    emailsSent: 660,
    salesObtained: 51,
  };

  // Chart configuration
  const chartData = {
    labels: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"],
    datasets: [
      {
        label: "Prodejů",
        data: [1, 1, 2, 4, 3, 2, 4, 5, 8, 5, 6, 10],
        backgroundColor: "#02af5f",
      },
      {
        label: "Odeslaných E-mailů",
        data: [20, 30, 25, 35, 50, 50, 80, 100, 60, 100, 60, 50],
        backgroundColor: "rgba(59, 130, 246, 1)",
      },
    ],
  };
  // Reusable metric card component
  function MetricCard({ icon, title, value, color = "blue" }) {
    const colorClasses = {
      blue: "text-blue-500 bg-blue-50",
      green: "text-green-500 bg-green-50",
    };

    return (
      <div className="bg-secondary p-4 rounded-lg shadow-sm ">
        <div className="flex items-center">
          <div className={`p-2 rounded-full ${colorClasses[color]}`}>{icon}</div>
          <h2 className="text-white text-lg font-semibold ml-3">{title}</h2>
        </div>
        <p className="text-white text-3xl font-bold mt-2">{value.toLocaleString()}</p>
      </div>
    );
  }
  return (
    <>
      <DashboardNavbar />
      <div className="ml-24 mt-28 p-8">
        {/*here username*/}
        <h2 className="heading-white">Vítejte Andy</h2>
        <div className="mt-12 max-w-[100] mx-auto">
          {/* Metrics Row - only 2 cards as requested */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 shadow-sm">
            <MetricCard
              icon={<FiMail className="text-blue-500" />}
              title="Odeslaných E-mailů"
              value={metrics.emailsSent}
              color="blue"
            />
            <MetricCard
              icon={<FiDollarSign className="text-green-500" />}
              title="Prodejů"
              value={metrics.salesObtained}
              color="green"
            />
          </div>

          {/* Single Big Graph as requested */}
          <div className="bg-secondary p-6 rounded-lg shadow">
            <h2 className="heading2 mb-4">Měsíční Výkonnost</h2>
            <div className="h-96">
              <Bar
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
