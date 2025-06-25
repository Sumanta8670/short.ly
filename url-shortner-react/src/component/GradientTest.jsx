// GradientTest.jsx
export default function GradientTest() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="bg-{custom-gradient} text-white p-4 rounded">
        This is a custom gradient
      </div>
      <button className="border {border-btnColor} text-btnColor px-4 py-2 rounded">
        Custom Color Button
      </button>
    </div>
  );
}
