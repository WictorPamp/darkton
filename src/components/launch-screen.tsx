import { Loader } from 'lucide-react';

export function LaunchScreen() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-ton-gray text-white">
      <div className="animate-spin text-2xl">
        <Loader />
      </div>
    </div>
  );
}
