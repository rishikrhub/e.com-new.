import Nav from "@/components/Nav";
export default function Home() {
  return (
       <div
       className="bg-blue-900 min-h-screen flex">
         <Nav/>
         <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4"></div>
       </div>
  );
}

