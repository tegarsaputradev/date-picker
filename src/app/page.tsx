"use client";
import DatePicker from "@/date-picker";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-700">
      <DatePicker type="range" />
    </div>
  );
}
