"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { name: "Jun 17", value: 40 },
  { name: "Jun 18", value: 32 },
  { name: "Jun 19", value: 48 },
  { name: "Jun 20", value: 60 },
];

export default function Conversation_card() {
  const [activeTab, setActiveTab] = useState("Month");

  return (
    <div className="bg-white/40 rounded-[24px] p-2 ">
      <div className="w-[320px] bg-white rounded-[24px] p-4" >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-700">Conversation Rate</p>
          <div className="flex items-center text-green-600 text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
              <path d="M19.1662 1.38948C19.0716 1.14524 18.8904 0.951163 18.6624 0.849737C18.5502 0.79852 18.4298 0.771355 18.3078 0.769775H13.6425C13.395 0.769775 13.1577 0.875082 12.9827 1.06253C12.8078 1.24997 12.7094 1.5042 12.7094 1.76929C12.7094 2.03438 12.8078 2.28861 12.9827 2.47606C13.1577 2.6635 13.395 2.76881 13.6425 2.76881H16.0591L10.8433 8.35611L7.77354 5.0577C7.6868 4.96402 7.58361 4.88966 7.4699 4.83892C7.3562 4.78817 7.23424 4.76205 7.11107 4.76205C6.98789 4.76205 6.86594 4.78817 6.75223 4.83892C6.63853 4.88966 6.53533 4.96402 6.44859 5.0577L0.850217 11.0548C0.762763 11.1477 0.693348 11.2583 0.645978 11.3801C0.598607 11.5019 0.574219 11.6325 0.574219 11.7645C0.574219 11.8964 0.598607 12.0271 0.645978 12.1489C0.693348 12.2707 0.762763 12.3812 0.850217 12.4741C0.936957 12.5678 1.04016 12.6422 1.15386 12.6929C1.26756 12.7436 1.38952 12.7698 1.51269 12.7698C1.63587 12.7698 1.75782 12.7436 1.87153 12.6929C1.98523 12.6422 2.08843 12.5678 2.17517 12.4741L7.11107 7.17668L10.1808 10.4751C10.2676 10.5688 10.3708 10.6431 10.4845 10.6939C10.5982 10.7446 10.7201 10.7707 10.8433 10.7707C10.9665 10.7707 11.0885 10.7446 11.2022 10.6939C11.3159 10.6431 11.4191 10.5688 11.5058 10.4751L17.3748 4.17813V6.76688C17.3748 7.03197 17.4731 7.2862 17.648 7.47364C17.823 7.66109 18.0604 7.76639 18.3078 7.76639C18.5553 7.76639 18.7926 7.66109 18.9676 7.47364C19.1426 7.2862 19.2409 7.03197 19.2409 6.76688V1.76929C19.2394 1.63868 19.2141 1.50964 19.1662 1.38948Z" fill="#10934B" />
            </svg>
            +22.03%
          </div>
        </div>

        {/* Percentage */}
        <p className="text-4xl font-bold text-gray-900 mb-4">44%</p>

        {/* Tabs */}
        <div className="flex space-x-2 mb-4">
          {["24 hours", "Week", "Month"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-sm rounded-md border transition ${activeTab === tab
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="h-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#9CA3AF"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
