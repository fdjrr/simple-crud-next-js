import Navbar from "../components/Navbar";

export const metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="text-center text-2xl">About Me</h1>
      </div>
    </>
  );
}
